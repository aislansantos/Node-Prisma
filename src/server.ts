import * as express from "express";
import { Request, Response } from "express";
import * as path from "path";
import * as dotenv from "dotenv";
import * as cors from "cors";
import routes from "@/routes/routes";

dotenv.config();

const server = express();

server.use(cors());

server.use(express.json());

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use("/", routes);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado." });
});

server.listen(process.env.PORT, () => {
  console.log("Rodando na porta 3000");
});
