import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const MAX_RECORDS = 50;
const MIN_OFFSET = 0;

type DBArticle = {
  where?: object;
  orderBy?: object;
  limit?: number;
  offset?: number;
};

const Article = {
  get: async ({
    where = {},
    orderBy = {},
    limit = 10,
    offset = 0,
  }: DBArticle) => {
    const take = Math.min(limit, MAX_RECORDS);
    const skip = Math.max(MIN_OFFSET, offset);

    const records = await prisma.article.findMany({
      where,
      orderBy,
      take,
      skip,
    });

    return records;
  },
};

export { Article };
