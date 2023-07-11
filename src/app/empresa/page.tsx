import Image from 'next/image';

export default function preAddEmpresa() {
  return (
    <div className="bg-neutral-300 flex flex-col items-center h-screen">
      <header className="bg-slate-900 w-full h-20 flex justify-center items-center">
        <div className="w-4/5 h-20 flex items-center bg-slate-900">
          <Image src="/BagMaster.png" alt="" width={144} height={36} />
        </div>
      </header>
      <div className="w-4/5">
        <h1 className="self-start mt-8 mb-8 text-3xl font-light text-black">Bem-vindo! Usuário</h1>
      </div>
      
        <a className="w-4/5 h-36 bg-white rounded-2xl border border-black mb-10 flex justify-center items-center drop-shadow-md hover:border-2" href="/empresa/addEmpresa">
        <button><h1 className="md:text-3xl text-2xl font-light text-black">Adicionar empresa +</h1></button>
        </a>

        <a className="w-4/5 h-36 bg-white rounded-2xl border border-black mb-10 flex justify-center items-center drop-shadow-md hover:border-2" href="/home">
        <button><h1 className="md:text-3xl text-2xl font-light text-black">Entrar em empresa -&gt;</h1></button>
        </a>
      
    </div>
  );
}




