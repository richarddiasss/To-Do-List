
class erroBase extends Error{
    constructor(mensagem = "erro interno do servidor", status = 500){
        super();
        this.message = mensagem,
        this.status = status
    } 

    enviarErro(res) {
        res.status(this.status).send({
            message: this.message,
            status: this.status
        });

    }

}

export default erroBase;