import con from "../database/connection.js";

async function Listar() {
    let sql = "SELECT * FROM planos";

    const [planos] = await con.connection.execute(sql);

    return planos;
}

async function Inserir(
    valor,
    duracao_meses,
    descricao
) {
    let sql = `
        INSERT INTO planos
        (valor, duracao_meses, descricao)
        VALUES (?, ?, ?)
    `;

    await con.connection.execute(sql, [
        valor || null,
        duracao_meses || null,
        descricao || null
    ]);

    return { mensagem: "Plano inserido com sucesso" };
}

async function Editar(
    id,
    valor,
    duracao_meses,
    descricao
) {
    let sql = `
        UPDATE planos
        SET valor=?,
            duracao_meses=?,
            descricao=?
        WHERE id_plano=?
    `;

    await con.connection.execute(sql, [
        valor || null,
        duracao_meses || null,
        descricao || null,
        id
    ]);

    return { mensagem: "Plano atualizado com sucesso" };
}

async function Excluir(id) {
    let sql = "DELETE FROM planos WHERE id_plano=?";

    await con.connection.execute(sql, [id]);

    return { mensagem: "Plano removido com sucesso" };
}

export default {
    Listar,
    Inserir,
    Editar,
    Excluir
};