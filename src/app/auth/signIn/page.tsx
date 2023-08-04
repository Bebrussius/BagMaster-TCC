"use client"

import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const LoginPage = () => {

    const userName = useRef("");
    const pass = useRef("");

    const onSubmit = async()=>{
        const result = await signIn("credentials",{
            username:userName.current,
            password:pass.current,
            redirect:true,
            callbackUrl: "/home",
        })
    }

    return (
        <div className="bg-neutral-300 flex justify-center items-center h-screen">
            <div className="bg-gray-100 md:w-3/6 h-5/6 w-11/12 rounded-2xl flex flex-col justify-center items-center border border-black">
                <h1 className="text-black text-4xl font-body font-light mb-14">Login</h1>
                <input className="bg-neutral-300 w-3/4 h-10 rounded-md p-3 mb-6 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="E-mail ou Nome completo" onChange={(e) => (userName.current = e.target.value)}/>
                <input className="bg-neutral-300 w-3/4 h-10 rounded-md p-3 placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:border-blue-500" type="password" placeholder="Senha" onChange={(e) => (pass.current = e.target.value)}/>
                <a className="w-3/4 h-10 mb-6 text-blue-700 text-sm " href="">Esqueceu sua senha?</a>
                <a className=" w-full justify-center flex" >
                    <button onClick={onSubmit} className="bg-slate-900 w-3/4 h-10 text-gray-50 font-thin rounded-md hover:bg-blue-900 transition duration-300 ease-linear">Entrar</button>
                </a>
                <div className="flex w-3/4 h-10">
                    <p className="mr-1 text-sm">Ainda não possui uma conta?</p><a className="text-blue-700 text-sm" href="./cadastro">Cadastre-se</a>
                </div>
                <h1 className="text-2xl">Ou</h1>
            </div>
        </div>
    )
};

export default LoginPage;