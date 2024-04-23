import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";

type userCreateProps = {
  name: string;
  email: string;
};

export const createUser = async ({ name, email }: userCreateProps) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log(error);
      }
    }
    return false;
  }
};
