<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import { experience } from '#lib/data/experience.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import { formatDuration, formatPeriod } from '#lib/utils/date.ts';
	import SectionHeading from './SectionHeading.svelte';

	const i18n = getI18n();
	const copy = $derived(i18n.ui.sections.experience);
</script>

<section id="experiencia" class="section" aria-labelledby="experiencia-title">
	<div class="container">
		<SectionHeading
			id="experiencia-title"
			index={2}
			endpoint={copy.endpoint}
			title={copy.title}
			lede={copy.lede}
		/>

		<ol class="timeline" role="list">
			{#each experience as job (job.company)}
				<li class="item" use:reveal>
					<div class="when">
						<p class="period">{formatPeriod(job.start, job.end, i18n.ui.date)}</p>
						<p class="duration">{formatDuration(job.start, job.end, i18n.ui.date)}</p>
					</div>

					<article class="job">
						<header>
							<h3>{i18n.t(job.role)}</h3>
							<p class="company">{i18n.t(job.company)}</p>
							<p class="meta">
								{i18n.t(job.type)}{#if job.location}{' · '}{i18n.t(job.location)}{/if}
							</p>
						</header>

						{#if job.summary}
							<p class="summary">{i18n.t(job.summary)}</p>
						{/if}

						<ul class="highlights">
							{#each i18n.t(job.highlights) as highlight, i (i)}
								<li>{highlight}</li>
							{/each}
						</ul>

						<ul class="tag-list" role="list" aria-label={i18n.ui.a11y.technologies}>
							{#each job.stack as tech, i (i)}
								<li class="tag">{i18n.t(tech)}</li>
							{/each}
						</ul>
					</article>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style lang="scss">
	.section {
		padding-block: var(--section-gap) 0;
	}

	.timeline {
		position: relative;
		display: grid;
		gap: var(--space-8);
	}

	.item {
		position: relative;
		display: grid;
		gap: var(--space-4);
		padding-left: var(--space-6);

		&::before {
			content: '';
			position: absolute;
			top: 10px;
			bottom: calc(-1 * var(--space-8));
			left: 5px;
			width: 1px;
			background: linear-gradient(var(--border-strong), var(--border) 80%, transparent);
		}

		&:last-child::before {
			bottom: 0;
		}

		&::after {
			content: '';
			position: absolute;
			top: 6px;
			left: 0;
			width: 11px;
			height: 11px;
			border: 2px solid var(--accent);
			border-radius: 50%;
			background: var(--bg);
		}

		@include up(md) {
			grid-template-columns: 200px minmax(0, 1fr);
			gap: var(--space-7);
			padding-left: 0;

			&::before {
				left: calc(200px + var(--space-7) / 2);
			}

			&::after {
				left: calc(200px + var(--space-7) / 2 - 5px);
			}
		}
	}

	.when {
		@include up(md) {
			text-align: right;
		}
	}

	.period {
		font-family: var(--font-mono);
		font-size: var(--fs-sm);
		color: var(--text);
	}

	.duration {
		@include mono-label;
		margin-top: 2px;
	}

	.job {
		display: grid;
		gap: var(--space-4);

		@include up(md) {
			padding-left: var(--space-5);
		}
	}

	h3 {
		font-size: var(--fs-xl);
	}

	.company {
		margin-top: var(--space-1);
		color: var(--accent);
		font-weight: 600;
	}

	.meta {
		color: var(--text-subtle);
		font-size: var(--fs-sm);
	}

	.summary {
		color: var(--text);
	}

	.highlights {
		display: grid;
		gap: var(--space-2);
		padding: 0;
		color: var(--text-muted);
		list-style: none;

		li {
			position: relative;
			padding-left: var(--space-5);

			&::before {
				content: '→';
				position: absolute;
				left: 0;
				color: var(--text-subtle);
				font-family: var(--font-mono);
				font-size: 0.85em;
				line-height: 1.95;
			}
		}
	}

	.tag-list {
		margin-top: var(--space-2);
	}
</style>
