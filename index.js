const express = require('express');
const app = new express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post')
//config
    //template engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}))
    app.set('view engine', 'handlebars');

    //body-parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //rotas
    app.post('/add',(req,res)=>{
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(()=>{
            res.redirect('/');
        }).catch((err)=>{
            res.send(`Erro ao adicionar postagem : ${err}`);
        })
    })
    app.get('/',(req,res)=>{
        Post.findAll({order:[['id','DESC']]}).then((posts)=>{
            res.render('home',{
                posts:posts
            });
        })
    })
    app.get('/deletar/:id',(req,res)=>{
        Post.destroy({where: {'id': req.params.id }}).then(()=>{
            res.redirect('/');
        }).catch((err)=>{
            res.send('Erro ao deletar:'+err);
        });
    })

    app.get('/cad',(req, res)=>{
        res.render('formulario');
    })
    app.post('/add',(req,res)=>{
        res.send(`Titulo: ${req.body.titulo}\nConteúdo: ${req.body.conteudo}`);
    })

app.listen(8081,()=>{
    console.log('Conexão aberta com módulo express');
});