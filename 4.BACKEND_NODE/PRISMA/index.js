import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBooks = async () => {
  const books = await prisma.book.findMany();
  return books;
};

async function getAuthors() {
  const authors = prisma.author.findMany();
  return authors;
}

async function createBook() {
  const book = await prisma.book.create({
    data: {
      name: "libro de ejemplo",
      year: 1999,
    },
  });
  return book;
}

async function main() {
  console.log(await getBooks()); // ... you will write your Prisma Client queries here
  console.log(await getAuthors());
  console.log(await createBook());
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
