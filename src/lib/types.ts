import type { IconName } from '#lib/components/icons.ts';
import type { Localized, Text } from '#lib/i18n/locales.ts';

export type YearMonth = `${number}-${number}`;

export interface Profile {
	name: string;
	fullName: string;
	role: Text;
	focus: Text;
	location: Text;
	openToWork: boolean;
	pitch: Text;
	about: Localized<string[]>;
	links: {
		email: string;
		linkedin: string;
		github?: string;
		phone?: { e164: string; display: Text };
	};
}

export interface Stat {
	value: Text;
	label: Text;
}

export interface Focus {
	icon: IconName;
	title: Text;
	description: Text;
}

export interface Experience {
	company: Text;
	role: Text;
	type: Text;
	location?: Text;
	start: YearMonth;
	end?: YearMonth;
	summary?: Text;
	highlights: Localized<string[]>;
	stack: Text[];
}

export interface Project {
	slug: string;
	name: Text;
	tagline: Text;
	description: Text;
	highlights?: Localized<string[]>;
	stack: Text[];
	kind?: Text;
	status?: Text;
	featured?: boolean;
	image?: { src: string; alt: Text; width: number; height: number };
	links: {
		demo?: string;
		repo?: string;
	};
}

export interface SkillGroup {
	title: Text;
	icon: IconName;
	skills: { name: Text; core?: boolean }[];
}

export interface StackLayer extends SkillGroup {
	description: Text;
	primary?: boolean;
	/** How this layer talks to the one above it in the stack diagram. */
	link?: string;
}

export interface Education {
	institution: string;
	course: Text;
	period: Text;
	status: Text;
	details?: Text;
}
