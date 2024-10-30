import bcrypt from "bcrypt";
import dotenv from "dotenv"

dotenv.configDotenv();

const saltRounds = Number(process.env.SALTROUNDS!);

export const hashPassword = async (password: string) => {
    const hash  = await bcrypt.hash(password, saltRounds).then((hash) => {
        return hash;
    }).catch((error) => {
        return console.log(`Um erro foi encontrado ao realizar o hash: ${error}`);
    });

    return hash;
}

export const comparePasswordHash = async (password: string, hashPassword: string) => {
    const compare = await bcrypt.compare(password,hashPassword).then((result) => {
        return result;
    }).catch((error) => {
        return console.log(`Um erro foi encontrado ao realizar a comparação de senhas: ${error}`);
    });

   return compare;
}