<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { UtilityClass, Subcategory } from '$lib/types';
	import ClassCard from './ClassCard.svelte';

	let { subcategory, preview }: { subcategory: Subcategory; preview?: Snippet<[UtilityClass]> } =
		$props();
</script>

<section class="space-y-4">
	<h2 class="flex items-center gap-2 text-lg font-semibold text-base-content">
		<span class="inline-block h-5 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true"></span>
		{subcategory.title}
		<span class="badge badge-ghost font-mono badge-sm font-normal text-base-content/40">
			{subcategory.classes.length}
		</span>
	</h2>
	<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each subcategory.classes as cls (cls.name)}
			<ClassCard {cls} {preview} />
		{/each}
	</div>
</section>
