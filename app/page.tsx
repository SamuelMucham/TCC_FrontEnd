"use client";

import { useRouter } from "next/navigation";
/* eslint-disable @next/next/no-img-element*/

interface Produto {
  nome: string;
  categoria: string;
  preco: string;
  imagem: string;
  descricao: string;
  quantidade?: number;
}

export default function Home() {
  
  const router = useRouter();

  const produtos = [
    {
      nome: "REDMAGIC 11 pro",
      categoria: "CELULARES",
      preco: "R$ 5.299,00",
      imagem:
        "https://br.redmagic.gg/cdn/shop/files/device-top__2x_bdff09d4-ce56-4750-b553-c820756f9d14.png?v=1761828406&width=628",
      descricao: "REDMAGIC 11 pro",
    },
    {
      nome: "ROG Phone 9 Pro",
      categoria: "CELULARES",
      preco: "R$ 5.000",
      imagem:
        "https://dlcdnwebimgs.asus.com/files/media/59e044d5-16d0-4b79-ba2e-1d0d878f4dec/v1/features/images/large/1x/kv/phone_left.png",
      descricao: "ROG Phone 9 Pro",
    },
    {
      nome: "Samsung S24 Ultra",
      categoria: "CELULARES",
      preco: "R$ 9.974,05",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_699676-MLA99382879982_112025-F.webp",
      descricao: "Samsung S24 Ultra",
    },
    {
      nome: "POCO X8 Pro",
      categoria: "CELULARES",
      preco: "R$ 6.439,99",
      imagem: "https://m.media-amazon.com/images/I/61U2cKwv20L._AC_SX679_.jpg",
      descricao: "POCO X8 Pro",
    },
    {
      nome: "iPhone 17",
      categoria: "CELULARES",
      preco: "R$ 899,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_717704-MLA107971005255_032026-F.webp",
      descricao: "iPhone 17",
    },
    {
      nome: "x200 ultra",
      categoria: "CELULARES",
      preco: "R$ 8.999",
      imagem:
        "https://www.rbaimportados.com/media/catalog/product/cache/3c2036041cbcde60e4487744e349f5b9/v/i/vivo-x200-ultra_rbaimportados.com_14__1.webp",
      descricao:
        "vivo X200 Ultra - 5G 6.78 AMOLED 2K+ Android 15 Snapdragon 8 Elite 256/512/1TB 200MP 8K IP68",
    },
    {
      nome: "Samsung S26 Ultra",
      categoria: "CELULARES",
      preco: "R$ 10.349,10",
      imagem:
        "https://samsungbrshop.vtexassets.com/arquivos/ids/278468-600-auto?v=639076206131900000",
      descricao:
        "Celular Samsung Galaxy S26 Ultra 5G, 512GB, 12GB RAM, Câmera Quádrupla, Tela Grande de 6.9 Preto",
    },
    {
      nome: "HUAWEI Mate XT ULTIMATE DESIGN",
      categoria: "CELULARES",
      preco: "R$ 32.999",
      imagem:
        "https://imgs.search.brave.com/3PGIm8BLECs6IMNDFw36A5v27eFTyBqAzHgYotCCg-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbHBo/YWdhZGdldC5jb20u/YmQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDgvSHVhd2Vp/LU1hdGUtWFQtVWx0/aW1hdGUtRGVzaWdu/LVByaWNlLWluLUJh/bmdsYWRlc2guanBn",
      descricao: "Único modelo com três telas do mundo.",
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
  <div className="bg-gray-50 min-h-screen">
    <section className="relative bg-gray-800 h-87.5 flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x600/333/fff?text=BANNER+PRINCIPAL+LOJA+DO+MECANICO')] bg-cover bg-center opacity-60"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          A Maior assistência técnica do Brasil
        </h1>

        <p className="text-xl md:text-2xl mb-8 font-light">
          Desde 2026.
        </p>

        <a
          href="#ofertas"
          className="inline-block bg-[#e30613] hover:bg-[#b3000a] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          Ver Ofertas
        </a>
      </div>
    </section>

    <div className="container mx-auto px-4 py-10">
      <div id="ofertas" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-[#e30613] pl-4 text-center">
          Ofertas de celulares
        </h2>
      </div>
    </div>

    <div className="#f5f5f5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            celulares
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de celulares para estudo, trabalho,
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
  </div>
);
  }