import aulaService from "../services/aulaService.js";

async function Listar(req, res) {

    const aulas = await aulaService.Listar();

    res.status(200).json({ aulas });
}

async function Inserir(req, res) {

    console.log(req.body);

    const {
        id_aluno,
        tipo_aula,
        id_instrutor,
        data_inicio,
        data_fim,
        status
    } = req.body;

    await aulaService.Inserir(
        id_aluno,
        tipo_aula,
        id_instrutor,
        data_inicio,
        data_fim,
        status
    );

    res.status(201).json({
        mensagem: "Aula cadastrada com sucesso"
    });
}

async function Editar(req, res) {

    const id = req.params.id;

    const {
        id_aluno,
        tipo_aula,
        id_instrutor,
        data_inicio,
        data_fim,
        status
    } = req.body;

    await aulaService.Editar(
        id,
        id_aluno,
        tipo_aula,
        id_instrutor,
        data_inicio,
        data_fim,
        status
    );

    res.status(200).json({
        mensagem: "Aula atualizada com sucesso"
    });
}

async function Excluir(req, res) {

    const id = req.params.id;

    await aulaService.Excluir(id);

    res.status(200).json({
        mensagem: "Aula removida com sucesso"
    });
}

export default {
    Listar,
    Inserir,
    Editar,
    Excluir
};