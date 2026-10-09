<script lang="ts">
	import { getI18n, type Localized } from '#lib/i18n/index.ts';

	const i18n = getI18n();
	const ui = $derived(i18n.ui.flashcard);

	const deck: { front: Localized; back: Localized }[] = [
		{
			front: {
				pt: 'O que torna um endpoint idempotente?',
				en: 'What makes an endpoint idempotent?'
			},
			back: {
				pt: 'Repetir a mesma requisição produz o mesmo efeito que fazê-la uma única vez, como em PUT e DELETE.',
				en: 'Repeating the same request has the same effect as making it once, as with PUT and DELETE.'
			}
		},
		{
			front: {
				pt: 'IQueryable ou IEnumerable no Entity Framework?',
				en: 'IQueryable or IEnumerable in Entity Framework?'
			},
			back: {
				pt: 'IQueryable traduz o filtro para SQL e executa no banco; IEnumerable filtra em memória, depois de carregar os dados.',
				en: 'IQueryable translates the filter to SQL and runs it in the database; IEnumerable filters in memory after loading the data.'
			}
		},
		{
			front: { pt: 'O que significa offline-first?', en: 'What does offline-first mean?' },
			back: {
				pt: 'O app funciona primeiro com dados locais e sincroniza com o servidor quando a conexão volta.',
				en: 'The app works with local data first and syncs with the server once the connection is back.'
			}
		}
	];

	let index = $state(0);
	let flipped = $state(false);
	let busy = false;
	const card = $derived(deck[index]);

	async function next() {
		if (busy) return;
		busy = true;
		if (flipped) {
			flipped = false;
			const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
			await new Promise((resolve) => setTimeout(resolve, reduce ? 0 : 280));
		}
		index = (index + 1) % deck.length;
		busy = false;
	}
</script>

<div class="demo">
	<div class="head">
		<span>{ui.deck}</span>
		<span>{index + 1}/{deck.length}</span>
	</div>

	<button type="button" class="card" class:flipped onclick={() => (flipped = !flipped)}>
		<span class="inner">
			<span class="face front" aria-hidden={flipped}>
				<span class="label">{ui.question}</span>
				<span class="text">{i18n.t(card.front)}</span>
				<span class="hint">{ui.hint}</span>
			</span>
			<span class="face back" aria-hidden={!flipped}>
				<span class="label">{ui.answer}</span>
				<span class="text">{i18n.t(card.back)}</span>
			</span>
		</span>
	</button>

	<div class="controls">
		<span class="dots" aria-hidden="true">
			{#each deck as _, i (i)}
				<span class="dot" class:current={i === index}></span>
			{/each}
		</span>
		<button type="button" class="next" onclick={next}>{ui.next}</button>
	</div>
</div>

<style lang="scss">
	.demo {
		display: grid;
		gap: var(--space-4);
		width: 100%;
		max-width: 420px;
	}

	.head,
	.controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		@include mono-label;
	}

	.card {
		display: block;
		width: 100%;
		min-height: 230px;
		perspective: 1200px;
		text-align: left;
		border-radius: var(--radius-lg);

		&:focus-visible {
			outline-offset: 6px;
		}
	}

	.inner {
		position: relative;
		display: block;
		min-height: inherit;
		transform-style: preserve-3d;

		@include motion-safe {
			transition: transform 0.6s var(--ease-out);
		}

		.flipped & {
			transform: rotateY(180deg);
		}

		@include hover {
			.face {
				border-color: var(--border-strong);
			}
		}
	}

	.face {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: var(--space-5);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		background: var(--surface);
		box-shadow: var(--shadow);
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		transition: border-color var(--dur) ease;
	}

	.back {
		transform: rotateY(180deg);
		background: var(--surface-2);
		border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
	}

	.label {
		@include mono-label;
		text-transform: uppercase;
		letter-spacing: 0.08em;

		.back & {
			color: var(--accent);
		}
	}

	.text {
		font-family: var(--font-display);
		font-size: var(--fs-lg);
		font-weight: 500;
		line-height: 1.3;
		letter-spacing: -0.015em;
		color: var(--text);

		.back & {
			font-family: var(--font-body);
			font-size: var(--fs-base);
			font-weight: 400;
			line-height: 1.6;
			letter-spacing: 0;
		}
	}

	.hint {
		margin-top: auto;
		@include mono-label;
	}

	.dots {
		display: flex;
		gap: 6px;
	}

	.dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--border-strong);
		transition:
			width var(--dur) var(--ease-out),
			background-color var(--dur) ease;

		&.current {
			width: 18px;
			border-radius: 3px;
			background: var(--accent);
		}
	}

	.next {
		padding: 4px 0;
		color: var(--text-muted);
		font: inherit;
		transition: color var(--dur) ease;

		@include hover {
			color: var(--accent);
		}
	}
</style>
