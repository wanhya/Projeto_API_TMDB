const express = require('express');
const mysql = require('mysql');

const app = express();

const path = require('path');
const bodyparser = require('body-parser')
const initial_path = path.join(__dirname, "");


const connection = mysql.createConnection( {
    host:'172.17.0.2',
    user:'root',
    password:'10031981Va@',
    database:'filme_tmdb' 
});

connection.connect();

app.use(express.static(initial_path));
app.use(bodyparser.urlencoded ({extended: false}))

app.get('/', (req, res)=> {
    res.sendFile(path.join(initial_path, "movies.html"));
 
 })

 app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "detalhes.html"));
 })


app.get('/:id/comentario', function(req, res){
    connection.query('SELECT * FROM comentario', 
    function(error, results){
        if (error){
            throw error
        };
        res.send(results.map(item => ({ nome:item.nome,
            descricao:item.descricao,
            create_at:item.create_at
         })));
    });
});

app.post('/comentario', async(req, res) => {

    let emp = req.body;
    
  connection.query(`INSERT INTO comentario (nome, descricao) VALUES ('${emp.nome}','${emp.descricao}')`
,  function(){
    
        res.redirect('/');
    });
    
  
        
});



app.use((req, res) => {
    res.json("404");
})
app.listen (9001, '0.0.0.0', function(){
    console.log('listen on port 9001');
})