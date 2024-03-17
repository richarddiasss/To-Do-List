import mongoose from "mongoose";

/*Como a string de conexao está oculta, será preciso criar um novo banco de
dados no mongoatlas para que seja possível realizar o teste do software */
async function conectaDataBase() {

    mongoose.connect(process.env.STRING_DATABASE);

    return mongoose.connection;
}

export default conectaDataBase;