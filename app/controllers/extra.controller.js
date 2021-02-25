const axios = require('axios')
var DomParser = require('dom-parser')
var Launcher = require("./../launcher.js")
const db = require("../models")
const Op = db.Sequelize.Op;

//Copy items from recipe list
exports.copyItemsFromRecipeToBuyList = async (req, res) => {
    const sourceid = req.body.sourceid;
    const destid = req.body.destid;
console.log("copyItemsFromRecipeToBuyList - sourceid="+sourceid+", destid="+destid);
    try {
        await db.sequelize.query("INSERT INTO items (parentid, name, category, shop, price, unit, amount, value, source, createdAt) "+
                                 " SELECT :buylistid, i.name, i.category, i.shop, i.price, i.unit, i.amount, i.price*i.amount, concat(i.source, ':', l.name), NOW() "+
                                 " FROM items i INNER JOIN lists l ON (l.id = i.parentid AND l.id=:recipeid)", 
            { replacements: { buylistid: destid, recipeid: sourceid}  }
        );   
        res.status(200).send( {message: JSON.stringify(req.body)} ) ; 

    } catch (e) {
        res.send( {message: e.toString()} );
    }  
};

//Update prices on list from product catalog
exports.updatePrices = async (req, res) => {
    const listid = req.body.listid;
console.log("updatePrices - listid="+listid);
    try {
        await db.sequelize.query("UPDATE items i "
                                 +"INNER JOIN products p ON (p.name = i.name and p.category = i.category and p.shop = i.shop)"
                                  +" SET i.price = p.price, i.value = i.amount * p.price, "
                                      +" i.updatedAt = NOW() "
                                + "WHERE i.parentid = :listid",
            { replacements: { listid: listid }  }
        );   
        
        res.status(200).send( {message: JSON.stringify(req.body)} ) ; 
    } catch (e) {
        console.log(e);
        res.send( {message: 'ERROR', value: e.toString()} );
    }  
};

//Copy active items from one list to another
exports.copyItemsBetweenLists = async (req, res) => {
    const sourceid = req.params.sourceid;
    const destid = req.params.destid;
    const status = req.params.status;
console.log("copyItemsBetweenLists - sourceid="+sourceid+", destid="+destid, ", status="+status);
    let sql = "INSERT INTO items (parentid, name, category, shop, price, unit, amount, value, source, createdAt) "+
              "SELECT :destid, i.name, i.category, i.shop, i.price, i.unit, i.amount, i.price*i.amount, concat(i.source, ':', l.name), NOW() "+
              "  FROM items i INNER JOIN lists l ON (l.id = i.parentid AND l.id=:sourceid) "+
              " WHERE i.status = :status";
    try {
        await db.sequelize.query(
            sql, 
            { replacements: { 
                destid: destid, sourceid: 
                sourceid, status: 
                status.toUpperCase()}  
            }
        );   
        res.status(200).send( {message: JSON.stringify(req.params)} ); 
    } catch (e) {
        res.send( {message: e.toString()} );
    } 
}

performPromotionCrawl = (list, res, next) => {
    //console.log(new Date(), 'crawler perform', list)   
    // return 
    let pad = new Launcher(
        5, 
        list, 
        //callFunction,
        getPromotion,
        //callbackFunction,
        parsePromotion,
        //catchFunction
        (e, item)=> {
            console.log('Launcher catchFunction', e.toString().substring(0,100))
        },
        //finalCallBack
        (result) => {         
            //console.log('final result', result)
            let output = []
            result.forEach(res => {
                if (res.output.magazines.length > 0) output.push(res.output)
            })
            res.status(200).send( output )
        } 
    );
    pad.run()
}

getPromotion = (item) => {    
    //console.log('getFund', item.code);
    try {
        return axios({
            url: 'https:'+item.url,
            method: 'get',
            params: { }
        })
    } catch (error) {
        console.error(error);
    }
}

parsePromotion = (item, html) => {  
    var parser = new DomParser();
    var dom = parser.parseFromString(html.data);
    
    let result = [] 
    let magazines = []
	try {
        result = dom.getElementsByTagName('title')[0].innerHTML
        dom.getElementsByClassName('index-subdomain-magazine').forEach(mag => {
            let a = mag.getElementsByTagName('a')[0]
            magazines.push({
                title: a.getAttribute('title'),
                url: 'https:'+a.getAttribute('href')
            })
        })
    } catch (e) {
        console.error(e);        
        console.log(item);
	}
    // console.log('result', result.replace('w gazetkach promocyjnych • Promocja • Cena', ''))
    return {
        product: result.replace(' w gazetkach promocyjnych • Promocja • Cena', ''),
        magazines: magazines
    };
}

//get promotions papers 
exports.getPromotion = (req, res, next) => {
    const name = req.params.name;
    console.log('getPromotion', name)
    const URL = "https://gazetkapromocyjna.com.pl/ajax.php"

    axios.get(encodeURI(URL+'?q='+name), {}).then(result => {

        var parser = new DomParser();
        var dom = parser.parseFromString('<div>'+result.data+'</div>');
        let arr = []
        try {
            dom.getElementsByTagName('a').forEach(a => arr.push({
                text: a.innerHTML,
                url: a.getAttribute('href')
            }))
        } catch (e) {

        }

        //crawl
        if (arr.length > 0) {
            performPromotionCrawl(arr, res, next)
        } else {
            res.status(200).send( arr )
        }
    })
       
}


//------------------------------------------------------
exports.testJob = async (req, res) => {
console.log(new Date()+"extra.controller.testJob");
    try {
        await db.sequelize.query("INSERT INTO testjobs (datum) VALUES (NOW())");   
        res.status(200).send( {message: "TEST-OK"} ) ; 

    } catch (e) {
        res.send( {message: e.toString()} );
    }  

};
