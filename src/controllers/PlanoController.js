import planoService from "../services/planoService.js";

async function Listar(req, res) {
    const planos = await planoService.Listar();

    res.status(200).json({ planos });
}

async function Inserir(req, res) {
    const {
        valor,
        duracao_meses,
        descricao
    } = req.body;

    await planoService.Inserir(
        valor,
        duracao_meses,
        descricao
    );

    res.status(201).json({
        mensagem: "Plano cadastrado com sucesso"
    });
}

async function Editar(req, res) {
    const id = req.params.id;

    const {
        valor,
        duracao_meses,
        descricao
    } = req.body;

    await planoService.Editar(
        id,
        valor,
        duracao_meses,
        descricao
    );

    res.status(200).json({
        mensagem: "Plano atualizado com sucesso"
    });
}

async function Excluir(req, res) {
    const id = req.params.id;

    await planoService.Excluir(id);

    res.status(200).json({
        mensagem: "Plano removido com sucesso"
    });
}

export default {
    Listar,
    Inserir,
    Editar,
    Excluir
};