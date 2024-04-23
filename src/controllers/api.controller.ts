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
    name: "Teste 4",
    email: "teste4@hotmail.com",
    posts: {
      create: {
        title: "Titulo de teste do teste 4",
        body: "Corpo de teste do post",
      },
    },
  });

  if (user) {
    return res.status(201).json({ user });
  }
  return res.status(500).json({ Error: "E-mail ja cadastrado." });
};

export const createUsers = async (req: Request, res: Response) => {
  const result = await UserService.createUsers([
    { name: "João", email: "joao@gmail.com" },
    { name: "João Paulo", email: "joaopaulo@gmail.com" },
    { name: "José", email: "jose@gmail.com" },
    { name: "Maria", email: "maria@hotmail" },
  ]);

  res.json({ result });
};
