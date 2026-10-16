import type { Project } from '#lib/types.ts';

export const projects: Project[] = [
	{
		slug: 'stv-importados',
		name: 'STV Importados',
		tagline: {
			pt: 'Catálogo online de uma loja de produtos importados dos EUA',
			en: 'Online catalog for a store selling products imported from the US'
		},
		description: {
			pt: 'Nova versão do site de uma loja de Fortaleza que vende produtos originais dos Estados Unidos, pensada para ser o link da bio do Instagram. O cliente navega pelas categorias, busca por produto ou marca, monta a sacola e fecha o pedido pelo WhatsApp. A loja cuida de produtos, categorias e textos num painel protegido pelo Cloudflare Access, e as páginas saem prontas do servidor, com SEO e prévia de link para cada produto.',
			en: 'A new version of the website for a Fortaleza store that sells original products from the United States, built to be its Instagram bio link. Customers browse the categories, search by product or brand, fill a bag and close the order over WhatsApp. The store manages products, categories and texts in a panel protected by Cloudflare Access, and pages are server-rendered with SEO and a link preview for every product.'
		},
		highlights: {
			pt: [
				'Painel administrativo com login pelo Cloudflare Access',
				'Produtos, categorias e textos da loja editáveis no painel',
				'Busca por produto ou marca e página própria para cada produto',
				'Sacola salva no navegador e enviada pelo WhatsApp com itens e total',
				'SEO com sitemap, dados estruturados e prévia de link por produto',
				'Catálogo de reserva para o site nunca abrir vazio, coberto por testes'
			],
			en: [
				'Admin panel with sign-in through Cloudflare Access',
				'Products, categories and store texts editable in the panel',
				'Search by product or brand, and a page of its own for every product',
				'Bag saved in the browser and sent over WhatsApp with items and total',
				'SEO with a sitemap, structured data and a link preview per product',
				'Fallback catalog so the site never opens empty, covered by tests'
			]
		},
		stack: [
			'SvelteKit',
			'TypeScript',
			'SCSS',
			'Cloudflare Workers',
			'Cloudflare D1',
			'Cloudflare R2',
			'Vitest'
		],
		kind: { pt: 'Projeto para cliente', en: 'Client project' },
		status: 'Online',
		featured: true,
		image: {
			src: '/projects/stv-importados.webp',
			alt: {
				pt: 'Página inicial da STV Importados, com o título Importados originais, escolhidos para você, a busca de produtos e uma fileira de suplementos com preços',
				en: 'The STV Importados home page, with the heading Importados originais, escolhidos para você, a product search box and a row of supplements with prices'
			},
			width: 1280,
			height: 800
		},
		links: {
			demo: 'https://stvimportados.vtal.workers.dev'
		}
	},
	{
		slug: 'eis-me-aqui',
		name: 'Camisas Eis-me Aqui',
		tagline: {
			pt: 'Catálogo online de uma loja de camisas católicas',
			en: 'Online catalog for a Catholic t-shirt shop'
		},
		description: {
			pt: 'Site de catálogo para uma loja de Fortaleza, com painel administrativo. Quem compra escolhe modelo, cor e tamanho de cada camisa, monta o pedido com quantas peças quiser e envia tudo pelo WhatsApp, com os itens e o total já calculados. A loja cuida do catálogo pelo painel, com os dados no Cloudflare D1 e as fotos no R2.',
			en: 'A catalog website for a shop in Fortaleza, with an admin panel. Customers pick the model, color and size of each shirt, build an order with as many pieces as they want and send it over WhatsApp with the items and total already worked out. The shop manages its catalog through the panel, with data in Cloudflare D1 and photos in R2.'
		},
		highlights: {
			pt: [
				'Painel administrativo para cadastrar produtos e fotos',
				'Dados no Cloudflare D1 e imagens no R2, servidas em WebP',
				'Variações de modelo, cor e tamanho, com preço próprio por modelo',
				'Pedido salvo no navegador e enviado pelo WhatsApp com itens e total',
				'Catálogo renderizado no servidor, no ar em domínio próprio'
			],
			en: [
				'Admin panel to manage products and photos',
				'Data in Cloudflare D1 and images in R2, served as WebP',
				'Model, color and size variants, with a price per model',
				'Order saved in the browser and sent over WhatsApp with items and total',
				'Server-rendered catalog, live on its own domain'
			]
		},
		stack: ['SvelteKit', 'TypeScript', 'Cloudflare D1', 'Cloudflare R2'],
		kind: { pt: 'Projeto para cliente', en: 'Client project' },
		status: 'Online',
		featured: true,
		image: {
			src: '/projects/eis-me-aqui.webp',
			alt: {
				pt: 'Catálogo do site Camisas Eis-me Aqui, com o título Nossas camisas e fotos das camisas Sagrado coração de Maria, Santa Teresinha e São Bento',
				en: 'The Camisas Eis-me Aqui catalog page, with the heading Nossas camisas and photos of three shirts'
			},
			width: 1280,
			height: 800
		},
		links: {
			demo: 'https://camisaseismeaqui.com.br'
		}
	},
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
		kind: { pt: 'Projeto pessoal', en: 'Personal project' },
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
