
async function cadastrarUsuario(){
    let inputEmail = document.querySelector("input#emailCas");
    let inputSenha = document.querySelector("input#senhaCas");
    let email = inputEmail.value;
    let senha = inputSenha.value;

    if(!email || !senha){
        alert("Por favor, complete os campos.");
        return 0;
    }

    const endPoint = "http://localhost:3000/cadastrar";

    try {
        const response = await fetch(endPoint, {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        });

        if(response.ok == false){
            return alert("email já cadastrado com outro usuario");
        }
        
        

        let concluido = document.createElement("h2");
        let texto = document.createTextNode("cadastro concluido");
        concluido.appendChild(texto);
        document.querySelector("div#cadastro").appendChild(concluido);
        
    } catch (error) {
        console.log("erro.", error);
    }


}

function mudarPagina() {
    
    window.location.href = 'http://127.0.0.1:5500/front/login.html';
}