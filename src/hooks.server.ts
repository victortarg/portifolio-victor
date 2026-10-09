import type { Handle } from '@sveltejs/kit/hooks';
import { localeMeta, toLocale } from '#lib/i18n/locales.ts';

export const handle: Handle = ({ event, resolve }) => {
	const lang = localeMeta[toLocale(event.params.lang)].htmlLang;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
