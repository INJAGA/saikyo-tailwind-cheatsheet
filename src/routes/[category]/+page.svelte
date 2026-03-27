<script lang="ts">
	import type { Category } from '$lib/types';

	let { data } = $props();
	const category = $derived(data.category as Category);
</script>

<div class="space-y-10">
	<!-- カテゴリヘッダー -->
	<div class="border-b border-base-content/10 pb-6">
		<h1 class="text-3xl font-bold text-base-content tracking-tight">
			{category.title}
		</h1>
		<p class="text-base-content/40 text-sm mt-1 font-mono">
			{category.subcategories.length} subcategories
		</p>
	</div>

	{#if category.subcategories.length === 0}
		<!-- 準備中の空ステート -->
		<div class="flex flex-col items-center justify-center py-24 gap-4 text-center">
			<div class="w-20 h-20 rounded-2xl bg-base-300 flex items-center justify-center">
				<span class="icon-[mdi--clock-outline] text-4xl text-base-content/20"></span>
			</div>
			<div class="space-y-1">
				<p class="text-base-content/60 font-semibold">このカテゴリは準備中です</p>
				<p class="text-base-content/30 text-sm">データは順次追加される予定です</p>
			</div>
		</div>
	{:else}
		{#each category.subcategories as subcategory (subcategory.title)}
			<section class="space-y-4">
				<h2 class="text-lg font-semibold text-base-content flex items-center gap-2">
					<span class="w-1 h-5 bg-primary rounded-full inline-block shrink-0" aria-hidden="true"></span>
					{subcategory.title}
				</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
					{#each subcategory.classes as cls (cls.name)}
						<div
							class="card card-sm bg-base-100 border border-base-content/10 hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-default"
						>
							<div class="card-body gap-2 p-4">
								<code
									class="badge badge-outline badge-sm font-mono text-xs self-start max-w-full truncate"
								>
									{cls.name}
								</code>
								<p class="text-xs font-mono text-base-content/50 leading-relaxed break-all">
									{cls.css}
								</p>
								{#if cls.description}
									<p class="text-xs text-base-content/60 leading-relaxed">
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
