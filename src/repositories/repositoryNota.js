import con from "../database/connection.js";

async function Listar() {

const sql = `
    SELECT *
    FROM notas_admin
    ORDER BY id DESC
`;

const [notas] =
await con.connection.execute(sql);

return notas;

}

async function Inserir(
titulo,
descricao,
tipo,
prioridade,
status,
criado_por,
setor,
visivel_para_todos,
observacoes_internas
) {

const sql = `
    INSERT INTO notas_admin
    (
        titulo,
        descricao,
        tipo,
        prioridade,
        status,
        criado_por,
        setor,
        visivel_para_todos,
        observacoes_internas
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

await con.connection.execute(sql, [
    titulo,
    descricao,
    tipo,
    prioridade,
    status,
    criado_por,
    setor,
    visivel_para_todos,
    observacoes_internas
]);

return {
    mensagem: "Nota criada com sucesso"
};

}

async function Editar(
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
) {

const sql = `
    UPDATE notas_admin
    SET
        titulo=?,
        descricao=?,
        tipo=?,
        prioridade=?,
        status=?,
        criado_por=?,
        setor=?,
        visivel_para_todos=?,
        observacoes_internas=?
    WHERE id=?
`;

await con.connection.execute(sql, [
    titulo,
    descricao,
    tipo,
    prioridade,
    status,
    criado_por,
    setor,
    visivel_para_todos,
    observacoes_internas,
    id
]);

return { id };

}

async function Excluir(id) {

const sql = `
    DELETE FROM notas_admin
    WHERE id=?
`;

await con.connection.execute(sql, [id]);

return {
    mensagem: "Nota removida com sucesso"
};

}

export default {
Listar,
Inserir,
Editar,
Excluir
};