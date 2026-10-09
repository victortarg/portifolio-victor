# Portfólio de Victor Targino

Portfólio pessoal de desenvolvedor back-end .NET, em português (`/`, padrão) e inglês (`/en`).
Site estático (100% pré-renderizado), sem backend.

**Stack:** SvelteKit 3 · Svelte 5 (runes) · TypeScript · SCSS · Vercel

## Rodando localmente

```sh
npm install
npm run dev        # http://localhost:5173
npm run check      # checagem de tipos
npm run build      # build de produção
npm run preview    # serve o build localmente
```

## Editando o conteúdo

Todo o texto do site fica em `src/lib/data/`, então não é preciso mexer nos componentes:

| Arquivo         | Conteúdo                                                             |
| --------------- | -------------------------------------------------------------------- |
| `profile.ts`    | Nome, cargo, apresentação, links, estatísticas, frentes de atuação   |
| `experience.ts` | Experiências profissionais (datas em `AAAA-MM`; duração é calculada) |
| `projects.ts`   | Projetos (`featured: true` = card em destaque)                       |
| `skills.ts`     | Grupos de tecnologias (`core: true` = destaque)                      |
| `education.ts`  | Formação acadêmica                                                   |
| `site.ts`       | URL do site e itens do menu                                          |

Campos de link vazios (`''`) escondem o botão correspondente automaticamente.

## Idiomas (i18n)

- **Conteúdo** (`src/lib/data/`): cada texto pode ser uma string, quando é igual nos dois idiomas
  (`'Reviz'`), ou um objeto `{ pt: '...', en: '...' }`. Listas traduzidas usam
  `{ pt: [...], en: [...] }`. O TypeScript acusa erro se faltar algum idioma.
- **Textos da interface** (botões, títulos de seção, SEO, datas): `src/lib/i18n/ui.ts`.
- **Nos componentes**: `const i18n = getI18n()`, depois `i18n.t(valor)` para conteúdo e
  `i18n.ui.secao.chave` para textos da interface.
- **Rotas**: `src/routes/[[lang=lang]]` com o matcher em `src/params.ts`. O `<html lang>` é
  preenchido em `src/hooks.server.ts`.

## Estrutura

```
src/
├── app.html                 # aplica o tema salvo antes da primeira pintura
├── hooks.server.ts          # <html lang> de acordo com o idioma
├── params.ts                # matcher da rota de idioma (só "en")
├── routes/
│   ├── +layout.svelte       # fontes, estilos globais, SEO, contexto de idioma, header/footer
│   ├── +layout.ts           # prerender = true
│   └── [[lang=lang]]/       # / (português) e /en (inglês)
│       ├── +page.svelte     # monta as seções
│       └── +page.ts         # gera as duas versões no prerender
└── lib/
    ├── components/          # uma seção/peça por componente
    ├── data/                # conteúdo do site (pt + en)
    ├── i18n/                # idiomas, textos da interface e contexto
    ├── actions/reveal.ts    # animação ao rolar (respeita prefers-reduced-motion)
    ├── utils/date.ts        # formatação de períodos
    ├── types.ts
    └── styles/
        ├── _abstracts.scss  # funções + mixins + breakpoints (sem CSS)
        ├── _functions.scss  # rem(), fluid()
        ├── _breakpoints.scss# up(md), down(lg)…
        ├── _mixins.scss     # hover, focus-ring, card, mono-label…
        ├── _tokens.scss     # design tokens → CSS custom properties (tema claro/escuro)
        ├── _base.scss       # reset + elementos
        ├── _utilities.scss  # .container, .sr-only, reveal
        ├── _components.scss # .btn, .tag, .icon-btn
        └── global.scss      # entrada dos estilos globais
```

Os abstracts (`rem()`, `fluid()`, `@include up(md)`, etc.) são injetados automaticamente em todo
`<style lang="scss">` pelo `vite.config.ts`, então não precisa de `@use` nos componentes.

Imports internos usam o alias `#lib/...` (padrão do SvelteKit 3), com extensão `.ts` para módulos TypeScript.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel: **Add New → Project**, importe o repositório. O preset do SvelteKit é detectado sozinho.
3. Depois do primeiro deploy, preencha `site.url` em `src/lib/data/site.ts` com a URL final.
