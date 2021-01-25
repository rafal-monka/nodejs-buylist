SELECT l.createdat, l.name, i.status, count(*), sum(value)
FROM lists l
inner join items i on i.parentid = l.id
where l.type= 'BUYLIST'
and i.status = 'BOUGHT'
group by l.name, i.status
order by l.createdat, l.name


SELECT i.name, count(*), sum(value)
FROM lists l
inner join items i on i.parentid = l.id
where l.type= 'BUYLIST'
and i.status = 'BOUGHT'
group by i.name
order by 3 desc



