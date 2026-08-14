import { api } from "./api";

export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
  descricao: string;
}

export async function listarProdutos() {
  return api<Produto[]>("/produtos");
}