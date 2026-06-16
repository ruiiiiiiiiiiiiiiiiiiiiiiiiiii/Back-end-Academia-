import usuarioRepository from "../repositories/usuarioRepository.js";

async function Login(usuario, senha) {

    return await usuarioRepository.Login(
        usuario,
        senha
    );
}

async function Inserir(
    usuario,
    senha,
    tipo,
    id_referencia
) {

    return await usuarioRepository.Inserir(
        usuario,
        senha,
        tipo,
        id_referencia
    );
}

async function TrocarSenha(
    id_usuario,
    senha
) {

    console.log(
        "SERVICE:",
        id_usuario,
        senha
    );

    return await usuarioRepository.TrocarSenha(
        id_usuario,
        senha
    );
}

export default {
    Login,
    Inserir,
    TrocarSenha
};