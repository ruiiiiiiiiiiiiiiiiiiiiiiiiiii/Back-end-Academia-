import serviceAluno from "../services/serviceAluno.js";

async function Listar(req, res){
    const alunos = await serviceAluno.Listar();
    res.status(200).json({ alunos });        
}

async function Inserir(req, res) {
    const {
        nome,
        cpf,
        data_nascimento,
        sexo,
        telefone,
        endereco,
        status,
        senha
    } = req.body;     

    await serviceAluno.Inserir(
        nome,
        cpf,
        data_nascimento,
        sexo,
        telefone,
        endereco,
        status,
        senha
    );

    res.status(201).json({ mensagem: "Aluno cadastrado com sucesso" }); 
}

async function Editar(req, res) {
    const id = req.params.id;

    const {
        nome,
        cpf,
        data_nascimento,
        sexo,
        telefone,
        endereco,
        status,
        senha
    } = req.body;     

    const aluno = await serviceAluno.Editar(
        id,
        nome,
        cpf,
        data_nascimento,
        sexo,
        telefone,
        endereco,
        status,
        senha
    );

    res.status(200).json(aluno); 
}

async function Excluir(req, res) {
    const id = req.params.id;
        
    await serviceAluno.Excluir(id);

    res.status(200).json({ mensagem: "Aluno removido com sucesso" }); 
}

export default { Listar, Inserir, Editar, Excluir };