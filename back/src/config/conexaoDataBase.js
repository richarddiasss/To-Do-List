import mongoose from "mongoose";

async function conectaDataBase() {

    mongoose.connect(process.env.STRING_DATABASE);

    return mongoose.connection;
}

export default conectaDataBase;