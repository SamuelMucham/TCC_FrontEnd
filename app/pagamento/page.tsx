/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Produto {
  id?: string;
  nome: string;
  categoria: string;
  preco: number | string;
  imagem?: string;
  imagemUrl?: string | null;
  descricao: string;
  quantidade: number;
}

export default function PagamentoPage() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    try {
      const dados = localStorage.getItem("carrinho");

      if (dados) {
        const produtos = JSON.parse(dados) as Produto[];

        const produtosNormalizados = produtos.map((produto) => ({
          ...produto,
          quantidade: produto.quantidade ?? 1,
        }));

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCarrinho(produtosNormalizados);
      } else {
        setCarrinho([]);
      }
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error);
      setCarrinho([]);
    } finally {
      setCarregando(false);
    }
  }, []);

  function converterPreco(preco: number | string): number {
    if (typeof preco === "number") {
      return preco;
    }

    const valor = preco
      .replace("R$", "")
      .replace(/\s/g, "")
      .replace(/\./g, "")
      .replace(",", ".");

    const numero = Number.parseFloat(valor);

    return Number.isNaN(numero) ? 0 : numero;
  }

  function formatarPreco(preco: number | string): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(converterPreco(preco));
  }

  const total = carrinho.reduce((acc, item) => {
    const preco = converterPreco(item.preco);

    return acc + preco * item.quantidade;
  }, 0);

  const quantidadeTotal = carrinho.reduce((acc, item) => {
    return acc + item.quantidade;
  }, 0);

  function finalizarPedido() {
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    alert("Pedido finalizado com sucesso! 🎉");

    localStorage.removeItem("carrinho");
    setCarrinho([]);
  }

  if (carregando) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">
          Carregando pagamento...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* CABEÇALHO */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">
            Pagamento
          </h1>

          <p className="text-gray-500 mt-2">
            Confira seu pedido antes de finalizar a compra.
          </p>
        </div>

        {/* CARRINHO VAZIO */}
        {carrinho.length === 0 ? (
          <div className="bg-white p-10 rounded-3xl shadow-lg text-center">
            <div className="text-6xl mb-5">🛒</div>

            <h2 className="text-2xl font-bold text-gray-700">
              Seu carrinho está vazio
            </h2>

            <p className="text-gray-500 mt-3">
              Adicione produtos ou peças ao carrinho para continuar.
            </p>

            <Link href="/">
              <button
                type="button"
                className="
                  mt-6
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  px-8
                  py-3
                  rounded-xl
                  font-bold
                  transition
                "
              >
                Voltar às compras
              </button>
            </Link>
          </div>
        ) : (
          /* PEDIDO */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* RESUMO */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-red-600">
                Resumo do Pedido
              </h2>

              <div className="space-y-5">
                {carrinho.map((item, index) => {
                  const imagem =
                    item.imagemUrl ||
                    item.imagem ||
                    "https://via.placeholder.com/150";

                  const preco = converterPreco(item.preco);

                  const subtotal = preco * item.quantidade;

                  return (
                    <div
                      key={item.id ?? `${item.nome}-${index}`}
                      className="
                        flex
                        flex-col
                        sm:flex-row
                        items-center
                        gap-4
                        border-b
                        border-gray-200
                        pb-5
                      "
                    >
                      {/* IMAGEM */}
                      <div
                        className="
                          w-24
                          h-24
                          bg-gray-50
                          rounded-xl
                          flex
                          items-center
                          justify-center
                          p-2
                        "
                      >
                        <img
                          src={imagem}
                          alt={item.nome}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* INFORMAÇÕES */}
                      <div className="flex-1 text-center sm:text-left">
                        <p className="font-bold text-red-600 text-lg">
                          {item.nome}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.categoria}
                        </p>

                        <p className="text-sm text-gray-600 mt-2">
                          Quantidade: <strong>{item.quantidade}</strong>
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          {formatarPreco(item.preco)} por unidade
                        </p>
                      </div>

                      {/* SUBTOTAL */}
                      <div className="text-center sm:text-right">
                        <p className="text-xs text-gray-500">Subtotal</p>

                        <p className="font-bold text-red-600 text-lg">
                          {formatarPreco(subtotal)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* QUANTIDADE */}
              <div className="flex justify-between mt-6 text-gray-600">
                <span>Quantidade de itens:</span>

                <strong>{quantidadeTotal}</strong>
              </div>

              {/* TOTAL */}
              <div
                className="
                  flex
                  justify-between
                  items-center
                  mt-5
                  pt-5
                  border-t-2
                  border-gray-200
                "
              >
                <span className="text-2xl font-bold text-black">Total:</span>

                <span className="text-3xl md:text-4xl font-extrabold text-red-600">
                  {formatarPreco(total)}
                </span>
              </div>
            </div>

            {/* PAGAMENTO */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-black">
                Forma de Pagamento
              </h2>

              {/* PIX */}
              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  py-8
                  px-5
                  border-2
                  border-dashed
                  border-gray-300
                  rounded-2xl
                "
              >
                <h3 className="text-xl font-bold text-red-600 mb-5">
                  Pagamento via PIX
                </h3>

                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
                    `PIX - Assistência Técnica Forja - Total: ${formatarPreco(
                      total,
                    )}`,
                  )}`}
                  alt="QR Code para pagamento via PIX"
                  className="w-56 h-56"
                />

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Escaneie o QR Code para realizar o pagamento via PIX.
                </p>

                <p className="text-3xl font-extrabold text-red-600 mt-3">
                  {formatarPreco(total)}
                </p>
              </div>

              {/* INFORMAÇÃO */}
              <div className="mt-6 bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 text-center">
                  Após realizar o pagamento, clique em
                  <strong> &quot;Finalizar Pedido&quot;</strong>.
                </p>
              </div>

              {/* FINALIZAR */}
              <button
                type="button"
                onClick={finalizarPedido}
                className="
                  w-full
                  mt-8
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  py-4
                  rounded-xl
                  font-bold
                  text-lg
                  transition
                  hover:scale-[1.02]
                  active:scale-95
                "
              >
                Finalizar Pedido
              </button>

              {/* VOLTAR */}
              <Link href="/carrinho">
                <button
                  type="button"
                  className="
                    w-full
                    mt-4
                    border-2
                    border-gray-300
                    hover:bg-gray-100
                    text-gray-700
                    py-4
                    rounded-xl
                    font-bold
                    transition
                  "
                >
                  Voltar ao Carrinho
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
