import { Router } from "express";
import { MedicosController } from "../controllers/medicoController";

export const medicosRouter = Router();
const medicosController = new MedicosController();

/**
 * @swagger
 * tags:
 *   - name: Médico
 *     description: Aqui é onde vão ser encontradas todas as rotas e suas respostas para os médicos
 */

/**
 * @swagger
 * /api/v1/get-all-medicos:
 *    post:
 *     summary: Busca todos os médicos.
 *     description: Busca todos os médicos cadastrados no banco de dados.
 *     tags: [Médico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do médico.
 *               especialidade:
 *                 type: string
 *                 description: Qual a área de atuação do médico.
 *               crm:
 *                 type: number
 *                 description: Número de registro do médico.
 *               telefone:
 *                  type: number
 *                  description: Número de contato do médico.
 *               email:
 *                  type: string
 *                  description: E-mail do médico.
 *               password:
 *                  type: string
 *                  description: Senha que o médico utiliza para entrar na sua sessão
 *       200:
 *         description: Retorna a lista de médico no banco de dados
 *       500:
 *         description: {succes: "false", message: "Erro encontrado ao buscar todos os médicos no banco de dados - (Aqui é exibido o erro que aconteceu)"}
 */
medicosRouter.get("/api/v1/get-all-medicos", medicosController.getAllMedicos);
 
medicosRouter.post("/api/v1/create-medico", medicosController.createMedico);