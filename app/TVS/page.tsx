/* eslint-disable @next/next/no-img-element */

export default function TVSPage() {
  const produtos = [
    {
      nome: 'Smart TV TCL 32" HD QLED S5K',
      categoria: "TV",
      preco: "R$ 937,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_960494-MLA112210788972_062026-F.webp",
      descricao:
        "Tela QLED com HDR10, Google TV integrado, Dolby Audio e design sem bordas para uma experiência imersiva.",
    },
    {
      nome: 'Smart TV TCL 40" Full HD QLED',
      categoria: "TV",
      preco: "R$ 1.538,00",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_691006-MLA112210093376_062026-F.webp",
      descricao:
        "Tela Full HD QLED, Google TV, Wi-Fi Dual Band, Bluetooth 5.0 e múltiplas conexões HDMI.",
    },
    {
      nome: 'Smart TV AOC 32" Roku TV',
      categoria: "TV",
      preco: "R$ 934,27",
      imagem: "https://m.media-amazon.com/images/I/618HST9rp6L._AC_SL1000_.jpg",
      descricao:
        "Roku TV integrada, Wi-Fi, compatível com Alexa e Google Assistente, design moderno sem bordas.",
    },
    {
      nome: 'Samsung Smart TV 50" Crystal UHD 4K',
      categoria: "TV",
      preco: "R$ 4.399,35",
      imagem: "https://m.media-amazon.com/images/I/71iGUDQvOYL._AC_SL1500_.jpg",
      descricao:
        "Crystal UHD 4K, Xbox Cloud Gaming, Alexa integrada e qualidade de imagem impressionante.",
    },
    {
      nome: 'Smart TV TCL 65" QLED 4K P7K',
      categoria: "TV",
      preco: "R$ 2.164,00",
      imagem:
        "https://m.media-amazon.com/images/I/81AtIfydXvL._AC_SY300_SX300_QL70_ML2_.jpg",
      descricao:
        "QLED 4K com Dolby Vision, Dolby Atmos, Google TV e design premium para máxima imersão.",
    },
    {
      nome: 'LG Smart TV 55" UHD 4K',
      categoria: "TV",
      preco: "R$ 2.799,90",
      imagem:
        "https://www.lg.com/content/dam/channel/wcms/br/images/tv/ua8550psa/new-galery/2-1600-ua8550.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800",
      descricao:
        "Tela UHD 4K com HDR10 Pro, sistema WebOS 23, ThinQ AI e Alexa integrada para uma experiência inteligente.",
    },
    {
      nome: 'Philips Smart TV 43" Full HD',
      categoria: "TV",
      preco: "R$ 1.699,90",
      imagem: "https://m.media-amazon.com/images/I/61ClMfyPd+L._AC_SL1000_.jpg",
      descricao:
        "Google TV integrada, Full HD, HDR, Wi-Fi e Bluetooth para acesso rápido aos seus aplicativos favoritos.",
    },
    {
      nome: 'TCL Smart TV 75" QLED 4K',
      categoria: "TV",
      preco: "R$ 4.999,90",
      imagem:
        "https://tvlar.vtexassets.com/arquivos/ids/19937241-800-auto?v=639090084887930000&width=800&height=auto&aspect=true",
      descricao:
        "Tela gigante de 75 polegadas com tecnologia QLED, Dolby Vision, HDR10+ e Google TV para máximo entretenimento.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#e30613] mb-4">TVs</h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de Smart TVs com as melhores tecnologias,
            resolução 4K, Google TV, Roku TV e muito mais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-200 transition-all duration-300 hover:-translate-y-3 border border-gray-100"
            >
              <div className="relative bg-gradient-to-b from-gray-50 to-white p-5">
                <span className="absolute top-4 left-4 bg-[#e30613] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {produto.categoria}
                </span>

                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-60 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-5 flex flex-col h-[280px]">
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

                  <button className="w-full bg-gradient-to-r from-[#e30613] to-red-700 hover:from-red-700 hover:to-[#e30613] text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105">
                    Ver Produto
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
