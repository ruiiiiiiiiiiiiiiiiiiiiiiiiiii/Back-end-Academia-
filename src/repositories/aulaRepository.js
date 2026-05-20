import con from "../database/connection.js";

async function Listar() {

    let sql = `
        SELECT
            a.*,
            i.nome AS instrutor
        FROM aulas a
        INNER JOIN instrutores i
        ON a.id_instrutor = i.id_instrutor
    `;

    const [aulas] = await con.connection.execute(sql);

    return aulas;
}

async function Inserir(
    nome_aluno,
    telefone,
    tipo_aula,
    id_instrutor,
    data_inicio,
    data_fim
) {

    let sql = `
        INSERT INTO aulas
        (
            nome_aluno,
            telefone,
            tipo_aula,
            id_instrutor,
            data_inicio,
            data_fim
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    await con.connection.execute(sql, [
        nome_aluno || null,
        telefone || null,
        tipo_aula || null,
        id_instrutor || null,
        data_inicio || null,
        data_fim || null
    ]);

    return {
        mensagem: "Aula cadastrada com sucesso"
    };
}

async function Editar(
    id,
    nome_aluno,
    telefone,
    tipo_aula,
    id_instrutor,
    data_inicio,
    data_fim,
    status
) {

    let sql = `
        UPDATE aulas
        SET
            nome_aluno=?,
            telefone=?,
            tipo_aula=?,
            id_instrutor=?,
            data_inicio=?,
            data_fim=?,
            status=?
        WHERE id_aula=?
    `;

    await con.connection.execute(sql, [
        nome_aluno || null,
        telefone || null,
        tipo_aula || null,
        id_instrutor || null,
        data_inicio || null,
        data_fim || null,
        status || "agendada",
        id
    ]);

    return {
        mensagem: "Aula atualizada com sucesso"
    };
}

async function Excluir(id) {

    let sql = `
        DELETE FROM aulas
        WHERE id_aula=?
    `;

    await con.connection.execute(sql, [id]);

    return {
        mensagem: "Aula removida com sucesso"
    };
}

export default {
    Listar,
    Inserir,
    Editar,
    Excluir
};