import { DataTypes } from "sequelize";
import banco from "../config/Database.js";

const Musical = banco.define("Musical", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    genero: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    sinopse: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    imagem: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: "musicais",
    timestamps: false
});

export default Musical;