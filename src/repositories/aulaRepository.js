import con from "../database/connection.js";

async function Listar() {

    const sql = `
        SELECT
            a.*,
            al.nome AS nome_aluno,
            i.nome AS instrutor
        FROM aulas a
        LEFT JOIN alunos al
            ON a.id_aluno = al.id_aluno
        LEFT JOIN instrutores i
            ON a.id_instrutor = i.id_instrutor
        ORDER BY a.data_inicio
    `;

    const [aulas] = await con.connection.execute(sql);

    return aulas;
}

async function Inserir(
    id_aluno,
    tipo_aula,
    id_instrutor,
    data_inicio,
    data_fim,
    status
) {

    const sql = `
        INSERT INTO aulas
        (
            id_aluno,
            tipo_aula,
            id_instrutor,
            data_inicio,
            data_fim,
            status
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    await con.connection.execute(sql, [
        id_aluno || null,
        tipo_aula || null,
        id_instrutor || null,
        data_inicio || null,
        data_fim || null,
        status || "agendada"
    ]);

    return {
        mensagem: "Aula cadastrada com sucesso"
    };
}

async function Editar(
    id,
    id_aluno,
    tipo_aula,
    id_instrutor,
    data_inicio,
    data_fim,
    status
) {

    const sql = `
        UPDATE aulas
        SET
            id_aluno = ?,
            tipo_aula = ?,
            id_instrutor = ?,
            data_inicio = ?,
            data_fim = ?,
            status = ?
        WHERE id_aula = ?
    `;

    await con.connection.execute(sql, [
        id_aluno || null,
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

    const sql = `
        DELETE FROM aulas
        WHERE id_aula = ?
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