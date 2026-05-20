import { Router } from "express";

import controllerAluno from "./controllers/alunoController.js";
import instrutorController from "./controllers/instrutorController.js";
import planoController from "./controllers/PlanoController.js";
import notaController from "./controllers/notaController.js";
import AulaController from "./controllers/AulaController.js";

import usuarioController from "./controllers/usuarioController.js";

const router = Router();


// ===============================
// LOGIN
// ===============================

router.post(
    "/login",
    usuarioController.Login
);


// ===============================
// USUÁRIOS
// ===============================

router.post(
    "/usuarios",
    usuarioController.Inserir
);

router.put(
    "/usuarios/trocar-senha",
    usuarioController.TrocarSenha
);


// ===============================
// ALUNOS
// ===============================

router.post(
    "/alunos",
    controllerAluno.Inserir
);

router.get(
    "/alunos",
    controllerAluno.Listar
);

router.put(
    "/alunos/:id",
    controllerAluno.Editar
);

router.delete(
    "/alunos/:id",
    controllerAluno.Excluir
);


// ===============================
// INSTRUTORES
// ===============================

router.post(
    "/instrutores",
    instrutorController.Inserir
);

router.get(
    "/instrutores",
    instrutorController.Listar
);

router.put(
    "/instrutores/:id",
    instrutorController.Editar
);

router.delete(
    "/instrutores/:id",
    instrutorController.Excluir
);


// ===============================
// PLANOS
// ===============================

router.post(
    "/planos",
    planoController.Inserir
);

router.get(
    "/planos",
    planoController.Listar
);

router.put(
    "/planos/:id",
    planoController.Editar
);

router.delete(
    "/planos/:id",
    planoController.Excluir
);


// ===============================
// NOTAS
// ===============================

router.post(
    "/notas",
    notaController.Inserir
);

router.get(
    "/notas",
    notaController.Listar
);

router.put(
    "/notas/:id",
    notaController.Editar
);

router.delete(
    "/notas/:id",
    notaController.Excluir
);


// ===============================
// AULAS
// ===============================

router.get(
    "/aulas",
    aulaController.Listar
);

router.post(
    "/aulas",
    aulaController.Inserir
);

router.put(
    "/aulas/:id",
    aulaController.Editar
);

router.delete(
    "/aulas/:id",
    aulaController.Excluir
);

export default router;