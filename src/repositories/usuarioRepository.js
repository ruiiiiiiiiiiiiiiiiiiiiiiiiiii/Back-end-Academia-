import con from "../database/connection.js";

async function Login(usuario, senha) {

    const sql = `
        SELECT *
        FROM usuarios
        WHERE usuario=? AND senha=?
    `;

    const [dados] =
        await con.connection.execute(sql, [
            usuario,
            senha
        ]);

    return dados[0];
}

async function Inserir(
    usuario,
    senha,
    tipo,
    id_referencia
) {

    const sql = `
        INSERT INTO usuarios
        (
            usuario,
            senha,
            tipo,
            id_referencia
        )

        VALUES (?, ?, ?, ?)
    `;

    await con.connection.execute(sql, [
        usuario,
        senha,
        tipo,
        id_referencia
    ]);
}

async function TrocarSenha(
    id_usuario,
    senha
) {

    const sql = `
        UPDATE usuarios
        SET
            senha=?,
            primeiro_login=FALSE
        WHERE id_usuario=?
    `;

    await con.connection.execute(sql, [
        senha,
        id_usuario
    ]);
}

export default {
    Login,
    Inserir,
    TrocarSenha
};