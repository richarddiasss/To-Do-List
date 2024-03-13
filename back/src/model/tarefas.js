import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    descricao: {type: mongoose.Schema.Types.Array},
    situacao: {type: mongoose.Schema.Types.Array}
});

const tarefa = mongoose.model("tarefas", tarefaSchema);

export default tarefa;