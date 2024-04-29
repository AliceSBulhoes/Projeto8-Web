let tarefas = []

function validaCampo(){
    let valida = false;
    if(document.getElementById("task").value == ""){
        valida = true;
    }
    return valida
}

function adicionarTarefa(){
    let linhas = document.getElementById("task");
    if(validaCampo){
        alert("Preencha o Campo com a tarefa");
    }else{
        tarefas.push(linhas.value);
        linhas.value = "";
        listarTarefas();
    }
    document.getElementById("task").focus();
}

function listarTarefas(){
    let valor = "";
    for(let i = 0; i < tarefas.lenght; i++){
        valor += tarefas[i] + "<br>";
    }
    document.getElementById("lista").innerHTML = valor;
}