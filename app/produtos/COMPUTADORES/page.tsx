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

export default function ComputadoresPage() {

  const produtos = [
    {
      nome: "Computador PC Gamer Completo",
      categoria: "Computador",
      preco: "R$ 2.249,90",
      imagem:
        "https://images8.kabum.com.br/produtos/fotos/sync_mirakl/646348/xlarge/Computador-PC-Gamer-Completo-Tob-Intel-Core-I7-SSD-480GB-16gb-Gabinete-Aqu-rio-Teclado-Mouse-Mouse-Pad-E-Headset-Gamer-Monitor-19-WINDOWS-10-Pro-Trial_1760704454.jpg",
      descricao:
        "Intel Core I7 SSD 480GB 16gb Gabinete Aquário Teclado Mouse Mouse Pad E Headset Gamer Monitor 19 WINDOWS 10 Pro Trial",
    },
    {
      nome: "PC Gamer Studiopc Tiamat",
      categoria: "Computador",
      preco: "R$ 61.999,00",
      imagem:
        "https://images5.kabum.com.br/produtos/fotos/sync_mirakl/1033415/xlarge/PC-Gamer-Studiopc-Tiamat-Ryzen-7-9800x3d-32GB-RAM-RTX-5080-16GB-SSD-1TB-Fonte-850w-Water-Cooler-360mm-5-Fans-RGB-Windows-11-Pro-8565432_1777475013.jpg",
      descricao:
        "Ryzen 7 9800x3d, 32GB RAM, RTX 5080 16GB, SSD 1TB, Fonte 850w, Water Cooler 360mm, 5 Fans RGB, Windows 11 Pro - 8565432",
    },
    {
      nome: "PC Gamer Aquário",
      categoria: "Computador",
      preco: "R$ 45.799,00",
      imagem:
        "https://images4.kabum.com.br/produtos/fotos/sync_mirakl/796624/xlarge/PC-Gamer-Aqu-rio-Intel-i7-14700KF-RTX-5080-64gb-Ddr5-Nvme-2TB-Kalango-Games_1775947410.png",
      descricao:
        "Intel i7 14700KF, RTX 5080, 64gb Ddr5, Nvme 2TB - Kalango Games",
    },
    {
      nome: "PC Gamer Amd Aquário",
      categoria: "Computador",
      preco: "R$ 32.799,00",
      imagem:
        "https://images1.kabum.com.br/produtos/fotos/sync_mirakl/725141/xlarge/PC-Gamer-Amd-Aqu-rio-Ryzen-7-9800x3d-RTX-5070-Ti-32gb-Ddr5-2TB-Nvme-W11-Kalango-Games_1775750314.png",
      descricao:
        "Ryzen 7 9800x3d, RTX 5070 Ti, 32gb Ddr5, 2TB Nvme, W11 - Kalango Games",
    },
    {
      nome: "PC Workstation",
      categoria: "Computador",
      preco: "R$ 59.999,00",
      imagem:
        "https://images1.kabum.com.br/produtos/fotos/sync_mirakl/796621/xlarge/PC-Workstation-Intel-i9-14900KF-RTX-5080-128GB-Ddr5-Nvme-4TB-W11-Kalango-Games_1776040112.png",
      descricao:
        "Intel i9 14900KF, RTX 5080, 128GB Ddr5, Nvme 4TB, W11 - Kalango Games",
    },
    {
      nome: "PC Gamer Completo",
      categoria: "Computador",
      preco: "R$ 3.799,00",
      imagem:
        "https://images7.kabum.com.br/produtos/fotos/sync_mirakl/684007/xlarge/PC-Gamer-Completo-Ryzen-5-5600gt-16gb-Ddr4-SSD-480GB-500w-80-Plus-PCgt13-e_1779735227.png",
      descricao:
        " Ryzen 5 5600gt, 16gb Ddr4, SSD 480GB, 500w 80 Plus, PCgt13-e",
    },
        {
      nome: 'Pc Gamer Completo Tob',
      categoria: "Computador",
      preco: "R$ 2.479,98",
      imagem:
        "https://images5.kabum.com.br/produtos/fotos/sync_mirakl/501425/xlarge/Pc-Gamer-Completo-Tob-Intel-Core-I7-16GB-VGA-GT730-4GB-SSD-960GB-Windows-10-Pro-Trial-Monitor-21-5-Teclado-E-Mouse-Mouse-Pad-Headset_1775478813.jpg",
      descricao:
        "Intel Core I7, 16GB, VGA GT730 4GB, SSD 960GB, Windows 10 Pro Trial + Monitor 21.5 + Teclado E Mouse + Mouse Pad + Headset",
    },
    {
      nome: "PC Gamer",
      categoria: "GAMER",
      preco: "R$ 26.706,60",
      imagem:
        "https://images6.kabum.com.br/produtos/fotos/sync_mirakl/697206/xlarge/PC-Gamer-Ryzen-7-9800x3d-RTX-4070-Super-32gb-Ddr5-RGB-SSD-Nvme-2TB-1000w-80-Plus-Gold-Toppc01-e_1775063612.webp",
      descricao:
        "Ryzen 7 9800x3d, RTX 4070 Super, 32gb Ddr5 RGB, SSD Nvme 2TB, 1000w 80 Plus Gold, Toppc01-e",
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
            Computadores
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de computadores para estudo, trabalho,
            programação, edição de vídeos e jogos.
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
