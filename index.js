const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const moment = require('moment')
const Cadastro = require("./models/Cadastro")
const port = 3000 

app.engine('handlebars', handlebars({
    defaultLayout:'main',
    helpers:{
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//rotas
app.get('/manga', function(req, res){
    Cadastro.findAll({order:[['nome', 'ASC']]}).then(function(mangas){
        res.render('manga', {mangas: mangas});
    }) 
});

app.get('/', function(req, res){
    res.render('cad-manga');
});

app.post('/add-manga', function(req, res){
    Cadastro.create({
        nome: req.body.nome,
        editora: req.body.editora
    }).then(function(){ 
        res.redirect('/manga')
    }).catch(function(erro){
        res.send("Erro ao cadastrar o exemplar" + erro)
    })  

    //res.send("Nome: " + req.body.nome + "<br>Editora: " + req.body.editora + "<br>")

})

app.listen(port);

