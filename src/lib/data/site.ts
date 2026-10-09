import type { Localized } from '#lib/i18n/locales.ts';

export const site = {
	url: ''
};

export const sections: { id: string; label: Localized }[] = [
	{ id: 'sobre', label: { pt: 'Sobre', en: 'About' } },
	{ id: 'experiencia', label: { pt: 'Experiência', en: 'Experience' } },
	{ id: 'projetos', label: { pt: 'Projetos', en: 'Projects' } },
	{ id: 'stack', label: { pt: 'Stack', en: 'Stack' } },
	{ id: 'formacao', label: { pt: 'Formação', en: 'Education' } },
	{ id: 'contato', label: { pt: 'Contato', en: 'Contact' } }
];
