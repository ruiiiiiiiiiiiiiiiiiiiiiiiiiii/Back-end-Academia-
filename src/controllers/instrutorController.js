import serviceInstrutor from "../services/InstrutorService.js";

async function Listar(req, res) {
    const instrutores = await serviceInstrutor.Listar();
    res.status(200).json({ instrutores });
}

async function Inserir(req, res) {
    const {
        nome,
        cpf,
        telefone,
        email,
        especialidade,
        salario,
        foto
    } = req.body;

    await serviceInstrutor.Inserir(
        nome,
        cpf,
        telefone ?? null,
        email ?? null,
        especialidade ?? null,
        salario ?? null,
        foto ?? null
    );

    res.status(201).json({ mensagem: "Instrutor cadastrado com sucesso" });
}

async function Editar(req, res) {
    const id = req.params.id;

    const {
        nome,
        cpf,
        telefone,
        email,
        especialidade,
        salario,
        foto
    } = req.body;

    const instrutor = await serviceInstrutor.Editar(
        id,
        nome,
        cpf,
        telefone ?? null,
        email ?? null,
        especialidade ?? null,
        salario ?? null,
        foto ?? null
    );

    res.status(200).json(instrutor);
}

async function Excluir(req, res) {
    const id = req.params.id;

    await serviceInstrutor.Excluir(id);

    res.status(200).json({ mensagem: "Instrutor removido com sucesso" });
}

export default { Listar, Inserir, Editar, Excluir };