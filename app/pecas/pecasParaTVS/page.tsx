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
      nome: "Tela de Tv Philco",
      categoria: "peças para TV",
      preco: "R$ 320,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_890006-MLA85862470412_062025-F.webp",
      descricao:
        "Tela Tv Solução Philco Gm280tft04r Ph28n91dsgwa",
    },
    {
      nome: "*troca* De Tela Display Lcd Tv Lg",
      categoria: "peças para TV",
      preco: "R$ 1.570,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_709861-MLB73176327947_112023-F.webp",
      descricao:
        "*troca* De Tela Display Lcd Tv Lg Eaj62432301 55la9650.awz",
    },
    {
      nome: "Display Tela Tv LG 55 Polegadas",
      categoria: "peças para TV",
      preco: "R$ 2.000,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_932084-MLB113404143155_062026-F.webp",
      descricao:
        "Display Tela Tv LG 55 Polegadas 55ut8050psa Eaj65756917",
    },
    {
      nome: "Display Tela Tv LG Oled",
      categoria: "peças para TV",
      preco: "R$ 4.023,03",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_772116-MLB113625797967_062026-F.webp",
      descricao:
        "Display Tela Tv LG Oled 65 Pol Oled65b9psb.awz Eaj65748998.",
    },
    {
      nome: "Pedestal completo TV LG",
      categoria: "peças para TV",
      preco: "R$ 455,05",
      imagem:
        "https://www.lg.com/content/dam/channel/wcms/br/images/pecas-e-acessorios-para-tv-e-audio/aan30005507_acc_essp_br_c/gallery/large01.jpg?w=800",
      descricao:
        "Pedestal completo TV LG OLED65GXPSA - AAN30005507",
    },
    {
      nome: "Base (Pedestal) TV LG",
      categoria: "peças para TV",
      preco: "R$ 130,00",
    imagem:"https://www.lg.com/content/dam/channel/wcms/br/images/pecas-e-acessorios-para-tv-e-audio/aan76009337_acc_essp_br_c/gallery/DZ-1.jpg?w=800",
      descricao:
        "Base (Pedestal) TV LG 43LK5750PSA, 43LU660H - AAN76009337",
    },
        {
      nome: 'Base (Pedestal) TV LG',
      categoria: "peças para TV",
      preco: "R$ 198,55",
      imagem:
        "https://www.lg.com/content/dam/channel/wcms/br/images/pecas-e-acessorios-para-tv-e-audio/aan30041902_acc_essp_br_c/DZ-01.jpg?w=800",
      descricao:
        "Base (pedestal) TV LG OLED42C2PSA - AAN30041902.",
    },
    {
      nome: "Base (Pedestal) TV LG",
      categoria: "peças para TV",
      preco: "R$ 103,55",
      imagem:
        "https://www.lg.com/content/dam/channel/wcms/br/images/pecas-e-acessorios-para-tv-e-audio/aan76411702_acc_essp_br_c/gallery/DZ-1.jpg?w=800",
      descricao:
        "Base (Pedestal) TV LG 50UK6520PSA - AAN76411702.",
    },
    {
      nome: "Placa Principal Philco",
      categoria: "peças para TV",
      preco: "R$ 499,99",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_849600-MLB112258825392_062026-F.webp",
      descricao:
        "Placa Principal Philco Ph40u21dsgw Vb Juc7.820.00165831",
    },
    {
      nome: "Placa Principal Tv Modelo Toshiba",
      categoria: "peças para TV",
      preco: "R$ 299,99",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_823097-MLB105548375849_012026-F.webp",
      descricao:
        "Placa Principal Tv Modelo Toshiba 43s5300 40-rt41k1-mpb2hg",
    },
        {
      nome: 'Placa Principal Aiwa',
      categoria: "peças para TV",
      preco: "R$ 159,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_928851-MLB107961931827_032026-F.webp",
      descricao:
        "Placa Principal Aiwa-tv-32-bl-01 9216m7c2 Original",
    },
    {
      nome: "Placa Principal Para Tv",
      categoria: "peças para TV",
      preco: "R$ 189,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_730441-MLB113204897229_062026-F.webp",
      descricao:
        "Placa Principal Para Tv Ptv42g52rcf A B C Juc7.820.00276749",
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
