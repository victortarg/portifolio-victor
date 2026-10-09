export const locales = ['pt', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export type Localized<T = string> = Record<Locale, T>;

export type Text = string | Localized;

export const localeMeta: Record<
	Locale,
	{ label: string; short: string; htmlLang: string; ogLocale: string; path: string }
> = {
	pt: { label: 'Português', short: 'PT', htmlLang: 'pt-BR', ogLocale: 'pt_BR', path: '/' },
	en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US', path: '/en' }
};

export function isLocale(value: unknown): value is Locale {
	return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

export function toLocale(param: string | undefined): Locale {
	return isLocale(param) ? param : defaultLocale;
}
