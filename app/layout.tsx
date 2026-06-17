/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
          <div className="bg-[#222] text-white text-xs py-2 text-center">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <span>Envie seu CEP para calcular o frete</span>
              <span className="font-bold text-red-400">
                Televendas: (41) 91236-4876
              </span>
            </div>
          </div>

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
                  placeholder="O que você está procurando? (ex: parafusadeira, betoneira)"
                  className="w-full pl-4 pr-12 py-2.5 border-2 border-gray-300 rounded-l-md focus:outline-none focus:border-[#e30613] text-sm"
                />
                <button className="absolute right-0 top-0 h-full bg-[#e30613] text-white px-6 font-bold rounded-r-md hover:bg-[#b3000a] transition-colors">
                  Buscar
                </button>
              </div>

              <div className="flex gap-6 text-sm text-gray-600">
                <a
                  href="#"
                  className="flex flex-col items-center hover:text-[#e30613] transition"
                >
                  <span className="text-xl">👤</span>
                  <span className="text-xs">Entre ou Cadastre-se</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center hover:text-[#e30613] transition"
                >
                  <span className="text-xl">📦</span>
                  <span className="text-xs">Meus Pedidos</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center hover:text-[#e30613] transition"
                >
                  <span className="text-xl">🛒</span>
                  <span className="text-xs">Carrinho</span>
                </a>
              </div>
            </div>
          </div>

          <nav className="bg-[#222] text-white ">
            <div className="container mx-auto px-4 overflow-x-auto">
              <ul className="flex whitespace-nowrap py-3 text-sm font-medium gap-6 ">
                <li>
                  <a
                    href="/ofertasdodia"
                    className="hover:text-red-500 transition jusfiy-center align-center"
                  >
                    Ofertas do Dia
                  </a>
                </li>
                <li>
                  <a href="/serviços" className="hover:text-red-500 transition">
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="/telaquedrada"
                    className="hover:text-red-500 transition"
                  >
                    Telas Quedradas
                  </a>
                </li>
                <li>
                  <a
                    href="/Bateriasinchadas"
                    className="hover:text-red-500 transition"
                  >
                    Baterias inchadas
                  </a>
                </li>
                <li>
                  <a
                    href="/cameraquedradas"
                    className="hover:text-red-500 transition"
                  >
                    Cameras Quedradas
                  </a>
                </li>
                <li>
                  <a href="/outros" className="hover:text-red-500 transition">
                    Outros
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-[#222] text-gray-400 pt-12 pb-6 text-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {" "}
              <div>
                <h4 className="text-white font-bold uppercase mb-4 border-b-2 border-[#e30613] inline-block pb-1">
                  Institucional
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Quem somos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Sustentabilidade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Trabalhe Conosco
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase mb-4 border-b-2 border-[#e30613] inline-block pb-1">
                  Atendimento
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Central de Ajuda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Trocas e Devoluções
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Formas de Pagamento
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Entrega
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase mb-4 border-b-2 border-[#e30613] inline-block pb-1">
                  Categorias
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Ferramentas Elétricas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Equipamento Auto Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Ferramentas Manuais
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Jardinagem
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase mb-4 border-b-2 border-[#e30613] inline-block pb-1">
                  Contato
                </h4>
                <ul className="space-y-2">
                  <li>
                    Televendas:{" "}
                    <span className="text-white font-bold">
                      (41) 91236-4876
                    </span>
                  </li>
                  <li>
                    Vendas Corp:{" "}
                    <span className="text-white font-bold">
                      (41) 91236-4876
                    </span>
                  </li>
                  <li>
                    Email:{" "}
                    <span className="text-white font-bold">
                      corporativo@lojadomecanico.com.br
                    </span>
                  </li>
                  <li className="mt-4 text-xs text-gray-500">
                    GurgelMix Máquinas e Ferramentas S.A.
                    <br />
                    CNPJ: 29.302.348/0001-15
                    <br />
                    Franca - SP
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 text-center text-xs">
              <p>
                © 2000-2026 Loja do Mecânico - Todos os direitos reservados.
              </p>
              <p className="mt-2 text-gray-500">
                Em caso de divergência de preços, o valor válido é o do Carrinho
                de Compras.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
