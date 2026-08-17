"use client";

import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */

interface Peca {
  id: string;
  nome: string;
  categoria: string;
  preco: number | string;
  imagemUrl?: string | null;
  descricao: string;
  quantidade?: number;
}

const IMAGEM_FALLBACK =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect width="600" height="400" fill="#f3f4f6"/>
      <rect x="40" y="40" width="520" height="320" rx="20"
        fill="#ffffff"
        stroke="#d1d5db"
        stroke-width="3"/>

      <text x="300" y="190"
        text-anchor="middle"
        font-family="Arial"
        font-size="28"
        font-weight="bold"
        fill="#6b7280">
        Imagem indisponível
      </text>

      <text x="300" y="230"
        text-anchor="middle"
        font-family="Arial"
        font-size="18"
        fill="#9ca3af">
        Assistência Técnica Forja
      </text>
    </svg>
  `);

export default function PecasParaCelularesPage() {
  const [pecas, setPecas] = useState<Peca[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarPecas() {
      try {
        // A API que você já possui
        const response = await fetch(
          "http://localhost:8080/produtos"
        );

        if (!response.ok) {
          throw new Error(
            `Erro HTTP: ${response.status}`
          );
        }

        const data = await response.json();

        console.log(
          "TODOS OS PRODUTOS:",
          data
        );

        if (Array.isArray(data)) {
          // FILTRA SOMENTE PEÇAS DE CELULARES
          const somentePecasCelulares =
            data.filter((item: Peca) => {
              const categoria =
                item.categoria
                  ?.toLowerCase()
                  .trim();

              return (
                categoria ===
                  "peças para celulares" ||
                categoria ===
                  "pecas para celulares" ||
                categoria ===
                  "peça para celular" ||
                categoria ===
                  "peca para celular"
              );
            });

          console.log(
            "PEÇAS DE CELULARES:",
            somentePecasCelulares
          );

          setPecas(
            somentePecasCelulares
          );
        } else {
          setPecas([]);
        }
      } catch (error) {
        console.error(
          "Erro ao buscar peças:",
          error
        );

        setPecas([]);
      } finally {
        setLoading(false);
      }
    }

    carregarPecas();
  }, []);

  function formatarPreco(
    valor: number | string
  ) {
    const numero =
      typeof valor === "string"
        ? Number.parseFloat(
            valor.replace(",", ".")
          )
        : valor;

    return new Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    ).format(
      Number.isNaN(numero)
        ? 0
        : numero
    );
  }

  function adicionarCarrinho(
    peca: Peca
  ) {
    try {
      const dados =
        localStorage.getItem(
          "carrinho"
        );

      const carrinho: Peca[] = dados
        ? JSON.parse(dados)
        : [];

      const index =
        carrinho.findIndex(
          (item) =>
            item.id === peca.id
        );

      if (index !== -1) {
        const quantidadeAtual =
          carrinho[index]
            .quantidade ?? 1;

        if (quantidadeAtual < 5) {
          carrinho[index].quantidade =
            quantidadeAtual + 1;
        } else {
          alert(
            "Você só pode adicionar até 5 unidades desta peça."
          );
          return;
        }
      } else {
        carrinho.push({
          ...peca,
          quantidade: 1,
        });
      }

      localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
      );

      alert(
        "Peça adicionada ao carrinho!"
      );
    } catch (error) {
      console.error(
        "Erro ao adicionar peça:",
        error
      );

      alert(
        "Não foi possível adicionar a peça ao carrinho."
      );
    }
  }

  function tratarErroImagem(
    e: React.SyntheticEvent<HTMLImageElement>
  ) {
    const imagem =
      e.currentTarget;

    if (
      imagem.src !==
      IMAGEM_FALLBACK
    ) {
      imagem.src =
        IMAGEM_FALLBACK;
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">
          Carregando peças de celulares...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* CABEÇALHO */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Peças para Celulares
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Peças para manutenção e
            assistência técnica de celulares.
          </p>
        </div>

        {/* NENHUMA PEÇA */}
        {pecas.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">
              Nenhuma peça de celular
              encontrada.
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Verifique se as peças estão
              cadastradas no banco de dados.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-8
            "
          >
            {pecas.map((peca) => (
              <div
                key={peca.id}
                className="
                  group
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  hover:shadow-red-200
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  border
                  border-gray-100
                  flex
                  flex-col
                  justify-between
                "
              >

                {/* IMAGEM */}
                <div
                  className="
                    relative
                    bg-white
                    p-5
                    flex
                    items-center
                    justify-center
                    h-64
                    border-b
                    border-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      z-10
                      bg-[#e30613]
                      text-white
                      text-xs
                      font-bold
                      px-3
                      py-1
                      rounded-full
                      uppercase
                      shadow-sm
                    "
                  >
                    Peça para celular
                  </span>

                  <img
                    src={
                      peca.imagemUrl ||
                      IMAGEM_FALLBACK
                    }
                    alt={peca.nome}
                    onError={
                      tratarErroImagem
                    }
                    loading="lazy"
                    className="
                      max-h-full
                      max-w-full
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* INFORMAÇÕES */}
                <div
                  className="
                    p-5
                    flex
                    flex-col
                    flex-1
                    justify-between
                  "
                >
                  <div>
                    <h2
                      className="
                        text-lg
                        font-bold
                        text-gray-800
                        line-clamp-2
                        mb-2
                      "
                    >
                      {peca.nome}
                    </h2>

                    <p
                      className="
                        text-gray-500
                        text-sm
                        line-clamp-3
                        mb-4
                      "
                    >
                      {peca.descricao}
                    </p>
                  </div>

                  {/* PREÇO */}
                  <div>
                    <p
                      className="
                        text-3xl
                        font-extrabold
                        text-[#e30613]
                      "
                    >
                      {formatarPreco(
                        peca.preco
                      )}
                    </p>

                    <p
                      className="
                        text-xs
                        text-gray-400
                        mt-1
                        mb-4
                      "
                    >
                      À vista no PIX
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        adicionarCarrinho(
                          peca
                        )
                      }
                      className="
                        cursor-pointer
                        w-full
                        bg-gradient-to-r
                        from-[#e30613]
                        to-red-700
                        hover:from-red-700
                        hover:to-[#e30613]
                        text-white
                        font-bold
                        py-3
                        rounded-xl
                        transition-all
                        duration-300
                        hover:scale-105
                        active:scale-95
                        shadow-md
                      "
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