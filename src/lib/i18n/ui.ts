import type { Locale } from './locales.ts';

const pt = {
	meta: {
		title: 'Victor Targino | Desenvolvedor Back-End .NET',
		description:
			'Portfólio de Victor Targino, desenvolvedor back-end com foco em C#, .NET e SQL Server. APIs RESTful, modernização de sistemas legados e apps offline-first.'
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
		apiCard: 'Resumo do perfil no formato de uma resposta JSON de API'
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
			lede: 'Do legado ao moderno: sustentação de sistemas em produção, APIs novas e um app mobile offline-first.'
		},
		projects: {
			endpoint: '/projetos',
			title: 'Projetos',
			lede: 'Projetos pessoais, do banco de dados ao deploy, onde também exploro outras stacks além do .NET.'
		},
		stack: {
			endpoint: '/stack',
			title: 'Stack & competências',
			lede: 'Ferramentas que uso no dia a dia. Em destaque, as que formam a base do meu trabalho.'
		},
		education: { endpoint: '/formacao', title: 'Formação' },
		contact: {
			endpoint: '/contato',
			title: 'Vamos conversar?',
			lede: 'Estou em busca de novas oportunidades como desenvolvedor back-end .NET. Se tem uma vaga, um projeto ou só quer trocar uma ideia, me chama.'
		}
	},
	projects: {
		featured: 'Projeto em destaque',
		visit: (name: string) => `Acessar o ${name}`,
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
		deck: 'Baralho · Back-end .NET',
		question: 'Pergunta',
		answer: 'Resposta',
		hint: 'clique para ver a resposta',
		next: 'Próximo cartão →'
	},
	stack: {
		core: 'tecnologias principais'
	},
	contact: {
		copy: 'Copiar e-mail',
		copied: 'Copiado!',
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
		title: 'Victor Targino | Back-End .NET Developer',
		description:
			'Portfolio of Victor Targino, a back-end developer focused on C#, .NET and SQL Server. RESTful APIs, legacy system modernization and offline-first apps.'
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
		apiCard: 'Profile summary formatted as a JSON API response'
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
			lede: 'From legacy to modern: keeping production systems running, building new APIs and an offline-first mobile app.'
		},
		projects: {
			endpoint: '/projects',
			title: 'Projects',
			lede: 'Personal projects, from database to deployment, where I also explore stacks beyond .NET.'
		},
		stack: {
			endpoint: '/stack',
			title: 'Stack & skills',
			lede: 'Tools I use day to day. Highlighted are the ones at the core of my work.'
		},
		education: { endpoint: '/education', title: 'Education' },
		contact: {
			endpoint: '/contact',
			title: "Let's talk",
			lede: "I'm looking for new opportunities as a back-end .NET developer. Whether you have a role, a project or just want to chat, feel free to reach out."
		}
	},
	projects: {
		featured: 'Featured project',
		visit: (name: string) => `Visit ${name}`,
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
		deck: 'Deck · .NET back-end',
		question: 'Question',
		answer: 'Answer',
		hint: 'click to reveal the answer',
		next: 'Next card →'
	},
	stack: {
		core: 'core technologies'
	},
	contact: {
		copy: 'Copy email',
		copied: 'Copied!',
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
