"use client";

import { useRouter } from "next/navigation";
/* eslint-disable @next/next/no-img-element */

export default function Home() {
  const router = useRouter();

  function adicionarCarrinho(produto: {
    nome: string;
    categoria: string;
    preco: string;
    imagem: string;
    descricao: string;
  }) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");

    carrinho.push(produto);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    router.push("/carrinho");
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative bg-gray-800 h-87.5 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x600/333/fff?text=BANNER+PRINCIPAL+LOJA+DO+MECANICO')] bg-cover bg-center opacity-60"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            A Maior assistencia tecnica do Brasil
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Desde 2026.</p>
          <a
            href="#ofertas"
            className="inline-block bg-[#e30613] hover:bg-[#b3000a] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            Ver Ofertas
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div id="ofertas" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#e30613] pl-4">
            Ofertas de celulares e ferramentas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative drop-shadow-xl w-full h-96 overflow-hidden rounded-xl bg-[#333e1d]">
              <div className="absolute flex flex-col items-center justify-start text-white z- opacity-90 rounded-xl inset-0.5 bg-[#141414] p-4 h-full w-full">
                <div className="w-full h-40 relative overflow-hidden rounded-lg bg-white mb-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://br.redmagic.gg/cdn/shop/files/images_view.png?v=1761828429&width=960"
                    alt="REDMAGIC 11 pro"
                  />
                </div>
                <span className="text-xs text-gray-400 mb-1">CELULARES</span>
                <h3 className="font-semibold text-sm leading-tight mb-2 flex-1">
                  REDMAGIC 11 pro
                </h3>
                <div className="mt-auto w-full">
                  <p className="text-xs text-gray-500 line-through">
                    R$ 7.599,00
                  </p>
                  <p className="text-2xl font-bold text-[#e30613]">
                    R$ 5.299,00
                  </p>
                  <p className="text-xs text-gray-400 mb-3">à vista no Pix</p>
                  <button
                    onClick={() =>
                      adicionarCarrinho({
                        nome: "REDMAGIC 11 pro",
                        categoria: "CELULARES",
                        preco: "R$ 5.299,00",
                        imagem:
                          "https://br.redmagic.gg/cdn/shop/files/images_view.png?v=1761828429&width=960",
                        descricao: "REDMAGIC 11 pro",
                      })
                    }
                    className="w-full bg-[#e30613] hover:bg-[#b3000a] text-white font-bold py-2 rounded transition"
                  >
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>

            <div className="relative drop-shadow-xl w-full h-96 overflow-hidden rounded-xl bg-[#333e1d] will-change: transform; transition: 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99); transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
              <div className="absolute flex flex-col items-center justify-start text-white z- opacity-90 rounded-xl inset-0.5 bg-[#141414] p-4 h-full w-full">
                <div className="w-full h-40 relative overflow-hidden rounded-lg bg-white mb-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://imgs.search.brave.com/yjQuLhg0ab_Nva4sDRjldDA-kEwDQiKJtawVMM0n2jg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVW/WGZLWllwRDlhNkE5/SGFlcGt2U2UuanBn"
                    alt="ROG Phone 9 Pro"
                  />
                </div>
                <span className="text-xs text-gray-400 mb-1">CELULARES</span>
                <h3 className="font-semibold text-sm leading-tight mb-2 flex-1">
                  ROG Phone 9 Pro
                </h3>
                <div className="mt-auto w-full">
                  <p className="text-2xl font-bold text-[#e30613]">R$ 5.000</p>
                  <p className="text-xs text-gray-400 mb-3">à vista no Pix</p>
                  <button
                    onClick={() =>
                      adicionarCarrinho({
                        nome: "ROG Phone 9 Pro",
                        categoria: "CELULARES",
                        preco: "R$ 5.000",
                        imagem:
                          "https://imgs.search.brave.com/yjQuLhg0ab_Nva4sDRjldDA-kEwDQiKJtawVMM0n2jg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVW/WGZLWllwRDlhNkE5/SGFlcGt2U2UuanBn",
                        descricao: "ROG Phone 9 Pro",
                      })
                    }
                    className="w-full bg-[#e30613] hover:bg-[#b3000a] text-white font-bold py-2 rounded transition"
                  >
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>

            <div className="relative drop-shadow-xl w-full h-96 overflow-hidden rounded-xl bg-[#333e1d]">
              <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
              <div className="absolute flex flex-col items-center justify-start text-white z- opacity-90 rounded-xl inset-0.5 bg-[#141414] p-4 h-full w-full">
                <div className="w-full h-40 relative overflow-hidden rounded-lg bg-white mb-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://imgs.search.brave.com/t7qjer1e0H9dOuZlet2bEiRdwsgcM2qEHq53Rnz1luI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzlR/R2lKOEJLak1NUzZu/QktoZHJzdEQuanBn"
                    alt="Sansung S24 ultra"
                  />
                </div>
                <span className="text-xs text-gray-400 mb-1">CELULARES</span>
                <h3 className="font-semibold text-sm leading-tight mb-2 flex-1">
                  Sansung S24 ultra
                </h3>
                <div className="mt-auto w-full">
                  <p className="text-xs text-gray-500 line-through">
                    R$ 10.499,00
                  </p>
                  <p className="text-2xl font-bold text-[#e30613]">
                    R$ 9.974,05
                  </p>
                  <p className="text-xs text-gray-400 mb-3">À vista no Pix</p>
                  <button
                    onClick={() =>
                      adicionarCarrinho({
                        nome: "Samsung S24 Ultra",
                        categoria: "CELULARES",
                        preco: "R$ 9.974,05",
                        imagem:
                          "https://imgs.search.brave.com/t7qjer1e0H9dOuZlet2bEiRdwsgcM2qEHq53Rnz1luI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzlR/R2lKOEJLak1NUzZu/QktoZHJzdEQuanBn",
                        descricao: "Samsung S24 Ultra",
                      })
                    }
                    className="w-full bg-[#e30613] hover:bg-[#b3000a] text-white font-bold py-2 rounded transition"
                  >
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>

            <div className="relative drop-shadow-xl w-full h-96 overflow-hidden rounded-xl bg-[#333e1d]">
              <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
              <div className="absolute flex flex-col items-center justify-start text-white z- opacity-90 rounded-xl inset-0.5 bg-[#141414] p-4 h-full w-full">
                <div className="w-full h-40 relative overflow-hidden rounded-lg bg-white mb-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://imgs.search.brave.com/lO1i0MFDp--JLZoD5KwAHQRAq3lcmn2yaDjHzEAvYh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2ZpY2luYWRhbmV0/LmNvbS5ici9tZWRp/YS9wb3N0LzY3OTc3/LzEyMDAvMS1wb2Nv/LmpwZw"
                    alt="POCO X8 pro"
                  />
                </div>
                <span className="text-xs text-gray-400 mb-1">CELULARES</span>
                <h3 className="font-semibold text-sm leading-tight mb-2 flex-1">
                  POCO X8 pro
                </h3>
                <div className="mt-auto w-full">
                  <p className="text-xs text-gray-500 line-through">
                    R$ 6.999,99
                  </p>
                  <p className="text-2xl font-bold text-[#e30613]">
                    R$ 6.439,99
                  </p>
                  <p className="text-xs text-gray-400 mb-3">À vista no Pix</p>
                  <button
                    onClick={() =>
                      adicionarCarrinho({
                        nome: "POCO X8 Pro",
                        categoria: "CELULARES",
                        preco: "R$ 6.439,99",
                        imagem:
                          "https://imgs.search.brave.com/lO1i0MFDp--JLZoD5KwAHQRAq3lcmn2yaDjHzEAvYh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2ZpY2luYWRhbmV0/LmNvbS5ici9tZWRp/YS9wb3N0LzY3OTc3/LzEyMDAvMS1wb2Nv/LmpwZw",
                        descricao: "POCO X8 Pro",
                      })
                    }
                    className="w-full bg-[#e30613] hover:bg-[#b3000a] text-white font-bold py-2 rounded transition"
                  >
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>

            <div className="relative drop-shadow-xl w-full h-96 overflow-hidden rounded-xl bg-[#333e1d]">
              <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
              <div className="absolute flex flex-col items-center justify-start text-white z- opacity-90 rounded-xl inset-0.5 bg-[#141414] p-4 h-full w-full">
                <div className="w-full h-40 relative overflow-hidden rounded-lg bg-white mb-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://imgs.search.brave.com/mnQzut5pz_6bXvFJxNMHOIreNDz-MyZw3R7fE3_zjNc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbWF0/ZXVycGhvdG9ncmFw/aGVyLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNy8y/MDI1LzEwL2lQaG9u/ZTE3X0FteURhdmll/c18wNS5qcGc_dz0x/MDI0"
                    alt="Iphone 17"
                  />
                </div>
                <span className="text-xs text-gray-400 mb-1">CELULARES</span>
                <h3 className="font-semibold text-sm leading-tight mb-2 flex-1">
                  Iphone 17
                </h3>
                <div className="mt-auto w-full">
                  <p className="text-xs text-gray-500 line-through">
                    R$ 1.200,00
                  </p>
                  <p className="text-2xl font-bold text-[#e30613]">R$ 899,00</p>
                  <p className="text-xs text-gray-400 mb-3">À vista no Pix</p>
                  <button
                    onClick={() =>
                      adicionarCarrinho({
                        nome: "iPhone 17",
                        categoria: "CELULARES",
                        preco: "R$ 899,00",
                        imagem:
                          "https://imgs.search.brave.com/mnQzut5pz_6bXvFJxNMHOIreNDz-MyZw3R7fE3_zjNc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbWF0/ZXVycGhvdG9ncmFw/aGVyLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNy8y/MDI1LzEwL2lQaG9u/ZTE3X0FteURhdmll/c18wNS5qcGc_dz0x/MDI0",
                        descricao: "iPhone 17",
                      })
                    }
                    className="w-full bg-[#e30613] hover:bg-[#b3000a] text-white font-bold py-2 rounded transition"
                  >
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
