import { DataTypes } from "sequelize";
import banco from "../config/Database.js";

const Artista = banco.define("Artista", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    personagem: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    musical: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    tipo_vocal: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    imagem: {
        type: DataTypes.STRING(255),
        allowNull: true
    }

}, {
    tableName: "artistas",
    timestamps: false
});

export default Artista;