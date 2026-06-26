/* eslint-disable @next/next/no-html-link-for-pages */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Busca from "./components/Busca";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assistencia tecnica forja - Assistência tecnica",
  description: "A maior assistência técnica do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header>
          {/* Barra superior */}
          <div className="bg-[#fff3cd] text-[#856404] text-center py-2 text-sm font-bold border-b border-[#ffeeba]">
            GANHE 5% DE DESCONTO NA SUA PRIMEIRA COMPRA! USE O CUPOM{" "}
            <span className="font-bold">1COMPRA</span>
          </div>

          {/* Cabeçalho */}
  <div className="bg-white shadow-sm border-b border-gray-200">
  <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
              <a
                href="/"
                className="text-3xl font-extrabold text-[#e30613] uppercase tracking-tighter"
              >
                Assistencia tecnica forja
              </a>

              {/* Busca */}
              <Busca />

              {/* Links */}
              <div className="flex gap-6 text-sm text-gray-600">
                <a
                  href="/entreOuCadastreSe"
                  className="flex flex-col items-center hover:text-[#e30613] transition"
                >
                  <span className="text-xl"></span>
                  <span className="text-xs">
                    Entre ou Cadastre-se
                  </span>
                </a>

                <a
                  href="/carrinho"
                  className="flex flex-col items-center hover:text-[#e30613] transition"
                >
                  <span className="text-xl"></span>
                  <span className="text-xs">
                    Carrinho
                  </span>
                </a>
              </div>
            </div>
          </div>
          </div>
          {/* Menu */}
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
                    href="/COMPUTADORES"
                    className="hover:text-red-500 transition"
                  >
                    COMPUTADORES
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
                <span className="font-bold">
                  Assistencia tecnica forja
                </span>{" "}
                é uma plataforma de vendas de equipamentos e ferramentas para
                celulares e computadores.
              </span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}