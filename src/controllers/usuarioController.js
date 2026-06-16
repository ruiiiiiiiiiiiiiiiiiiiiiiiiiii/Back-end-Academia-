import usuarioService from "../services/usuarioService.js";

async function Login(req, res) {
    try {

        const { usuario, senha } = req.body;

        if (!usuario || !senha) {
            return res.status(400).json({
                sucesso: false,
                erro: "Usuário e senha são obrigatórios"
            });
        }

        const user = await usuarioService.Login(
            usuario,
            senha
        );

        if (!user) {
            return res.status(401).json({
                sucesso: false,
                erro: "Login inválido"
            });
        }

        console.log("LOGIN:", user);

        return res.status(200).json({
            sucesso: true,
            usuario: {
                id_usuario: user.id_usuario,
                usuario: user.usuario,
                tipo: user.tipo,
                referencia: user.id_referencia,
                primeiro_login: user.primeiro_login
            }
        });

    } catch (erro) {

        console.error("ERRO LOGIN:", erro);

        return res.status(500).json({
            sucesso: false,
            erro: erro.message
        });
    }
}

async function Inserir(req, res) {
    try {

        const {
            usuario,
            tipo,
            id_referencia
        } = req.body;

        if (
            !usuario ||
            !tipo ||
            id_referencia === undefined ||
            id_referencia === null
        ) {
            return res.status(400).json({
                sucesso: false,
                erro: "Dados obrigatórios não informados"
            });
        }

        const senhaPadrao = "123";

        await usuarioService.Inserir(
            usuario,
            senhaPadrao,
            tipo,
            Number(id_referencia)
        );

        return res.status(201).json({
            sucesso: true,
            mensagem: "Usuário criado",
            senhaPadrao
        });

    } catch (erro) {

        console.error("ERRO INSERIR:", erro);

        return res.status(500).json({
            sucesso: false,
            erro: erro.message
        });
    }
}

async function TrocarSenha(req, res) {
    try {

        const {
            id_usuario,
            senha
        } = req.body;

        console.log("=================================");
        console.log("TROCAR SENHA");
        console.log("BODY:", req.body);
        console.log("ID recebido:", id_usuario);
        console.log("Senha recebida:", senha);
        console.log("=================================");

        if (
            id_usuario === undefined ||
            id_usuario === null ||
            id_usuario === "" ||
            !senha
        ) {
            return res.status(400).json({
                sucesso: false,
                erro: "Dados inválidos"
            });
        }

        await usuarioService.TrocarSenha(
            Number(id_usuario),
            senha
        );

        return res.status(200).json({
            sucesso: true,
            mensagem: "Senha alterada"
        });

    } catch (erro) {

        console.error("ERRO TROCAR SENHA:", erro);

        return res.status(500).json({
            sucesso: false,
            erro: erro.message
        });
    }
}

export default {
    Login,
    Inserir,
    TrocarSenha
};