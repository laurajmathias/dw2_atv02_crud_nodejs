console.log("Servidor rodando!");

//Imortando o express
import express from 'express'; 
//Executado a função express
const app = express(); 

app.set('view engine', 'ejs');
app.set('views', './atividade-01-DW2/views');
app.use(express.static('./atividade-01-DW2/public'));

//Controller 

import MusicaisController from './atividade-01-DW2/controllers/MusicaisController.js'; //Importando o controller de musicais 
import ArtistaController from './atividade-01-DW2/controllers/ArtistaController.js'; //Importando o controller de artistas
import CriticaController from './atividade-01-DW2/controllers/CriticaControllers.js';//Importando o controller de criticas

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

//Iniciando o servidor: 
const port = 8080; 

app.listen(port, (error) => {
    if (error) {
        console.error('Erro ao iniciar o servidor:', error);
    } else {
        console.log(`Servidor rodando na porta ${port}`);
    }
});
