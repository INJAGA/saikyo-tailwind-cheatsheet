<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
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

<div class="min-h-screen bg-base-200 flex flex-col">
	<header class="sticky top-0 z-50 bg-base-300 shadow-lg border-b border-base-content/10">
		<div class="flex items-center gap-3 px-4 h-14">
			<!-- ブランド -->
			<a href="/layout" class="flex items-center gap-2 shrink-0 no-underline">
				<span class="icon-[mdi--code-braces] text-xl text-primary"></span>
				<span class="font-mono font-bold text-sm text-base-content hidden sm:block">
					tailwind<span class="text-primary">.ref</span>
				</span>
			</a>

			<div class="w-px h-6 bg-base-content/20 shrink-0 hidden sm:block"></div>

			<!-- カテゴリタブ（横スクロール） -->
			<nav class="flex-1 overflow-x-auto" style="scrollbar-width: none;">
				<div class="flex items-center gap-0.5 min-w-max py-1">
					{#each categories as category (category.id)}
						<a
							href="/{category.id}"
							aria-current={activeCategory === category.id ? 'page' : undefined}
							class="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-medium transition-colors duration-150 whitespace-nowrap
								{activeCategory === category.id
									? 'bg-primary/20 text-primary border border-primary/30'
									: 'text-base-content/50 hover:text-base-content hover:bg-base-content/10'}"
						>
							<span class="{categoryIcons[category.id]} text-sm shrink-0"></span>
							<span>{category.title}</span>
						</a>
					{/each}
				</div>
			</nav>
		</div>
	</header>

	<main class="flex-1 container mx-auto px-4 py-8 max-w-7xl">
		{@render children()}
	</main>
</div>
