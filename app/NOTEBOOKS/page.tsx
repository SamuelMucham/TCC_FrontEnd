"use client";

/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/navigation";

export default function NotebooksPage() {
  const router = useRouter();

  const produtos = [
    {
      nome: "Notebook Lenovo IdeaPad 1 Ryzen 5",
      categoria: "NOTEBOOK",
      preco: "R$ 2.799,90",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_891763-MLA112377969125_052026-F.webp",
      descricao:
        "Notebook Lenovo IdeaPad com processador AMD Ryzen 5, 8GB de memória RAM, SSD de 256GB e tela Full HD de 15,6 polegadas.",
    },
    {
      nome: "Notebook Dell Inspiron 15 Intel Core i5",
      categoria: "NOTEBOOK",
      preco: "R$ 3.499,90",
      imagem:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3530-intel/media-gallery/black/notebook-inspiron-15-3530-nt-plastic-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full",
      descricao:
        "Notebook Dell Inspiron equipado com Intel Core i5 de 13ª geração, SSD de 512GB, 8GB de RAM e Windows 11.",
    },
    {
      nome: "Notebook Acer Aspire 5 Ryzen 7",
      categoria: "NOTEBOOK",
      preco: "R$ 3.899,90",
      imagem:
        "https://m.media-amazon.com/images/I/61fdWMFFv-L.AC_SL1000.jpg",
      descricao:
        "Notebook Acer Aspire 5 com Ryzen 7, SSD de 512GB, tela IPS Full HD e excelente desempenho para trabalho e estudos.",
    },
    {
      nome: "Notebook ASUS VivoBook 15",
      categoria: "NOTEBOOK",
      preco: "R$ 3.299,90",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_982613-MLA87788350616_072025-F.webp",
      descricao:
        "ASUS VivoBook 15 com Intel Core i5, SSD de 512GB, design fino e tela NanoEdge Full HD.",
    },
    {
      nome: "Notebook Samsung Galaxy Book4",
      categoria: "NOTEBOOK",
      preco: "R$ 3.999,90",
      imagem:
        "https://samsungbrshop.vtexassets.com/arquivos/ids/253818-600-auto?v=638850946568430000",
      descricao:
        "Samsung Galaxy Book4 com Intel Core i5, SSD de 512GB e integração perfeita com smartphones Galaxy.",
    },
    {
      nome: "Notebook HP 256 G9",
      categoria: "NOTEBOOK",
      preco: "R$ 4.299,90",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c07973357_1.png",
      descricao:
        "Notebook HP 256 G9 com Intel Core i7, SSD de 512GB, 16GB de RAM e excelente desempenho para produtividade.",
    },
        {
      nome: 'Apple MacBook Air 13" M3',
      categoria: "APPLE",
      preco: "R$ 9.499,90",
      imagem:
        "https://cdn.awsli.com.br/2500x2500/2757/2757071/produto/332437926/0_aemxct3bzapta_prd_1500_1-jpg-quoh4k92ym.webp",
      descricao:
        "MacBook Air equipado com chip Apple M3, tela Liquid Retina, SSD de 512GB e bateria para o dia inteiro.",
    },
    {
      nome: "MSI Katana 15 RTX 4060",
      categoria: "GAMER",
      preco: "R$ 8.199,90",
      imagem:
        "https://i5.walmartimages.com/seo/MSI-Katana-15-6-Gaming-Laptop-144Hz-FHD-Intel-Core-i7-13620H-NVIDIA-GeForce-RTX-4060-8GB-16GB-DDR5-Memory-1TB-NVMe-SSD-Windows-11-Black-B13VFK-817US_19d1ab0a-edde-44d9-826c-b8e9798ae11b.2ccb79676bb85cefcb7bb917dcbef1cc.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",
      descricao:
        "Notebook Gamer MSI Katana com Intel Core i7, RTX 4060, 16GB de RAM, SSD de 1TB e tela de 144Hz.",
    },
    {
      nome: "Avell STORM 590X RTX 5090 | Intel Ultra 9",
      categoria: "GAMER",
      preco: "R$ 51.082,22",
      imagem:
        "https://eshop-api.avell.com.br/storage/resize/contain/_x500/5/catalog/productMedia/67f435269a4447222/691634637466f897.webp",
      descricao:
        "ntel® Core™ Ultra 9 275HX Nvidia GeForce® RTX 5090 (24GB GDDR7) 128GB [4x 32GB - 2x Dual Channel] Memória DDR5 SSD M.2 NVME 2TB - Geração 4 - [ 6.000 MB/s ] 18 QHD 2560x1600 - 240Hz / sRGB: 100% / Contraste: 1000:1 / Brilho 500 cd/m² Original Windows 11 Pro",
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
      nome: "MSI Katana 15 RTX 4060",
      categoria: "GAMER",
      preco: "R$ 8.199,90",
      imagem:
        "https://i5.walmartimages.com/seo/MSI-Katana-15-6-Gaming-Laptop-144Hz-FHD-Intel-Core-i7-13620H-NVIDIA-GeForce-RTX-4060-8GB-16GB-DDR5-Memory-1TB-NVMe-SSD-Windows-11-Black-B13VFK-817US_19d1ab0a-edde-44d9-826c-b8e9798ae11b.2ccb79676bb85cefcb7bb917dcbef1cc.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",
      descricao:
        "Notebook Gamer MSI Katana com Intel Core i7, RTX 4060, 16GB de RAM, SSD de 1TB e tela de 144Hz.",
    },
  ];

  function adicionarCarrinho(produto: unknown) {
    const carrinho = JSON.parse(
      localStorage.getItem("carrinho") || "[]"
    );

    carrinho.push(produto);

    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );

    router.push("/carrinho");
  }

    return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Notebooks
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de notebooks para estudo, trabalho,
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
