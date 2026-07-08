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

export default function pecasParaComputadoresPage() {

  const produtos = [
    {
      nome: "Processador AMD Ryzen 9 9900X",
      categoria: "peças para Computadores",
      preco: "R$ 3.512,26",
      imagem:
        "https://images2.kabum.com.br/produtos/fotos/609952/amd-ryzen-9-9900x-12-core_1723551236_gg.jpg",
      descricao:
        "Processador AMD Ryzen 9 9900X, 4.4 GHz (5.6 GHz), Cache 64 MB, 12 Núcleos, 24 Threads, AM5 - 100-100000662WOF",
    },
    {
      nome: "Processador Intel Core Ultra 5-245K",
      categoria: "peças para Computadores",
      preco: "R$ 3.176,46",
      imagem:
        "https://images0.kabum.com.br/produtos/fotos/645180/processador-intel-core-ultra-5-245k-5-2ghz-ate-14-nucleos-com-suporte-a-pcie-5-0-e-4-0-e-suporte-a-ddr5-bx80768245k_1728593868_gg.jpg",
      descricao:
        "Processador Intel Core Ultra 5-245K, 5.2GHz, Até 14 Núcleos, Com suporte a PCIe 5.0 e 4.0 e suporte a DDR5- BX80768245K",
    },
        {
      nome: 'Processador AMD Ryzen Threadripper Pro 5995WX',
      categoria: "peças para Computadores",
      preco: "R$ 52.941,16",
      imagem:
        "https://images7.kabum.com.br/produtos/fotos/368277/processador-amd-ryzen-threadripper-pro-5995wx-4mb-octa-core-sp3-wof-100-100000444wof_1659724710_gg.jpg",
      descricao:
        "Processador AMD Ryzen Threadripper Pro 5995WX, Cache 256 MB, 64 Núcleos, SP3 WOF - 100-100000444WOF",
    },
    {
      nome: "Processador AMD Ryzen 9 9950X3D2",
      categoria: "peças para Computadores",
      preco: "R$ 11.111,10",
      imagem:
        "https://images4.kabum.com.br/produtos/fotos/1028554/processador-amd-ryzen-9-9950x3d2-4-3ghz-5-7ghz-turbo-am5-16-cores-32-threads-144mb-cache-radeon-graphics-100-100001978wof_1780519781_gg.jpg",
      descricao:
        "Placa-mãe P/ Hp Elitebook 840 / 850 G5 6050a2945601 I7 8550u",
    },
    {
      nome: "ASUS ROG Swift Monitor de jogos OLED 4K de 32 polegadas",
      categoria: "peças para Computadores",
      preco: "R$ 12.956,56",
      imagem:
        "https://m.media-amazon.com/images/I/91t16+g29KL._AC_SX679_.jpg",
      descricao:
        "ASUS ROG Swift Monitor de jogos OLED 4K de 32 polegadas (PG32UCDM) - UHD (3840 x 2160), QD-OLED, 240Hz, 0,03ms, compatível com G-SYNC, dissipador de calor personalizado, filme de grafeno, 99% DCI-P3",
    },
    {
      nome: "ROG Swift OLED PG27UCDM",
      categoria: "peças para Computadores",
      preco: "R$ 15.379,99",
    imagem:"https://dlcdnwebimgs.asus.com/gain/D0707D10-F44F-4796-957D-EE2B79C011AE/w1000/h732",
      descricao:
        "Monitor gamer ROG Swift OLED de 27 com resolução 4K QD-OLED. Taxa de atualização de 240 Hz",
    },
        {
      nome: 'Monitor Samsung',
      categoria: "peças para Computadores",
      preco: "R$ 21.999,90",
      imagem:
        "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/l/s/ls55bg970nlxzd20.jpg",
      descricao:
        "Monitor Samsung Odyssey ARK 55 Pol. VA Curvo, UHD 4K, 1ms, 165Hz, FreeSync Premium, HDMI/DP, LS55BG970NLXZD",
    },
    {
      nome: "Monitor Gamer Samsung",
      categoria: "peças para Computadores",
      preco: "R$ 15.999,90",
      imagem:
        "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/l/s/ls49cg930slxzd.jpg",
      descricao:
        "Monitor Gamer Samsung Odyssey OLED G9, 49 Pol, Curvo, Dual QHD, 0,03ms, 240Hz, FreeSync Premium PRO, DP/HDMI, LS49CG930SLXZD",
    },
     {
      nome: "ASUS Placa mãe ROG Zenith",
      categoria: "peças para Computadores",
      preco: "R$ 13.515,61",
      imagem:
        "https://m.media-amazon.com/images/I/71+cv1MHnRL._AC_SX679_.jpg",
      descricao:
        "ASUS Placa mãe ROG Zenith II Extreme Alpha TRX40 Gaming AMD 3ª geração Ryzen Threadripper sTRX4 EATX com 16 Infineon Power Stages, PCIe 4.0, Wi-Fi 6",
    },
    {
      nome: "GIGABYTE B650 AORUS Elite AX ICE",
      categoria: "peças para Computadores",
      preco: "R$ 2.224,26",
      imagem:
        "https://m.media-amazon.com/images/I/717D3oBpMBL._AC_SX679_.jpg",
      descricao:
        "GIGABYTE B650 AORUS Elite AX ICE (AM5/ LGA 1718/ AMD/B650/ ATX/Garantia de 5 anos/DDR5/Triple M.2/ PCIe 5.0/ USB 3.2 Gen2X2 Type-C/WiFi 6E/2.5GbE LAN/Branca Neve/EZ-Latch/Placa-mãe)",
    },
    {
      nome: "Placa Mãe Asus ROG",
      categoria: "peças para Computadores",
      preco: "R$ 4.634,97 ",
      imagem:
        "https://m.media-amazon.com/images/I/810OJR9FqSL._AC_SX679_.jpg",
      descricao:
        "Placa Mãe Asus ROG STRIX X670E-F GAMING WIFI (AM5/4xDDR5/HDMI/DP/M.2/USB 3.2)",
    },
    {
      nome: "TUF Gaming",
      categoria: "peças para Computadores",
      preco: "R$ 2.856,47",
      imagem:
        "https://m.media-amazon.com/images/I/81TPwG1sDnL._AC_SX679_.jpg",
      descricao:
        "TUF Gaming Z890-PRO WiFi",
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
            Peças para Computadores
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de algumas peças para Computadores.
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

                <p className="text-gray-500 text-sm line-clamp-5 flex-1">
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
