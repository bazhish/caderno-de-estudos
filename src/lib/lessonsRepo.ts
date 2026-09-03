// Fonte única de aulas: arquivos MDX versionados no repositório.
import { getCollection } from 'astro:content';

export type Categoria = 'enem' | 'escolar' | 'ds';

// Formato compatível com as entradas de getCollection() — as páginas de
// listagem e o buildMateriaBimestreTree funcionam sem mudança.
export interface EntradaAula {
  id: string; // caminho após a categoria, ex: "fisica/cinematica"
  data: { subject: string; order: number; title: string };
}

export async function listarEntradas(categoria: Categoria): Promise<EntradaAula[]> {
  const aulas = await getCollection(categoria);
  return aulas.map((aula) => ({
    id: aula.id,
    data: { subject: aula.data.subject, order: aula.data.order, title: aula.data.title },
  }));
}
