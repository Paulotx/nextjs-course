import { ArticleDB } from "@/libs/database/Articles";

const HOME_LATEST_COUNT = 4;

export const ArticleService = {
  getHomeArticles: async ({ page = 1, limit = 10 }) => {
    const offset = (page - 1) * limit + HOME_LATEST_COUNT;

    const data = await ArticleDB.get({ limit, offset });
    const total = await ArticleDB.count({});

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
      },
    };
  },
  getHomeLatestArticles: async () => {
    const page = 1;
    const limit = HOME_LATEST_COUNT;
    const offset = 0;
    const orderBy = { publishedAt: "desc" };

    const data = await ArticleDB.get({ orderBy, limit, offset });
    const total = await ArticleDB.count({});

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
      },
    };
  },
};
