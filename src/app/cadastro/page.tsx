import Image from 'next/image';

export default function Cadastro() {
  return (
    <div className="bg-neutral-300 flex justify-center items-center h-screen">
      <div className="bg-gray-100 md:w-3/6 h-5/6 w-11/12 rounded-2xl flex flex-col justify-center items-center border border-black">
        <h1 className='text-center xl:w-full text-xl mb-10 ml-10 mr-10'>Bem-Vindo ao BagMaster! Crie sua conta aqui... :)</h1>
        <h1 className="text-black text-4xl font-body font-light mb-10">Cadastre-se</h1>
        <input className="bg-neutral-300 w-3/4 h-10 rounded-md text-black p-3 border-gray-950 mb-6 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="Nome completo" />
        <input className="bg-neutral-300 w-3/4 h-10 rounded-md text-black p-3 border-gray-950 mb-6 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="E-mail" />
        <input className="bg-neutral-300 w-3/4 h-10 rounded-md text-black p-3 border-gray-950 mb-6 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:border-blue-500" type="password" placeholder="Senha" />
        <input className="bg-neutral-300 w-3/4 h-10 rounded-md text-black p-3 border-gray-950 mb-6 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:border-blue-500" type="tel" placeholder="Telefone" />
        <div></div>
        <a href="./home" className=" w-full justify-center flex">
          <button className="bg-slate-900 w-3/4 h-10 text-gray-50 font-thin rounded-md hover:bg-blue-900 transition duration-300 ease-linear">
            Entrar
          </button>
        </a>
        <div className="flex text-sm w-3/4 h-10 justify-start">
          <p className='text-black'>Já possui uma conta?</p>
          <a className="text-blue-700 ml-1" href="./login.html">Faça login</a>
        </div>
      </div>
    </div>
  );
}