import type { Experience } from '#lib/types.ts';

export const experience: Experience[] = [
	{
		company: { pt: 'Cliente confidencial', en: 'Confidential client' },
		role: { pt: 'Desenvolvedor Full-Stack', en: 'Full-Stack Developer' },
		type: { pt: 'Freelancer', en: 'Freelance' },
		start: '2026-02',
		summary: {
			pt: 'Plataforma de gestão de pedidos e metas comerciais para uma distribuidora de alimentos. Os clientes compram pelo e-commerce e pelo WhatsApp, com um agente de IA, e a plataforma se integra ao ERP da empresa.',
			en: 'An order and sales target management platform for a food distributor. Customers order through the online store and through WhatsApp with an AI agent, and the platform integrates with the company ERP.'
		},
		highlights: {
			pt: [
				'Endpoints de consulta de pedidos com paginação e filtros por período, cliente e vendedor.',
				'Carrinho de compras do back ao front e finalização do pedido, que gera o arquivo de importação no ERP.',
				'Catálogo e vitrine pública de produtos, fornecedores e promoções, com busca e paginação.',
				'Relatórios de vendas e de carrinhos abandonados, com atalho para contatar o cliente pelo WhatsApp.',
				'Módulo de metas e campanhas construído como componente isolado, com banco e migrations próprios: grupos de fornecedores, campanhas recorrentes, regras de transição de estado e fluxo de aprovação.',
				'Sugestão de metas individuais a partir do histórico de cada vendedor, apuração automática por job agendado com Hangfire e relatórios de desempenho. A divulgação dos resultados pelo WhatsApp está em desenvolvimento.',
				'Permissões por funcionalidade nas telas e endpoints e testes unitários das regras de negócio com xUnit e NSubstitute.'
			],
			en: [
				'Built order lookup endpoints with pagination and filters by period, customer and sales rep.',
				'Built the shopping cart end to end and the checkout flow, which generates the ERP import file.',
				'Built the public catalog and storefront for products, suppliers and promotions, with search and pagination.',
				'Built sales and abandoned cart reports, with a shortcut to contact the customer on WhatsApp.',
				'Built the targets and campaigns module as an isolated component with its own database and migrations: supplier groups, recurring campaigns, state transition rules and an approval flow.',
				"Built individual target suggestions based on each sales rep's history, automatic scoring through a scheduled Hangfire job and performance reports. Sharing results over WhatsApp is in progress.",
				'Applied feature-level permissions to screens and endpoints and wrote unit tests for the business rules with xUnit and NSubstitute.'
			]
		},
		stack: [
			'C#',
			'.NET 8',
			'ASP.NET Core',
			'Entity Framework Core',
			'Hangfire',
			'MySQL',
			'xUnit',
			'SvelteKit',
			'TypeScript',
			'Tailwind CSS'
		]
	},
	{
		company: 'SST (Secrel Sistemas e Terceirizações)',
		role: { pt: 'Desenvolvedor de Software', en: 'Software Developer' },
		type: { pt: 'Estágio · atuando como Dev Jr.', en: 'Internship · working as a Junior Dev' },
		location: { pt: 'Fortaleza, CE · Presencial', en: 'Fortaleza, Brazil · On-site' },
		start: '2025-01',
		end: '2026-08',
		summary: {
			pt: 'Atuação com foco em back-end, da manutenção de sistemas legados à criação de novas arquiteturas escaláveis.',
			en: 'Back-end focused role, from maintaining legacy systems to building new scalable architectures.'
		},
		highlights: {
			pt: [
				'Criação e implementação de APIs RESTful com C# e ASP.NET Core para integração de sistemas corporativos, transitando entre .NET Framework e .NET 8.',
				'Refatoração de arquitetura e melhoria de código legado, aplicando boas práticas para garantir manutenibilidade e performance.',
				'Desenvolvimento de um aplicativo mobile com Flutter no front-end e C# / .NET no back-end, com foco estratégico em arquitetura offline-first.',
				'Modelagem e manutenção de rotinas em bancos de dados relacionais com T-SQL e SQL Server.',
				'Sustentação de sistemas legados e evolução de interfaces responsivas com HTML5, CSS3, JavaScript e Bootstrap.',
				'Versionamento com Git e Azure DevOps, em um fluxo de entregas contínuas.'
			],
			en: [
				'Designed and implemented RESTful APIs with C# and ASP.NET Core to integrate corporate systems, working across .NET Framework and .NET 8.',
				'Refactored architecture and improved legacy code, applying best practices for maintainability and performance.',
				'Developed a mobile app with Flutter on the front end and C# / .NET on the back end, with a strategic focus on offline-first architecture.',
				'Modeled and maintained routines in relational databases with T-SQL and SQL Server.',
				'Supported legacy systems and evolved responsive interfaces with HTML5, CSS3, JavaScript and Bootstrap.',
				'Version control with Git and Azure DevOps in a continuous delivery workflow.'
			]
		},
		stack: [
			'C#',
			'.NET 8',
			'.NET Framework',
			'ASP.NET Core',
			'Entity Framework',
			'SQL Server',
			'Flutter',
			'Azure DevOps'
		]
	},
	{
		company: 'Intech Cursos & Studio Games Brasil',
		role: { pt: 'Desenvolvedor Full-Stack', en: 'Full-Stack Developer' },
		type: { pt: 'Freelancer', en: 'Freelance' },
		location: { pt: 'Fortaleza, CE', en: 'Fortaleza, Brazil' },
		start: '2023-12',
		end: '2024-04',
		highlights: {
			pt: [
				'Correção de bugs e implementação de novas features em sistemas internos de gestão de funcionários.',
				'Atendimento direto via sistema de chamados, traduzindo as necessidades dos usuários em soluções técnicas.',
				'Consultas e estruturação de dados com SQL.'
			],
			en: [
				'Fixed bugs and shipped new features in internal employee management systems.',
				'Worked directly with users through a ticketing system, turning their needs into technical solutions.',
				'Wrote queries and structured data with SQL.'
			]
		},
		stack: [{ pt: 'ASP Clássico', en: 'Classic ASP' }, 'JavaScript', 'HTML5', 'CSS3', 'SQL']
	}
];
