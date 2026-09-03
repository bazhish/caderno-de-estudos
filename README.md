# Caderno de Estudos

Uma biblioteca estática de aulas organizada em três frentes: ENEM, Escolar e Desenvolvimento de Sistemas (DS).

O conteúdo é publicado como arquivos MDX versionados em `src/content/`. Não há login, perfil, comentários, banco de dados, APIs ou serviços de servidor.

## Executar localmente

```bash
npm ci
npm run dev
```

## Adicionar uma aula

Crie um arquivo `.mdx` na categoria adequada dentro de `src/content/`, mantendo o padrão de caminhos:

- `enem/<materia>/<tema>.mdx`
- `escolar/<materia>/<bimestre>/<semana>.mdx`
- `ds/<materia>/<bimestre>/<semana>.mdx`

Cada aula usa o frontmatter com `title`, `subject`, `relevance`, `quickSummary` (opcional), `order` e `resources` (opcional).

## Publicação

Todo push para a branch `main` executa o build estático e publica o resultado no GitHub Pages. Para este repositório, a publicação usa a base `/proverbios/`.
