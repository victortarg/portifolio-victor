<script lang="ts">
	import { onMount } from 'svelte';
	import { getI18n } from '#lib/i18n/index.ts';
	import Icon from './Icon.svelte';

	const i18n = getI18n();

	type Theme = 'light' | 'dark';

	let theme = $state<Theme>('dark');

	onMount(() => {
		const explicit = document.documentElement.dataset.theme;
		theme =
			explicit === 'light' || explicit === 'dark'
				? explicit
				: matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
	});

	function apply(next: Theme) {
		theme = next;
		document.documentElement.dataset.theme = next;
		try {
			localStorage.setItem('theme', next);
		} catch {}
	}

	// The new theme spreads out in a circle from the button. Without View
	// Transitions it switches instantly; with reduced motion it crossfades.
	function toggle(event: MouseEvent) {
		const next: Theme = theme === 'dark' ? 'light' : 'dark';
		const root = document.documentElement;

		if (!('startViewTransition' in document)) {
			apply(next);
			return;
		}

		const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
		const button = (event.currentTarget as HTMLElement).getBoundingClientRect();
		const x = button.left + button.width / 2;
		const y = button.top + button.height / 2;
		const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

		// Pauses every CSS color transition so both snapshots are clean.
		root.dataset.themeSwitch = reduce ? 'fade' : 'circle';
		const transition = document.startViewTransition(() => apply(next));

		if (!reduce) {
			transition.ready.then(() => {
				root.animate(
					{
						clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`]
					},
					{
						duration: 500,
						easing: getComputedStyle(root).getPropertyValue('--ease-in-out'),
						pseudoElement: '::view-transition-new(root)'
					}
				);
			});
		}

		transition.finished.finally(() => delete root.dataset.themeSwitch);
	}
</script>

<button
	type="button"
	class="icon-btn toggle"
	onclick={toggle}
	aria-label={theme === 'dark' ? i18n.ui.a11y.lightTheme : i18n.ui.a11y.darkTheme}
	title={i18n.ui.a11y.toggleTheme}
>
	<span class="sun"><Icon name="sun" /></span>
	<span class="moon"><Icon name="moon" /></span>
</button>

<style lang="scss">
	.moon {
		display: grid;
	}

	.sun {
		display: none;
	}

	@mixin show-sun {
		.sun {
			display: grid;
		}

		.moon {
			display: none;
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root:not([data-theme='light'])) {
			@include show-sun;
		}
	}

	:global(:root[data-theme='dark']) {
		@include show-sun;
	}
</style>
