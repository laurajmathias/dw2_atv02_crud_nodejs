import { DataTypes } from "sequelize";
import banco from "../config/Database.js";

const Critica = banco.define("Critica", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    critica: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    nota: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    indicações: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    premiações: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    imagem: {
        type: DataTypes.STRING(255),
        allowNull: true
    }

}, {
    tableName: "criticas",
    timestamps: false
});

export default Critica;