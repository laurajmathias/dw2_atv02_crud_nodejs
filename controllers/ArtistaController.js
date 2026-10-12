import express from "express";
import Artista from "../models/Artista.js";

const route = express.Router();

// Listar artistas
route.get("/", async (req, res) => {

    try {

        const artistas = await Artista.findAll();

        res.render("artistas", { artistas });

    } catch (error) {

        console.error("Erro ao buscar artistas:", error);
        res.status(500).send("Erro ao buscar artistas.");

    }

});

// Formulário de cadastro
route.get("/cadastrar", (req, res) => {

    res.render("cadastrarArtista");

});

// Cadastrar artista
route.post("/cadastrar", async (req, res) => {

    try {

        const {
            nome,
            personagem,
            musical,
            tipo_vocal,
            imagem
        } = req.body;

        await Artista.create({
            nome,
            personagem,
            musical,
            tipo_vocal,
            imagem
        });

        res.redirect("/artistas");

    } catch (error) {

        console.error("Erro ao cadastrar artista:", error);
        res.status(500).send("Erro ao cadastrar artista.");

    }

});

// Formulário de edição
route.get("/editar/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const artista = await Artista.findByPk(id);

        res.render("editarArtista", { artista });

    } catch (error) {

        console.error("Erro ao buscar artista:", error);
        res.status(500).send("Erro ao buscar artista.");

    }

});

// Salvar alterações
route.post("/editar/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const {
            nome,
            personagem,
            musical,
            tipo_vocal,
            imagem
        } = req.body;

        await Artista.update(
            {
                nome,
                personagem,
                musical,
                tipo_vocal,
                imagem
            },
            {
                where: {
                    id: id
                }
            }
        );

        res.redirect("/artistas");

    } catch (error) {

        console.error("Erro ao editar artista:", error);
        res.status(500).send("Erro ao editar artista.");

    }

});

// Excluir artista
route.get("/excluir/:id", async (req, res) => {

    try {

        const { id } = req.params;

        await Artista.destroy({
            where: {
                id: id
            }
        });

        res.redirect("/artistas");

    } catch (error) {

        console.error("Erro ao excluir artista:", error);
        res.status(500).send("Erro ao excluir artista.");

    }

});

export default route;