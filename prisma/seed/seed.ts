import { PrismaClient } from "@prisma/client";

import { slugify } from "../../src/helpers/slugify";
import articles from "../../src/data/articles.json";

const prisma = new PrismaClient();

const isDev = process.env.NODE_ENV === "development";

async function main() {
  console.log("DB seed");
  await seedArticles();
}

async function seedArticles() {
  if (!isDev) {
    throw new Error("This script is only for development environment");
  }

  await prisma.article.deleteMany();
  await prisma.$executeRawUnsafe(
    "DELETE FROM SQLITE_SEQUENCE WHERE name=$1",
    "Article",
  );

  for (const article of articles) {
    const record = await prisma.article.create({
      data: {
        title: article.title,
        slug: slugify(article.title),
        excerpt: article.content,
        content: article.content,
        image: article.image,
        publishedAt: new Date(article.publish_date),
      },
    });

    console.log("🚀 ~ seedArticles ~ record:", record.id, record.title);
  }
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
