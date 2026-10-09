<script lang="ts">
	import '@fontsource-variable/bricolage-grotesque';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/jetbrains-mono';
	import '#lib/styles/global.scss';

	import { page } from '$app/state';
	import Footer from '#lib/components/Footer.svelte';
	import Header from '#lib/components/Header.svelte';
	import { site } from '#lib/data/site.ts';
	import { localeMeta, locales, setI18n, toLocale } from '#lib/i18n/index.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const locale = $derived(toLocale(page.params.lang));
	const i18n = setI18n(() => locale);

	$effect(() => {
		document.documentElement.lang = i18n.meta.htmlLang;
	});
</script>

<svelte:head>
	<title>{i18n.ui.meta.title}</title>
	<meta name="description" content={i18n.ui.meta.description} />
	<meta name="author" content="Victor Targino Morais" />

	<meta property="og:type" content="website" />
	<meta property="og:locale" content={i18n.meta.ogLocale} />
	{#each locales.filter((l) => l !== locale) as other (other)}
		<meta property="og:locale:alternate" content={localeMeta[other].ogLocale} />
	{/each}
	<meta property="og:title" content={i18n.ui.meta.title} />
	<meta property="og:description" content={i18n.ui.meta.description} />
	<meta name="twitter:card" content="summary" />

	{#if site.url}
		<link rel="canonical" href={site.url + i18n.meta.path} />
		<meta property="og:url" content={site.url + i18n.meta.path} />
		{#each locales as l (l)}
			<link
				rel="alternate"
				hreflang={localeMeta[l].htmlLang}
				href={site.url + localeMeta[l].path}
			/>
		{/each}
		<link rel="alternate" hreflang="x-default" href={site.url + localeMeta.pt.path} />
	{/if}
</svelte:head>

<a class="skip-link" href="#conteudo">{i18n.ui.a11y.skip}</a>

<Header />

<main id="conteudo">
	{@render children()}
</main>

<Footer />
