export default function Home() {
  return (
    <div>
      <div className="w-full h-[35vh] bg-orange-400 flex flex-center">
        <p>PAULOTX</p>
      </div>

      <div className="container mx-auto mt-6 px-6">
        <div className="grid grid-cols-4 gap-4 h-[30vh]">
          <div className="flex-center bg-indigo-500">A</div>
          <div className="flex-center bg-purple-500">B</div>
          <div className="flex-center bg-blue-500">C</div>
          <div className="flex-center bg-emerald-500">D</div>
        </div>
      </div>

      <div className="container mx-auto mt-6 px-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 flex flex-col gap-4">
            <div className="flex gap-4 bg-purple-500 rounded-md">
              <div>
                <img className="w-auto h-[200px] rounded-left" src="https://placehold.co/600x400" alt="image description" />
              </div>

              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-2xl font-bold">Algum Título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Ler mais</button>
              </div>
            </div>

            <div className="flex gap-4 bg-purple-500 rounded-md">
              <div>
                <img className="w-auto h-[200px] rounded-left" src="https://placehold.co/600x400" alt="image description" />
              </div>

              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-2xl font-bold">Algum Título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Ler mais</button>
              </div>
            </div>

            <div className="flex gap-4 bg-purple-500 rounded-md">
              <div>
                <img className="w-auto h-[200px] rounded-left" src="https://placehold.co/600x400" alt="image description" />
              </div>

              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-2xl font-bold">Algum Título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Ler mais</button>
              </div>
            </div>

            <div className="flex gap-4 bg-purple-500 rounded-md">
              <div>
                <img className="w-auto h-[200px] rounded-left" src="https://placehold.co/600x400" alt="image description" />
              </div>

              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-2xl font-bold">Algum Título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Ler mais</button>
              </div>
            </div>
          </div>
          <div className="col-span-4 bg-red-900">B</div>
        </div>
      </div>
    </div>
  );
}
