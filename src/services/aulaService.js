import aulaRepository from "../repositories/aulaRepository.js";

async function Listar() {
    return await aulaRepository.Listar();
}

async function Inserir(
    id_aluno,
    tipo_aula,
    id_instrutor,
    data_inicio,
    data_fim,
    status
) {

    return await aulaRepository.Inserir(
        id_aluno,
        tipo_aula,
        id_instrutor,
        data_inicio,
        data_fim,
        status
    );
}

async function Editar(
    id,
    id_aluno,
    tipo_aula,
    id_instrutor,
    data_inicio,
    data_fim,
    status
) {

    return await aulaRepository.Editar(
        id,
        id_aluno,
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