import Image from 'next/image';
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function HomePage() {
  const session = await getServerSession(options)
  
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }

  return (
    <div className="bg-neutral-300 flex flex-col items-center h-screen">
      <header className="bg-slate-900 w-full h-20 flex justify-center items-center">
        <div className="w-4/5 h-20 flex items-center bg-slate-900">
          <Image src="/BagMaster.png" alt="" width={144} height={36} />
        </div>
      </header>
      <div className="w-4/5">
        <h1 className="self-start mt-8 mb-8 text-3xl font-light text-black">Bem-vindo! Bernardo</h1>
      </div>

      <a className="w-4/5 h-36 bg-white rounded-2xl border border-black mb-10 flex justify-center items-center drop-shadow-md hover:border-2" href="/home/addEmpresa">
        <button><h1 className="md:text-3xl text-2xl font-light text-black">Adicionar empresa +</h1></button>
      </a>

      <a className="w-4/5 h-36 bg-white rounded-2xl border border-black mb-10 flex justify-center items-center drop-shadow-md hover:border-2" href="/">
        <button><h1 className="md:text-3xl text-2xl font-light text-black">Entrar em empresa -&gt;</h1></button>
      </a>
    </div>
  );
}




