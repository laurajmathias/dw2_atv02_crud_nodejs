import express from "express";

const route = express.Router();


const criticas = [
    {
        id: 1,
        nome: "Death Becomes Her",
        critica: "Uma comédia musical que mistura humor negro e elementos de fantasia, explorando a vida após a morte de uma maneira única e divertida. A performance dos atores é excepcional, e a trilha sonora é cativante. Uma experiência teatral memorável.",
        nota: "Positiva", 
        indicações: "33 indicações no total (Incluindo 10 no Tony Awards e 12 no Outer Critics)", 
        premiações: "Ganhou 12 prêmios (Incluindo 3 no Tony Awards e 4 no Outer Critics)"
    }, 

    {
        id: 2,
        nome: "7 Mulheres e um Mistério",
        critica: "Um musical de suspense que combina comédia e drama em uma história envolvente. A trama é intrigante, e as performances dos atores são convincentes. A música é envolvente e complementa perfeitamente a narrativa. Um espetáculo que mantém o público na ponta da cadeira.",
        nota: "Positiva", 
        indicações: "Estreia recente, ainda não possui indicações", 
        premiações: "Estreia recente, ainda não possui premiações"
    },

    {
        id: 3,
        nome: "Hamilton",
        critica: "Um musical que retrata a vida de Alexander Hamilton, um dos fundadores dos Estados Unidos. A narrativa é envolvente, e a música é inovadora, misturando hip-hop, R&B e música tradicional. As performances são poderosas e emocionantes. Um espetáculo que redefine o teatro musical.",
        nota: "Positiva", 
        indicações: "16 indicações ao Tony Awards (O recorde histórico da Broadway)", 
        premiações: "11 Tony Awards (incluindo Melhor Musical) e o Prêmio Pulitzer de Drama."
    }, 

    {
        id: 4,
        nome: "Chicago",
        critica: "Um musical satírico que critica a sociedade e a justiça no mundo do entretenimento. A coreografia é impressionante, e as performances são cativantes. A música é envolvente e complementa perfeitamente a narrativa. Um espetáculo que combina humor, drama e crítica social de forma brilhante.",
        nota: "Positiva", 
        indicações: "11 indicações ao Tony Awards", 
        premiações: "0 Tony Awards (Sua versão original perdeu tudo para A Chorus Line, mas ganhou 1 Drama Desk). (Nota: O revival de 1996 ganharia 6 Tonys posteriormente)."
    }, 

    {
        id: 5,
        nome: "Mean Girls",
        critica: "Uma comédia musical que aborda temas como popularidade e amizade em uma escola secundária. A narrativa é divertida e envolvente, e as performances são cativantes. A música é animada e complementa perfeitamente a história. Um espetáculo que diverte e faz refletir sobre a vida adolescente.",
        nota: "Relativamente Positiva", 
        indicações: "12 indicações ao Tony Awards", 
        premiações: "0 Tony Awards (Perdeu para Hadestown)"
    }
]; 
route.get('/', (req, res) => {
    res.render('critica', { criticas });
});
export default route;