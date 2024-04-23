// import { prisma } from "@/libs/prisma";
import { Request, Response } from "express";

export const ping = (req: Request, res: Response) => {
  return res.send("teste");
};

// export const teste = (req: Request, res: Response) => {
//   prisma.user
// }
