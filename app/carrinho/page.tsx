/* eslint-disable react-hooks/set-state-in-effect */
"use client"

/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Produto {
  nome: string;
  categoria: string;
  preco: string;
  imagem: string;
  descricao: string;
}

export default function CarrinhoPage() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const router = useRouter();
  useEffect(() => {
    const produtos = JSON.parse(
      localStorage.getItem("carrinho") || "[]",
    ) as Produto[];

    setCarrinho(produtos);
  }, []);

  function removerProduto(index: number) {
    const novoCarrinho = [...carrinho];

    novoCarrinho.splice(index, 1);

    setCarrinho(novoCarrinho);

    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  }

  function limparCarrinho() {
    localStorage.removeItem("carrinho");
    setCarrinho([]);
  }

  const total = carrinho.reduce((acc, item) => {
    return (
      acc +
      Number(item.preco.replace("R$", "").replace(/\./g, "").replace(",", "."))
    );
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-black">Meu Carrinho</h1>

        {carrinho.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              Seu carrinho está vazio
            </h2>

            <p className="text-gray-500 mt-3">
              Adicione alguns itens ao carrinho para continuar.
            </p>

            <Link href="/">
              <button className="mt-8 bg-[#e30613] hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition">
                Voltar às compras
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {carrinho.map((produto, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center"
                >
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-52 h-52 object-contain"
                  />

                  <div className="flex-1">
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                      {produto.categoria}
                    </span>

                    <h2 className="text-2xl font-bold mt-3 text-red-600">{produto.nome}</h2>

                    <p className="text-gray-500 mt-3">{produto.descricao}</p>

                    <p className="text-3xl text-red-600 font-extrabold mt-5">
                      {produto.preco}
                    </p>
                  </div>

                  <button
                    onClick={() => removerProduto(index)}
                    className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl font-bold transition"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-xl mt-10 p-8">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-black">Total</h2>

                <span className="text-4xl font-extrabold text-red-600">
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <button
                  onClick={limparCarrinho}
                  className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-4 rounded-xl font-bold transition"
                >
                  Limpar Carrinho
                </button>

                <button
                  onClick={() => router.push("/pagamento")}
                  className="flex-1 bg-[#e30613] hover:bg-red-700 text-white py-4 rounded-xl font-bold transition"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
