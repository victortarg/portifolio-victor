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

	function toggle() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('theme', theme);
		} catch {}
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
