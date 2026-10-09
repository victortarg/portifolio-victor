<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import { skillGroups } from '#lib/data/skills.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';

	const i18n = getI18n();
	const copy = $derived(i18n.ui.sections.stack);
</script>

<section id="stack" class="section" aria-labelledby="stack-title">
	<div class="container">
		<SectionHeading
			id="stack-title"
			index={4}
			endpoint={copy.endpoint}
			title={copy.title}
			lede={copy.lede}
		/>

		<div class="grid">
			{#each skillGroups as group, i (i)}
				<article class="group" use:reveal={{ delay: i * 60 }}>
					<header>
						<span class="icon"><Icon name={group.icon} size={18} /></span>
						<h3>{i18n.t(group.title)}</h3>
						<span class="count">{String(group.skills.length).padStart(2, '0')}</span>
					</header>
					<ul class="tag-list" role="list">
						{#each group.skills as skill, j (j)}
							<li class="tag" class:tag--core={skill.core}>{i18n.t(skill.name)}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>

		<p class="legend" use:reveal>
			<span class="tag tag--core">core</span>
			{i18n.ui.stack.core}
		</p>
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

		@include up(lg) {
			grid-template-columns: repeat(6, minmax(0, 1fr));

			.group {
				grid-column: span 2;
			}

			.group:nth-child(-n + 2) {
				grid-column: span 3;
			}
		}
	}

	.group {
		@include card;
		display: grid;
		gap: var(--space-5);
		align-content: start;
		padding: var(--space-5);

		header {
			display: flex;
			align-items: center;
			gap: var(--space-3);
		}

		h3 {
			font-size: var(--fs-md);
			font-weight: 600;
			letter-spacing: -0.01em;
		}
	}

	.icon {
		display: grid;
		place-items: center;
		width: 34px;
		height: 34px;
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		color: var(--text-muted);
	}

	.count {
		margin-left: auto;
		@include mono-label;
	}

	.legend {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		margin-top: var(--space-5);
		color: var(--text-subtle);
		font-size: var(--fs-sm);
	}
</style>
