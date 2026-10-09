<script lang="ts">
	import { onMount } from 'svelte';
	import { profile } from '#lib/data/profile.ts';
	import { sections } from '#lib/data/site.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import Icon from './Icon.svelte';
	import LanguageSelect from './LanguageSelect.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	const i18n = getI18n();

	let active = $state('');
	let scrolled = $state(false);
	let menuOpen = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);

		for (const id of ['inicio', ...sections.map((s) => s.id)]) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}

		const onScroll = () => (scrolled = window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	});

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') menuOpen = false;
	}
</script>

<svelte:window onkeydown={onKeydown} />

<header class="header" class:scrolled={scrolled || menuOpen}>
	<div class="container inner">
		<a href="#inicio" class="logo" aria-label={i18n.ui.a11y.home(profile.name)}>
			<span class="mark" aria-hidden="true">vt</span>
			<span class="logo-text">{profile.name}</span>
		</a>

		<nav class="nav" aria-label={i18n.ui.a11y.sections}>
			<ul role="list">
				{#each sections as section (section.id)}
					<li>
						<a
							href="#{section.id}"
							class:active={active === section.id}
							aria-current={active === section.id ? 'true' : undefined}>{i18n.t(section.label)}</a
						>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="actions">
			<LanguageSelect />
			<ThemeToggle />
			<button
				type="button"
				class="icon-btn menu-btn"
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				aria-label={menuOpen ? i18n.ui.a11y.closeMenu : i18n.ui.a11y.openMenu}
				onclick={() => (menuOpen = !menuOpen)}
			>
				<Icon name={menuOpen ? 'close' : 'menu'} />
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav id="mobile-menu" class="mobile-menu" aria-label={i18n.ui.a11y.sections}>
			<ul role="list" class="container">
				{#each sections as section, i (section.id)}
					<li style="--i: {i}">
						<a href="#{section.id}" onclick={() => (menuOpen = false)}>
							<span class="num">0{i + 1}</span>
							{i18n.t(section.label)}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style lang="scss">
	.header {
		position: fixed;
		inset: 0 0 auto;
		z-index: 50;
		border-bottom: 1px solid transparent;
		transition:
			background-color var(--dur) ease,
			border-color var(--dur) ease;

		&.scrolled {
			background: color-mix(in srgb, var(--bg) 80%, transparent);
			border-bottom-color: var(--border);
			backdrop-filter: blur(14px) saturate(1.5);
			-webkit-backdrop-filter: blur(14px) saturate(1.5);
		}
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
		height: var(--header-h);
	}

	.logo {
		display: inline-flex;
		align-items: center;
		gap: var(--space-3);
		font-family: var(--font-display);
		font-size: 1.0625rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		white-space: nowrap;
	}

	.logo-text {
		@include down(xs) {
			display: none;
		}
	}

	.mark {
		display: grid;
		place-items: center;
		width: 34px;
		height: 34px;
		border-radius: 10px;
		background: var(--text);
		color: var(--bg);
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		font-weight: 700;
		letter-spacing: -0.04em;
		transition: background-color var(--dur) ease;

		.logo:hover & {
			background: var(--accent);
			color: var(--accent-contrast);
		}
	}

	.nav {
		display: none;

		@include up(lg) {
			display: block;
		}

		ul {
			display: flex;
			gap: 2px;
		}

		a {
			display: block;
			padding: 7px 13px;
			border-radius: var(--radius-full);
			color: var(--text-muted);
			font-size: var(--fs-sm);
			font-weight: 500;
			transition:
				color var(--dur) ease,
				background-color var(--dur) ease;

			@include hover {
				color: var(--text);
			}

			&.active {
				background: var(--surface-2);
				color: var(--text);
			}
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.menu-btn {
		@include up(lg) {
			display: none;
		}
	}

	.mobile-menu {
		border-top: 1px solid var(--border);
		background: var(--bg);

		@include up(lg) {
			display: none;
		}

		ul {
			display: grid;
			padding-block: var(--space-3) var(--space-5);
		}

		li {
			@include motion-safe {
				animation: slide-in 0.35s var(--ease-out) both;
				animation-delay: calc(var(--i) * 35ms);
			}
		}

		a {
			display: flex;
			align-items: baseline;
			gap: var(--space-4);
			padding-block: var(--space-3);
			border-bottom: 1px solid var(--border);
			font-family: var(--font-display);
			font-size: 1.5rem;
			font-weight: 500;
			letter-spacing: -0.02em;
		}

		.num {
			@include mono-label;
		}
	}

	@keyframes slide-in {
		from {
			opacity: 0;
			transform: translateY(-6px);
		}
	}
</style>
