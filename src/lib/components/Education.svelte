<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import { education } from '#lib/data/education.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';

	const i18n = getI18n();
	const copy = $derived(i18n.ui.sections.education);
</script>

<section id="formacao" class="section" aria-labelledby="formacao-title">
	<div class="container">
		<SectionHeading id="formacao-title" index={5} endpoint={copy.endpoint} title={copy.title} />

		<ul class="grid" role="list">
			{#each education as item, i (item.institution)}
				<li class="item" use:reveal={{ delay: i * 80 }}>
					<span class="icon"><Icon name="graduation" size={20} /></span>
					<div class="body">
						<p class="period">{i18n.t(item.period)} · {i18n.t(item.status)}</p>
						<h3>{i18n.t(item.course)}</h3>
						<p class="institution">{item.institution}</p>
						{#if item.details}
							<p class="details">{i18n.t(item.details)}</p>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	.section {
		padding-block: var(--section-gap) 0;
	}

	.grid {
		display: grid;
		gap: var(--space-4);

		@include up(md) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.item {
		@include card;
		display: flex;
		gap: var(--space-4);
		padding: var(--space-5);
	}

	.icon {
		display: grid;
		flex-shrink: 0;
		place-items: center;
		width: 44px;
		height: 44px;
		border-radius: var(--radius-md);
		background: var(--accent-soft);
		color: var(--accent);
	}

	.body {
		display: grid;
		gap: var(--space-1);
	}

	.period {
		@include mono-label;
	}

	h3 {
		margin-top: var(--space-1);
		font-size: var(--fs-lg);
		font-weight: 600;
	}

	.institution {
		color: var(--text);
		font-weight: 500;
	}

	.details {
		margin-top: var(--space-2);
		color: var(--text-muted);
		font-size: var(--fs-sm);
	}
</style>
