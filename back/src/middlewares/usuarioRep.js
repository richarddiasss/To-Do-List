
import user from "../model/user.js";

async function usuarioRep (req, res, next){

    try {
        const usuarios = await user.find({});

        if(usuarios == null){
            next();
        }
    
        const existe = usuarios.find((usuario) => {
            if(usuario.email == req.body.email){
                return true;
            }else {
                return false;
            }
        })
        

        if(existe){
            return res.status(400).json({msg: "Já existe um usuario com esse email!"});
        }
        
        next();
        
    } catch (error) {
        return res.status(500).json(error);
    }

}

export default usuarioRep;