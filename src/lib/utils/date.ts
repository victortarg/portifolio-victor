import type { UiStrings } from '#lib/i18n/ui.ts';
import type { YearMonth } from '#lib/types.ts';

type DateStrings = UiStrings['date'];

function parse(ym: YearMonth): [year: number, month: number] {
	const [year, month] = ym.split('-').map(Number);
	return [year, month];
}

export function formatMonth(ym: YearMonth, d: DateStrings): string {
	const [year, month] = parse(ym);
	return `${d.monthNames[month - 1]} ${year}`;
}

export function formatPeriod(start: YearMonth, end: YearMonth | undefined, d: DateStrings): string {
	return end ? d.range(formatMonth(start, d), formatMonth(end, d)) : d.since(formatMonth(start, d));
}

export function formatDuration(
	start: YearMonth,
	end: YearMonth | undefined,
	d: DateStrings
): string {
	const [startYear, startMonth] = parse(start);
	const now = new Date();
	const [endYear, endMonth] = end ? parse(end) : [now.getFullYear(), now.getMonth() + 1];

	const total = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
	const years = Math.floor(total / 12);
	const months = total % 12;

	const parts: string[] = [];
	if (years) parts.push(d.years(years));
	if (months) parts.push(d.months(months));
	return parts.join(` ${d.and} `);
}
