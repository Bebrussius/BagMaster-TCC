import Image from "next/image"

export default function HomeEmpresa() {
  return (
    <>
      <header className="bg-slate-900 w-full h-20 flex justify-center items-center">
        <div className="w-4/5 h-20 flex items-center bg-slate-900 justify-between">
          <img className="w-36" src="/BagMaster.png" alt="" />
          <nav>
            <a className="mr-14 text-white opacity-50" href="">Inicio</a>
            <a className="mr-14 text-white hover:opacity-80" href="/home/addEmpresa/homeEmpresa/pedidos">Pedidos</a>
            <a className="mr-14 text-white hover:opacity-80" href="/home/addEmpresa/homeEmpresa/histVendas">Histórico de vendas</a>
            <a className=" text-white hover:opacity-80" href="/home/addEmpresa/homeEmpresa/config">Configurações</a>
          </nav>
        </div>
      </header>
      <div className="w-full flex flex-col items-center">
        <div className="w-4/5">
          <h1 className="self-start mt-8 mb-8 text-3xl font-light text-black">Bem-Vindo a NomeDaEmpresa! Usuário</h1>
        </div>
      </div>

    </>

  )
}