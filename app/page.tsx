"use client";

import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */

interface Produto {
  id?: number | string;
  nome: string;
  categoria: string;
  preco: number | string;
  imagemUrl: string;
  descricao: string;
  quantidade?: number;
}

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  // =========================================================
  // BUSCAR CELULARES CADASTRADOS PELO SEED3.TS
  // =========================================================
  useEffect(() => {
    async function carregarCelulares() {
      try {
        setCarregando(true);
        setErro("");

        const resposta = await fetch(
          "/api/produtos?categoria=CELULARES",
          {
            method: "GET",
            cache: "no-store",
          }
        );

        if (!resposta.ok) {
          throw new Error(
            `Erro na API: ${resposta.status}`
          );
        }

        const dados = await resposta.json();

        console.log("Produtos recebidos da API:", dados);

        // A API pode retornar:
        // [ ...produtos ]
        if (Array.isArray(dados)) {
          setProdutos(dados);
          return;
        }

        // Ou:
        // { produtos: [ ...produtos ] }
        if (Array.isArray(dados.produtos)) {
          setProdutos(dados.produtos);
          return;
        }

        setProdutos([]);
      } catch (error) {
        console.error(
          "❌ Erro ao carregar celulares:",
          error
        );

        setErro(
          "Não foi possível carregar os celulares. Verifique se a API está funcionando."
        );
      } finally {
        setCarregando(false);
      }
    }

    carregarCelulares();
  }, []);

  // =========================================================
  // FORMATAR PREÇO
  // =========================================================
  function formatarPreco(
    preco: number | string
  ): string {
    let valor: number;

    if (typeof preco === "number") {
      valor = preco;
    } else {
      valor = Number(
        preco
          .replace("R$", "")
          .replace(/\./g, "")
          .replace(",", ".")
          .trim()
      );
    }

    if (Number.isNaN(valor)) {
      return "Preço indisponível";
    }

    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  // =========================================================
  // ADICIONAR AO CARRINHO
  // =========================================================
  function adicionarCarrinho(produto: Produto) {
    try {
      const carrinho: Produto[] = JSON.parse(
        localStorage.getItem("carrinho") || "[]"
      );

      const index = carrinho.findIndex(
        (item) => item.nome === produto.nome
      );

      // Produto já existe no carrinho
      if (index !== -1) {
        const quantidadeAtual =
          carrinho[index].quantidade ?? 1;

        if (quantidadeAtual >= 5) {
          alert(
            "Você só pode adicionar até 5 unidades deste produto."
          );
          return;
        }

        carrinho[index].quantidade =
          quantidadeAtual + 1;
      } else {
        // Produto novo
        carrinho.push({
          ...produto,
          quantidade: 1,
        });
      }

      localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
      );

      alert("Produto adicionado ao carrinho!");
    } catch (error) {
      console.error(
        "❌ Erro ao adicionar ao carrinho:",
        error
      );

      alert(
        "Não foi possível adicionar o produto ao carrinho."
      );
    }
  }

  // =========================================================
  // RECARREGAR PRODUTOS
  // =========================================================
  function recarregarPagina() {
    window.location.reload();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* =====================================================
          BANNER
      ====================================================== */}
      <section className="relative flex h-[350px] items-center justify-center overflow-hidden bg-gray-800 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://via.placeholder.com/1920x600/333/fff?text=ASSISTENCIA+TECNICA')",
          }}
        />

        <div className="relative z-10 px-4">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            A Maior assistência técnica do Brasil
          </h1>

          <p className="mb-8 text-xl font-light md:text-2xl">
            Desde 2026.
          </p>

          <a
            href="#ofertas"
            className="inline-block rounded-lg bg-[#e30613] px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#b3000a] hover:shadow-2xl"
          >
            Ver Ofertas
          </a>
        </div>
      </section>

      {/* =====================================================
          TÍTULO
      ====================================================== */}
      <div className="container mx-auto px-4 py-10">
        <div id="ofertas" className="mb-12">
          <h2 className="border-l-4 border-[#e30613] pl-4 text-center text-2xl font-bold text-gray-800">
            Ofertas de celulares
          </h2>
        </div>
      </div>

      {/* =====================================================
          SEÇÃO DOS CELULARES
      ====================================================== */}
      <section className="bg-[#f5f5f5] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {/* CABEÇALHO */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-gray-800 md:text-5xl">
              Celulares
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Confira nossa seleção de celulares para
              estudo, trabalho, entretenimento e jogos.
            </p>
          </div>

          {/* =================================================
              CARREGANDO
          ================================================== */}
          {carregando && (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-[#e30613]" />

                <p className="text-lg font-semibold text-gray-600">
                  Carregando celulares...
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Buscando produtos cadastrados no banco.
                </p>
              </div>
            </div>
          )}

          {/* =================================================
              ERRO
          ================================================== */}
          {!carregando && erro && (
            <div className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
              <div className="mb-4 text-4xl">
                ⚠️
              </div>

              <h2 className="mb-2 text-xl font-bold text-red-700">
                Erro ao carregar os celulares
              </h2>

              <p className="text-red-600">
                {erro}
              </p>

              <button
                type="button"
                onClick={recarregarPagina}
                className="mt-6 rounded-lg bg-[#e30613] px-6 py-3 font-bold text-white transition hover:bg-red-700"
              >
                Tentar novamente
              </button>
            </div>
          )}

          {/* =================================================
              NENHUM PRODUTO
          ================================================== */}
          {!carregando &&
            !erro &&
            produtos.length === 0 && (
              <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-lg">
                <div className="mb-4 text-5xl">
                  📱
                </div>

                <h2 className="mb-3 text-2xl font-bold text-gray-800">
                  Nenhum celular encontrado
                </h2>

                <p className="mb-4 text-gray-500">
                  Nenhum produto da categoria
                  {" "}
                  <strong>CELULARES</strong>
                  {" "}
                  foi encontrado no banco de dados.
                </p>

                <p className="text-sm text-gray-400">
                  Verifique se o seed3.ts foi executado
                  corretamente.
                </p>
              </div>
            )}

          {/* =================================================
              GRID DE CELULARES
          ================================================== */}
          {!carregando &&
            !erro &&
            produtos.length > 0 && (
              <>
                <div className="mb-6 text-center">
                  <p className="text-sm text-gray-500">
                    {produtos.length} celular
                    {produtos.length !== 1 ? "es" : ""}{" "}
                    encontrado
                    {produtos.length !== 1 ? "s" : ""}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {produtos.map((produto, index) => (
                    <div
                      key={
                        produto.id ??
                        `${produto.nome}-${index}`
                      }
                      className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-200"
                    >
                      {/* =======================================
                          IMAGEM
                      ======================================== */}
                      <div className="relative bg-gradient-to-b from-gray-50 to-white p-5">
                        <span className="absolute left-4 top-4 z-10 rounded-full bg-[#e30613] px-3 py-1 text-xs font-bold text-white">
                          {produto.categoria}
                        </span>

                        <div className="flex h-60 items-center justify-center">
                          {produto.imagemUrl ? (
                            <img
                              src={produto.imagemUrl}
                              alt={produto.nome}
                              loading="lazy"
                              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-100">
                              <div className="text-center">
                                <div className="mb-2 text-4xl">
                                  📱
                                </div>

                                <p className="text-sm text-gray-400">
                                  Imagem não disponível
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* =======================================
                          INFORMAÇÕES
                      ======================================== */}
                      <div className="flex min-h-[290px] flex-col p-5">
                        <h2 className="mb-3 line-clamp-2 text-lg font-bold text-gray-800">
                          {produto.nome}
                        </h2>

                        <p className="line-clamp-4 flex-1 text-sm leading-6 text-gray-500">
                          {produto.descricao}
                        </p>

                        <div className="mt-5">
                          {/* PREÇO */}
                          <p className="text-3xl font-extrabold text-[#e30613]">
                            {formatarPreco(
                              produto.preco
                            )}
                          </p>

                          <p className="mb-4 mt-1 text-xs text-gray-400">
                            À vista no PIX
                          </p>

                          {/* BOTÃO */}
                          <button
                            type="button"
                            onClick={() =>
                              adicionarCarrinho(
                                produto
                              )
                            }
                            className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-[#e30613] to-red-700 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:from-red-700 hover:to-[#e30613] active:scale-95"
                          >
                            Adicionar no carrinho
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
        </div>
      </section>
    </main>
  );
}
