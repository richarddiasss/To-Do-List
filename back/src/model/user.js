import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const userSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    email: {type: String},
    senha: {type: String},
    lista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tarefas",
        autopopulate: true
    }
}, {versionKey: false});

const user = mongoose.model("Users", userSchema);

export default user;