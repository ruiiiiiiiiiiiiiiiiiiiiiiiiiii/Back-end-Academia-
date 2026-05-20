import serviceNota from "../services/serviceNota.js";

async function Listar(req, res){
    const notas = await serviceNota.Listar();
    res.status(200).json({ notas });        
}

async function Inserir(req, res) {
    const {
        titulo,
        descricao,
        tipo,
        prioridade,
        status,
        criado_por,
        setor,
        visivel_para_todos,
        observacoes_internas
    } = req.body;     

    await serviceNota.Inserir(
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

    res.status(201).json({ mensagem: "Nota criada com sucesso" }); 
}

async function Editar(req, res) {
    const id = req.params.id;

    const {
        titulo,
        descricao,
        tipo,
        prioridade,
        status,
        criado_por,
        setor,
        visivel_para_todos,
        observacoes_internas
    } = req.body;     

    const nota = await serviceNota.Editar(
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

    res.status(200).json(nota); 
}

async function Excluir(req, res) {
    const id = req.params.id;
        
    await serviceNota.Excluir(id);

    res.status(200).json({ mensagem: "Nota removida com sucesso" }); 
}

export default { Listar, Inserir, Editar, Excluir };