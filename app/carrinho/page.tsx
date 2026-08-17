/* eslint-disable react-hooks/set-state-in-effect */
"use client";

/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Produto {
  id: string;
  nome: string;
  categoria: string;
  preco: number | string;
  imagemUrl?: string | null;
  imagem?: string | null;
  descricao: string;
  quantidade?: number;
}

const IMAGEM_FALLBACK =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
      <rect width="600" height="400" fill="#f3f4f6"/>
      <rect x="40" y="40" width="520" height="320" rx="20"
        fill="#ffffff"
        stroke="#d1d5db"
        stroke-width="3"/>
      <text x="300" y="190"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="28"
        font-weight="bold"
        fill="#6b7280">
        Imagem indisponível
      </text>
      <text x="300" y="230"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="18"
        fill="#9ca3af">
        Assistência Técnica Forja
      </text>
    </svg>
  `);

export default function CarrinhoPage() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const router = useRouter();

  /*
   * CARREGAR CARRINHO
   */
  useEffect(() => {
    try {
      const dados = localStorage.getItem("carrinho");

      if (!dados) {
        setCarrinho([]);
        return;
      }

      const produtos = JSON.parse(dados);

      if (!Array.isArray(produtos)) {
        setCarrinho([]);
        return;
      }

      const normalizado: Produto[] = produtos.map(
        (produto: Produto, index: number) => ({
          ...produto,

          // Garante que todo produto tenha um id
          id:
            produto.id ||
            `${produto.nome}-${produto.categoria}-${index}`,

          quantidade:
            typeof produto.quantidade === "number" &&
            produto.quantidade > 0
              ? produto.quantidade
              : 1,
        })
      );

      setCarrinho(normalizado);

      localStorage.setItem(
        "carrinho",
        JSON.stringify(normalizado)
      );
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error);
      setCarrinho([]);
    }
  }, []);

  /*
   * CONVERTER PREÇO
   */
  function converterPreco(valor: number | string): number {
    if (typeof valor === "number") {
      return Number.isFinite(valor) ? valor : 0;
    }

    if (!valor) {
      return 0;
    }

    let texto = String(valor).trim();

    /*
     * Exemplos:
     * R$ 1.299,90
     * 1.299,90
     * 1299,90
     * 1299.90
     */

    texto = texto.replace("R$", "").trim();

    if (texto.includes(",")) {
      texto = texto.replace(/\./g, "");
      texto = texto.replace(",", ".");
    }

    const numero = Number.parseFloat(texto);

    return Number.isFinite(numero) ? numero : 0;
  }

  /*
   * FORMATAR PREÇO
   */
  function formatarPreco(valor: number | string) {
    const numero = converterPreco(valor);

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numero);
  }

  /*
   * PEGAR IMAGEM
   */
  function pegarImagem(produto: Produto) {
    return (
      produto.imagemUrl ||
      produto.imagem ||
      IMAGEM_FALLBACK
    );
  }

  /*
   * ERRO NA IMAGEM
   */
  function tratarErroImagem(
    e: React.SyntheticEvent<HTMLImageElement>
  ) {
    const imagem = e.currentTarget;

    if (imagem.src !== IMAGEM_FALLBACK) {
      imagem.src = IMAGEM_FALLBACK;
    }
  }

  /*
   * ADICIONAR MAIS UMA UNIDADE
   */
  function adicionarMais(id: string) {
    const novoCarrinho = carrinho.map((produto) => {
      if (produto.id !== id) {
        return produto;
      }

      const quantidadeAtual = produto.quantidade ?? 1;

      if (quantidadeAtual >= 5) {
        alert(
          "Você só pode adicionar até 5 unidades deste item."
        );

        return produto;
      }

      return {
        ...produto,
        quantidade: quantidadeAtual + 1,
      };
    });

    setCarrinho(novoCarrinho);

    localStorage.setItem(
      "carrinho",
      JSON.stringify(novoCarrinho)
    );
  }

  /*
   * REMOVER UMA UNIDADE
   */
  function removerProduto(id: string) {
    const produto = carrinho.find(
      (item) => item.id === id
    );

    if (!produto) {
      return;
    }

    const quantidadeAtual = produto.quantidade ?? 1;

    let novoCarrinho: Produto[];

    if (quantidadeAtual > 1) {
      novoCarrinho = carrinho.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantidade: quantidadeAtual - 1,
          };
        }

        return item;
      });
    } else {
      novoCarrinho = carrinho.filter(
        (item) => item.id !== id
      );
    }

    setCarrinho(novoCarrinho);

    localStorage.setItem(
      "carrinho",
      JSON.stringify(novoCarrinho)
    );
  }

  /*
   * REMOVER ITEM COMPLETAMENTE
   */
  function excluirProduto(id: string) {
    const novoCarrinho = carrinho.filter(
      (item) => item.id !== id
    );

    setCarrinho(novoCarrinho);

    localStorage.setItem(
      "carrinho",
      JSON.stringify(novoCarrinho)
    );
  }

  /*
   * LIMPAR CARRINHO
   */
  function limparCarrinho() {
    const confirmar = window.confirm(
      "Tem certeza que deseja limpar o carrinho?"
    );

    if (!confirmar) {
      return;
    }

    localStorage.removeItem("carrinho");

    setCarrinho([]);
  }

  /*
   * TOTAL DO CARRINHO
   */
  const total = carrinho.reduce((acc, item) => {
    const preco = converterPreco(item.preco);
    const quantidade = item.quantidade ?? 1;

    return acc + preco * quantidade;
  }, 0);

  /*
   * QUANTIDADE TOTAL DE ITENS
   */
  const quantidadeTotal = carrinho.reduce(
    (acc, item) => {
      return acc + (item.quantidade ?? 1);
    },
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* CABEÇALHO */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black">
            Meu Carrinho
          </h1>

          {carrinho.length > 0 && (
            <p className="text-gray-500 mt-2">
              {quantidadeTotal}{" "}
              {quantidadeTotal === 1
                ? "item"
                : "itens"}{" "}
              no carrinho
            </p>
          )}
        </div>

        {/* CARRINHO VAZIO */}
        {carrinho.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-10 sm:p-12 text-center">

            <div className="text-6xl mb-5">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-gray-700">
              Seu carrinho está vazio
            </h2>

            <p className="text-gray-500 mt-3">
              Adicione produtos ou peças ao carrinho
              para continuar.
            </p>

            <Link href="/">
              <button
                type="button"
                className="
                  mt-8
                  bg-[#e30613]
                  hover:bg-red-700
                  text-white
                  px-8
                  py-3
                  rounded-xl
                  font-bold
                  transition
                  cursor-pointer
                "
              >
                Voltar às compras
              </button>
            </Link>
          </div>
        ) : (
          <>
            {/* LISTA DE PRODUTOS */}
            <div className="space-y-6">

              {carrinho.map((produto) => {
                const quantidade =
                  produto.quantidade ?? 1;

                const precoUnitario =
                  converterPreco(produto.preco);

                const subtotal =
                  precoUnitario * quantidade;

                return (
                  <div
                    key={produto.id}
                    className="
                      bg-white
                      rounded-3xl
                      shadow-lg
                      p-5
                      sm:p-6
                      flex
                      flex-col
                      lg:flex-row
                      gap-6
                      items-center
                    "
                  >

                    {/* IMAGEM */}
                    <div
                      className="
                        w-full
                        lg:w-56
                        h-52
                        flex
                        items-center
                        justify-center
                        bg-gray-50
                        rounded-2xl
                        p-4
                      "
                    >
                      <img
                        src={pegarImagem(produto)}
                        alt={produto.nome}
                        onError={tratarErroImagem}
                        className="
                          w-full
                          h-full
                          object-contain
                        "
                      />
                    </div>

                    {/* INFORMAÇÕES */}
                    <div className="flex-1 w-full">

                      <span
                        className="
                          inline-block
                          bg-red-600
                          text-white
                          text-xs
                          font-bold
                          px-3
                          py-1
                          rounded-full
                        "
                      >
                        {produto.categoria}
                      </span>

                      <h2
                        className="
                          text-xl
                          sm:text-2xl
                          font-bold
                          mt-3
                          text-gray-800
                        "
                      >
                        {produto.nome}
                      </h2>

                      <p
                        className="
                          text-gray-500
                          mt-3
                          line-clamp-3
                        "
                      >
                        {produto.descricao}
                      </p>

                      {/* PREÇO UNITÁRIO */}
                      <p className="text-sm text-gray-500 mt-4">
                        Preço unitário:
                      </p>

                      <p
                        className="
                          text-2xl
                          text-red-600
                          font-extrabold
                        "
                      >
                        {formatarPreco(
                          precoUnitario
                        )}
                      </p>

                      {/* SUBTOTAL */}
                      <p className="text-sm text-gray-500 mt-2">
                        Subtotal:
                      </p>

                      <p
                        className="
                          text-xl
                          font-bold
                          text-gray-800
                        "
                      >
                        {formatarPreco(subtotal)}
                      </p>
                    </div>

                    {/* CONTROLES */}
                    <div
                      className="
                        flex
                        flex-col
                        items-center
                        gap-3
                        w-full
                        lg:w-52
                      "
                    >

                      {/* QUANTIDADE */}
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >

                        <button
                          type="button"
                          onClick={() =>
                            removerProduto(
                              produto.id
                            )
                          }
                          className="
                            w-10
                            h-10
                            bg-gray-200
                            hover:bg-gray-300
                            text-black
                            rounded-lg
                            font-bold
                            text-xl
                            cursor-pointer
                          "
                        >
                          −
                        </button>

                        <span
                          className="
                            min-w-12
                            text-center
                            font-bold
                            text-lg
                          "
                        >
                          {quantidade}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            adicionarMais(
                              produto.id
                            )
                          }
                          className="
                            w-10
                            h-10
                            bg-[#e30613]
                            hover:bg-red-700
                            text-white
                            rounded-lg
                            font-bold
                            text-xl
                            cursor-pointer
                          "
                        >
                          +
                        </button>

                      </div>

                      <span
                        className="
                          text-red-600
                          font-bold
                          text-sm
                        "
                      >
                        Máximo: 5 unidades
                      </span>

                      {/* EXCLUIR */}
                      <button
                        type="button"
                        onClick={() =>
                          excluirProduto(
                            produto.id
                          )
                        }
                        className="
                          w-full
                          bg-gray-800
                          hover:bg-black
                          text-white
                          px-6
                          py-3
                          rounded-xl
                          font-bold
                          transition
                          cursor-pointer
                        "
                      >
                        Excluir item
                      </button>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* RESUMO */}
            <div
              className="
                bg-white
                rounded-3xl
                shadow-xl
                mt-10
                p-6
                sm:p-8
              "
            >

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:justify-between
                  sm:items-center
                  gap-4
                "
              >

                <div>
                  <h2
                    className="
                      text-2xl
                      sm:text-3xl
                      font-bold
                      text-black
                    "
                  >
                    Total
                  </h2>

                  <p className="text-gray-500 mt-1">
                    {quantidadeTotal}{" "}
                    {quantidadeTotal === 1
                      ? "item"
                      : "itens"}
                  </p>
                </div>

                <span
                  className="
                    text-3xl
                    sm:text-4xl
                    font-extrabold
                    text-red-600
                  "
                >
                  {formatarPreco(total)}
                </span>

              </div>

              {/* BOTÕES */}
              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  gap-4
                  mt-8
                "
              >

                <button
                  type="button"
                  onClick={limparCarrinho}
                  className="
                    flex-1
                    border-2
                    border-red-600
                    text-red-600
                    hover:bg-red-600
                    hover:text-white
                    py-4
                    rounded-xl
                    font-bold
                    transition
                    cursor-pointer
                  "
                >
                  Limpar Carrinho
                </button>

                <button
                  type="button"
                  onClick={() =>
                    router.push("/pagamento")
                  }
                  className="
                    flex-1
                    bg-[#e30613]
                    hover:bg-red-700
                    text-white
                    py-4
                    rounded-xl
                    font-bold
                    transition
                    cursor-pointer
                  "
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