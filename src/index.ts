import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  try {
    const result = await prisma.user.create({
      data: {
        email: username,
        password,
        firstName,
        lastName,
      },
    });
    console.log(result);
  } catch (error) {
    console.error('Error inserting user:', error);
  }
}

insertUser('admin2', '123456', 'Shubham', 'Kundu');
