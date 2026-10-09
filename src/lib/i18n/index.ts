import { createContext } from 'svelte';
import { defaultLocale, localeMeta, type Locale, type Localized } from './locales.ts';
import { ui, type UiStrings } from './ui.ts';

export * from './locales.ts';

export interface I18n {
	readonly locale: Locale;
	readonly meta: (typeof localeMeta)[Locale];
	readonly ui: UiStrings;
	t<T>(value: T | Localized<T>): T;
}

function isLocalized<T>(value: T | Localized<T>): value is Localized<T> {
	return (
		typeof value === 'object' && value !== null && !Array.isArray(value) && defaultLocale in value
	);
}

const [getI18n, setI18nContext] = createContext<I18n>();

export function setI18n(getLocale: () => Locale): I18n {
	return setI18nContext({
		get locale() {
			return getLocale();
		},
		get meta() {
			return localeMeta[getLocale()];
		},
		get ui() {
			return ui[getLocale()];
		},
		t(value) {
			return isLocalized(value) ? value[getLocale()] : value;
		}
	});
}

export { getI18n };
