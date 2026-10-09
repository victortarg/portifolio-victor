<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import { profile } from '#lib/data/profile.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';

	const i18n = getI18n();
	const copy = $derived(i18n.ui.sections.contact);

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout>;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(profile.links.email);
			copied = true;
			clearTimeout(timer);
			timer = setTimeout(() => (copied = false), 2000);
		} catch {
			window.location.href = `mailto:${profile.links.email}`;
		}
	}
</script>

<section id="contato" class="section" aria-labelledby="contato-title">
	<div class="container">
		<div class="panel" use:reveal>
			<SectionHeading
				id="contato-title"
				index={6}
				method="POST"
				endpoint={copy.endpoint}
				title={copy.title}
				lede={copy.lede}
			/>

			<div class="email-row">
				<a class="email" href="mailto:{profile.links.email}">
					{profile.links.email}
					<Icon name="arrowUpRight" size={28} strokeWidth={1.5} />
				</a>
				<button type="button" class="btn btn--ghost btn--sm copy" onclick={copyEmail}>
					<Icon name={copied ? 'check' : 'copy'} size={15} />
					<span aria-live="polite">{copied ? i18n.ui.contact.copied : i18n.ui.contact.copy}</span>
				</button>
			</div>

			<ul class="links" role="list">
				{#if profile.links.phone}
					{@const phone = i18n.t(profile.links.phone.display)}
					<li>
						<a
							class="btn btn--ghost"
							href="tel:{profile.links.phone.e164}"
							aria-label={i18n.ui.contact.call(phone)}
						>
							<Icon name="phone" size={16} />
							{phone}
						</a>
					</li>
				{/if}
				<li>
					<a
						class="btn btn--ghost"
						href={profile.links.linkedin}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon name="linkedin" size={16} /> LinkedIn
					</a>
				</li>
				{#if profile.links.github}
					<li>
						<a
							class="btn btn--ghost"
							href={profile.links.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon name="github" size={16} /> GitHub
						</a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	.section {
		padding-block: var(--section-gap);
	}

	.panel {
		position: relative;
		overflow: hidden;
		padding: fluid(28px, 72px);
		border: 1px solid var(--border);
		border-radius: calc(var(--radius-lg) + 8px);
		background: radial-gradient(circle at 100% 0%, var(--glow), transparent 55%), var(--surface);

		:global(.heading) {
			margin-bottom: var(--space-7);
		}
	}

	.email-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4) var(--space-5);
		align-items: center;
	}

	.email {
		display: inline-flex;
		align-items: center;
		gap: var(--space-3);
		font-family: var(--font-display);
		font-size: fluid(24px, 52px);
		font-weight: 600;
		letter-spacing: -0.03em;
		line-height: 1.1;
		overflow-wrap: anywhere;
		background-image: linear-gradient(var(--accent), var(--accent));
		background-position: 0 100%;
		background-repeat: no-repeat;
		background-size: 0% 2px;
		transition:
			background-size 0.5s var(--ease-out),
			color var(--dur) ease;

		:global(svg) {
			color: var(--accent);
			transition: transform var(--dur) var(--ease-out);
		}

		@include hover {
			background-size: 100% 2px;

			:global(svg) {
				transform: translate(3px, -3px);
			}
		}
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-7);
	}
</style>
