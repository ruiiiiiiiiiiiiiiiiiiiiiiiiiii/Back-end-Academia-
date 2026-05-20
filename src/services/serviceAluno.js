import repoAluno from "../repositories/repositoryAluno.js";

async function Listar(){
    const alunos = await repoAluno.Listar();  
    return alunos;    
}

async function Inserir(
    nome,
    cpf,
    data_nascimento,
    sexo,
    telefone,
    endereco,
    status,
    senha
){
    nome = nome.toUpperCase();

    const aluno = await repoAluno.Inserir(
        nome,
        cpf,
        data_nascimento,
        sexo,
        telefone,
        endereco,
        status,
        senha
    );

    return aluno;
}

async function Editar(
    id,
    nome,
    cpf,
    data_nascimento,
    sexo,
    telefone,
    endereco,
    status,
    senha
){
    const aluno = await repoAluno.Editar(
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

    return aluno;
}

async function Excluir(id){
    const aluno = await repoAluno.Excluir(id);
    return aluno;
}

export default { Listar, Inserir, Editar, Excluir };