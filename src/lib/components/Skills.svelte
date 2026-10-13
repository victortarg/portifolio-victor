<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import { extraGroups, stackLayers } from '#lib/data/skills.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';

	const i18n = getI18n();
	const copy = $derived(i18n.ui.sections.stack);
</script>

<section id="stack" class="section" aria-labelledby="stack-title">
	<div class="container">
		<SectionHeading id="stack-title" endpoint={copy.endpoint} title={copy.title} lede={copy.lede} />

		<ol class="layers" role="list">
			{#each stackLayers as layer, i (i)}
				<li use:reveal={{ delay: i * 80 }} style="--step: {i}">
					{#if layer.link}
						<p class="link" aria-hidden="true"><span>{layer.link}</span></p>
					{/if}

					<article class="layer" class:layer--primary={layer.primary}>
						<header>
							<span class="icon"><Icon name={layer.icon} size={18} /></span>
							<div>
								<div class="title-row">
									<h3>{i18n.t(layer.title)}</h3>
									{#if layer.primary}
										<span class="badge">{i18n.ui.stack.primary}</span>
									{/if}
								</div>
								<p class="description">{i18n.t(layer.description)}</p>
							</div>
						</header>

						<ul class="tag-list" role="list">
							{#each layer.skills as skill, j (j)}
								<li class="tag" class:tag--core={skill.core}>{i18n.t(skill.name)}</li>
							{/each}
						</ul>
					</article>
				</li>
			{/each}
		</ol>

		<div class="extras">
			{#each extraGroups as group, i (i)}
				<article class="extra" use:reveal={{ delay: i * 80 }}>
					<h3><Icon name={group.icon} size={16} />{i18n.t(group.title)}</h3>
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
	$label-col: 260px;

	.section {
		padding-block: var(--section-gap) 0;
	}

	.layer {
		@include card;
		display: grid;
		gap: var(--space-5);
		padding: var(--space-5);

		@include up(md) {
			grid-template-columns: $label-col minmax(0, 1fr);
			align-items: center;
		}

		header {
			display: flex;
			gap: var(--space-3);
			align-items: center;
		}

		h3 {
			font-size: var(--fs-md);
			font-weight: 600;
			letter-spacing: -0.01em;
		}

		// The main layer is the one that carries the weight of the stack.
		&--primary {
			border-color: color-mix(in srgb, var(--accent) 45%, var(--border));
			background:
				radial-gradient(circle at 0% 0%, var(--accent-soft), transparent 60%), var(--surface);
			box-shadow: var(--shadow);

			@include up(md) {
				padding-block: var(--space-6);
			}

			h3 {
				font-size: var(--fs-lg);
			}

			.icon {
				border-color: transparent;
				background: var(--accent);
				color: var(--accent-contrast);
			}
		}
	}

	.description {
		@include mono-label;
	}

	.icon {
		display: grid;
		flex-shrink: 0;
		place-items: center;
		width: 36px;
		height: 36px;
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		color: var(--text-muted);
	}

	.title-row {
		display: flex;
		flex-wrap: wrap;
		gap: 4px var(--space-2);
		align-items: center;
	}

	.badge {
		padding: 2px 8px;
		border-radius: var(--radius-sm);
		background: var(--accent-soft);
		color: var(--accent);
		font-family: var(--font-mono);
		font-size: var(--fs-xs);
		font-weight: 600;
		white-space: nowrap;
	}

	$link-h: 44px;
	$dot: 5px;

	// Connector between two layers, labeled with how they talk to each other.
	.link {
		position: relative;
		display: flex;
		align-items: center;
		height: $link-h;
		padding-left: 22px;
		@include mono-label;

		&::before {
			content: '';
			align-self: stretch;
			width: 1px;
			margin-right: var(--space-4);
			background: repeating-linear-gradient(
				to bottom,
				var(--border-strong) 0 4px,
				transparent 4px 8px
			);
			transform-origin: top;
		}

		// The "request" dot, centered on the 1px line at 22px.
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 20px;
			width: $dot;
			height: $dot;
			border-radius: 50%;
			background: var(--accent);
			opacity: 0;
		}

		span {
			display: inline-block;
		}
	}

	// When the stack scrolls into view, each connector draws down from the layer
	// above, its label follows, then a dot crosses it: a request travelling from
	// the interface through the back end to the database. Plays once per visit.
	@include motion-safe {
		.link {
			&::before {
				transition: transform 450ms var(--ease-out) calc(var(--reveal-delay, 0ms) + 200ms);
			}

			span {
				transition:
					opacity 200ms var(--ease-out) calc(var(--reveal-delay, 0ms) + 500ms),
					transform 200ms var(--ease-out) calc(var(--reveal-delay, 0ms) + 500ms);
			}
		}

		li:global([data-reveal]:not(.is-visible)) > .link {
			&::before {
				transform: scaleY(0);
			}

			span {
				opacity: 0;
				transform: translateX(-4px);
			}
		}

		li:global(.is-visible) > .link::after {
			animation: request 600ms var(--ease-in-out) calc(700ms + (var(--step) - 1) * 650ms) both;
		}
	}

	@keyframes request {
		from {
			opacity: 0;
			transform: translateY(0);
		}

		20%,
		80% {
			opacity: 1;
		}

		to {
			opacity: 0;
			transform: translateY($link-h - $dot);
		}
	}

	.extras {
		display: grid;
		gap: var(--space-4);
		margin-top: var(--space-6);

		@include up(md) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.extra {
		display: grid;
		gap: var(--space-4);
		align-content: start;
		padding-top: var(--space-5);
		border-top: 1px solid var(--border);

		h3 {
			display: flex;
			gap: var(--space-2);
			align-items: center;
			color: var(--text-muted);
			font-size: var(--fs-base);
			font-weight: 600;
			letter-spacing: -0.01em;
		}
	}

	.legend {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		margin-top: var(--space-6);
		color: var(--text-subtle);
		font-size: var(--fs-sm);
	}
</style>
