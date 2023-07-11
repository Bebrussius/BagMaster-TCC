'use client'

import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function AddEmpresa() {
  const router = useRouter();
  return (
    <div className="bg-neutral-300 flex flex-col items-center h-screen">
      <header className="bg-slate-900 w-full h-20 flex justify-center items-center">
        <div className="w-4/5 h-20 flex items-center bg-slate-900">
          <img className="w-36" src="/BagMaster.png" alt="" />
        </div>
      </header>
      <div className="w-4/5">
        <h1 className="self-start mt-8 mb-8 text-3xl font-light text-black">Adicionando Empresa...</h1>
      </div>
      <div className="bg-white w-4/5 h-3/4 rounded-2xl border border-black flex flex-col items-center justify-center">
        <div className='flex justify-center'>
          <h1 className="text-center text-xl xl:w-full xl:text-3xl mb-10 ml-10 mr-10">Insira nos campos abaixo os respectivos dados da sua empresa!</h1>
        </div>

        <input
          className="bg-neutral-300 w-3/4 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Nome da empresa"
        />
        <div className="flex w-3/4 justify-between mt-4 ">
          <input
            className="bg-neutral-300 w-3/4 h-10 rounded-md p-3  placeholder:text-black placeholder:opacity-50 mr-4 focus:outline-none focus:ring-2
          focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="CPF"
          />
          <input
            className="bg-neutral-300 w-3/4 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
          focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="CEP do dono da empresa"
          />
        </div>
        <input
          className="bg-neutral-300 w-3/4 h-10 rounded-md p-3 mt-4 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Endereço da empresa"
        />
        <input
          className="bg-neutral-300 w-3/4 h-10 rounded-md p-3 mt-4 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Telefone de contato"
        />
        <input
          className="bg-neutral-300 w-3/4 h-10 rounded-md p-3 mt-4 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="E-mail de contato"
        />
        <input
          className="bg-neutral-300 w-3/4 h-10 rounded-md p-3 mt-4 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:border-blue-500"
          type="password"
          placeholder="Senha de acesso a empresa"
        />

        <div className="flex w-3/4 justify-between mt-4">
          <a className="bg-slate-900 text-white w-3/4 h-10 rounded-md mr-4 flex justify-center font-roboto hover:bg-blue-900 transition duration-300 ease-linear" href="/home">
        <button>Continuar</button>
        </a>
          <button className='bg-black text-white w-3/4 h-10 rounded-md mr-4 flex justify-center font-roboto hover:bg-gray-700 transition duration-300 ease-linear items-center' onClick={() => router.back()}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
