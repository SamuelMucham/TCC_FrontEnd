export default function CarrinhoPage() {
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold text-[#e30613] mb-6">
        Carrinho de Compras
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-600 mb-4">
          Confira os produtos adicionados ao seu carrinho.
        </p>

        <div className="border rounded-lg p-4">
          <p className="font-semibold">Seu carrinho está vazio.</p>
          <p className="text-sm text-gray-500">
            Adicione produtos para continuar sua compra.
          </p>
        </div>

        
      </div>
    </div>
  );
}