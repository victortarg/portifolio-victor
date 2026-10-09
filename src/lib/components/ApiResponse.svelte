<script lang="ts">
	import { profile } from '#lib/data/profile.ts';
	import { getI18n, type Localized, type Text } from '#lib/i18n/index.ts';

	type TokenKind = 'key' | 'string' | 'literal' | 'punct';
	type Token = { kind: TokenKind; text: string };
	type Value = Text | boolean | string[];

	const i18n = getI18n();

	const fields: [key: Localized, value: Value][] = [
		[{ pt: 'nome', en: 'name' }, profile.fullName],
		[{ pt: 'cargo', en: 'role' }, profile.role],
		[{ pt: 'stack', en: 'stack' }, ['C#', '.NET 8+', 'SQL Server']],
		[
			{ pt: 'experiencia', en: 'experience' },
			{ pt: '2+ anos', en: '2+ years' }
		],
		[
			{ pt: 'local', en: 'location' },
			{ pt: 'Fortaleza, CE', en: 'Fortaleza, Brazil' }
		],
		[{ pt: 'disponivel', en: 'available' }, profile.openToWork]
	];

	const p = (text: string): Token => ({ kind: 'punct', text });

	const str = (value: string): Token => ({ kind: 'string', text: JSON.stringify(value) });

	const lines = $derived.by(() => {
		const result: Token[][] = [[p('{')]];

		fields.forEach(([key, raw], i) => {
			const value = typeof raw === 'boolean' || Array.isArray(raw) ? raw : i18n.t(raw);
			const comma = i < fields.length - 1 ? [p(',')] : [];
			const prefix = [p('  '), { kind: 'key', text: `"${i18n.t(key)}"` } as Token, p(': ')];

			if (Array.isArray(value)) {
				result.push([...prefix, p('[')]);
				result.push([
					p('    '),
					...value.flatMap((item, j) => (j > 0 ? [p(', '), str(item)] : [str(item)]))
				]);
				result.push([p('  ]'), ...comma]);
			} else {
				const token: Token =
					typeof value === 'string' ? str(value) : { kind: 'literal', text: String(value) };
				result.push([...prefix, token, ...comma]);
			}
		});

		result.push([p('}')]);
		return result;
	});
</script>

<figure class="api" aria-label={i18n.ui.a11y.apiCard}>
	<div class="bar">
		<span class="method">GET</span>
		<span class="path">/api/devs/victor-targino</span>
		<span class="status"><span class="dot" aria-hidden="true"></span>200 OK</span>
	</div>

	<pre><code
			>{#each lines as line, i (i)}<span class="line" style="--i: {i}"
					>{#each line as token, j (j)}<span class={token.kind}>{token.text}</span
						>{/each}{#if i === lines.length - 1}<span class="caret" aria-hidden="true"
						></span>{/if}</span
				>{/each}</code
		></pre>

	<figcaption class="foot">
		<span>content-type: application/json</span>
		<span>18 ms</span>
	</figcaption>
</figure>

<style lang="scss">
	.api {
		position: relative;
		overflow: hidden;
		border: 1px solid var(--code-border);
		border-radius: var(--radius-lg);
		background: var(--code-bg);
		color: var(--code-text);
		box-shadow: var(--shadow);
		font-family: var(--font-mono);
		font-size: rem(13px);

		@include up(sm) {
			font-size: rem(14px);
		}

		&::before {
			content: '';
			position: absolute;
			inset: 0 0 auto;
			height: 1px;
			background: linear-gradient(
				90deg,
				transparent,
				color-mix(in srgb, var(--code-string) 60%, transparent),
				transparent
			);
		}
	}

	.bar {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--code-border);
		font-size: rem(12px);
	}

	.method {
		padding: 2px 7px;
		border-radius: 5px;
		background: color-mix(in srgb, var(--code-key) 16%, transparent);
		color: var(--code-key);
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.path {
		overflow: hidden;
		color: var(--code-muted);
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.status {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		gap: 6px;
		margin-left: auto;
		color: var(--code-string);
		font-weight: 600;
	}

	.dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: currentColor;
		box-shadow: 0 0 10px currentColor;
	}

	pre {
		overflow-x: auto;
		padding: var(--space-5) var(--space-4) var(--space-5) 0;
		line-height: 1.75;
		counter-reset: line;
		scrollbar-width: thin;
	}

	code {
		display: block;
		min-width: max-content;
	}

	.line {
		display: block;
		padding-right: var(--space-4);
		counter-increment: line;

		&::before {
			content: counter(line);
			display: inline-block;
			width: 3.25ch;
			margin-right: 2ch;
			color: var(--code-muted);
			opacity: 0.55;
			text-align: right;
			user-select: none;
		}

		@include motion-safe {
			animation: type-in 0.45s var(--ease-out) both;
			animation-delay: calc(var(--i) * 70ms + 350ms);
		}
	}

	.key {
		color: var(--code-key);
	}

	.string {
		color: var(--code-string);
	}

	.literal {
		color: var(--code-literal);
	}

	.punct {
		color: var(--code-muted);
		white-space: pre;
	}

	.caret {
		display: inline-block;
		width: 0.6ch;
		height: 1.15em;
		margin-left: 4px;
		vertical-align: -0.2em;
		background: var(--code-string);

		@include motion-safe {
			animation: blink 1.1s steps(1) infinite;
		}
	}

	.foot {
		display: flex;
		justify-content: space-between;
		gap: var(--space-4);
		padding: var(--space-3) var(--space-4);
		border-top: 1px solid var(--code-border);
		color: var(--code-muted);
		font-size: rem(12px);
	}

	@keyframes type-in {
		from {
			opacity: 0;
			transform: translateX(-6px);
		}
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
