import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteUserById(userId: number) {
  try {
    const res = await prisma.user.delete({
      where: {
        id: userId
      }
    });
    console.log(`User with ID ${userId} deleted successfully:`, res);
  } catch (error) {
    console.error(`Failed to delete user with ID ${userId}:`, error);
  }
}
deleteUserById(2);