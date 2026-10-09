<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';

	interface Props {
		id: string;
		index: number;
		method?: 'GET' | 'POST';
		endpoint: string;
		title: string;
		lede?: string;
	}

	let { id, index, method = 'GET', endpoint, title, lede }: Props = $props();
</script>

<header class="heading" use:reveal>
	<p class="endpoint" aria-hidden="true">
		<span class="index">{String(index).padStart(2, '0')}</span>
		<span class="method" class:post={method === 'POST'}>{method}</span>
		<span>{endpoint}</span>
	</p>
	<h2 {id}>{title}</h2>
	{#if lede}
		<p class="lede">{lede}</p>
	{/if}
</header>

<style lang="scss">
	.heading {
		display: grid;
		gap: var(--space-4);
		max-width: 720px;
		margin-bottom: fluid(40px, 64px);
	}

	.endpoint {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		@include mono-label;
		font-size: var(--fs-sm);
	}

	.index {
		color: var(--text-subtle);

		&::after {
			content: '';
			display: inline-block;
			width: 28px;
			height: 1px;
			margin-left: var(--space-3);
			vertical-align: middle;
			background: var(--border-strong);
		}
	}

	.method {
		color: var(--accent);
		font-weight: 700;

		&.post {
			color: var(--accent-2);
		}
	}

	h2 {
		font-size: var(--fs-2xl);
	}

	.lede {
		max-width: 60ch;
		color: var(--text-muted);
		font-size: var(--fs-md);
	}
</style>
