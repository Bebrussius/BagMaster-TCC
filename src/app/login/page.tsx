
export default function Login() {
    return (
        <div className="bg-neutral-300 flex justify-center items-center h-screen">
            <div className="bg-gray-100 md:w-3/6 h-5/6 w-11/12 rounded-2xl flex flex-col justify-center items-center border border-black">
                <h1 className="text-black text-4xl font-body font-light mb-14">Login</h1>
                <input className="bg-neutral-300 w-3/4 h-10 rounded-md p-3 mb-6 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="E-mail ou Nome completo" />
                <input className="bg-neutral-300 w-3/4 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:border-blue-500" type="password" placeholder="Senha" />
                <a className="w-3/4 h-10 mb-6 text-blue-700 text-sm " href="">Esqueceu sua senha?</a>
                <a className=" w-full justify-center flex" href="./empresa" >
                    <button className="bg-slate-900 w-3/4 h-10 text-gray-50 font-thin rounded-md hover:bg-blue-900 transition duration-300 ease-linear">Entrar</button>
                </a>
                <div className="flex w-3/4 h-10">
                    <p className="mr-1 text-sm">Ainda não possui uma conta?</p><a className="text-blue-700 text-sm" href="./cadastro">Cadastre-se</a>
                </div>
                <h1 className="text-2xl">Ou</h1>
                <div className="border border-black w-3/4 h-10 rounded-md mt-6 flex items-center justify-center">
                    <img className="w-6 h-6 mr-1" src="/googleIcon.png" alt="logo-google" />
                    <p className="text-sm">Continue com Google</p>
                </div>
            </div>
        </div>
    )

}