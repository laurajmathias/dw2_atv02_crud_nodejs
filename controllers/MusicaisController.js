import express from "express";
import Musical from "../models/Musical.js";

const route = express.Router();

// Listar musicais
route.get("/", async (req, res) => {

    try {

        const musicais = await Musical.findAll();

        res.render("musicais", { musicais });

    } catch (error) {

        console.error("Erro ao buscar musicais:", error);
        res.status(500).send("Erro ao buscar musicais.");

    }

});

// Formulário de cadastro
route.get("/cadastrar", (req, res) => {

    res.render("cadastrarMusicais");

});

// Cadastrar musical
route.post("/cadastrar", async (req, res) => {

    try {

        const { nome, ano, genero, sinopse, imagem } = req.body;

        await Musical.create({
            nome,
            ano,
            genero,
            sinopse,
            imagem
        });

        res.redirect("/musicais");

    } catch (error) {

        console.error("Erro ao cadastrar musical:", error);
        res.status(500).send("Erro ao cadastrar musical.");

    }

});

// Formulário de edição

// Formulário de edição
route.get("/editar/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const musical = await Musical.findByPk(id);

        res.render("editarMusical", { musical });

    } catch (error) {

        console.error("Erro ao buscar musical:", error);
        res.status(500).send("Erro ao buscar musical.");

    }

});

// Salvar alterações do musical
route.post("/editar/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const { nome, ano, genero, sinopse, imagem } = req.body;

        await Musical.update(
            {
                nome,
                ano,
                genero,
                sinopse,
                imagem
            },
            {
                where: {
                    id: id
                }
            }
        );

        res.redirect("/musicais");

    } catch (error) {

        console.error("Erro ao editar musical:", error);
        res.status(500).send("Erro ao editar musical.");

    }

});

// Excluir Musical

route.get("/excluir/:id", async (req, res) => {

    try {

        const { id } = req.params;

        await Musical.destroy({
            where: {
                id: id
            }
        });

        res.redirect("/musicais");

    } catch (error) {

        console.error("Erro ao excluir musical:", error);
        res.status(500).send("Erro ao excluir musical.");

    }

});

export default route;