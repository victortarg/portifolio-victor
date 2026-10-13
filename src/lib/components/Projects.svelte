<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import { profile } from '#lib/data/profile.ts';
	import { projects } from '#lib/data/projects.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import Flashcard from './Flashcard.svelte';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';

	const i18n = getI18n();
	const copy = $derived(i18n.ui.sections.projects);
	const ui = $derived(i18n.ui.projects);

	const featured = projects.filter((p) => p.featured);
	const others = projects.filter((p) => !p.featured);

	const hostname = (url: string) => new URL(url).hostname;
</script>

<section id="projetos" class="section" aria-labelledby="projetos-title">
	<div class="container">
		<SectionHeading
			id="projetos-title"
			endpoint={copy.endpoint}
			title={copy.title}
			lede={copy.lede}
		/>

		<div class="list">
			{#each featured as project, i (project.slug)}
				<article class="featured" class:flip={i % 2 === 1} use:reveal>
					<div class="info">
						<div class="badges">
							<span class="badge">{project.kind ? i18n.t(project.kind) : ui.featured}</span>
							{#if project.status}
								<span class="status"
									><span class="dot" aria-hidden="true"></span>{i18n.t(project.status)}</span
								>
							{/if}
						</div>

						<!-- One span per word, so names like "Eis-me" never break at the hyphen. -->
						<h3>
							{#each i18n.t(project.name).split(' ') as word, k (k)}<span class="word">{word}</span
								>{' '}{/each}
						</h3>
						<p class="tagline">{i18n.t(project.tagline)}</p>
						<p class="description">{i18n.t(project.description)}</p>

						{#if project.highlights}
							<ul class="checks">
								{#each i18n.t(project.highlights) as item, i (i)}
									<li><Icon name="check" size={16} strokeWidth={2.25} />{item}</li>
								{/each}
							</ul>
						{/if}

						<ul class="tag-list" role="list" aria-label={i18n.ui.a11y.technologies}>
							{#each project.stack as tech, i (i)}
								<li class="tag">{i18n.t(tech)}</li>
							{/each}
						</ul>

						{#if project.links.demo || project.links.repo}
							<div class="links">
								{#if project.links.demo}
									<a
										class="btn btn--primary"
										href={project.links.demo}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={ui.visitLabel(i18n.t(project.name))}
									>
										{ui.visit}
										<Icon name="arrowUpRight" size={16} />
									</a>
								{/if}
								{#if project.links.repo}
									<a
										class="btn btn--ghost"
										href={project.links.repo}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Icon name="github" size={16} />
										{ui.source}
									</a>
								{/if}
							</div>
						{/if}
					</div>

					<div class="visual" class:visual--shot={project.image}>
						{#if project.image}
							<div class="browser">
								{#if project.links.demo}
									<div class="browser-bar" aria-hidden="true">
										<span class="url">{hostname(project.links.demo)}</span>
									</div>
								{/if}
								<img
									src={project.image.src}
									alt={i18n.t(project.image.alt)}
									width={project.image.width}
									height={project.image.height}
									loading="lazy"
									decoding="async"
								/>
							</div>
						{:else if project.slug === 'reviz'}
							<Flashcard />
							<p class="caption">{ui.demoCaption}</p>
						{/if}
					</div>
				</article>
			{/each}

			<div class="grid">
				{#each others as project, i (project.slug)}
					<article class="project" use:reveal={{ delay: i * 80 }}>
						<div class="project-top">
							<p class="tagline">{i18n.t(project.tagline)}</p>
							<div class="project-links">
								{#if project.links.repo}
									<a
										class="icon-btn"
										href={project.links.repo}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={ui.sourceLabel(i18n.t(project.name))}
									>
										<Icon name="github" size={17} />
									</a>
								{/if}
								{#if project.links.demo}
									<a
										class="icon-btn"
										href={project.links.demo}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={ui.visitLabel(i18n.t(project.name))}
									>
										<Icon name="arrowUpRight" size={17} />
									</a>
								{/if}
							</div>
						</div>
						<h3>{i18n.t(project.name)}</h3>
						<p class="description">{i18n.t(project.description)}</p>
						<ul class="tag-list" role="list" aria-label={i18n.ui.a11y.technologies}>
							{#each project.stack as tech, j (j)}
								<li class="tag">{i18n.t(tech)}</li>
							{/each}
						</ul>
					</article>
				{/each}

				{#if others.length % 2 === 1}
					<div class="project placeholder" use:reveal={{ delay: 80 }}>
						<p class="tagline">{ui.placeholder.tag}</p>
						<h3>{ui.placeholder.title}</h3>
						<p class="description">
							{ui.placeholder.text}
							{#if profile.links.github}
								{ui.placeholder.follow}
								<a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>.
							{/if}
						</p>
						<span class="code" aria-hidden="true">{ui.placeholder.commit}</span>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.section {
		padding-block: var(--section-gap) 0;
	}

	.list {
		display: grid;
		gap: var(--space-5);
	}

	.featured {
		@include card;
		display: grid;
		overflow: hidden;
		border-radius: calc(var(--radius-lg) + 4px);

		@include up(lg) {
			grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);

			&.flip {
				grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);

				.visual {
					order: -1;
					border-left: 0;
					border-right: 1px solid var(--border);
				}
			}
		}
	}

	.info {
		display: grid;
		gap: var(--space-4);
		align-content: start;
		padding: fluid(24px, 48px);
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		align-items: center;
	}

	.badge {
		@include mono-label;
		padding: 4px 10px;
		border-radius: var(--radius-full);
		background: var(--surface-2);
		color: var(--text-muted);
	}

	.status {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		@include mono-label;
		color: var(--accent);
	}

	.dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: currentColor;
	}

	.word {
		white-space: nowrap;
	}

	.featured h3 {
		margin-top: var(--space-2);
		font-size: fluid(40px, 64px);
		font-weight: 700;
		letter-spacing: -0.04em;
	}

	.tagline {
		color: var(--text);
		font-family: var(--font-display);
		font-size: var(--fs-lg);
		font-weight: 500;
	}

	.description {
		color: var(--text-muted);
	}

	.checks {
		display: grid;
		gap: var(--space-2);
		padding: 0;
		list-style: none;
		font-size: var(--fs-sm);

		li {
			display: flex;
			gap: var(--space-3);
			align-items: center;
		}

		:global(svg) {
			color: var(--accent);
		}
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-3);
	}

	.visual {
		position: relative;
		display: grid;
		place-items: center;
		gap: var(--space-4);
		align-content: center;
		padding: fluid(32px, 56px) fluid(20px, 48px);
		border-top: 1px solid var(--border);
		background-color: var(--bg-soft);
		background-image: radial-gradient(var(--grid-line) 1.2px, transparent 1.2px);
		background-size: 18px 18px;

		@include up(lg) {
			border-top: 0;
			border-left: 1px solid var(--border);
		}
	}

	.caption {
		@include mono-label;
	}

	// Screenshot in a browser frame that bleeds off the outer side of the card.
	.visual--shot {
		place-items: center start;
		padding-right: 0;

		.flip & {
			place-items: center end;
			padding-right: fluid(20px, 48px);
			padding-left: 0;
		}

		@include hover {
			.browser {
				transform: translateY(-4px);
			}
		}
	}

	.browser {
		width: 112%;
		overflow: hidden;
		border: 1px solid var(--border-strong);
		border-right: 0;
		border-radius: var(--radius-md) 0 0 var(--radius-md);
		background: var(--surface);
		box-shadow: var(--shadow);
		transition: transform 0.45s var(--ease-out);

		.flip & {
			border-right: 1px solid var(--border-strong);
			border-left: 0;
			border-radius: 0 var(--radius-md) var(--radius-md) 0;
		}

		img {
			width: 100%;
			height: auto;
		}
	}

	.browser-bar {
		display: flex;
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border);
		background: var(--surface-2);
	}

	.url {
		padding: 2px var(--space-3);
		border-radius: var(--radius-sm);
		background: var(--surface);
		color: var(--text-subtle);
		font-family: var(--font-mono);
		font-size: var(--fs-xs);
	}

	.grid {
		display: grid;
		gap: var(--space-5);

		@include up(md) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.project {
		@include card;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: fluid(24px, 32px);
		transition:
			border-color var(--dur) ease,
			transform 0.35s var(--ease-out);

		@include hover {
			border-color: var(--border-strong);
		}

		h3 {
			font-size: var(--fs-xl);
		}

		.tagline {
			@include mono-label;
		}

		.tag-list {
			margin-top: auto;
			padding-top: var(--space-3);
		}
	}

	.project-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 40px;
	}

	.project-links {
		display: flex;
		gap: var(--space-2);
	}

	.placeholder {
		border-style: dashed;
		background: transparent;

		a {
			color: var(--accent);
			text-decoration: underline;
			text-underline-offset: 3px;
		}

		.code {
			margin-top: auto;
			padding-top: var(--space-3);
			@include mono-label;
		}
	}
</style>
