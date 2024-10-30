import { Request, Response } from "express";
import { medicoModel } from "../models/medicosModel";
import { CreateMedico } from "../../@types/medico";
import { hashPassword } from "../utils/hashUtils";

export class MedicosController{
    async getAllMedicos(req: Request, res: Response) {
        await medicoModel.find()
        .then((item) => res.json(item))
        .catch((error) => res.status(500).json({success: "false", message: `Erro encontrado ao buscar todos os médicos no banco de dados : ${error}`}))          
    }

    async createMedico(req: Request, res: Response) {
        const {nome, especialidade, crm, telefone, email, password} = req.body as CreateMedico;

        if(!nome || !especialidade || !crm || !telefone || !email || !password){
            res.status(400).json({
                success: "false",
                message: "Não foram passsados todas as informações. Verifique os campos e tente novamente!"
            })
            return
        }

        const alreadyExist = await medicoModel.findOne({email}).catch((error) => res.status(500).json({
            success: "false",
            message: `Não foi possivel verificar se o médico ja está cadastrado no banco de dados. Por favor, tente novamente mais tarde! ${error}`
        }));

        if(alreadyExist){
            res.status(200).json({
                success: "true",
                message: "Médico ja cadastrado com esse email no banco de dados. Tente com outro e-mail!"
            })
            return;
        }

        const hash = await hashPassword(password);

        await medicoModel.create({
            nome: nome,
            especialidade: especialidade,
            crm: crm,
            telefone: telefone,
            email: email,
            password: hash
        }).then(() => res.status(201).json({
            success: "true",
            message: "Médico cadastrado com sucesso!"
        })).catch((error) => res.status(500).json({
            success: "false",
            message: `Não foi possível cadastrar o médico. O seguinte erro aconteceu: ${error}`
        }))
    }
}