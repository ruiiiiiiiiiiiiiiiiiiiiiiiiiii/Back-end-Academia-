import con from "../database/connection.js";

async function Listar() {
    let sql = "SELECT * FROM instrutores";
    const [instrutores] = await con.connection.execute(sql);
    return instrutores;
}

async function Inserir(
    nome,
    cpf,
    telefone,
    email,
    especialidade,
    salario,
    foto // 🔥
) {
    let sql = `
        INSERT INTO instrutores
        (nome, cpf, telefone, email, especialidade, salario, foto)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await con.connection.execute(sql, [
        nome,
        cpf,
        telefone,
        email,
        especialidade,
        salario,
        foto // 🔥
    ]);

    return { mensagem: "Instrutor inserido com sucesso" };
}

async function Editar(
    id,
    nome,
    cpf,
    telefone,
    email,
    especialidade,
    salario,
    foto // 🔥
) {
    let sql = `
        UPDATE instrutores
        SET nome=?,
            cpf=?,
            telefone=?,
            email=?,
            especialidade=?,
            salario=?,
            foto=? -- 🔥
        WHERE id_instrutor=?
    `;

    await con.connection.execute(sql, [
        nome,
        cpf,
        telefone,
        email,
        especialidade,
        salario,
        foto, // 🔥
        id
    ]);

    return { id };
}

async function Excluir(id) {
    let sql = "DELETE FROM instrutores WHERE id_instrutor=?";
    await con.connection.execute(sql, [id]);

    return { mensagem: "Instrutor excluído com sucesso" };
}

export default { Listar, Inserir, Editar, Excluir };