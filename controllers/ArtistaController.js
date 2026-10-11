import express from "express";

const route = express.Router();

const artistasFavoritos = [

    {
        id: 1,
        nome: "Megan Hilty", 
        personagem: "Madeline Ashton",
        musical: "Death Becomes Her",
        tipo_vocal: "Soprano e Meio-Soprano",
        imagem: "megan.jpeg"
    },

    {
        id: 2,
        nome: "Jennifer Simard", 
        personagem: "Helen Sharp",
        musical: "Death Becomes Her",
        tipo_vocal: "Meio-Soprano",
        imagem: "jennifer.jpeg"
    }, 

    {
        id: 3,
        nome: "Christopher Sieber", 
        personagem: "Ernest Menville",
        musical: "Death Becomes Her",
        tipo_vocal: "Barítono",
        imagem: "chris.jpg"
    }, 

    {
        id: 4,
        nome: "Michelle Williams", 
        personagem: "Viola Van Horn", 
        musical: "Death Becomes Her",
        tipo_vocal: "Soprano",
        imagem: "michelle.jpeg"
    },
    
    {
        id: 5,
        nome: " Paula Capovilla",
        personagem: "Augusta", 
        musical: "7 Mulheres e um Mistério",
        tipo_vocal: "Meio-Soprano",
        imagem: "paula.jpeg"
    }, 

    {
        id: 6,
        nome: "Cecília Homem de Mello", 
        personagem: "Dona Maria",
        musical: "7 Mulheres e um Mistério",
        tipo_vocal: "Soprano",
        imagem: "ceci.jpeg"
    }, 

    {
        id: 7,
        nome: "Guilherme Piva", 
        personagem: "Detetive",
        musical: "7 Mulheres e um Mistério",
        tipo_vocal: "Barítono",
        imagem: "gui.jpeg"
    }, 

    {
        id: 8,
        nome: "Rafael Canedo", 
        personagem: "Dr. Augusto",
        musical: "7 Mulheres e um Mistério",
        tipo_vocal: "Tenor",
        imagem: "rafa.jpeg"
    }, 

    {
        id: 9,
        nome: "Lin-Manuel Miranda", 
        personagem: "Alexander Hamilton",
        musical: "Hamilton",
        tipo_vocal: "Tenor",
        imagem: "lin.jpeg"
    },

    {
        id: 10,
        nome: "Leslie Odom Jr.", 
        personagem: "Aaron Burr",
        musical: "Hamilton",
        tipo_vocal: "Barítono",
        imagem: "leslie.jpeg"
    }, 

    {
        id: 11,
        nome: "Renée Elise Goldsberry", 
        personagem: "Angelica Schuyler",
        musical: "Hamilton",
        tipo_vocal: "Soprano",
        imagem: "renee.jpeg"
    },

    {
        id: 12,
        nome: "Philipa Soo", 
        personagem: "Eliza Hamilton",
        musical: "Hamilton",
        tipo_vocal: "Soprano",
        imagem: "philipa.webp"
    }, 

    {
        id: 13,
        nome: "Catherine Zeta-Jones", 
        personagem: "Velma Kelly",
        musical: "Chicago",
        tipo_vocal: "Meio-Soprano",
        imagem: "catherine.jpeg"
    }, 

    {
        id: 14,
        nome: "Renée Zellweger", 
        personagem: "Roxie Hart",
        musical: "Chicago",
        tipo_vocal: "Soprano",
        imagem: "roxie.jpg"
    }, 

    {
        id: 15,
        nome: "Richard Gere", 
        personagem: "Billy Flynn",
        musical: "Chicago",
        tipo_vocal: "Tenor",
        imagem: "richard.jpeg"
    },

    {
        id: 16,
        nome: "Erika Henningsend", 
        personagem: "Cady Heron",
        musical: "Mean Girls",
        tipo_vocal: "Soprano",
        imagem: "erika.jpg"
    }, 

    {
        id: 17,
        nome: "Taylor Louderman", 
        personagem: "Regina George",
        musical: "Mean Girls",
        tipo_vocal: "Soprano",
        imagem: "taylor.jpeg"
    }, 

    {
        id: 18, 
        nome: "Barrett Wilbert Weed", 
        personagem: "Janis Ian",
        musical: "Mean Girls",
        tipo_vocal: "Meio-Soprano",
        imagem: "barrett.png"
    }, 

    {
        id: 19,
        nome: "Ariana DeBose", 
        personagem: "Karen Smith",
        musical: "Mean Girls",
        tipo_vocal: "Soprano",
        imagem: "ariana.jpeg"
    }



]; 

    

export default route;

route.get('/', (req, res) => {
    res.render('artistas', { artistasFavoritos });
});