import express from "express";
import userController from "../controllers/userControllers.js";
import estarLogado from "../middlewares/autorizacao.js";
import usuarioRep from "../middlewares/usuarioRep.js";


const routes = express.Router();

routes.get("/login", (req, res, next) =>{
    res.status(200).json({msg: "faça o login!"});
});

routes.get("/logado", estarLogado);

routes.post("/cadastrar", usuarioRep ,userController.cadastrarUsuario);

routes.post("/deslogar", userController.deslogarUser);

routes.post("/login", userController.loginUser);

export default routes;