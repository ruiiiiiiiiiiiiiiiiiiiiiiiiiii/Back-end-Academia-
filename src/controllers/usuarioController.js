import usuarioService
from "../services/usuarioService.js";

async function Login(req, res) {

    const {
        usuario,
        senha
    } = req.body;

    const user =
        await usuarioService.Login(
            usuario,
            senha
        );

    if (!user) {

        return res.status(401).json({
            erro: "Login inválido"
        });
    }

    res.status(200).json({
        sucesso: true,

        usuario: {
            id: user.id_usuario,

            tipo: user.tipo,

            referencia:
                user.id_referencia,

            primeiro_login:
                user.primeiro_login
        }
    });
}

async function Inserir(req, res) {

    const {
        usuario,
        tipo,
        id_referencia
    } = req.body;

    const senhaPadrao = "123456";

    await usuarioService.Inserir(
        usuario,
        senhaPadrao,
        tipo,
        id_referencia
    );

    res.status(201).json({
        mensagem: "Usuário criado",

        senhaPadrao
    });
}

async function TrocarSenha(req, res) {

    const {
        id_usuario,
        senha
    } = req.body;

    await usuarioService.TrocarSenha(
        id_usuario,
        senha
    );

    res.status(200).json({
        mensagem: "Senha alterada"
    });
}

export default {
    Login,
    Inserir,
    TrocarSenha
};