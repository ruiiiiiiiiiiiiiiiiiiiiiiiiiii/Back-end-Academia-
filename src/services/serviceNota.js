import repoNota from "../repositories/repositoryNota.js";

async function Listar(){
    const notas = await repoNota.Listar();  
    return notas;    
}

async function Inserir(
    titulo,
    descricao,
    tipo,
    prioridade,
    status,
    criado_por,
    setor,
    visivel_para_todos,
    observacoes_internas
){
    titulo = titulo.toUpperCase();

    const nota = await repoNota.Inserir(
        titulo,
        descricao,
        tipo,
        prioridade,
        status,
        criado_por,
        setor,
        visivel_para_todos,
        observacoes_internas
    );

    return nota;
}

async function Editar(
    id,
    titulo,
    descricao,
    tipo,
    prioridade,
    status,
    criado_por,
    setor,
    visivel_para_todos,
    observacoes_internas
){
    const nota = await repoNota.Editar(
        id,
        titulo,
        descricao,
        tipo,
        prioridade,
        status,
        criado_por,
        setor,
        visivel_para_todos,
        observacoes_internas
    );

    return nota;
}

async function Excluir(id){
    const nota = await repoNota.Excluir(id);
    return nota;
}

export default { Listar, Inserir, Editar, Excluir };