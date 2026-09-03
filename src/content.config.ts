import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Bloco opcional de recursos extras de uma aula (vídeo aula, curso gratuito,
// materiais adicionais, conteúdo complementar). Cada seção é independente —
// só renderiza no site se estiver preenchida no frontmatter.
const resourcesSchema = z.object({
  videoAula: z
    .object({
      link: z.string(),
      duracao: z.string().optional(),
      motivo: z.string().optional(), // por que assistir
    })
    .optional(),
  cursoGratuito: z
    .object({
      link: z.string(),
      cargaHoraria: z.string().optional(),
      indicadoPara: z.string().optional(), // ex: "iniciante", "revisão", "avançado"
    })
    .optional(),
  materiaisAdicionais: z
    .object({
      ebook: z.string().optional(),
      exercicios: z.string().optional(),
      provaAntiga: z.string().optional(),
      outro: z.string().optional(),
      nivel: z.string().optional(), // ex: "fácil", "médio", "difícil"
    })
    .optional(),
  conteudoComplementar: z
    .object({
      conteudo: z.string(),
      comoAjuda: z.string().optional(),
    })
    .optional(),
});

// Schema compartilhado pelas 3 coleções (enem, escolar, ds).
const lessonSchema = z.object({
  title: z.string(),
  subject: z.string(),
  relevance: z.string(),
  quickSummary: z.string().optional(), // resumo rápido de 2-4 linhas, direto ao ponto
  order: z.number().default(1),
  resources: resourcesSchema.optional(),
});

// ENEM: matéria -> tema (sem bimestre/semana)
const enem = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/enem' }),
  schema: lessonSchema,
});

// Escolar: matéria -> bimestre -> semana -> tema
const escolar = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/escolar' }),
  schema: lessonSchema,
});

// DS: matéria -> bimestre -> semana -> tema
const ds = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/ds' }),
  schema: lessonSchema,
});

export const collections = { enem, escolar, ds };
