"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Usuario {
  nome?: string;
  email: string;
}

export default function AuthMenu() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const router = useRouter();

  useEffect(() => {
    const salvo = localStorage.getItem("usuario");
    if (salvo) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUsuario(JSON.parse(salvo));
    }
  }, []);

  function sair() {
    localStorage.removeItem("usuario");
    setUsuario(null);
    router.push("/");
  }

  if (usuario) {
    return (
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-500 mb-1 max-w-32 truncate">
          Olá, {usuario.nome || usuario.email}
        </span>

        <button
          type="button"
          onClick={sair}
          className="flex flex-col items-center hover:text-[#e30613] transition text-gray-600"
        >
          <span className="text-xl"></span>
          <span className="text-xs font-bold">Sair</span>
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/entreOuCadastreSe"
      className="flex flex-col items-center hover:text-[#e30613] transition"
    >
      <span className="text-xl"></span>
      <span className="text-xs">Entre ou Cadastre-se</span>
    </Link>
  );
}
