import express from "express";
import cors from "cors";
import { swaggerRouter } from "../docs/swaggerRoute";
import { mongooseConnection } from "./db";
import { medicosRouter } from "../routes/medicoRoutes";
import path from "path";

const app = express();

app.use(express.json());
app.use(cors());
app.use(swaggerRouter);

mongooseConnection();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

app.use(medicosRouter);

app.listen(8080, () => {
    console.log(`Servidor rodando na porta: http://localhost:8080`);
    console.log(`Documentação na porta: http://localhost:8080/api-docs`);
})