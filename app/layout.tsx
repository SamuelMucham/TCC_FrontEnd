/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tecflow - Assistência tecnica",
  description: "a maior assistencia tecnica do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="bg-[#fff3cd] text-[#856404] text-center py-2 text-sm font-bold border-b border-[#ffeeba]">
            GANHE 5% DE DESCONTO NA SUA PRIMEIRA COMPRA! USE O CUPOM{" "}
            <span className="uppercase bg-white px-1 rounded text-red-600">
              1COMPRA
            </span>
          </div>

          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <a
                href="/"
                className="text-3xl font-extrabold text-[#e30613] uppercase tracking-tighter"
              >
                TECFLOW
              </a>

              <div className="flex-1 max-w-2xl w-full relative">
                <input
                  type="text"
                  placeholder="O que você está procurando?"
                  className="w-full pl-4 pr-12 py-2.5 border-2 border-gray rounded-l-md focus:outline-none focus:border-[#e30613] text-sm"
                />
                <button className="absolute right-0 top-0 h-full bg-[#e30613] text-white px-6 font-bold rounded-r-md hover:bg-[#b3000a] transition-colors">
                  Buscar
                </button>
              </div>

              <div className="flex gap-6 text-sm text-gray-600">
                <a
                  href="entreOuCadastreSe"
                  className="flex flex-col items-center hover:text-[#e30613] transition"
                >
                  <span className="text-xl"></span>
                  <span className="text-xs">Entre ou Cadastre-se</span>
                </a>
                <a
                  href="/meusPedidos"
                  className="flex flex-col items-center hover:text-[#e30613] transition"
                >
                  <span className="text-xl"></span>
                  <span className="text-xs">Meus Pedidos</span>
                </a>
                <a
                  href="/carrinho"
                  className="flex flex-col items-center hover:text-[#e30613] transition"
                >
                  <span className="text-xl"></span>
                  <span className="text-xs">Carrinho</span>
                </a>
              </div>
            </div>
          </div>

          <nav className="bg-[#222] text-white">
            <div className="container mx-auto px-4 overflow-x-auto">
              <ul className="flex whitespace-nowrap py-3 text-sm font-medium gap-6">
                <li>
                  <Link
                    href="/TVS"
                    className="hover:text-red-500 transition"
                  >
                    TVs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/NOTEBOOKS"
                    className="hover:text-red-500 transition"
                  >
                    NOTEBOOKS
                  </Link>
                </li>

                <li>
                  <Link
                    href="/outros"
                    className="hover:text-red-500 transition"
                  >
                    outros
                  </Link>
                </li>

              </ul>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-[#222] text-gray-400 pt-12 pb-6 text-sm text-center">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <p className="text-xs">
              <span className="text-gray-500">
                <span className="font-bold">Tecflow</span> é uma plataforma de
                vendas de equipamentos e ferramentas para celulares e
                computadores.
              </span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
