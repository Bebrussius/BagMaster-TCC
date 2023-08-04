export default function HistoricoEmpresa() {
    return (
        <>
            <header className="bg-slate-900 w-full h-20 flex justify-center items-center">
                <div className="w-4/5 h-20 flex items-center bg-slate-900 justify-between">
                    <img className="w-36" src="/BagMaster.png" alt="" />
                    <nav>
                        <a className="mr-14 text-white hover:opacity-80" href="/home/addEmpresa/homeEmpresa">
                            Inicio
                        </a>
                        <a className="mr-14 text-white opacity-50" href=" ">
                            Pedidos
                        </a>
                        <a className="mr-14 text-white hover:opacity-80" href="/home/addEmpresa/homeEmpresa/histVendas">
                            Histórico de vendas
                        </a>
                        <a className=" text-white hover:opacity-80" href="/home/addEmpresa/homeEmpresa/config">
                            Configurações
                        </a>
                    </nav>
                </div>
            </header>
            <div className="w-full flex flex-col items-center">
                <div className="w-4/5">
                    <h1 className="self-start mt-8 mb-8 text-3xl font-light text-black">Adicione um pedido aqui!</h1>
                </div>
                <a className="w-4/5 h-20 bg-white rounded-2xl border border-black flex justify-center items-center drop-shadow-md hover:border-2" href="/home/addEmpresa">
                    <button><h1 className="md:text-2xl text-xl font-light text-black">Adicionar pedido +</h1></button>
                </a>
                <div className="w-4/5">
                    <h1 className="self-start mt-8 mb-8 text-3xl font-light text-black">Pedidos em andamento abaixo...</h1>
                </div>
            </div>

        </>
    );
}
