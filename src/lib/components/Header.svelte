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
	let sentinel: HTMLElement;

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

		const topObserver = new IntersectionObserver(([entry]) => (scrolled = !entry.isIntersecting));
		topObserver.observe(sentinel);

		return () => {
			observer.disconnect();
			topObserver.disconnect();
		};
	});

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') menuOpen = false;
	}
</script>

<svelte:window onkeydown={onKeydown} />

<div class="sentinel" bind:this={sentinel} aria-hidden="true"></div>

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
				<span class="icon-swap" aria-hidden="true">
					<span class:is-shown={!menuOpen}><Icon name="menu" /></span>
					<span class:is-shown={menuOpen}><Icon name="close" /></span>
				</span>
			</button>
		</div>
	</div>

	<!-- Always rendered so closing can animate out; inert keeps it out of reach while closed. -->
	<nav
		id="mobile-menu"
		class="mobile-menu"
		class:open={menuOpen}
		aria-label={i18n.ui.a11y.sections}
		inert={!menuOpen}
	>
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
</header>

<style lang="scss">
	// Sits at the very top of the page: once it leaves the viewport, the
	// header gets its solid background.
	.sentinel {
		position: absolute;
		top: 0;
		left: 0;
		width: 1px;
		height: 8px;
		pointer-events: none;
	}

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
		position: absolute;
		inset: 100% 0 auto;
		border-block: 1px solid var(--border);
		background: var(--bg);
		visibility: hidden;
		opacity: 0;
		transition:
			opacity 150ms var(--ease-out),
			visibility 0s linear 150ms;

		@include motion-safe {
			transform: translateY(-4px);
			transition:
				opacity 150ms var(--ease-out),
				transform 150ms var(--ease-out),
				visibility 0s linear 150ms;
		}

		&.open {
			visibility: visible;
			opacity: 1;
			transform: none;
			transition:
				opacity 200ms var(--ease-out),
				transform 200ms var(--ease-out),
				visibility 0s;
		}

		@include up(lg) {
			display: none;
		}

		ul {
			display: grid;
			padding-block: var(--space-3) var(--space-5);
		}

		// Links cascade in on open; on close the whole panel fades as one.
		li {
			@include motion-safe {
				opacity: 0;
				transform: translateY(-6px);
				transition:
					opacity 150ms var(--ease-out),
					transform 150ms var(--ease-out);
			}
		}

		&.open li {
			opacity: 1;
			transform: none;
			transition:
				opacity 350ms var(--ease-out),
				transform 350ms var(--ease-out);
			transition-delay: calc(var(--i) * 35ms);
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
</style>
