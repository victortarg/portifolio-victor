import type { Focus, Profile, Stat } from '#lib/types.ts';

export const profile: Profile = {
	name: 'Victor Targino',
	fullName: 'Victor Targino Morais',
	role: { pt: 'Desenvolvedor Full-Stack', en: 'Full-Stack Developer' },
	focus: { pt: 'com foco em back-end', en: 'with a back-end focus' },
	location: { pt: 'Fortaleza, CE, Brasil', en: 'Fortaleza, Brazil' },
	openToWork: true,
	pitch: {
		pt: 'Construo APIs e regras de negócio com C# e .NET, e levo a feature até a tela com SvelteKit e TypeScript.',
		en: 'I build APIs and business logic with C# and .NET, and take each feature all the way to the screen with SvelteKit and TypeScript.'
	},
	about: {
		pt: [
			'Sou desenvolvedor full-stack com foco em back-end e estudante do 10º semestre de Engenharia da Computação na UNIFOR. Tenho mais de 2 anos de experiência no mercado, desenvolvendo e mantendo sistemas web, criando APIs RESTful e trabalhando perto das regras de negócio dos clientes.',
			'A maior parte da minha experiência está no back-end: C# e .NET, do .NET Framework ao .NET 8, SQL Server e MySQL, jobs agendados e testes. Hoje também construo o front-end dos sistemas em que trabalho, com SvelteKit e TypeScript, e entrego a feature inteira, do banco de dados até a tela.',
			'Gosto de pegar código legado e deixá-lo melhor do que encontrei: refatorar com segurança, organizar a arquitetura e garantir que o sistema continue fácil de manter.'
		],
		en: [
			"I'm a full-stack developer with a back-end focus and a 10th-semester Computer Engineering student at UNIFOR. I have over 2 years of hands-on industry experience building and maintaining web systems, creating RESTful APIs and working closely with clients' business rules.",
			'Most of my experience is on the back end: C# and .NET, from .NET Framework to .NET 8, SQL Server and MySQL, scheduled jobs and tests. Today I also build the front end of the systems I work on with SvelteKit and TypeScript, shipping each feature from the database all the way to the screen.',
			'I enjoy taking legacy code and leaving it better than I found it: refactoring safely, organizing the architecture and making sure the system stays easy to maintain.'
		]
	},
	links: {
		email: 'vtm8120@gmail.com',
		linkedin: 'https://www.linkedin.com/in/victortargino',
		github: 'https://github.com/victortarg',
		phone: {
			e164: '+5585999190082',
			display: { pt: '(85) 99919-0082', en: '+55 85 99919-0082' }
		}
	}
};

export const stats: Stat[] = [
	{
		value: { pt: '2+ anos', en: '2+ years' },
		label: { pt: 'de experiência no mercado', en: 'of industry experience' }
	},
	{
		value: 'C# · .NET',
		label: { pt: 'no back-end, meu foco principal', en: 'on the back end, my main focus' }
	},
	{
		value: 'SvelteKit',
		label: { pt: 'no front-end, com TypeScript', en: 'on the front end, with TypeScript' }
	},
	{
		value: { pt: '10º sem.', en: '10th sem.' },
		label: { pt: 'Eng. da Computação, UNIFOR', en: 'Computer Engineering, UNIFOR' }
	}
];

export const focusAreas: Focus[] = [
	{
		icon: 'server',
		title: { pt: 'APIs e integrações', en: 'APIs and integrations' },
		description: {
			pt: 'APIs RESTful em C# e ASP.NET Core que integram sistemas corporativos e ERPs, com as regras de negócio cobertas por testes.',
			en: 'RESTful APIs in C# and ASP.NET Core that integrate corporate systems and ERPs, with business rules covered by tests.'
		}
	},
	{
		icon: 'layers',
		title: { pt: 'Features de ponta a ponta', en: 'End-to-end features' },
		description: {
			pt: 'Do banco de dados à tela: modelo, endpoint, regra de negócio e a interface em SvelteKit que consome tudo isso.',
			en: 'From the database to the screen: data model, endpoint, business rules and the SvelteKit interface that uses them.'
		}
	},
	{
		icon: 'refresh',
		title: { pt: 'Modernização de sistemas', en: 'Legacy modernization' },
		description: {
			pt: 'Refatoração de arquitetura e melhoria de código legado, com boas práticas para garantir manutenibilidade e performance.',
			en: 'Refactoring architecture and improving legacy code with best practices for maintainability and performance.'
		}
	},
	{
		icon: 'smartphone',
		title: { pt: 'Mobile offline-first', en: 'Offline-first mobile' },
		description: {
			pt: 'Aplicativo com Flutter no front-end e C# / .NET no back-end, projetado para funcionar sem conexão e sincronizar depois.',
			en: 'An app with Flutter on the front end and C# / .NET on the back end, designed to work without a connection and sync later.'
		}
	}
];
