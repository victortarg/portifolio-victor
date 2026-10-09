<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import { focusAreas, profile } from '#lib/data/profile.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';

	const i18n = getI18n();
	const copy = $derived(i18n.ui.sections.about);
</script>

<section id="sobre" class="section" aria-labelledby="sobre-title">
	<div class="container">
		<SectionHeading id="sobre-title" index={1} endpoint={copy.endpoint} title={copy.title} />

		<div class="layout">
			<div class="text" use:reveal>
				{#each i18n.t(profile.about) as paragraph, i (i)}
					<p>{paragraph}</p>
				{/each}
			</div>

			<ul class="focus" role="list" aria-label={i18n.ui.a11y.focusAreas}>
				{#each focusAreas as area, i (i)}
					<li class="focus-card" use:reveal={{ delay: i * 70 }}>
						<span class="icon"><Icon name={area.icon} size={20} /></span>
						<h3>{i18n.t(area.title)}</h3>
						<p>{i18n.t(area.description)}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	.section {
		padding-block: var(--section-gap) 0;
	}

	.layout {
		display: grid;
		gap: var(--space-7);

		@include up(lg) {
			grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
			gap: var(--space-8);
		}
	}

	.text {
		display: grid;
		gap: var(--space-5);
		align-content: start;
		color: var(--text-muted);
		font-size: var(--fs-md);

		p:first-child {
			color: var(--text);
		}
	}

	.focus {
		display: grid;
		gap: var(--space-4);

		@include up(sm) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.focus-card {
		@include card;
		display: grid;
		gap: var(--space-3);
		align-content: start;
		padding: var(--space-5);
		transition:
			border-color var(--dur) ease,
			transform 0.35s var(--ease-out);

		@include hover {
			border-color: var(--border-strong);
			transform: translateY(-3px);

			.icon {
				background: var(--accent);
				color: var(--accent-contrast);
			}
		}

		h3 {
			margin-top: var(--space-2);
			font-size: var(--fs-lg);
			font-weight: 600;
		}

		p {
			color: var(--text-muted);
			font-size: var(--fs-sm);
			line-height: 1.6;
		}
	}

	.icon {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		border-radius: var(--radius-md);
		background: var(--accent-soft);
		color: var(--accent);
		transition:
			background-color var(--dur) ease,
			color var(--dur) ease;
	}
</style>
