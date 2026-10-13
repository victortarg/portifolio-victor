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
		<SectionHeading id="sobre-title" endpoint={copy.endpoint} title={copy.title} />

		<div class="layout">
			<div class="text" use:reveal>
				{#each i18n.t(profile.about) as paragraph, i (i)}
					<p>{paragraph}</p>
				{/each}
			</div>

			<ul class="focus" role="list" aria-label={i18n.ui.a11y.focusAreas}>
				{#each focusAreas as area, i (i)}
					<li class="focus-item" use:reveal={{ delay: i * 70 }}>
						<div class="focus-head">
							<span class="icon"><Icon name={area.icon} size={18} /></span>
							<h3>{i18n.t(area.title)}</h3>
						</div>
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
		gap: var(--space-6);
		align-content: start;

		@include up(sm) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.focus-item {
		position: relative;
		display: grid;
		gap: var(--space-3);
		align-content: start;
		padding-top: var(--space-5);
		border-top: 1px solid var(--border);

		// Accent line that draws over the hairline on hover.
		&::before {
			content: '';
			position: absolute;
			inset: -1px 0 auto;
			height: 1px;
			background: var(--accent);
			transform: scaleX(0);
			transform-origin: left;
			transition: transform 0.45s var(--ease-out);
		}

		@include hover {
			&::before {
				transform: scaleX(1);
			}

			.icon {
				background: var(--accent);
				color: var(--accent-contrast);
			}
		}

		h3 {
			font-size: var(--fs-lg);
			font-weight: 600;
		}

		p {
			color: var(--text-muted);
			font-size: var(--fs-sm);
			line-height: 1.6;
		}
	}

	.focus-head {
		display: flex;
		gap: var(--space-3);
		align-items: center;
	}

	.icon {
		display: grid;
		flex-shrink: 0;
		place-items: center;
		width: 36px;
		height: 36px;
		border-radius: var(--radius-md);
		background: var(--accent-soft);
		color: var(--accent);
		transition:
			background-color var(--dur) ease,
			color var(--dur) ease;
	}
</style>
