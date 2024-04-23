import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";

export const createUser = async (data: Prisma.UserCreateInput) => {
  try {
    return await prisma.user.create({ data });
  } catch (error) {
    return false;
  }
};

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
  const result = await prisma.user.createMany({
    data: users,
    skipDuplicates: true, // Pula um registro duplicado, filtra erros
  });

  return result;
};
