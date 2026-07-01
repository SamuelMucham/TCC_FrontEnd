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

export default function pecasParaCelularesPage() {

  const produtos = [
    {
      nome: "Tela iPhone 11",
      categoria: "peças para TV",
      preco: "R$79",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_790905-MLA99985696901_112025-F.webp",
      descricao:
        "Tela iPhone 11 6.1 Top + Película Display Frontal Lcd Compativel.",
    },
    {
      nome: "Pantalla Amoled Para Samsung",
      categoria: "peças para TV",
      preco: "R$ 959,21",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_967581-CBT112249641520_062026-F.webp",
      descricao:
        "Pantalla Amoled Para Samsung S23 Ultra C/marco+tapa Trasera",
    },
    {
      nome: "Tela Display Moto G7",
      categoria: "peças para TV",
      preco: "R$ 69,70",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_829108-MLA112458340199_052026-F.webp",
      descricao:
        "Tela Display Moto G7 Power Xt1955 Touch + Kit Ferramenta Preto",
    },
    {
      nome: "Tela para Infinix Hot 50i",
      categoria: "peças para TV",
      preco: "R$ 78,47",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_628346-MLB105310020844_012026-F.webp",
      descricao:
        "Tela Frontal Display Touch Compatível Infinix Hot 50i C/a.",
    },
    {
      nome: "Bateria Para Lg K9 / K7",
      categoria: "peças para TV",
      preco: "R$ 68,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_952207-MLB74607595964_022024-F.webp",
      descricao:
        "Bateria Para Bl-45f1f Lg K9 / K7 2017 / K8 2017",
    },
    {
      nome: "Bateria Para A10 A105 M10 M105 A750",
      categoria: "peças para TV",
      preco: "R$ 68,90",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_780807-MLB76989987118_062024-F.webp",
      descricao:
        "Bateria Para A10 A105 M10 M105 A750 Eb-ba750abu Envio Ja",
    },
        {
      nome: 'Bateria para Moto G8 Play One Macro E7 Kg40',
      categoria: "peças para TV",
      preco: "R$ 66,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_611319-MLB74688526493_022024-F.webp",
      descricao:
        "Bateria Compatível Moto G8 Play One Macro E7 Kg40.",
    },
    {
      nome: "Bateria Para Moto E22",
      categoria: "peças para TV",
      preco: "R$ 79,88",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_832946-MLB78059620995_072024-F.webp",
      descricao:
        "Bateria Para Moto E22 Nh40 Xt2239.",
    },
    {
      nome: "Placa Conector Carga S24 Ultra",
      categoria: "peças para TV",
      preco: "R$ 294,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_902415-MLB108323062232_032026-F.webp",
      descricao:
        "Placa Conector Carga S24 Ultra Original Samsung Gh96-16497a",
    },
    {
      nome: "Placa Conector Carga A55",
      categoria: "peças para TV",
      preco: "R$ 189,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_695566-MLB107801464256_032026-F.webp",
      descricao:
        "Placa Conector Carga A55 5g Original Samsung Gh96-16718a",
    },
        {
      nome: 'Placa Conector Carga Moto G56',
      categoria: "peças para TV",
      preco: "R$ 135,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_844330-MLB104994731877_012026-F.webp",
      descricao:
        "Placa Conector Carga Moto G56 Original Motorola",
    },
    {
      nome: "Placa Conector Carga Mic Moto Edge 70",
      categoria: "peças para TV",
      preco: "R$ 189,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_976298-MLB110157799384_042026-F.webp",
      descricao:
        "Placa Conector Carga Mic Moto Edge 70 Original Motorola",
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
            Peças para TV
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de algumas peças para TVS.
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
                    className="w-full bg-linear-to-r from-[#e30613] to-red-700 hover:from-red-700 hover:to-[#e30613] text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
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
