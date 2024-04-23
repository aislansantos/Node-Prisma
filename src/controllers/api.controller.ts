import { prisma } from "@/libs/prisma";
import { Request, Response } from "express";

export const ping = (req: Request, res: Response) => {
  return res.send("teste");
};

export const teste = (req: Request, res: Response) => {
  return res.json({ testado: true });
};

export const createUser = async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      name: "Aislan Santos",
      email: "aislan.santos@gmail.com",
    },
  });
  return res.json({ user });
};
