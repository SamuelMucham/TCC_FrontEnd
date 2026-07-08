"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function Busca() {
  const [busca, setBusca] = useState("");
  const router = useRouter();

  function pesquisar() {
    const bruto = busca.trim();
    if (!bruto) return;

    const texto = normalizar(bruto);

    if (["tv", "tvs", "televisao", "televisoes"].includes(texto)) {
      router.push("/produtos/TVS");
      return;
    }

    if (["notebook", "notebooks", "laptop", "laptops"].includes(texto)) {
      router.push("/produtos/NOTEBOOKS");
      return;
    }

    if (
      [
        "computador",
        "computadores",
        "pc",
        "pcs",
        "desktop",
        "desktops",
      ].includes(texto)
    ) {
      router.push("/produtos/COMPUTADORES");
      return;
    }

    if (["celular", "celulares", "smartphone", "smartphones"].includes(texto)) {
      router.push("/#ofertas");
      return;
    }

    if (["periferico", "perifericos"].includes(texto)) {
      router.push("/produtos/perifericos");
      return;
    }

    if (
      [
        "peca de celular",
        "pecas de celular",
        "peca para celular",
        "pecas para celular",
        "peca de celulares",
        "pecas de celulares",
        "pecas para celulares",
      ].includes(texto)
    ) {
      router.push("/pecas/pecasParaCelulares");
      return;
    }

    if (
      [
        "peca de tv",
        "pecas de tv",
        "peca para tv",
        "pecas para tv",
        "peca de televisao",
        "pecas de televisao",
      ].includes(texto)
    ) {
      router.push("/pecas/pecasParaTVS");
      return;
    }

    if (
      [
        "peca de notebook",
        "pecas de notebook",
        "peca para notebook",
        "pecas para notebook",
        "peca de notebooks",
        "pecas de notebooks",
        "pecas para notebooks",
      ].includes(texto)
    ) {
      router.push("/pecas/pecasParaNotebooks");
      return;
    }

    if (
      [
        "peca de computador",
        "pecas de computador",
        "peca para computador",
        "pecas para computador",
        "peca de computadores",
        "pecas de computadores",
        "pecas para computadores",
      ].includes(texto)
    ) {
      router.push("/pecas/pecasParaComputadores");
      return;
    }

    // Qualquer outra pesquisa cai na busca geral
    router.push(`/buscar?q=${encodeURIComponent(bruto)}`);
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
        className="w-full h-11 pl-4 pr-28 text-sm text-black bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e30613] transition"
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
