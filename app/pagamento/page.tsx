"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Produto {
  nome: string;
  categoria: string;
  preco: string;
  imagem: string;
  descricao: string;
}

export default function PagamentoPage() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  useEffect(() => {
    const produtos = JSON.parse(
      localStorage.getItem("carrinho") || "[]"
    ) as Produto[];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCarrinho(produtos);
  }, []);

  const total = carrinho.reduce((acc, item) => {
    return (
      acc +
      Number(
        item.preco
          .replace("R$", "")
          .replace(/\./g, "")
          .replace(",", ".")
      )
    );
  }, 0);

  function finalizarPedido() {
    alert("Pedido finalizado com sucesso! 🎉");

    localStorage.removeItem("carrinho");
    setCarrinho([]);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h1 className="text-4xl font-extrabold mb-10 text-black">
        Pagamento
      </h1>

      {carrinho.length === 0 ? (
        <div className="bg-white p-10 rounded-3xl shadow text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            Seu carrinho está vazio
          </h2>

          <Link href="/">
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold">
              Voltar às compras
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-3xl shadow">
            <h2 className="text-2xl font-bold mb-6 text-red-600">
              Resumo do Pedido
            </h2>

            <div className="space-y-4">
              {carrinho.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-16 h-16 object-contain"
                  />

                  <div className="flex-1">
                    <p className="font-bold text-red-600">{item.nome}</p>
                    <p className="text-sm text-black ">
                      {item.categoria}
                    </p>
                  </div>

                  <span className="font-bold text-red-600">
                    {item.preco}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-6 text-xl font-bold text-red-600"> 
              <span>Total:</span>
              <span className="text-red-600">
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <h2 className="text-2xl font-bold mb-6 text-black">
              Forma de Pagamento
            </h2>


            <button
              onClick={finalizarPedido}
              className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold transition"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}