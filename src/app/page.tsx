import Image from 'next/image';

import { Article } from '@/libs/database/Articles';

export default async function Home() {
  const highlightedArticles = await Article.get({
    limit: 4
  });
  const articles = await Article.get({
    limit: 10,
    offset: 4
  });
  return (
    <div>
      <div className="w-full h-[35vh] bg-orange-400 flex flex-center">
        <p>PAULOTX</p>
      </div>

      <div className="container mx-auto mt-6 px-6">
        <div className="grid grid-cols-4 gap-4 h-[30vh]">
          {highlightedArticles.map(article => (
            <div key={article.id} className="flex-center relative overflow-hidden rounded-md">
              <div className='h-full w-full relative'>
                <Image 
                  fill
                  alt={article.title} 
                  src={`/assets/images/articles/${article.image}`} 
                  className="w-full h-full object-cover rounded-b-lg" 
                />
              </div>

              <p className='w-full text-center font-medium text-sm 2xl:text-base absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent'>
                {article.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-6 px-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 flex flex-col gap-4">
            {articles.map(article => (
              <div key={article.id} className="flex bg-slate-900 rounded-md h-[200px] 2xl:h-[220px]">
                <div className='h-full w-72 rounded-l-md relative'>
                  <Image 
                    fill
                    alt={article.title} 
                    src={`/assets/images/articles/${article.image}`} 
                    className="w-full h-full object-cover rounded-l-md" 
                  />
                </div>

                <div className="w-full flex flex-col gap-2 px-4 py-4 2xl:py-6">
                  <h2 className="text-lg 2xl:text-2xl text-indigo-400 font-medium">{article.title}</h2>
                  <p className="flex-grow text-sm 2xl:text-base">{article.excerpt}</p>
                  <button className='text-sm 2xl:text-base bg-slate-700 hover:bg-indigo-400/40 transition duration-150 ease-linear rounded-md px-4 py-2 inline max-w-max'>Ler mais</button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-4 bg-red-900 rounded-md">B</div>
        </div>
      </div>
    </div>
  );
}
