import tarefa from "../model/tarefas.js";
import user from "../model/user.js";

class tarefasControllers{

    static async obtendoTarefas(verificacao, req, res, next) {

        try {
            
            const usuario = await user.findOne({email: verificacao.email});
            

     
            const tarefasExistentes = await tarefa.findById(usuario.lista);

            return res.status(200).json(tarefasExistentes);
            
        } catch (error) {
            return res.status(500).json(error);
        }

       
    }

    static async criandoTarefas(verificacao, req, res, next){
        const {descricao, situacao} = req.body;

        const email = verificacao.email;

        let tarefaNova = new tarefa({descricao: descricao, situacao: situacao});

        try {

            const usuario = await user.findOne({email: email});
    
            if(usuario.lista == null){
    
                const tarefaCriada = await tarefaNova.save();
                const usuarioLista = await user.findByIdAndUpdate(usuario._id, {lista: tarefaCriada._id});
    
                return res.status(200).json(usuarioLista);
            }else{

                const tarefasExistentes = await tarefa.findById(usuario.lista);
                //console.log(tarefasExistentes);

                let tarefas = tarefasExistentes.descricao;
                let realizacao = tarefasExistentes.situacao;
                //let {tarefas, realizacao} = {...tarefasExistentes.descricao, ...tarefasExistentes.situacao};

                
                tarefas.push(descricao);
                realizacao.push(situacao);
                
                
                const tarefasResultado = await tarefa.findByIdAndUpdate(usuario.lista, {descricao: tarefas, situacao: realizacao});

                return res.status(200).json({msg:"tarefa atribuida", tarefas: tarefasResultado});
            }
            
        } catch (error) {
            console.log("errouuu", error);

        }

    }



    static async mudarEstadoTarefa(verificacao, req, res, next){

        const {indice} = req.body;
       

        try {
            const usuario = await user.findOne({email: verificacao.email});

            const tarefasExistentes = await tarefa.findById(usuario.lista);

            const situacoes = tarefasExistentes.situacao;

            
            const situacoesNovas = situacoes.map((situacao, ind) => {
                
                if(ind == indice){
                    return !(situacao);

                }else{
                    return situacao;
                }
            });

            const situacoesModificada = await tarefa.findByIdAndUpdate(usuario.lista, {situacao: situacoesNovas});
            
            res.status(200).json(situacoesModificada);

        } catch (error) {
            
            console.log(error);

        }
      
    }

    static async excluirTarefa(verificacao, req, res, next){

        const {indice} = req.body;
       

        try {
            const usuario = await user.findOne({email: verificacao.email});

            const tarefasExistentes = await tarefa.findById(usuario.lista);

            let tarefas = tarefasExistentes.descricao;
            let realizacao = tarefasExistentes.situacao;

            tarefas.splice(indice, 1);
            realizacao.splice(indice, 1);


            const situacoesModificada = await tarefa.findByIdAndUpdate(usuario.lista, {
                descricao: tarefas,
                situacao: realizacao});
            
            res.status(200).json(situacoesModificada);

        } catch (error) {
            
            console.log(error)
        }

    }
    
}

export default tarefasControllers;