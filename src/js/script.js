let tarefas = []

function validaCampo(){
    let valida = false;
    if (document.getElementById("task").value == "") valida = true;
    return valida;
}

function adicionarTarefa(){
    let linhas = document.getElementById("task");
    
    if(validaCampo()){
        alert("Preencha o Campo com a tarefa")
    }
    else{
        tarefas.push(linhas.value);
        linhas.value ="";
        listarTarefas();
    }
        document.getElementById("task").focus();
}

//função listar tarefas 

function listarTarefas(){
    let valor ="";
    for(let i=0; i< tarefas.length; i++){
        valor += tarefas[i] +"<br>";
    }
    document.getElementById("lista").innerHTML = valor;
}
//função de remover tarefas

function removerTarefa(){
    //metodo pop = remove o ultimo item adicionado
    tarefas.pop();
    listarTarefas();

}