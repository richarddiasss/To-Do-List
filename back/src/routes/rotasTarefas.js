import express from "express";
import tarefasControllers from "../controllers/tarefasControllers.js";
import estarLogado from "../middlewares/autorizacao.js";


const rotas = express.Router();

rotas.get("/tarefas", estarLogado, tarefasControllers.obtendoTarefas);
rotas.post("/tarefas", estarLogado, tarefasControllers.criandoTarefas);
rotas.put("/tarefas", estarLogado, tarefasControllers.mudarEstadoTarefa);
rotas.delete("/tarefas", estarLogado, tarefasControllers.excluirTarefa);
// mesmo sendo utilizado o verbo http 'delete', o que realmente é feito é uma mudança no documento. (poderia ser utilizado o método PUT)
// O mesmo vale para o POST, pois dependendo da situação, será realizado somente uma mudança na documento ou uma criação.

export default rotas;


