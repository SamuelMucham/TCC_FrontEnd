/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link";

export default function ProdutoNaoEncontradoPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-10 md:p-14 text-center">
        <span className="inline-block bg-[#e30613] text-white text-xs font-bold px-4 py-1 rounded-full mb-6">
          ERRO 404
        </span>

        <div className="text-7xl mb-6" aria-hidden="true">
          🔍
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Produto não encontrado
        </h1>

        <p className="text-gray-500 text-lg max-w-md mx-auto mb-10">
          O produto que você está procurando não existe, foi removido ou o
          link que você usou está incorreto.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-linear-to-r from-[#e30613] to-red-700 hover:from-red-700 hover:to-[#e30613] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Voltar para a loja
          </Link>

          <Link
            href="/produtos/todos"
            className="border-2 border-[#e30613] text-[#e30613] hover:bg-[#e30613] hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
          >
            Ver todos os produtos
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 mb-4">
            Ou procure em uma das nossas categorias
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
            <Link
              href="/produtos/TVS"
              className="text-gray-600 hover:text-[#e30613] transition"
            >
              TVs
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/produtos/NOTEBOOKS"
              className="text-gray-600 hover:text-[#e30613] transition"
            >
              Notebooks
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/produtos/COMPUTADORES"
              className="text-gray-600 hover:text-[#e30613] transition"
            >
              Computadores
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/produtos/perifericos"
              className="text-gray-600 hover:text-[#e30613] transition"
            >
              Periféricos
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/pecas/todasAsPecas"
              className="text-gray-600 hover:text-[#e30613] transition"
            >
              Peças
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
