"use client";

/* eslint-disable @next/next/no-img-element */


interface Produto {
  nome: string;
  categoria: string;
  preco: string;
  imagem: string;
  descricao: string;
  quantidade?: number;
}

export default function pecasParaNotebooksPage() {

  const produtos = [
    {
      nome: "Tela Completa Original Asus",
      categoria: "peças para Notebooks",
      preco: "R$ 3.595,90",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_814382-MLB106710199696_022026-F.webp",
      descricao:
        "Tela Completa Original Asus Notebook Zenbook S14 Ux5406 Nova",
    },
    {
      nome: "Tela Para Notebook Positivo",
      categoria: "peças para Notebooks",
      preco: "R$ 269,89",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_835844-MLB90025269747_082025-F.webp",
      descricao:
        "Tela Para Notebook Positivo Motion Gray Q232a",
    },
    {
      nome: "Tela 14 Led Slim Para Notebook",
      categoria: "peças para Notebooks",
      preco: "R$ 279,76",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_743338-MLA95967709665_102025-F.webp",
      descricao:
        "Tela 14 Led Slim Para Notebook Dell Inspiron 14i-3442-c10 Hd",
    },
    {
      nome: "Tela 15.6 Led Slim Para Notebook",
      categoria: "peças para Notebooks",
      preco: "R$ 328,48",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_979876-MLA108928753508_032026-F.webp",
      descricao:
        "Tela 15.6 Led Slim Para Notebook Dell Inspiron 15-3511 Hd BringIT",
    },
    {
      nome: "Bateria Para Dell",
      categoria: "peças para Notebooks",
      preco: "R$ 150,26",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_722314-MLA106708534198_022026-F.webp",
      descricao:
        "Bateria Para Dell Inspiron 15 5000 I15-5566-a10p M5y1k 30wh Cor Preto",
    },
    {
      nome: "Bateria Para Notebook Samsung",
      categoria: "peças para Notebooks",
      preco: "R$ 298,00",
    imagem:"https://http2.mlstatic.com/D_NQ_NP_2X_850955-MLA108914795640_032026-F.webp",
      descricao:
        "Bateria Para Noteboo Samsung 800g5m 3900 Mah Branco Branco",
    },
        {
      nome: 'Bateria para Notebook Vaio',
      categoria: "peças para Notebooks",
      preco: "R$ 299,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_930843-MLA100061043091_122025-F.webp",
      descricao:
        "Bateria para Notebook Vaio FE15 V525290 3650mAh Li-ion 11.4V",
    },
    {
      nome: "Bateria Para Notebook Lenovo",
      categoria: "peças para Notebooks",
      preco: "R$ 194,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_634203-MLB110940358520_052026-F.webp",
      descricao:
        "Bateria Para Notebook Lenovo Thinkpad T470 T480 T570 T580Base (Pedestal) TV LG 50UK6520PSA - AAN76411702.",
    },
    {
      nome: "Placa Mãe Lenovo",
      categoria: "peças para Notebooks",
      preco: "R$ 3.512,26",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_603234-MLB98111813071_112025-F.webp",
      descricao:
        "Placa Mãe Lenovo Legion 5 Pro 16iah7h I7-12 Nm-e231 Rtx3060",
    },
    {
      nome: "Placa Mãe Lenovo",
      categoria: "peças para Notebooks",
      preco: "R$ 1.099,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_870930-MLA99974679455_112025-F.webp",
      descricao:
        "Placa Mãe Lenovo Yoga S740 Ddr4 I7-1065g7 Nm-c451 Cor Azul",
    },
        {
      nome: 'Placa-mãe Para Notebook Ace',
      categoria: "peças para Notebooks",
      preco: "R$ 470,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_608634-MLB49521041191_032022-F.webp",
      descricao:
        "Placa-mãe Para Notebook Acer / Gateway La-9535p Celeron",
    },
    {
      nome: "Placa-mãe P/ Hp",
      categoria: "peças para Notebooks",
      preco: "R$ 1.125,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_759836-MLB76175835590_052024-F.webp",
      descricao:
        "Placa-mãe P/ Hp Elitebook 840 / 850 G5 6050a2945601 I7 8550u",
    },
  ];

  function adicionarCarrinho(produto: Produto) {
  const carrinho: Produto[] = JSON.parse(
    localStorage.getItem("carrinho") || "[]"
  );

  const index = carrinho.findIndex(
    (item) => item.nome === produto.nome
  );

  if (index !== -1) {
    if ((carrinho[index].quantidade ?? 1) < 5) {
      carrinho[index].quantidade =
        (carrinho[index].quantidade ?? 1) + 1;
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

    return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Peças para Notebooks
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de algumas peças para Notebooks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-200 transition-all duration-300 hover:-translate-y-3 border border-gray-100"
            >
              <div className="relative bg-linear-to-b from-gray-50 to-white p-5">
                <span className="absolute top-4 left-4 z-10 bg-[#e30613] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {produto.categoria}
                </span>

                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-60 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-5 flex flex-col h-70">
                <h2 className="text-lg font-bold text-gray-800 line-clamp-2 mb-3">
                  {produto.nome}
                </h2>

                <p className="text-gray-500 text-sm line-clamp-4 flex-1">
                  {produto.descricao}
                </p>

                <div className="mt-5">
                  <p className="text-3xl font-extrabold text-[#e30613]">
                    {produto.preco}
                  </p>

                  <p className="text-xs text-gray-400 mt-1 mb-4">
                    À vista no PIX
                  </p>

                  <button
                    onClick={() => adicionarCarrinho(produto)}
                    className="cursor-pointer w-full bg-linear-to-r from-[#e30613] to-red-700 hover:from-red-700 hover:to-[#e30613] text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
