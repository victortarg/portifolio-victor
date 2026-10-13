import type { SkillGroup, StackLayer } from '#lib/types.ts';

/** Ordered like a request travels: interface, then API, then data. */
export const stackLayers: StackLayer[] = [
	{
		title: 'Front-end',
		description: { pt: 'Interface', en: 'Interface' },
		icon: 'layout',
		skills: [
			{ name: 'TypeScript', core: true },
			{ name: 'SvelteKit', core: true },
			{ name: 'Svelte' },
			{ name: 'JavaScript' },
			{ name: 'Tailwind CSS' },
			{ name: 'SCSS' },
			{ name: 'HTML5' },
			{ name: 'CSS3' },
			{ name: 'React' },
			{ name: 'Vue' },
			{ name: 'Bootstrap' }
		]
	},
	{
		title: 'Back-end',
		description: { pt: 'API e regras de negócio', en: 'API and business logic' },
		icon: 'server',
		primary: true,
		link: 'HTTP / JSON',
		skills: [
			{ name: 'C#', core: true },
			{ name: '.NET 8+', core: true },
			{ name: 'ASP.NET Core', core: true },
			{ name: 'Web API / REST', core: true },
			{ name: 'Entity Framework', core: true },
			{ name: '.NET Framework' },
			{ name: 'Hangfire' },
			{ name: 'xUnit' },
			{ name: 'NSubstitute' },
			{ name: { pt: 'ASP Clássico', en: 'Classic ASP' } },
			{ name: 'Python' }
		]
	},
	{
		title: { pt: 'Banco de dados', en: 'Databases' },
		description: { pt: 'Persistência', en: 'Persistence' },
		icon: 'database',
		link: 'EF / SQL',
		skills: [
			{ name: 'SQL Server', core: true },
			{ name: 'T-SQL', core: true },
			{ name: 'MySQL', core: true },
			{ name: 'Cloudflare D1' },
			{ name: 'Cloudflare R2' },
			{ name: 'Supabase' }
		]
	}
];

export const extraGroups: SkillGroup[] = [
	{
		title: 'Mobile',
		icon: 'smartphone',
		skills: [{ name: 'Flutter' }, { name: 'Dart' }, { name: 'Offline-first' }]
	},
	{
		title: { pt: 'Ferramentas', en: 'Tools' },
		icon: 'wrench',
		skills: [
			{ name: 'Git' },
			{ name: 'GitHub' },
			{ name: 'Azure DevOps' },
			{ name: 'Vercel' },
			{ name: 'Cloudflare' }
		]
	}
];
