import mongoose from "mongoose";
import user from "../model/user.js";
import jwt from "jsonwebtoken";

class userController{

    static async loginUser (req, res, next) {

        const {email, senha} = req.body;
       

        if(!email || !senha){
            return res.status(401).json({msg: "ausência de dados"});
        }

        try {
            const usuario = await user.findOne({email: email});
            
            
    
            if(!usuario){
             return res.status(401).json({msg: "email inválido"});
            }

            const NORMAL_USER = {
                email: email,
                senha: senha
            }

            if(senha === usuario.senha){
                let token = await jwt.sign( NORMAL_USER, process.env.SECRET, {
                    expiresIn: 300 // expires in 5min
                  })
                
                return res.status(200).json({auth: true, AcessToken: token});
                
            }else{
                
                return res.status(401).json({msg: "Senha incorreta"});
            }

            
        } catch (erro) {
            return res.status(500).json("falha na requisição");
        }


    }

    static async cadastrarUsuario(req, res, next) {

        const {email, senha} = req.body;

        if(!email || !senha){
            return res.status(401).json({msg: "ausência de dados"});
        }

        try {
            const usuarioNovo = await user.create(req.body);
            return res.status(201).json({message: "usuario adicionado", usuario: usuarioNovo});

        } catch (error) {
            return res.status(500).json("falha no servidor", error);
        }
        
    }

    static async deslogarUser(req, res, next) {
        res.status(200).json({auth: false, token: null});
    }


}


export default userController;