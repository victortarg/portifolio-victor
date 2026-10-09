import type { Focus, Profile, Stat } from '#lib/types.ts';

export const profile: Profile = {
	name: 'Victor Targino',
	fullName: 'Victor Targino Morais',
	role: { pt: 'Desenvolvedor Back-End', en: 'Back-End Developer' },
	location: { pt: 'Fortaleza, CE, Brasil', en: 'Fortaleza, Brazil' },
	openToWork: true,
	pitch: {
		pt: 'Construo APIs e serviços com C# e .NET, da sustentação de sistemas legados em .NET Framework a arquiteturas novas em .NET 8+, com uma base sólida em SQL Server.',
		en: 'I build APIs and services with C# and .NET, from maintaining legacy .NET Framework systems to designing new architectures on .NET 8, backed by a solid foundation in SQL Server.'
	},
	about: {
		pt: [
			'Sou desenvolvedor full-stack com foco em back-end (.NET/C#) e estudante do 10º semestre de Engenharia da Computação na UNIFOR. Tenho mais de 2 anos de experiência prática no mercado, desenvolvendo e mantendo sistemas web, criando APIs RESTful e trabalhando em contato direto com as regras de negócio dos clientes.',
			'Gosto de pegar código legado e deixá-lo melhor do que encontrei: refatorar com segurança, organizar a arquitetura e garantir que o sistema continue fácil de manter. Também tenho familiaridade com o ecossistema moderno de front-end e mobile, o que me ajuda a entregar a feature de ponta a ponta.'
		],
		en: [
			"I'm a full-stack developer focused on back-end (.NET/C#) and a 10th-semester Computer Engineering student at UNIFOR. I have over 2 years of hands-on industry experience building and maintaining web systems, creating RESTful APIs and working closely with clients' business rules.",
			"I enjoy taking legacy code and leaving it better than I found it: refactoring safely, organizing the architecture and making sure the system stays easy to maintain. I'm also comfortable with the modern front-end and mobile ecosystem, which helps me ship features end to end."
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
		label: { pt: 'do .NET Framework ao .NET 8', en: 'from .NET Framework to .NET 8' }
	},
	{
		value: { pt: '10º sem.', en: '10th sem.' },
		label: { pt: 'Eng. da Computação · UNIFOR', en: 'Computer Engineering · UNIFOR' }
	}
];

export const focusAreas: Focus[] = [
	{
		icon: 'server',
		title: { pt: 'Ecossistema .NET', en: '.NET ecosystem' },
		description: {
			pt: 'APIs RESTful e serviços em C# e ASP.NET Core, navegando entre diferentes versões, do .NET Framework ao .NET 8.',
			en: 'RESTful APIs and services with C# and ASP.NET Core across different versions, from .NET Framework to .NET 8.'
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
	},
	{
		icon: 'layout',
		title: 'Full-stack & UI',
		description: {
			pt: 'Evolução de interfaces web responsivas, garantindo uma experiência de usuário consistente e moderna.',
			en: 'Evolving responsive web interfaces to deliver a consistent, modern user experience.'
		}
	}
];
