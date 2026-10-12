import express from "express";
import Critica from "../models/Critica.js";

const route = express.Router();

// Listar críticas
route.get("/", async (req, res) => {

    try {

        const criticas = await Critica.findAll();

        res.render("critica", { criticas });

    } catch (error) {

        console.error("Erro ao buscar críticas:", error);
        res.status(500).send("Erro ao buscar críticas.");

    }

});


// Formulário de cadastro
route.get("/cadastrar", (req, res) => {

    res.render("cadastrarCritica");

});


// Cadastrar crítica
route.post("/cadastrar", async (req, res) => {

    try {

        const {
            nome,
            critica,
            nota,
            indicações,
            premiações,
            imagem
        } = req.body;

        await Critica.create({
            nome,
            critica,
            nota,
            indicações,
            premiações,
            imagem
        });

        res.redirect("/criticas");

    } catch (error) {

        console.error("Erro ao cadastrar crítica:", error);
        res.status(500).send("Erro ao cadastrar crítica.");

    }

});


// Formulário de edição
route.get("/editar/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const critica = await Critica.findByPk(id);

        res.render("editarCritica", { critica });

    } catch (error) {

        console.error("Erro ao buscar crítica:", error);
        res.status(500).send("Erro ao buscar crítica.");

    }

});


// Salvar alterações
route.post("/editar/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const {
            nome,
            critica,
            nota,
            indicações,
            premiações,
            imagem
        } = req.body;

        await Critica.update(
            {
                nome,
                critica,
                nota,
                indicações,
                premiações,
                imagem
            },
            {
                where: {
                    id: id
                }
            }
        );

        res.redirect("/criticas");

    } catch (error) {

        console.error("Erro ao editar crítica:", error);
        res.status(500).send("Erro ao editar crítica.");

    }

});


// Excluir crítica
route.get("/excluir/:id", async (req, res) => {

    try {

        const { id } = req.params;

        await Critica.destroy({
            where: {
                id: id
            }
        });

        res.redirect("/criticas");

    } catch (error) {

        console.error("Erro ao excluir crítica:", error);
        res.status(500).send("Erro ao excluir crítica.");

    }

});


export default route;