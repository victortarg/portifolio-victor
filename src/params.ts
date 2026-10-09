import { defineParams } from '@sveltejs/kit/params';
import { defaultLocale, isLocale } from './lib/i18n/locales.ts';

export const params = defineParams({
	lang: (param) => (isLocale(param) && param !== defaultLocale ? param : undefined)
});
