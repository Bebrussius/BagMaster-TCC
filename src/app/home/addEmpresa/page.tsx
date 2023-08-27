'use client'

import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function AddEmpresa() {
  const router = useRouter();
  return (
    <body className='bg-neutral-300'>
      <div className=" flex flex-col items-center ">
        <header className="bg-slate-900 w-full h-20 flex justify-center items-center">
          <div className="w-4/5 h-20 flex items-center bg-slate-900">
            <img className="w-36" src="/BagMaster.png" alt="" />
          </div>
        </header>
        <div className="w-4/5">
          <h1 className="self-start mt-8 mb-8 text-3xl font-light text-black">Adicionando Empresa...</h1>
        </div>
        <div className="bg-white w-4/5 h-3/4 rounded-2xl border border-black flex flex-col items-center justify-center mb-4">
          <div className="flex justify-center">
            <h1 className="text-center text-xl xl:w-full xl:text-3xl mb-10 ml-10 mr-10">
              Insira nos campos abaixo os respectivos dados da sua empresa!
            </h1>
          </div>
          <div className="w-3/4">
            <input
              className="bg-neutral-300 w-full h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
              type="text"
              placeholder="Nome da empresa"
            />
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="Nome do dono"
              />
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="telefone de contato"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="Email"
              />
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="Senha"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 ">
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="CPF"
              />
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="CNPJ"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="CPF"
              />
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="CEP"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="Estado"
              />
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="Cidade"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="Bairro"
              />
              <input
                className="bg-neutral-300 w-full md:w-1/2 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                type="text"
                placeholder="Rua"
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between mt-4">
              <a
                className="bg-slate-900 text-white w-full md:w-1/2 h-10 rounded-md mb-4 md:mb-0 flex justify-center font-roboto hover:bg-blue-900 transition duration-300 ease-linear"
                href="/home/addEmpresa/homeEmpresa"
              >
                <button>Continuar</button>
              </a>
              <button
                className="bg-black text-white w-full md:w-1/2 h-10 rounded-md flex justify-center font-roboto hover:bg-gray-700 transition duration-300 ease-linear items-center mb-4"
                onClick={() => router.back()}
              >
                Voltar
              </button>

            </div>
          </div>
        </div>
      </div>

    </body>


  );
}
