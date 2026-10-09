<script lang="ts">
	import { getI18n, localeMeta, locales } from '#lib/i18n/index.ts';
	import Icon from './Icon.svelte';

	const i18n = getI18n();

	let open = $state(false);
	let root: HTMLDivElement;
	let trigger: HTMLButtonElement;

	function close(returnFocus = false) {
		open = false;
		if (returnFocus) trigger.focus();
	}

	function onWindowClick(event: MouseEvent) {
		if (open && !root.contains(event.target as Node)) close();
	}

	function onKeydown(event: KeyboardEvent) {
		if (open && event.key === 'Escape') close(true);
	}
</script>

<svelte:window onclick={onWindowClick} onkeydown={onKeydown} />

<div class="lang" bind:this={root}>
	<button
		bind:this={trigger}
		type="button"
		class="trigger"
		aria-expanded={open}
		aria-controls="lang-menu"
		aria-label="{i18n.ui.a11y.language}: {i18n.meta.label}"
		onclick={() => (open = !open)}
	>
		<Icon name="globe" size={16} />
		<span class="code">{i18n.meta.short}</span>
		<span class="chevron" class:open><Icon name="chevronDown" size={14} /></span>
	</button>

	<ul id="lang-menu" class="menu" class:open role="list">
		{#each locales as code (code)}
			{@const meta = localeMeta[code]}
			<li>
				<a
					href={meta.path}
					hreflang={meta.htmlLang}
					lang={meta.htmlLang}
					aria-current={code === i18n.locale ? 'true' : undefined}
					data-sveltekit-noscroll
					onclick={() => close()}
				>
					<span class="badge">{meta.short}</span>
					<span class="label">{meta.label}</span>
					{#if code === i18n.locale}
						<span class="check"><Icon name="check" size={15} strokeWidth={2.25} /></span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.lang {
		position: relative;
	}

	.trigger {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		height: 40px;
		padding-inline: 12px 10px;
		border: 1px solid var(--border);
		border-radius: var(--radius-full);
		color: var(--text-muted);
		transition:
			color var(--dur) ease,
			border-color var(--dur) ease,
			background-color var(--dur) ease;

		@include hover {
			color: var(--text);
			border-color: var(--border-strong);
			background: var(--surface);
		}

		&[aria-expanded='true'] {
			color: var(--text);
			border-color: var(--border-strong);
			background: var(--surface);
		}
	}

	.code {
		font-family: var(--font-mono);
		font-size: var(--fs-xs);
		font-weight: 600;
		letter-spacing: 0.02em;
	}

	.chevron {
		display: grid;
		transition: transform var(--dur) var(--ease-out);

		&.open {
			transform: rotate(180deg);
		}
	}

	.menu {
		position: absolute;
		top: calc(100% + 8px);
		right: 0;
		z-index: 60;
		display: grid;
		gap: 2px;
		min-width: 190px;
		padding: 6px;
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		background: var(--surface);
		box-shadow: var(--shadow);
		visibility: hidden;
		opacity: 0;
		transform: translateY(-4px) scale(0.98);
		transform-origin: top right;
		transition:
			opacity 0.16s ease,
			transform 0.16s var(--ease-out),
			visibility 0s linear 0.16s;

		&.open {
			visibility: visible;
			opacity: 1;
			transform: none;
			transition:
				opacity 0.16s ease,
				transform 0.16s var(--ease-out),
				visibility 0s;
		}

		a {
			display: flex;
			align-items: center;
			gap: var(--space-3);
			padding: 8px 10px;
			border-radius: var(--radius-sm);
			color: var(--text-muted);
			font-size: var(--fs-sm);
			transition:
				background-color var(--dur) ease,
				color var(--dur) ease;

			@include hover {
				background: var(--surface-2);
				color: var(--text);
			}

			&[aria-current='true'] {
				color: var(--text);
			}
		}
	}

	.badge {
		display: grid;
		place-items: center;
		width: 28px;
		height: 22px;
		border: 1px solid var(--border);
		border-radius: 5px;
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		font-weight: 600;

		[aria-current='true'] & {
			border-color: color-mix(in srgb, var(--accent) 40%, transparent);
			background: var(--accent-soft);
			color: var(--accent);
		}
	}

	.check {
		display: grid;
		margin-left: auto;
		color: var(--accent);
	}
</style>
