import planoRepository from "../repositories/planoRepository.js";

async function Listar() {
    return await planoRepository.Listar();
}

async function Inserir(
    valor,
    duracao_meses,
    descricao
) {
    return await planoRepository.Inserir(
        valor,
        duracao_meses,
        descricao
    );
}

async function Editar(
    id,
    valor,
    duracao_meses,
    descricao
) {
    return await planoRepository.Editar(
        id,
        valor,
        duracao_meses,
        descricao
    );
}

async function Excluir(id) {
    return await planoRepository.Excluir(id);
}

export default {
    Listar,
    Inserir,
    Editar,
    Excluir
};