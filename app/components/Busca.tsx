"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Busca() {
  const [busca, setBusca] = useState("");
  const router = useRouter();

  function pesquisar() {
    const texto = busca.trim();

    if (!texto) return;

    if (
      texto === "tv" ||
      texto === "tvs" ||
      texto === "televisao" ||
      texto.includes("televisão")
    ) {
      router.push("/TVS");
      return;
    }

    if (
      texto === "notebook" ||
      texto === "notebooks"
    ) {
      router.push("/NOTEBOOKS");
      return;
    }

    if (
      texto === "computador" ||
      texto === "computadores" ||
      texto === "pc" ||
      texto === "pcs"
    ) {
      router.push("/COMPUTADORES");
      return;
    }

    if (
      texto === "celular" ||
      texto === "celulares"
    ) {
      router.push("/#ofertas");
      return;
    }

    if (
      texto === "perifericos" ||
      texto === "periféricos"
    ) {
      router.push("/perifericos");
      return;
    }

    router.push(`/buscar?q=${encodeURIComponent(texto)}`);
  }

  return (
    <div className="flex-1 max-w-2xl w-full relative">
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            pesquisar();
          }
        }}
        placeholder="O que você está procurando?"
        className="w-full h-11 pl-4 pr-28 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e30613] transition"
      />

      <button
        type="button"
        onClick={pesquisar}
        className="absolute right-0 top-0 h-11 px-6 bg-[#e30613] hover:bg-[#b3000a] text-white font-bold rounded-r-lg transition-colors"
      >
        Buscar
      </button>
    </div>
  );
}