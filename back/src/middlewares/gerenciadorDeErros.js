import erroBase from "../erros/erroBase"


function manipuladorErro(erro, res, res, next) {

    if(erro instanceof erroBase){
        erro.enviarErro(res);
    }else{
        new erroBase().enviarErro(res);
    }
}