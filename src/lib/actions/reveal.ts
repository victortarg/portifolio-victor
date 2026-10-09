import type { Action } from 'svelte/action';

interface RevealOptions {
	delay?: number;
}

export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	const rect = node.getBoundingClientRect();
	if (rect.top < window.innerHeight && rect.bottom > 0) return;

	node.dataset.reveal = '';
	if (options?.delay) node.style.setProperty('--reveal-delay', `${options.delay}ms`);

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.disconnect();
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
