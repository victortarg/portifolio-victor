import type { SkillGroup } from '#lib/types.ts';

export const skillGroups: SkillGroup[] = [
	{
		title: 'Back-end',
		icon: 'server',
		skills: [
			{ name: 'C#', core: true },
			{ name: '.NET 8+', core: true },
			{ name: 'ASP.NET Core', core: true },
			{ name: '.NET Framework' },
			{ name: 'Web API / REST', core: true },
			{ name: 'Entity Framework' },
			{ name: 'Hangfire' },
			{ name: 'xUnit' },
			{ name: { pt: 'ASP Clássico', en: 'Classic ASP' } },
			{ name: 'Python' }
		]
	},
	{
		title: { pt: 'Banco de dados', en: 'Databases' },
		icon: 'database',
		skills: [
			{ name: 'SQL Server', core: true },
			{ name: 'T-SQL', core: true },
			{ name: 'MySQL', core: true },
			{ name: 'Supabase' }
		]
	},
	{
		title: 'Front-end',
		icon: 'layout',
		skills: [
			{ name: 'JavaScript' },
			{ name: 'TypeScript' },
			{ name: 'HTML5' },
			{ name: 'CSS3' },
			{ name: 'Svelte' },
			{ name: 'SvelteKit' },
			{ name: 'Vue' },
			{ name: 'React' },
			{ name: 'Bootstrap' },
			{ name: 'Tailwind' }
		]
	},
	{
		title: 'Mobile',
		icon: 'smartphone',
		skills: [{ name: 'Flutter' }, { name: 'Dart' }, { name: 'Offline-first' }]
	},
	{
		title: { pt: 'Ferramentas', en: 'Tools' },
		icon: 'wrench',
		skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'Azure DevOps' }, { name: 'Vercel' }]
	}
];
