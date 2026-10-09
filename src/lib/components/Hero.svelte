<script lang="ts">
	import { profile, stats } from '#lib/data/profile.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import ApiResponse from './ApiResponse.svelte';
	import Icon from './Icon.svelte';

	const i18n = getI18n();
</script>

<section id="inicio" class="hero" aria-labelledby="hero-title">
	<div class="container grid">
		<div class="intro">
			{#if profile.openToWork}
				<p class="status" style="--d: 0">
					<span class="pulse" aria-hidden="true"></span>
					{i18n.ui.hero.status}
				</p>
			{/if}

			<h1 id="hero-title" style="--d: 1">
				<span class="first">Victor</span>
				<span class="last">Targino<span class="period">.</span></span>
			</h1>

			<p class="role" style="--d: 2">
				{i18n.t(profile.role)}
				<span class="stack">C# · .NET · ASP.NET Core · SQL Server</span>
			</p>

			<p class="pitch" style="--d: 3">{i18n.t(profile.pitch)}</p>

			<div class="cta" style="--d: 4">
				<a class="btn btn--primary" href="#projetos">
					{i18n.ui.hero.viewProjects}
					<Icon name="arrowRight" size={16} />
				</a>
				<a class="btn btn--ghost" href="#contato">{i18n.ui.hero.contact}</a>
			</div>

			<ul class="socials" role="list" style="--d: 5">
				<li>
					<a
						class="icon-btn"
						href={profile.links.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<Icon name="linkedin" />
					</a>
				</li>
				{#if profile.links.github}
					<li>
						<a
							class="icon-btn"
							href={profile.links.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<Icon name="github" />
						</a>
					</li>
				{/if}
				<li>
					<a
						class="icon-btn"
						href="mailto:{profile.links.email}"
						aria-label={i18n.ui.a11y.sendEmail}
					>
						<Icon name="mail" />
					</a>
				</li>
				<li class="location">
					<Icon name="mapPin" size={16} />
					{i18n.t(profile.location)}
				</li>
			</ul>
		</div>

		<div class="card" style="--d: 3">
			<ApiResponse />
		</div>
	</div>

	<div class="container">
		<dl class="stats" style="--d: 6">
			{#each stats as stat, i (i)}
				<div class="stat">
					<dt>{i18n.t(stat.label)}</dt>
					<dd>{i18n.t(stat.value)}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<style lang="scss">
	.hero {
		position: relative;
		isolation: isolate;
		padding-top: calc(var(--header-h) + fluid(48px, 112px));
		padding-bottom: var(--space-4);
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			z-index: -1;
			background-image:
				linear-gradient(var(--grid-line) 1px, transparent 1px),
				linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
			background-size: 64px 64px;
			background-position: center top;
			mask-image: radial-gradient(ellipse 80% 70% at 50% 20%, #000 30%, transparent 75%);
		}

		&::after {
			content: '';
			position: absolute;
			top: -10%;
			right: -10%;
			z-index: -1;
			width: min(900px, 90vw);
			aspect-ratio: 1;
			background: radial-gradient(circle, var(--glow), transparent 62%);
			pointer-events: none;
		}
	}

	.grid {
		display: grid;
		gap: fluid(48px, 64px);
		align-items: center;

		@include up(lg) {
			grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
		}
	}

	.intro > *,
	.card,
	.stats {
		@include motion-safe {
			animation: rise 0.9s var(--ease-out) both;
			animation-delay: calc(var(--d) * 80ms + 80ms);
		}
	}

	.status {
		display: inline-flex;
		align-items: center;
		gap: var(--space-3);
		margin-bottom: var(--space-6);
		padding: 6px 14px 6px 10px;
		border: 1px solid var(--border);
		border-radius: var(--radius-full);
		background: color-mix(in srgb, var(--surface) 70%, transparent);
		color: var(--text-muted);
		font-family: var(--font-mono);
		font-size: var(--fs-xs);
	}

	.pulse {
		position: relative;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--accent);

		@include motion-safe {
			&::after {
				content: '';
				position: absolute;
				inset: 0;
				border-radius: inherit;
				background: inherit;
				animation: pulse 2s var(--ease-out) infinite;
			}
		}
	}

	h1 {
		display: flex;
		flex-direction: column;
		font-size: var(--fs-display);
		font-weight: 700;
		line-height: 0.92;
		letter-spacing: -0.045em;
	}

	.last {
		color: var(--text-muted);
	}

	.period {
		color: var(--accent);
	}

	.role {
		margin-top: var(--space-6);
		font-family: var(--font-display);
		font-size: var(--fs-xl);
		font-weight: 500;
		letter-spacing: -0.015em;
	}

	.stack {
		display: block;
		margin-top: var(--space-2);
		color: var(--accent);
		font-family: var(--font-mono);
		font-size: var(--fs-sm);
		font-weight: 500;
		letter-spacing: 0;
	}

	.pitch {
		max-width: 52ch;
		margin-top: var(--space-4);
		color: var(--text-muted);
		font-size: var(--fs-md);
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-6);
	}

	.socials {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-2);
		margin-top: var(--space-6);
	}

	.location {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-left: var(--space-2);
		color: var(--text-subtle);
		font-size: var(--fs-sm);
	}

	.card {
		@include up(lg) {
			transform: perspective(1400px) rotateY(-4deg) rotateX(2deg);
		}
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		margin-top: fluid(56px, 96px);
		border-top: 1px solid var(--border);
	}

	.stat {
		display: flex;
		flex-direction: column-reverse;
		gap: 2px;
		padding-block: var(--space-5) 0;

		@include up(md) {
			padding-inline: var(--space-5);

			& + & {
				border-left: 1px solid var(--border);
			}

			&:first-child {
				padding-left: 0;
			}
		}

		dt {
			color: var(--text-subtle);
			font-size: var(--fs-sm);
		}

		dd {
			margin: 0;
			font-family: var(--font-display);
			font-size: var(--fs-xl);
			font-weight: 600;
			letter-spacing: -0.02em;
		}
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
	}

	@keyframes pulse {
		to {
			opacity: 0;
			transform: scale(3);
		}
	}
</style>
