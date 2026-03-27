<script lang="ts">
	import type { Category } from '$lib/types';

	let { data } = $props();
	const category = $derived(data.category as Category);
</script>

<div class="space-y-10">
	<!-- カテゴリヘッダー -->
	<div class="border-b border-base-content/10 pb-6">
		<h1 class="text-3xl font-bold tracking-tight text-base-content">
			{category.title}
		</h1>
		<p class="mt-1 font-mono text-sm text-base-content/40">
			{category.subcategories.length} subcategories
		</p>
	</div>

	{#if category.subcategories.length === 0}
		<!-- 準備中の空ステート -->
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
			<section class="space-y-4">
				<h2 class="flex items-center gap-2 text-lg font-semibold text-base-content">
					<span class="inline-block h-5 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true"
					></span>
					{subcategory.title}
				</h2>
				<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{#each subcategory.classes as cls (cls.name)}
						<div
							class="card cursor-default border border-base-content/10 bg-base-100 transition-all duration-200 card-sm hover:border-primary/40 hover:shadow-md"
						>
							<div class="card-body gap-2 p-4">
								<code
									class="badge max-w-full self-start truncate badge-outline font-mono text-xs badge-sm"
								>
									{cls.name}
								</code>
								<p class="font-mono text-xs leading-relaxed break-all text-base-content/50">
									{cls.css}
								</p>
								{#if cls.description}
									<p class="text-xs leading-relaxed text-base-content/60">
										{cls.description}
									</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	{/if}
</div>
