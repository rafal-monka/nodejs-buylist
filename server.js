/*
 * BuyList Node app
 */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const schedule = require('node-schedule');
const app = express();

var corsOptions = {
  origin: "http://localhost:8084"
};

console.log("Starting...");

app.use(cors()); //corsOptions

const db = require("./app/models");
db.sequelize.sync( /* { force: true } */ ); //!!! In development, you may need to drop existing tables and re-sync database.

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to BuyList application." });
});

require("./app/routes/list.routes")(app);
require("./app/routes/item.routes")(app);
require("./app/routes/product.routes")(app);
require("./app/routes/extra.routes")(app);

//-----------------------
//TEST job schedule
const testJob = async ()=> {
  console.log(new Date()+"-testJob");
  try {
    await db.sequelize.query("INSERT INTO testjobs (datum) VALUES (NOW())");   
    console.log("ok");  
  } catch (e) {
    console.log(e.toString());
  } 
}
var j = schedule.scheduleJob('*/5 * * * *', function(){
  testJob();
});
//-----------------------

// set port, listen for requests
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
