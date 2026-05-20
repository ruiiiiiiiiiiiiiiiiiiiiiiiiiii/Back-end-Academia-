import con from "../database/connection.js";

async function Listar(){
    let sql = "SELECT * FROM alunos";
    const [alunos] = await con.connection.execute(sql);
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
    let sql = `
        INSERT INTO alunos
        (nome, cpf, data_nascimento, sexo, telefone, endereco, status, senha)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await con.connection.execute(sql, [
        nome,
        cpf,
        data_nascimento,
        sexo,
        telefone,
        endereco,
        status,
        senha
    ]);

    return { mensagem: "Aluno inserido com sucesso" };
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
    let sql = `
        UPDATE alunos
        SET nome=?,
            cpf=?,
            data_nascimento=?,
            sexo=?,
            telefone=?,
            endereco=?,
            status=?,
            senha=?
        WHERE id_aluno=?
    `;

    await con.connection.execute(sql, [
        nome,
        cpf,
        data_nascimento,
        sexo,
        telefone,
        endereco,
        status,
        senha,
        id
    ]);

    return { id };
}

async function Excluir(id){
    let sql = "DELETE FROM alunos WHERE id_aluno=?";
    await con.connection.execute(sql, [id]);

    return { mensagem: "Aluno excluído com sucesso" };
}

export default { Listar, Inserir, Editar, Excluir };