'use strict'
//server
const express= require ('express');
const superagent = requuire ('superagent');
const PORT = process.env.PORT||4000;
const pg = require('pg');
const app = express();
const methodeOverride = require;

// connect to psql
const client=new pg.Client(process.env.DATABASE_URL);
client.on('error', (err)=>console.log(error));


//routs
app.use(express.static ('./pages'));
app.use(express.json);


app.use ('*', notFoundHandler);
app.put ('/update/:id', updateHandler);
app.delete('/delete/:id',deleteHandler);
app.get('/favourites/:id', favHandler);
app.post('/add', addToFav)

function favHandler (req,res){
    const SQL = 'SELECT * FROM digimontable WHERE id= $1;';
    const safeValues = [req.body.params];
    client
    res.render //apage should be here, 
{rows[0]}

}

function addToFav (req,res){
const {name,level,image}=req.body;
const SQL = 'INSERT INTO digimontable (name, level,image;)';
VALUES($1,$2,$3);
client
.query(SQL,safeValues).then ((result)=>res.redirect('/')
)
.catch (err=>errorHandler(err,req,res));
}











function updateHandler(req,res){
const SQL = 'UPDATE digimontable SET name=$1, level=$2, image=$3, WHERE id =$4;';
const safeValues = [req.body.name, req.body.level, req.body.image, req.params.id];
client
.query(SQL,safeValues).then ((result)=>res.redirect('/')
)
.catch (err=>errorHandler(err,req,res));
}

function deleteHandler(req,res){
    const SQL ='DELETE FROM digimontable WHERE id=$1;';
    const safeValues = [req.body.params];
    client
    .query(SQL,safeValues).then ((result)=>res.redirect('/')
)
.catch (err=>errorHandler(err,req,res));
}




function Digimon (){
    this.name = name;
    this.level =level;
    this.image =image;

}
// i could not tell what the array name was so i can accses it the right way 



function notFoundHandler (req,res){
res.status(404).send ('sorry, page not foun');
}
 function errorHandler(req,res){
rres.status(500).send ('sorry, error accured');
 }