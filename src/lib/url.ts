// Prefixa caminhos internos com a base do site. No GitHub Pages deste
// repositório, "/enem" vira "/caderno-de-estudos/enem". Em desenvolvimento a base é
// "/", e o caminho sai inalterado. Todo href interno deve passar por aqui.
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function u(path: string): string {
  return `${base}${path}` || '/';
}
