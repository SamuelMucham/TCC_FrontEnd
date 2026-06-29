type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function BuscarPage({searchParams}:Props) {
   const { q: termo } = await searchParams;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold">
        Resultado da busca
      </h1>

      <p className="mt-5">
        Você pesquisou:
        <strong> {termo}</strong>
      </p>

      <p className="mt-2 text-gray-500">
        Redirecionando...
      </p>
    </div>
  );
}