
async function enviarDados() {
    let inputEmail = document.querySelector("input#email");
    let inputSenha = document.querySelector("input#senha");
    let email = inputEmail.value;
    let senha = inputSenha.value;
console.log(email);
console.log(senha);
    if(!email || !senha){
        alert("Por favor, complete os campos.");
        return;
    }

    //chamando API
    const endPoint = "http://localhost:3000/login";

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

        if(!response.ok){
            return alert("dados invalidos");
        }

        const data = await response.json();
        
        window.localStorage.setItem('token', JSON.stringify(data.AcessToken));
    
        EntrarHome();
        
    } catch (error) {
        console.log("erro.", error);
    }


}



function mudarPagina() {
    
    window.location.href = 'http://127.0.0.1:5500/front/cadastro.html';
}


async function EntrarHome() {

    const endPoint = "http://localhost:3000/tarefas";

    let token = window.localStorage.getItem('token');
    token = token.split('"')[1];
    console.log(token);
    try {
        
        const response = await fetch(endPoint, {
            method: "GET", 
            headers: {
                "authorization": `bearer ${token}`
            },
        });

        if(response.ok == false) {
            console.log("token invalido");
        }else{

            window.location.href = 'http://127.0.0.1:5500/front/logado.html';
        }

    } catch (error) {

        console.log(error);
    }

}