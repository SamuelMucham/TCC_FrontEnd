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
    //celulares
    {
      nome: "Tela iPhone 11",
      categoria: "peças para celulares",
      preco: "R$79",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_790905-MLA99985696901_112025-F.webp",
      descricao:
        "Tela iPhone 11 6.1 Top + Película Display Frontal Lcd Compativel.",
    },
    {
      nome: "Pantalla Amoled Para Samsung",
      categoria: "peças para celulares",
      preco: "R$ 959,21",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_967581-CBT112249641520_062026-F.webp",
      descricao:
        "Pantalla Amoled Para Samsung S23 Ultra C/marco+tapa Trasera",
    },
    {
      nome: "Tela Display Moto G7",
      categoria: "peças para celulares",
      preco: "R$ 69,70",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_829108-MLA112458340199_052026-F.webp",
      descricao:
        "Tela Display Moto G7 Power Xt1955 Touch + Kit Ferramenta Preto",
    },
    {
      nome: "Tela para Infinix Hot 50i",
      categoria: "peças para celulares",
      preco: "R$ 78,47",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_628346-MLB105310020844_012026-F.webp",
      descricao:
        "Tela Frontal Display Touch Compatível Infinix Hot 50i C/a.",
    },
    {
      nome: "Bateria Para Lg K9 / K7",
      categoria: "peças para celulares",
      preco: "R$ 68,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_952207-MLB74607595964_022024-F.webp",
      descricao:
        "Bateria Para Bl-45f1f Lg K9 / K7 2017 / K8 2017",
    },
    {
      nome: "Bateria Para A10 A105 M10 M105 A750",
      categoria: "peças para celulares",
      preco: "R$ 68,90",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_780807-MLB76989987118_062024-F.webp",
      descricao:
        "Bateria Para A10 A105 M10 M105 A750 Eb-ba750abu Envio Ja",
    },
        {
      nome: 'Bateria para Moto G8 Play One Macro E7 Kg40',
      categoria: "peças para celulares",
      preco: "R$ 66,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_611319-MLB74688526493_022024-F.webp",
      descricao:
        "Bateria Compatível Moto G8 Play One Macro E7 Kg40.",
    },
    {
      nome: "Bateria Para Moto E22",
      categoria: "peças para celulares",
      preco: "R$ 79,88",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_832946-MLB78059620995_072024-F.webp",
      descricao:
        "Bateria Para Moto E22 Nh40 Xt2239.",
    },
    {
      nome: "Placa Conector Carga S24 Ultra",
      categoria: "peças para celulares",
      preco: "R$ 294,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_902415-MLB108323062232_032026-F.webp",
      descricao:
        "Placa Conector Carga S24 Ultra Original Samsung Gh96-16497a",
    },
    {
      nome: "Placa Conector Carga A55",
      categoria: "peças para celulares",
      preco: "R$ 189,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_695566-MLB107801464256_032026-F.webp",
      descricao:
        "Placa Conector Carga A55 5g Original Samsung Gh96-16718a",
    },
        {
      nome: 'Placa Conector Carga Moto G56',
      categoria: "peças para celulares",
      preco: "R$ 135,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_844330-MLB104994731877_012026-F.webp",
      descricao:
        "Placa Conector Carga Moto G56 Original Motorola",
    },
    {
      nome: "Placa Conector Carga Mic Moto Edge 70",
      categoria: "peças para celulares",
      preco: "R$ 189,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_976298-MLB110157799384_042026-F.webp",
      descricao:
        "Placa Conector Carga Mic Moto Edge 70 Original Motorola",
    },
    //computadores
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
    //notebooks
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
    //TV
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
  ].sort(() => Math.random() - 0.5);

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
            todas as peças da loja.
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore nossa ampla variedade de peças para computadores, celulares, notebooks e TVs. Encontre os componentes perfeitos para atualizar ou reparar seus dispositivos com qualidade e confiabilidade.
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
