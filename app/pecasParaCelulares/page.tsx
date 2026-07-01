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
      categoria: "peças para celulares",
      preco: "R$79",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_790905-MLA99985696901_112025-F.webp",
      descricao:
        "Tela iPhone 11 6.1 Top + Película Display Frontal Lcd Compativel.",
    },
    {
      nome: "Pantalla Amoled Para Samsung",
      categoria: "NOTEBOOK",
      preco: "R$ 959,21",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_967581-CBT112249641520_062026-F.webp",
      descricao:
        "Pantalla Amoled Para Samsung S23 Ultra C/marco+tapa Trasera",
    },
    {
      nome: "Tela Display Moto G7",
      categoria: "NOTEBOOK",
      preco: "R$ 69,70",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_829108-MLA112458340199_052026-F.webp",
      descricao:
        "Tela Display Moto G7 Power Xt1955 Touch + Kit Ferramenta Preto",
    },
    {
      nome: "Tela para Infinix Hot 50i",
      categoria: "NOTEBOOK",
      preco: "R$ 78,47",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_628346-MLB105310020844_012026-F.webp",
      descricao:
        "Tela Frontal Display Touch Compatível Infinix Hot 50i C/a.",
    },
    {
      nome: "Bateria Para Lg K9 / K7",
      categoria: "NOTEBOOK",
      preco: "R$ 68,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_952207-MLB74607595964_022024-F.webp",
      descricao:
        "Bateria Para Bl-45f1f Lg K9 / K7 2017 / K8 2017",
    },
    {
      nome: "Bateria Para A10 A105 M10 M105 A750",
      categoria: "NOTEBOOK",
      preco: "R$ 68,90",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_780807-MLB76989987118_062024-F.webp",
      descricao:
        "Bateria Para A10 A105 M10 M105 A750 Eb-ba750abu Envio Ja",
    },
        {
      nome: 'Bateria para Moto G8 Play One Macro E7 Kg40',
      categoria: "APPLE",
      preco: "R$ 66,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_611319-MLB74688526493_022024-F.webp",
      descricao:
        "Bateria Compatível Moto G8 Play One Macro E7 Kg40.",
    },
    {
      nome: "Bateria Para Moto E22",
      categoria: "GAMER",
      preco: "R$ 79,88",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_832946-MLB78059620995_072024-F.webp",
      descricao:
        "Notebook Gamer MSI Katana com Intel Core i7, RTX 4060, 16GB de RAM, SSD de 1TB e tela de 144Hz.",
    },
    {
      nome: "Placa Conector Carga S24 Ultra",
      categoria: "GAMER",
      preco: "R$ 294,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_902415-MLB108323062232_032026-F.webp",
      descricao:
        "Placa Conector Carga S24 Ultra Original Samsung Gh96-16497a",
    },
    {
      nome: "Avell STORM 590X RTX 5090 | Intel Ultra 9",
      categoria: "GAMER",
      preco: "R$ 49.721,11",
      imagem:
        "https://eshop-api.avell.com.br/storage/resize/contain/_x500/5/catalog/productMedia/67f435269a4447222/691634637466f897.webp",
      descricao:
        "Intel® Core™ Ultra 9 275HX Nvidia GeForce® RTX 5090 (24GB GDDR7) 128GB [4x 32GB - 2x Dual Channel] Memória DDR5 SSD M.2 NVME 1TB - Geração 4 - [ 7.400 MB/s ] 18 QHD 2560x1600 - 240Hz / sRGB: 100% / Contraste: 1000:1 / Brilho 500 cd/m² Original Windows 11 Home Single Language",
    },
        {
      nome: 'Avell STORM 590X RTX 5090 | Intel Ultra 9',
      categoria: "GAMER",
      preco: "R$ 32.221,11",
      imagem:
        "https://eshop-api.avell.com.br/storage/resize/contain/_x500/5/catalog/productMedia/67f435269a4447222/691634637466f897.webp",
      descricao:
        "Intel® Core™ Ultra 9 275HX Nvidia GeForce® RTX 5090 (24GB GDDR7) 32GB [2x 16GB - Dual Channel] Memória DDR5 SSD M.2 NVME 512GB - Geração 4 - [ 3.500 MB/s ] Sem Armazenamento 2 Sem Armazenamento 3 Sem Armazenamento 4 18 QHD 2560x1600 - 240Hz / sRGB: 100% / Contraste: 1000:1 / Brilho 500 cd/m² Original Windows 11 Home Single Language",
    },
    {
      nome: "MSI SWORD 17",
      categoria: "GAMER",
      preco: "R$ 15.499,00",
      imagem:
        "https://images3.kabum.com.br/produtos/fotos/620563/notebook-gamer-msi-sword-17-hx-intel-ulttra-7-155h-16gb-ram-ssd-1tb-16-fhd-ips-qhd-240hz-rtx-4060-win-11h-preto-9s7-17t214-219_1730298524_gg.jpg",
      descricao:
        "Notebook Gamer MSI SWORD 17 HX Intel Core i7, 16GB RAM, SSD 1TB, 16 FHD, 240Hz, GeForce RTX 4060, Win 11H, Cinza - B14VFKG-242BR",
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
            Peças para celulares
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de algumas peças para celulares.
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
