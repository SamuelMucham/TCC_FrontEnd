"use client";

import router from "next/router";

/* eslint-disable @next/next/no-img-element */

interface Produto {
  nome: string;
  categoria: string;
  preco: string;
  imagem: string;
  descricao: string;
  quantidade?: number;
}

export default function perifericosPage() {

  const produtos = [
    {
      nome: "Headset Gamer Redragon",
      categoria: "Periférico",
      preco: "R$ 377,64",
      imagem:
        "https://images8.kabum.com.br/produtos/fotos/227818/headset-gamer-redragon-zeus-chroma-mk-ii-rgb-surround-7-1-usb-drivers-53mm-preto-vermelho-h510-rgb_1631555309_gg.jpg",
      descricao:
        "Headset Gamer Redragon Zeus X, Chroma Mk.II, RGB, Som Surround 7.1, Drivers 53mm, USB, Preto e Vermelho - H510-RGB",
    },
    {
      nome: "Teclado Mecânico",
      categoria: "Periférico",
      preco: "R$ 258,81",
      imagem:
        "http://images4.kabum.com.br/produtos/fotos/535604/teclado-mecanico-gamer-machenike-k500-b61-switch-brown-abnt-branco-k500-b61bbr_1769021519_gg.jpg",
      descricao:
        "Teclado Mecânico Gamer Machenike K500-B61, Switch Huano Brown, ABNT, Branco - K500-B61BBR",
    },
    {
      nome: "Mouse Gamer Sem Fio",
      categoria: "Periférico",
      preco: "R$ 249,90",
      imagem:
        "https://images0.kabum.com.br/produtos/fotos/sync_mirakl/883180/xlarge/Mouse-Gamer-Sem-Fio-Attack-Shark-X11-22000-Dpi-59g-Tri-mode-Com-Dock-Magn-tico-RGB-Preto_1772819622.jpg",
      descricao:
        "Mouse Gamer Sem Fio Attack Shark X11, 22000 Dpi, 59g, Tri-mode Com Dock Magnético, RGB, Preto",
    },
    {
      nome: "Microfone Dinâmico Gamer",
      categoria: "Periférico",
      preco: "R$ 454,53",
      imagem:
        "https://images2.kabum.com.br/produtos/fotos/592292/microfone-dinamico-gamer-fifine-ampligame-rgb-cardioide-usb-c-anti-ruido-para-streaming-preto-am8_1733503402_gg.jpg",
      descricao:
        "Microfone Dinâmico Gamer Fifine Ampligame, RGB, Cardióide, USB-C, Anti-Ruído, Para Streaming, Preto - AM8",
    },
    {
      nome: "Mousepad",
      categoria: "Periférico",
      preco: "R$ 117,64",
      imagem:
        "https://images0.kabum.com.br/produtos/fotos/103960/mousepad-gamer-rise-mode-rgb-estendido-900x300mm-preto-rm-mp-07-rgb_1747227673_gg.jpg",
      descricao:
        "Mousepad Gamer Rise Mode RGB, Estendido (900x300mm), Preto - RM-MP-07-RGB",
    },
    {
      nome: "Mesa Digitalizadora",
      categoria: "Periférico",
      preco: "R$ 39.882,35",
      imagem:
        "https://images0.kabum.com.br/produtos/fotos/532470/mesa-digitalizadora-com-tela-wacom-cintiq-pro-22-caneta-ressonancia-eletromagnetica-5080-lpi-tela-21-5-4k-usb-c-preto-dth227k0a1_1713209881_gg.jpg",
      descricao:
        "Mesa Digitalizadora Com tela Wacom Cintiq Pro 22, Caneta Ressonância Eletromagnética, 5080 LPI, Tela 21.5 4K, USB-C, Preto - DTH227K0A1",
    },
    {
      nome: "Óculos VR",
      categoria: "Periférico",
      preco: "R$ 12.989,40",
      imagem:
        "https://images4.kabum.com.br/produtos/fotos/628374/oculos-vr-pny-pico-neo-3-pro-eye-bluetooth-wi-fi-256gb-4k-branco-phs-n3-pe1018580_1725637511_gg.jpg",
      descricao:
        "Óculos VR PNY PICO Neo 3 Pro Eye, Bluetooth, Wi-Fi, 256GB, 4K, Branco - PHS-N3-PE1018580",
    },
    {
      nome: "Teclado Mecânico",
      categoria: "Periférico",
      preco: "R$ 5.999,90",
      imagem:
        "https://images0.kabum.com.br/produtos/fotos/sync_mirakl/883110/xlarge/Teclado-Mec-nico-Gamer-Razer-Blackwidow-V4-Pro-75-Gengar-Edition-RGB-Switch-Mec-nico-Layout-Ansi-Usb-c-_1770926736.jpg",
      descricao:
        "Teclado Mecânico Gamer Razer Blackwidow V4 Pro 75% Gengar Edition – RGB, Switch Mecânico, Layout Ansi, Usb-c.",
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
    // Produto já existe no carrinho
    if ((carrinho[index].quantidade ?? 1) < 5) {
      carrinho[index].quantidade =
        (carrinho[index].quantidade ?? 1) + 1;
    } else {
      alert("Você só pode adicionar até 5 unidades deste produto.");
      return;
    }
  } else {
    // Produto ainda não existe
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
            periféricos
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de periféricos para computadores, notebooks,
            trabalho, estudos e jogos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-200 transition-all duration-300 hover:-translate-y-3 border border-gray-100"
            >
              ++
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
