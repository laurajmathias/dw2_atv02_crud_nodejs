console.log("Servidor rodando!");

//Imortando o express
import express from 'express'; 
// Importando o Sequelize 
import  sequelize from './config/Database.js';
//Executado a função express
const app = express(); 

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true })); //Para receber dados do formulário

//Controller 

import MusicaisController from './controllers/MusicaisController.js'; //Importando o controller de musicais 
import ArtistaController from './controllers/ArtistaController.js'; //Importando o controller de artistas
import CriticaController from './controllers/CriticaControllers.js';//Importando o controller de criticas

import Musical from './models/Musical.js'; //Importando o model de musicais

app.use('/musicais', MusicaisController); //Setando a rota de musicais
app.use('/artistas', ArtistaController); //Setando a rota de artistas
app.use('/criticas', CriticaController); //Setando a rota de criticas

//Rota principal
app.get('/', (req, res) => {
    res.render('index'); //Renderizando a view index.ejs
});

//Rota de erro 404
app.use((req, res) => {
    res.status(404).render('404'); //Renderizando a view 404.ejs
});


sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    }).catch((error) => {
        console.error('Erro ao conectar com o banco de dados:', error);
    })


    Musical.sync()
    .then(() => {
        console.log('Tabela musicais criada com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao criar tabela:', error);
    });ArtistaController

//Iniciando o servidor: 
const port = 8080; 

app.listen(port, (error) => {
    if (error) {
        console.error('Erro ao iniciar o servidor:', error);
    } else {
        console.log(`Servidor rodando na porta ${port}`);
    }
});
