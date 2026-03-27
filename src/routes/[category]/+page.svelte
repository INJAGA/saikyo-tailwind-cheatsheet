<script lang="ts">
	import type { Category } from '$lib/types';
	import SubcategorySection from '$lib/components/SubcategorySection.svelte';

	let { data } = $props();
	const category = $derived(data.category as Category);
</script>

<div class="space-y-10">
	<div class="border-b border-base-content/10 pb-6">
		<h1 class="text-3xl font-bold tracking-tight text-base-content">
			{category.title}
		</h1>
		<p class="mt-1 font-mono text-sm text-base-content/40">
			{category.subcategories.length} subcategories
		</p>
	</div>

	{#if category.subcategories.length === 0}
		<div class="flex flex-col items-center justify-center gap-4 py-24 text-center">
			<div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-base-300">
				<span class="icon-[mdi--clock-outline] text-4xl text-base-content/20"></span>
			</div>
			<div class="space-y-1">
				<p class="font-semibold text-base-content/60">このカテゴリは準備中です</p>
				<p class="text-sm text-base-content/30">データは順次追加される予定です</p>
			</div>
		</div>
	{:else}
		{#each category.subcategories as subcategory (subcategory.title)}
			<SubcategorySection {subcategory} />
		{/each}
	{/if}
</div>
