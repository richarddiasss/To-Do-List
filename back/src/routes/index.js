import express from "express";
import cors from "cors";
import app from "../app.js";
import login from "../routes/rotasUser.js"
import rotasTarefas from "./rotasTarefas.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const routes = (app) => {

    app.use(cors());
    app.use(bodyParser.json());
    app.use(cookieParser());

    app.get("/", (req, res) => {
        res.status(200).json({message: "testando api"});
    });

    app.use(express.json(), login, rotasTarefas);
}

export default routes;