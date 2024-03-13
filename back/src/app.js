import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import conectaDataBase from "./config/conexaoDataBase.js";
import routes from "./routes/index.js";

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.log("erro ao conectar com o banco de dados.", erro);

});

conexao.once("open", () => {
    console.log("conexao com banco de dados feita com sucesso!");
});

const app = express();

routes(app);


export default app;