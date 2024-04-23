import { Request, Response } from "express";
import * as UserService from "@/services/userService";

export const ping = (req: Request, res: Response) => {
  return res.send("teste");
};

export const teste = (req: Request, res: Response) => {
  return res.json({ testado: true });
};

export const createUser = async (req: Request, res: Response) => {
  // validar os dados recebidos.
  const user = await UserService.createUser({
    name: "Teste1",
    email: "teste1@hotmail.com",
  });

  if (user) {
    return res.status(201).json({ user });
  }
  return res.status(500).json({ Error: "E-mail ja cadastrado." });
};
