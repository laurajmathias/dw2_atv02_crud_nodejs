console.log("Servidor rodando!");

// Importando o express
import express from 'express';

// Importando o Sequelize
import sequelize from './config/Database.js';

// Executando a função express
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

// Controllers
import MusicaisController from './controllers/MusicaisController.js';
import ArtistaController from './controllers/ArtistaController.js';
import CriticaController from './controllers/CriticaControllers.js';

// Models
import Musical from './models/Musical.js';
import Artista from './models/Artista.js';
import Critica from './models/Critica.js';

// Rotas
app.use('/musicais', MusicaisController);
app.use('/artistas', ArtistaController);
app.use('/criticas', CriticaController);

// Rota principal
app.get('/', (req, res) => {
    res.render('index');
});

// Rota de erro 404
app.use((req, res) => {
    res.status(404).render('404');
});

// Testando conexão com o banco
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao conectar com o banco de dados:', error);
    });

// Criando tabela de musicais
Musical.sync()
    .then(() => {
        console.log('Tabela musicais criada com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao criar tabela musicais:', error);
    });

// Criando tabela de artistas
Artista.sync()
    .then(() => {
        console.log('Tabela artistas criada com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao criar tabela artistas:', error);
    });

    Artista.sync()
    .then(async () => {

        console.log('Tabela artistas criada com sucesso!');

        const quantidade = await Artista.count();

        if (quantidade === 0) {

            await Artista.bulkCreate([

                {
                    nome: "Megan Hilty",
                    personagem: "Madeline Ashton",
                    musical: "Death Becomes Her",
                    tipo_vocal: "Soprano e Meio-Soprano",
                    imagem: "megan.jpeg"
                },

                {
                    nome: "Jennifer Simard",
                    personagem: "Helen Sharp",
                    musical: "Death Becomes Her",
                    tipo_vocal: "Meio-Soprano",
                    imagem: "jennifer.jpeg"
                },

                {
                    nome: "Lin-Manuel Miranda",
                    personagem: "Alexander Hamilton",
                    musical: "Hamilton",
                    tipo_vocal: "Tenor",
                    imagem: "lin.jpeg"
                },

                {
                    nome: "Catherine Zeta-Jones",
                    personagem: "Velma Kelly",
                    musical: "Chicago",
                    tipo_vocal: "Meio-Soprano",
                    imagem: "catherine.jpeg"
                },

                {
                    nome: "Renée Zellweger",
                    personagem: "Roxie Hart",
                    musical: "Chicago",
                    tipo_vocal: "Soprano",
                    imagem: "roxie.jpg"
                },

                {
                    nome: "Philipa Soo",
                    personagem: "Eliza Hamilton",
                    musical: "Hamilton",
                    tipo_vocal: "Soprano",
                    imagem: "philipa.webp"
                }

            ]);

            console.log('6 artistas cadastrados com sucesso!');

        } else {

            console.log('Artistas já cadastrados no banco.');

        }

    })
    .catch((error) => {
        console.error('Erro ao criar tabela ou cadastrar artistas:', error);
    });


// Criando tabela de críticas
Critica.sync({ alter: true })
    .then(() => {
        console.log('Tabela criticas criada com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao criar tabela criticas:', error);
    });

// Iniciando o servidor
const port = 8080;

app.listen(port, (error) => {

    if (error) {

        console.error('Erro ao iniciar o servidor:', error);

    } else {

        console.log(`Servidor rodando na porta ${port}`);

    }

});