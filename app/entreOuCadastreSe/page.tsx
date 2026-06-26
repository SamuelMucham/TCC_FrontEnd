"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EntreOuCadastreSePage() {
  const [cadastro, setCadastro] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-[#e30613] mb-2">
          Assistência Técnica Forja
        </h1>

        <p className="text-center text-gray-500 mb-8">
          {cadastro ? "Crie sua conta" : "Entre na sua conta"}
        </p>

        <form className="space-y-5">
          {cadastro && (
            <div>
              <label className="block font-medium mb-1 text-black">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e30613] text-black"
              />
            </div>
          )}

          <div>
            <label className="block font-medium mb-1 text-black">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e30613] text-black"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-black">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e30613] text-black"
            />
          </div>

          {cadastro && (
            <div>
              <label className="block font-medium mb-1 text-black">
                Confirmar Senha
              </label>
              <input
                type="password"
                placeholder="Confirme sua senha"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e30613] text-black"
              />
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              if (cadastro) {
                alert("Cadastro realizado com sucesso!");
              } else {
                router.push("/");
              }
            }}
            className="w-full bg-[#e30613] hover:bg-red-700 text-white font-bold py-3 rounded-lg transition"
          >
            {cadastro ? "Cadastrar" : "Entrar"}
          </button>
        </form>

        <div className="text-center mt-8">
          <button
            onClick={() => setCadastro(!cadastro)}
            className="text-[#e30613] font-semibold hover:underline"
          >
            {cadastro
              ? "Já possui uma conta? Entrar"
              : "Não possui conta? Cadastre-se"}
          </button>
        </div>
      </div>
    </div>
  );
}
