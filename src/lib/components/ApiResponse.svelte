<script lang="ts">
	import { profile } from '#lib/data/profile.ts';
	import { getI18n } from '#lib/i18n/index.ts';
	import Icon from './Icon.svelte';

	type TokenKind = 'key' | 'string' | 'literal' | 'punct';
	type Token = { kind: TokenKind; text: string };
	type Json = string | boolean | string[] | { [key: string]: Json };
	type View = 'json' | 'ui';

	const i18n = getI18n();
	const ui = $derived(i18n.ui.api);

	const views: View[] = ['json', 'ui'];
	const tabs = $state<Partial<Record<View, HTMLButtonElement>>>({});
	let view = $state<View>('json');

	const stack = {
		back: ['C#', '.NET 8', 'SQL Server'],
		front: ['SvelteKit', 'TypeScript']
	};

	// Both tabs render this same object: raw JSON on one side, UI on the other.
	const payload = $derived({
		name: profile.fullName,
		role: i18n.t(profile.role),
		focus: 'back-end',
		stack,
		experience: i18n.t({ pt: '2+ anos', en: '2+ years' }),
		location: i18n.t({ pt: 'Fortaleza, CE', en: 'Fortaleza, Brazil' }),
		available: profile.openToWork
	});

	const p = (text: string): Token => ({ kind: 'punct', text });

	const str = (value: string): Token => ({ kind: 'string', text: JSON.stringify(value) });

	function valueTokens(value: string | boolean | string[]): Token[] {
		if (Array.isArray(value)) {
			return [
				p('['),
				...value.flatMap((item, i) => (i > 0 ? [p(', '), str(item)] : [str(item)])),
				p(']')
			];
		}
		return typeof value === 'string' ? [str(value)] : [{ kind: 'literal', text: String(value) }];
	}

	function objectLines(object: { [key: string]: Json }, depth: number): Token[][] {
		const keys: Record<string, string> = ui.keys;
		const pad = '  '.repeat(depth);
		const entries = Object.entries(object);

		return entries.flatMap(([key, value], i) => {
			const comma = i < entries.length - 1 ? [p(',')] : [];
			const head: Token[] = [p(pad), { kind: 'key', text: `"${keys[key] ?? key}"` }, p(': ')];

			if (typeof value === 'object' && !Array.isArray(value)) {
				return [[...head, p('{')], ...objectLines(value, depth + 1), [p(`${pad}}`), ...comma]];
			}
			return [[...head, ...valueTokens(value), ...comma]];
		});
	}

	const lines = $derived([[p('{')], ...objectLines(payload, 1), [p('}')]]);

	function onTabKeydown(event: KeyboardEvent) {
		const current = views.indexOf(view);
		const target = {
			ArrowRight: (current + 1) % views.length,
			ArrowLeft: (current - 1 + views.length) % views.length,
			Home: 0,
			End: views.length - 1
		}[event.key];

		if (target === undefined) return;
		event.preventDefault();
		view = views[target];
		tabs[view]?.focus();
	}
</script>

<figure class="api" aria-label={i18n.ui.a11y.apiCard}>
	<div class="bar">
		<span class="method">GET</span>
		<span class="path">/api/devs/victor-targino</span>
		<span class="status"><span class="dot" aria-hidden="true"></span>200 OK</span>
	</div>

	<div class="tabs" role="tablist" aria-label={i18n.ui.a11y.apiTabs}>
		{#each views as v (v)}
			<button
				bind:this={tabs[v]}
				type="button"
				role="tab"
				id="api-tab-{v}"
				class="tab"
				aria-selected={view === v}
				aria-controls="api-panel-{v}"
				tabindex={view === v ? 0 : -1}
				onclick={() => (view = v)}
				onkeydown={onTabKeydown}
			>
				<Icon name={v === 'json' ? 'braces' : 'layout'} size={14} />
				{ui.tabs[v]}
			</button>
		{/each}
	</div>

	<div class="panels">
		<div
			role="tabpanel"
			id="api-panel-json"
			class="panel"
			class:active={view === 'json'}
			aria-labelledby="api-tab-json"
			inert={view !== 'json'}
		>
			<pre><code
					>{#each lines as line, i (i)}<span class="line" style="--i: {i}"
							>{#each line as token, j (j)}<span class={token.kind}>{token.text}</span
								>{/each}{#if i === lines.length - 1}<span class="caret" aria-hidden="true"
								></span>{/if}</span
						>{/each}</code
				></pre>
		</div>

		<div
			role="tabpanel"
			id="api-panel-ui"
			class="panel preview"
			class:active={view === 'ui'}
			aria-labelledby="api-tab-ui"
			inert={view !== 'ui'}
		>
			<div class="who">
				<span class="avatar" aria-hidden="true">VT</span>
				<div class="who-text">
					<p class="who-name">{payload.name}</p>
					<p class="who-role">{payload.role}</p>
				</div>
				{#if payload.available}
					<p class="available"><span class="dot" aria-hidden="true"></span>{ui.available}</p>
				{/if}
			</div>

			<dl class="layers">
				<div class="layer layer--primary">
					<dt>Back-end <span class="focus">{ui.focus}</span></dt>
					<dd>
						<ul class="chips" role="list">
							{#each payload.stack.back as tech (tech)}
								<li>{tech}</li>
							{/each}
						</ul>
					</dd>
				</div>
				<div class="layer">
					<dt>Front-end</dt>
					<dd>
						<ul class="chips" role="list">
							{#each payload.stack.front as tech (tech)}
								<li>{tech}</li>
							{/each}
						</ul>
					</dd>
				</div>
			</dl>

			<p class="meta">
				<Icon name="mapPin" size={14} />
				{payload.location}
				<span class="sep" aria-hidden="true">/</span>
				{payload.experience}
			</p>
		</div>
	</div>
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

		:focus-visible {
			outline-color: var(--code-string);
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
	}

	.tabs {
		display: flex;
		gap: var(--space-1);
		padding-inline: var(--space-2);
		border-bottom: 1px solid var(--code-border);
	}

	.tab {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		min-height: 40px;
		padding-inline: var(--space-3);
		color: var(--code-muted);
		font-size: rem(12px);
		font-weight: 600;
		transition:
			color var(--dur) ease,
			transform var(--dur-press) var(--ease-out);

		&:active {
			transform: scale(0.97);
		}

		&::after {
			content: '';
			position: absolute;
			inset: auto var(--space-3) -1px;
			height: 2px;
			border-radius: 2px;
			background: var(--code-string);
			transform: scaleX(0);
			transition: transform 0.25s var(--ease-out);
		}

		@include hover {
			color: var(--code-text);
		}

		&:focus-visible {
			outline-offset: -4px;
		}

		&[aria-selected='true'] {
			color: var(--code-text);

			&::after {
				transform: scaleX(1);
			}
		}
	}

	// Both panels share one grid cell, so the card keeps the height of the
	// taller one and switching tabs never shifts the layout.
	.panels {
		display: grid;
	}

	.panel {
		grid-area: 1 / 1;
		min-width: 0;

		&:not(.active) {
			visibility: hidden;
			opacity: 0;
		}

		@include motion-safe {
			transition:
				opacity 0.25s var(--ease-out),
				transform 0.25s var(--ease-out);

			&:not(.active) {
				transform: translateY(6px);
				transition:
					opacity 0.15s ease,
					transform 0.15s ease,
					visibility 0s linear 0.15s;
			}
		}
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
			animation-delay: calc(var(--i) * 60ms + 350ms);
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

	.preview {
		display: grid;
		gap: var(--space-5);
		align-content: start;
		padding: var(--space-5);
		font-family: var(--font-body);
		font-size: var(--fs-sm);
	}

	.who {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		align-items: center;
	}

	.avatar {
		display: grid;
		flex-shrink: 0;
		place-items: center;
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: color-mix(in srgb, var(--code-string) 14%, transparent);
		color: var(--code-string);
		font-family: var(--font-mono);
		font-size: rem(14px);
		font-weight: 700;
	}

	.who-text {
		flex: 1;
		min-width: 0;
	}

	.who-name {
		font-family: var(--font-display);
		font-size: rem(17px);
		font-weight: 600;
		letter-spacing: -0.015em;
		line-height: 1.25;
	}

	.who-role {
		color: var(--code-muted);
	}

	.available {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 3px 10px;
		border: 1px solid color-mix(in srgb, var(--code-string) 35%, transparent);
		border-radius: var(--radius-full);
		color: var(--code-string);
		font-size: var(--fs-xs);
		font-weight: 600;
	}

	.layers {
		display: grid;
		gap: var(--space-2);
	}

	.layer {
		display: grid;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4);
		border: 1px solid var(--code-border);
		border-radius: var(--radius-md);

		dt {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: var(--space-3);
			font-weight: 600;
		}

		dd {
			margin: 0;
		}

		&--primary {
			border-color: color-mix(in srgb, var(--code-string) 40%, var(--code-border));
			background: color-mix(in srgb, var(--code-string) 6%, transparent);
		}
	}

	.focus {
		color: var(--code-string);
		font-family: var(--font-mono);
		font-size: rem(11px);
		font-weight: 500;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;

		li {
			padding: 2px 9px;
			border: 1px solid var(--code-border);
			border-radius: var(--radius-full);
			color: var(--code-text);
			font-family: var(--font-mono);
			font-size: rem(12px);
		}

		.layer--primary & li {
			border-color: color-mix(in srgb, var(--code-string) 30%, var(--code-border));
		}
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 6px;
		color: var(--code-muted);
		font-size: var(--fs-xs);
	}

	.sep {
		opacity: 0.5;
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
