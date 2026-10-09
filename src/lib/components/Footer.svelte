<script lang="ts">
	import { profile } from '#lib/data/profile.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import Icon from './Icon.svelte';

	const i18n = getI18n();
	const ui = $derived(i18n.ui.footer);
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container inner">
		<p>© {year} {profile.fullName}</p>
		<p class="built">
			{ui.builtWith} <span>SvelteKit</span>, <span>TypeScript</span>
			{ui.and} <span>SCSS</span>
		</p>
		<a href="#inicio" class="top">
			{ui.backToTop}
			<Icon name="arrowUp" size={14} />
		</a>
	</div>
</footer>

<style lang="scss">
	.footer {
		border-top: 1px solid var(--border);
	}

	.inner {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3) var(--space-6);
		align-items: center;
		justify-content: space-between;
		padding-block: var(--space-6);
		color: var(--text-subtle);
		font-family: var(--font-mono);
		font-size: var(--fs-xs);
	}

	.built span {
		color: var(--text-muted);
	}

	.top {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		transition: color var(--dur) ease;

		@include hover {
			color: var(--accent);
		}
	}
</style>
