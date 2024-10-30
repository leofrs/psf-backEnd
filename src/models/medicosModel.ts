import mongoose from "mongoose";

const medicoSchema = new mongoose.Schema({
    nome: {type: String, require: true, trim: true},
    especialidade: {type: String, require: true, trim: true},
    crm: {type: Number, require: true, trim: true},
    telefone: {type: Number, require: true, trim: true},
    email: {type: String, require: true, trim: true},
    password: {type: String, require: true, trim: true}
});

export const medicoModel = mongoose.model('medicos', medicoSchema);