<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { categories } from '$lib/data/index';

	let { children } = $props();

	const activeCategory = $derived(page.params.category);

	const categoryIcons: Record<string, string> = {
		layout: 'icon-[mdi--view-grid-outline]',
		flexbox: 'icon-[mdi--view-sequential-outline]',
		grid: 'icon-[mdi--grid]',
		spacing: 'icon-[mdi--arrow-expand]',
		sizing: 'icon-[mdi--resize]',
		typography: 'icon-[mdi--format-text]',
		backgrounds: 'icon-[mdi--palette-outline]',
		borders: 'icon-[mdi--border-outside]',
		effects: 'icon-[mdi--blur]',
		filters: 'icon-[mdi--filter-outline]',
		transitions: 'icon-[mdi--transition]',
		transforms: 'icon-[mdi--rotate-3d-variant]',
		interactivity: 'icon-[mdi--cursor-default-outline]',
		svg: 'icon-[mdi--svg]',
		accessibility: 'icon-[mdi--accessibility]'
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-base-200">
	<header class="sticky top-0 z-50 border-b border-base-content/10 bg-base-300 shadow-lg">
		<div class="flex h-14 items-center gap-3 px-4">
			<!-- ブランド -->
			<a href={resolve('/layout')} class="flex shrink-0 items-center gap-2 no-underline">
				<span class="icon-[mdi--code-braces] text-xl text-primary"></span>
				<span class="hidden font-mono text-sm font-bold text-base-content sm:block">
					tailwind<span class="text-primary">.ref</span>
				</span>
			</a>

			<div class="hidden h-6 w-px shrink-0 bg-base-content/20 sm:block"></div>

			<!-- カテゴリタブ（横スクロール） -->
			<nav class="flex-1 overflow-x-auto" style="scrollbar-width: none;">
				<div class="flex min-w-max items-center gap-0.5 py-1">
					{#each categories as category (category.id)}
						<a
							href={resolve(`/${category.id}`)}
							aria-current={activeCategory === category.id ? 'page' : undefined}
							class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors duration-150
								{activeCategory === category.id
								? 'border border-primary/30 bg-primary/20 text-primary'
								: 'text-base-content/50 hover:bg-base-content/10 hover:text-base-content'}"
						>
							<span class="{categoryIcons[category.id]} shrink-0 text-sm"></span>
							<span>{category.title}</span>
						</a>
					{/each}
				</div>
			</nav>
		</div>
	</header>

	<main class="container mx-auto max-w-7xl flex-1 px-4 py-8">
		{@render children()}
	</main>
</div>
