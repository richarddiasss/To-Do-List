import jwt from "jsonwebtoken";

async function estarLogado(req, res, next){

    let token = req.headers['authorization'];
    token = token.split(" ")[1];
    
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
   
    try {
         
        var verificacao = jwt.verify(token, process.env.SECRET);
        //return res.status(200).json({msg: "token verificado!"});
        //return res.status(200).json(verificacao);
        
        next(verificacao);
    
    } catch (error) {
        
        return res.status(400).json({msg: "não autorizado"});
    }
   
    
}

export default estarLogado;