"use client";

import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */

interface Produto {
  id: string;
  nome: string;
  categoria: string;
  preco: number | string;
  imageUrl?: string;
  descricao: string;
  quantidade?: number;
}

export default function TodosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await fetch("http://localhost:8080/produtos");
        const data = await response.json();

        if (Array.isArray(data)) {
          setProdutos(data);
        } else {
          setProdutos([]);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos da API:", error);
        setProdutos([]);
      } finally {
        setLoading(false);
      }
    }

    carregarProdutos();
  }, []);

  // Formata o preço no padrão brasileiro (Ex: R$ 2.164,00)
  function formatarPreco(valor: number | string) {
    const numero = typeof valor === "string" ? parseFloat(valor) : valor;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numero || 0);
  }

  function adicionarCarrinho(produto: Produto) {
    const carrinho: Produto[] = JSON.parse(
      localStorage.getItem("carrinho") || "[]"
    );

    const index = carrinho.findIndex((item) => item.id === produto.id);

    if (index !== -1) {
      if ((carrinho[index].quantidade ?? 1) < 5) {
        carrinho[index].quantidade = (carrinho[index].quantidade ?? 1) + 1;
      } else {
        alert("Você só pode adicionar até 5 unidades deste produto.");
        return;
      }
    } else {
      carrinho.push({
        ...produto,
        quantidade: 1,
      });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">
          Carregando produtos...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            todos os itens
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Aqui tem todos os itens da loja.
          </p>
        </div>

        {produtos.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">
              Nenhum produto encontrado. Verifique se o servidor backend está ativo.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-200 transition-all duration-300 hover:-translate-y-3 border border-gray-100 flex flex-col justify-between"
              >
                {/* Contêiner da Foto Sólido */}
                <div className="relative bg-white p-5 flex items-center justify-center h-64 border-b border-gray-100">
                  <span className="absolute top-4 left-4 z-10 bg-[#e30613] text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                    {produto.categoria}
                  </span>

                  <img
                    src={produto.imageUrl || "/images/pc30_black_pic1.png"}
                    alt={produto.nome}
                    onError={(e) => {
                      // Se o link do Mercado Livre/Amazon quebrar, usa a imagem local do projeto
                      (e.target as HTMLImageElement).src = "/images/pc30_black_pic1.png";
                    }}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md"
                  />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2">
                      {produto.nome}
                    </h2>

                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                      {produto.descricao}
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-extrabold text-[#e30613]">
                      {formatarPreco(produto.preco)}
                    </p>

                    <p className="text-xs text-gray-400 mt-1 mb-4">
                      À vista no PIX
                    </p>

                    <button
                      onClick={() => adicionarCarrinho(produto)}
                      className="cursor-pointer w-full bg-linear-to-r from-[#e30613] to-red-700 hover:from-red-700 hover:to-[#e30613] text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                    >
                      Adicionar no carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}