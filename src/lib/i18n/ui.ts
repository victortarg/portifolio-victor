import type { Locale } from './locales.ts';

const pt = {
	meta: {
		title: 'Victor Targino | Desenvolvedor Full-Stack com foco em back-end .NET',
		description:
			'Portfólio de Victor Targino, desenvolvedor full-stack com foco em back-end: APIs com C#, .NET e SQL Server, e interfaces com SvelteKit e TypeScript.'
	},
	a11y: {
		skip: 'Pular para o conteúdo',
		home: (name: string) => `${name}, voltar ao início`,
		sections: 'Seções',
		openMenu: 'Abrir menu',
		closeMenu: 'Fechar menu',
		lightTheme: 'Ativar tema claro',
		darkTheme: 'Ativar tema escuro',
		toggleTheme: 'Alternar tema',
		language: 'Idioma do site',
		sendEmail: 'Enviar e-mail',
		technologies: 'Tecnologias',
		focusAreas: 'Principais frentes de atuação',
		apiCard: 'Resumo do perfil no formato de uma resposta de API',
		apiTabs: 'Formato da resposta'
	},
	hero: {
		status: 'Disponível para novas oportunidades',
		viewProjects: 'Ver projetos',
		contact: 'Entrar em contato'
	},
	sections: {
		about: { endpoint: '/sobre', title: 'Sobre mim' },
		experience: {
			endpoint: '/experiencia',
			title: 'Experiência',
			lede: 'Do legado ao moderno: sistemas em produção, APIs novas e as telas que consomem essas APIs.'
		},
		projects: {
			endpoint: '/projetos',
			title: 'Projetos',
			lede: 'Projetos no ar, para clientes e pessoais, do banco de dados ao deploy.'
		},
		stack: {
			endpoint: '/stack',
			title: 'Stack & competências',
			lede: 'Da interface ao banco de dados, com o peso no back-end. Em destaque, o que uso no dia a dia.'
		},
		education: { endpoint: '/formacao', title: 'Formação' },
		contact: {
			endpoint: '/contato',
			title: 'Vamos conversar?',
			lede: 'Estou em busca de novas oportunidades como desenvolvedor full-stack com foco em back-end .NET. Se tem uma vaga, um projeto ou só quer trocar uma ideia, me chama.'
		}
	},
	projects: {
		featured: 'Projeto em destaque',
		visit: 'Acessar o site',
		visitLabel: (name: string) => `Acessar ${name}`,
		source: 'Código-fonte',
		sourceLabel: (name: string) => `Código-fonte de ${name}`,
		demoCaption: 'Demonstração interativa: clique no cartão',
		placeholder: {
			tag: 'Em construção',
			title: 'Próximo projeto',
			text: 'Sempre tem algo novo sendo desenvolvido por aqui.',
			follow: 'Acompanhe no',
			commit: 'git commit -m "em breve"'
		}
	},
	flashcard: {
		deck: 'Baralho · Dev web',
		question: 'Pergunta',
		answer: 'Resposta',
		hint: 'clique para ver a resposta',
		next: 'Próximo cartão →'
	},
	stack: {
		core: 'uso no dia a dia',
		primary: 'foco principal'
	},
	api: {
		tabs: { json: 'JSON', ui: 'Interface' },
		keys: {
			name: 'nome',
			role: 'cargo',
			focus: 'foco',
			stack: 'stack',
			experience: 'experiencia',
			location: 'local',
			available: 'disponivel'
		},
		available: 'Disponível',
		focus: 'foco principal'
	},
	contact: {
		copy: 'Copiar e-mail',
		copied: 'Copiado',
		call: (number: string) => `Ligar para ${number}`
	},
	footer: {
		builtWith: 'Feito com',
		and: 'e',
		backToTop: 'Voltar ao topo'
	},
	date: {
		monthNames: [
			'jan',
			'fev',
			'mar',
			'abr',
			'mai',
			'jun',
			'jul',
			'ago',
			'set',
			'out',
			'nov',
			'dez'
		],
		range: (start: string, end: string) => `${start} a ${end}`,
		since: (start: string) => `desde ${start}`,
		years: (n: number) => `${n} ${n === 1 ? 'ano' : 'anos'}`,
		months: (n: number) => `${n} ${n === 1 ? 'mês' : 'meses'}`,
		and: 'e'
	}
};

export type UiStrings = typeof pt;

const en: UiStrings = {
	meta: {
		title: 'Victor Targino | Full-Stack Developer, back-end .NET focus',
		description:
			'Portfolio of Victor Targino, a full-stack developer with a back-end focus: APIs with C#, .NET and SQL Server, and interfaces with SvelteKit and TypeScript.'
	},
	a11y: {
		skip: 'Skip to content',
		home: (name: string) => `${name}, back to top`,
		sections: 'Sections',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		lightTheme: 'Switch to light theme',
		darkTheme: 'Switch to dark theme',
		toggleTheme: 'Toggle theme',
		language: 'Site language',
		sendEmail: 'Send email',
		technologies: 'Technologies',
		focusAreas: 'Main focus areas',
		apiCard: 'Profile summary formatted as an API response',
		apiTabs: 'Response format'
	},
	hero: {
		status: 'Open to new opportunities',
		viewProjects: 'View projects',
		contact: 'Get in touch'
	},
	sections: {
		about: { endpoint: '/about', title: 'About me' },
		experience: {
			endpoint: '/experience',
			title: 'Experience',
			lede: 'From legacy to modern: production systems, new APIs and the screens that consume them.'
		},
		projects: {
			endpoint: '/projects',
			title: 'Projects',
			lede: 'Live projects, for clients and for myself, from database to deployment.'
		},
		stack: {
			endpoint: '/stack',
			title: 'Stack & skills',
			lede: 'From the interface down to the database, with the weight on the back end. Highlighted is what I use day to day.'
		},
		education: { endpoint: '/education', title: 'Education' },
		contact: {
			endpoint: '/contact',
			title: "Let's talk",
			lede: "I'm looking for new opportunities as a full-stack developer with a back-end .NET focus. Whether you have a role, a project or just want to chat, feel free to reach out."
		}
	},
	projects: {
		featured: 'Featured project',
		visit: 'Visit the site',
		visitLabel: (name: string) => `Visit ${name}`,
		source: 'Source code',
		sourceLabel: (name: string) => `Source code for ${name}`,
		demoCaption: 'Interactive demo: click the card',
		placeholder: {
			tag: 'In progress',
			title: 'Next project',
			text: "There's always something new in the works.",
			follow: 'Follow along on',
			commit: 'git commit -m "coming soon"'
		}
	},
	flashcard: {
		deck: 'Deck · Web dev',
		question: 'Question',
		answer: 'Answer',
		hint: 'click to reveal the answer',
		next: 'Next card →'
	},
	stack: {
		core: 'used day to day',
		primary: 'main focus'
	},
	api: {
		tabs: { json: 'JSON', ui: 'Interface' },
		keys: {
			name: 'name',
			role: 'role',
			focus: 'focus',
			stack: 'stack',
			experience: 'experience',
			location: 'location',
			available: 'available'
		},
		available: 'Available',
		focus: 'main focus'
	},
	contact: {
		copy: 'Copy email',
		copied: 'Copied',
		call: (number: string) => `Call ${number}`
	},
	footer: {
		builtWith: 'Built with',
		and: 'and',
		backToTop: 'Back to top'
	},
	date: {
		monthNames: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		],
		range: (start: string, end: string) => `${start} to ${end}`,
		since: (start: string) => `since ${start}`,
		years: (n: number) => `${n} ${n === 1 ? 'year' : 'years'}`,
		months: (n: number) => `${n} ${n === 1 ? 'month' : 'months'}`,
		and: 'and'
	}
};

export const ui: Record<Locale, UiStrings> = { pt, en };
