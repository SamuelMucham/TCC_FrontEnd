export default function MeusPedidosPage() {
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold text-[#e30613] mb-6">
        Meus Pedidos
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-600 mb-4">
          Aqui você poderá acompanhar todos os seus pedidos.
        </p>

        <div className="border rounded-lg p-4">
          <p className="font-semibold">Nenhum pedido encontrado.</p>
          <p className="text-sm text-gray-500">
            Seus pedidos aparecerão aqui após uma compra.
          </p>
        </div>
      </div>
    </div>
  );
}