import express from "express";

const route = express.Router();

const musicaisFavoritos = [

    {
        id: 1,
        nome: "Death Becomes Her",
        ano: 2024,
        genero: "Comédia Musical",
        sinopse: "Uma comédia musical que mistura humor negro e elementos de fantasia, explorando a vida após a morte de uma maneira única e divertida.", 
        imagem: "dbh.png"
    },

    {
        id: 2,
        nome: "7 Mulheres e um Mistério",
        ano: 2026,
        genero: "Comédia Musical, Suspense",
        sinopse: "Um musical de suspense que combina comédia e drama em uma história envolvente.", 
        imagem: "7mulheres.jpg"
    },

    {
        id: 3,
        nome: "Hamilton",
        ano: 2015,
        genero: "Biográfico / Histórico",
        sinopse: "Um musical que retrata a vida de Alexander Hamilton, um dos fundadores dos Estados Unidos.",
        imagem: "hamilton.jpg"
    },

    {
        id: 4,
        nome: "Chicago",
        ano: 1975,
        genero: "Musical Satírico",
        sinopse: "Um musical satírico que critica a sociedade e a justiça no mundo do entretenimento.",
        imagem: "chicago.jpeg"
    },

    {
        id: 5,
        nome: "Mean Girls",
        ano: 2018,
        genero: "Comédia Musical",
        sinopse: "Uma comédia musical que aborda temas como popularidade e amizade em uma escola secundária.",
        imagem: "meanGirls.webp"
    }

];

route.get('/', (req, res) => {

    res.render('musicais', { musicaisFavoritos });

});

export default route;