"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function BuscarPage() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const pesquisa = (params.get("q") || "")
      .toLowerCase()
      .trim();

    if (
      pesquisa === "tv" ||
      pesquisa === "tvs" ||
      pesquisa === "televisao" ||
      pesquisa.includes("televisão")
    ) {
      router.push("/TVS");
      return;
    }

    if (
      pesquisa === "notebook" ||
      pesquisa === "notebooks"
    ) {
      router.push("/NOTEBOOKS");
      return;
    }

    if (
      pesquisa === "computador" ||
      pesquisa === "computadores" ||
      pesquisa === "pc" ||
      pesquisa === "pcs"
    ) {
      router.push("/COMPUTADORES");
      return;
    }

    if (
      pesquisa === "celular" ||
      pesquisa === "celulares"
    ) {
      router.push("/#ofertas");
      return;
    }

    if (
      pesquisa === "perifericos" ||
      pesquisa === "periféricos"
    ) {
      router.push("/perifericos");
      return;
    }
  }, [params, router]);

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold">
        Resultado da busca
      </h1>

      <p className="mt-5">
        Você pesquisou:
        <strong> {params.get("q")}</strong>
      </p>

      <p className="mt-2 text-gray-500">
        Redirecionando...
      </p>
    </div>
  );
}