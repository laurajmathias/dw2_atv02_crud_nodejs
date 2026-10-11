import {Sequelize} from "sequelize";

const sequelize = new Sequelize(
    "musicais", //Nome do banco de dados
    "root", 
    "_L4ur@201207", 

    {
        host: "localhost",
        dialect: "mysql"
    }
);

// Cria o banco de dados: 

await sequelize.query("CREATE DATABASE IF NOT EXISTS musicais;");


// Conexão com o banco musicais
const banco = new Sequelize(
    "musicais",
    "root",
    "SUA_SENHA",
    {
        host: "localhost",
        dialect: "mysql"
    }
);


export default sequelize; 