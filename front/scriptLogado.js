

function deslogar(){

    window.localStorage.removeItem('token');
    window.location.href = 'http://127.0.0.1:5500/front/login.html';

}


async function obtendoLista() {

    const endPoint = "http://localhost:3000/tarefas"
    let token = obterToken();
    console.log(token);

    try {
        
        const response = await fetch(endPoint, {
            method: "GET",
            headers: {
                "authorization": `bearer ${token}`,
                
            }
        });

        const data = await response.json();
        
        return data;

    } catch (error) {
        cobsole.log(error);

    }

}

//obtendoLista();


async function inserirListaHtml(){

    const objetoTarefas = await obtendoLista();
    console.log(objetoTarefas);
    
    
    //const secao = document.querySelector("main#tarefasId");
    objetoTarefas.descricao.forEach((tarefa, ind) => {
        
        let areaCriada = document.createElement("div");
        areaCriada.setAttribute("id", "divtarefa");

        let areaTexto = document.createElement("p");
        areaTexto.setAttribute("id", `textoinput${ind}`);

        let botaodiv = document.createElement("button");
        botaodiv.setAttribute("class", "botaoexcluir");
        botaodiv.appendChild(document.createTextNode("X"));
        botaodiv.setAttribute("id", `botao${ind}`);
        botaodiv.setAttribute("onclick", `excluirTarefa(this.id)`);

        let texto = document.createTextNode(`${tarefa}`);

        let checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", `input${ind}`);
        checkBox.setAttribute("onclick", `mudancaDeEstado(this.id)`);

        if(objetoTarefas.situacao[ind] === true){
            checkBox.setAttribute("checked", "checked");
        }
        

        areaCriada.appendChild(checkBox);
        
        areaTexto.appendChild(texto);
        areaCriada.appendChild(areaTexto);
        areaCriada.appendChild(botaodiv);

       
        document.querySelector("main#tarefasId").appendChild(areaCriada);


    });


}

inserirListaHtml();


function obterToken(){
    let token = window.localStorage.getItem('token');
    token = token.split('"')[1];

    return token;
}


async function mudancaDeEstado (id){

    
    const ind = id.split("input")[1];
    let token = obterToken();

    const endPoint = "http://localhost:3000/tarefas"

   try {
       
       const response = await fetch(endPoint, {
           method: 'PUT',
           headers: {
               "authorization": `bearer ${token}`,
               "Content-type": "application/json"
           },
           body: JSON.stringify({
               indice: ind,
               
           })
       });
    
    
       if(response.ok == true){
           console.log("troca feita com sucesso");
       }
   } catch (error) {
    console.log(error);

   }
    


}

function abrirModal(){
    const modal = document.getElementById("janela-modal");
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar'){
            modal.classList.remove("abrir")
        }
    })

}

async function adicionarTarefa(){

    const endPoint = "http://localhost:3000/tarefas";
    const input = document.querySelector("input.modalinput");
    const inputValor = input.value;
    console.log(inputValor);
    let token = obterToken();

    try {

        const response = await fetch(endPoint, {
            method: 'POST',
            headers: {
                "authorization": `bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                descricao: inputValor,
                situacao: false
            })
        })
        
        console.log(response);

        if(response.ok == true){
            console.log("feito com sucesso");
            window.location.reload();
        }else{
            console.log("deu erro");
        }
        
    } catch (error) {
        console.log(error);
    }


}


async function excluirTarefa(id) {
    
    const ind = id.split("botao")[1];
    let token = obterToken();

    const endPoint = "http://localhost:3000/tarefas"

    try {
        
        const response = await fetch(endPoint, {
            method: 'DELETE',
            headers: {
                "authorization": `bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                indice: ind,
                
            })
        });
     
     
        if(response.ok == true){
            console.log("exclusão feita com sucesso");
            window.location.reload();
        }
    } catch (error) {
     console.log(error);
 
    }

}
