import type { Education } from '#lib/types.ts';

export const education: Education[] = [
	{
		institution: 'Universidade de Fortaleza (UNIFOR)',
		course: {
			pt: 'Bacharelado em Engenharia da Computação',
			en: "Bachelor's in Computer Engineering"
		},
		period: { pt: '2022 a 2026', en: '2022 to 2026' },
		status: { pt: 'Em andamento · 10º semestre', en: 'In progress · 10th semester' },
		details: {
			pt: 'Previsão de conclusão em dezembro de 2026.',
			en: 'Expected graduation in December 2026.'
		}
	},
	{
		institution: 'Infinity School',
		course: { pt: 'Formação em Desenvolvimento Web', en: 'Web Development Program' },
		period: { pt: 'Concluído', en: 'Completed' },
		status: { pt: 'Curso livre', en: 'Non-degree course' },
		details: {
			pt: 'Foco em Python, JavaScript, React.js, HTML e CSS.',
			en: 'Focused on Python, JavaScript, React.js, HTML and CSS.'
		}
	}
];
