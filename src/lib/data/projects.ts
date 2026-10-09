import type { Project } from '#lib/types.ts';

export const projects: Project[] = [
	{
		slug: 'reviz',
		name: 'Reviz',
		tagline: {
			pt: 'Sistema de flashcards para um estudo mais dinâmico',
			en: 'A flashcard system for more dynamic studying'
		},
		description: {
			pt: 'Aplicação web de flashcards com autenticação, cartões organizados em pastas e recomendação das questões a revisar. Começou salvando tudo no localStorage e evoluiu para um banco de dados no Supabase, com deploy contínuo na Vercel.',
			en: 'A flashcard web app with authentication, cards organized into folders and recommendations of which questions to review. It started out saving everything to localStorage and evolved into a Supabase database, with continuous deployment on Vercel.'
		},
		highlights: {
			pt: [
				'Login com Google ou com e-mail e senha',
				'Cartões organizados em pastas, com opção de foto no verso',
				'Algoritmo de recomendação das questões',
				'Compartilhamento de cards por link'
			],
			en: [
				'Sign in with Google or with email and password',
				'Cards organized into folders, with an optional photo on the back',
				'Question recommendation algorithm',
				'Share cards via link'
			]
		},
		stack: ['Svelte', 'JavaScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
		status: 'Online',
		featured: true,
		links: {
			demo: 'https://reviz-flashcards.vercel.app',
			repo: 'https://github.com/victortarg/flashcards'
		}
	},
	{
		slug: 'portfolio',
		name: { pt: 'Este portfólio', en: 'This portfolio' },
		tagline: { pt: 'Site pessoal', en: 'Personal website' },
		description: {
			pt: 'Construído do zero com SvelteKit e TypeScript. Estilização em SCSS com design tokens, tema claro/escuro sem flash, versões em português e inglês, animações que respeitam prefers-reduced-motion e páginas 100% pré-renderizadas.',
			en: 'Built from scratch with SvelteKit and TypeScript. SCSS styling with design tokens, flash-free light/dark theme, Portuguese and English versions, animations that respect prefers-reduced-motion and fully prerendered pages.'
		},
		stack: ['SvelteKit', 'TypeScript', 'SCSS', 'Vercel'],
		links: {
			repo: 'https://github.com/victortarg/portifolio-victor'
		}
	}
];
