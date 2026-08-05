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

export default function todosPage() {

  const produtos = [
    
  ].sort(() => Math.random() - 0.5);


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
            todos os itens
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Aqui tem todos os itens da loja.
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
