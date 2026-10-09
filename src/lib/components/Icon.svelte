<script lang="ts">
	import { icons, type IconName } from './icons';

	interface Props {
		name: IconName;
		size?: number;
		label?: string;
		strokeWidth?: number;
	}

	let { name, size = 18, label, strokeWidth = 1.75 }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
	focusable="false"
>
	{@html icons[name]}
</svg>

<style lang="scss">
	svg {
		flex-shrink: 0;
	}
</style>
