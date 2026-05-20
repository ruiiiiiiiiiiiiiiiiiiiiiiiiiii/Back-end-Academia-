import repoInstrutor from "../repositories/instrutorRepository.js";

async function Listar() {
    return await repoInstrutor.Listar();
}

async function Inserir(
    nome,
    cpf,
    telefone,
    email,
    especialidade,
    salario,
    foto
) {
    nome = nome.toUpperCase();

    return await repoInstrutor.Inserir(
        nome,
        cpf,
        telefone || null,
        email || null,
        especialidade || null,
        salario || null,
        foto || null // 🔥 evita undefined
    );
}

async function Editar(
    id,
    nome,
    cpf,
    telefone,
    email,
    especialidade,
    salario,
    foto
) {
    return await repoInstrutor.Editar(
        id,
        nome,
        cpf,
        telefone || null,
        email || null,
        especialidade || null,
        salario || null,
        foto || null // 🔥 evita undefined
    );
}

async function Excluir(id) {
    return await repoInstrutor.Excluir(id);
}

export default { Listar, Inserir, Editar, Excluir };