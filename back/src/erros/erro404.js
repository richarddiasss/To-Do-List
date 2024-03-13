import erroBase from "./erroBase.js";

class erro404 extends erroBase {
  constructor(mensagem = "Página não encontrada") {
    super(mensagem, 404);
  }
}

export default erro404;