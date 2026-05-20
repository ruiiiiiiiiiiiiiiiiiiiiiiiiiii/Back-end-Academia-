import aulaRepository from "../repositories/aulaRepository.js";

async function Listar() {
    return await aulaRepository.Listar();
}

async function Inserir(
    nome_aluno,
    telefone,
    tipo_aula,
    id_instrutor,
    data_inicio,
    data_fim
) {

    return await aulaRepository.Inserir(
        nome_aluno,
        telefone,
        tipo_aula,
        id_instrutor,
        data_inicio,
        data_fim
    );
}

async function Editar(
    id,
    nome_aluno,
    telefone,
    tipo_aula,
    id_instrutor,
    data_inicio,
    data_fim,
    status
) {

    return await aulaRepository.Editar(
        id,
        nome_aluno,
        telefone,
        tipo_aula,
        id_instrutor,
        data_inicio,
        data_fim,
        status
    );
}

async function Excluir(id) {
    return await aulaRepository.Excluir(id);
}

export default {
    Listar,
    Inserir,
    Editar,
    Excluir
};