<script lang="ts">
	import type { UtilityClass, Category } from '$lib/types';
	import SubcategorySection from '$lib/components/SubcategorySection.svelte';

	let { data } = $props();
	const category = $derived(data.category as Category);

	const objectPositionMap: Record<string, number> = {
		'object-left-top': 0,
		'object-top': 1,
		'object-right-top': 2,
		'object-left': 3,
		'object-center': 4,
		'object-right': 5,
		'object-left-bottom': 6,
		'object-bottom': 7,
		'object-right-bottom': 8
	};

	const nine = Array.from({ length: 9 }, (_, i) => i);
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
	{:else if category.id === 'layout'}
		{#snippet layoutPreview(cls: UtilityClass)}
			<!-- ── Display ── -->
			{#if cls.name === 'block'}
				<div class="flex w-full flex-col gap-1.5">
					<div class="h-5 w-full rounded-md bg-primary/70"></div>
					<div class="h-5 w-full rounded-md bg-secondary/60"></div>
				</div>
			{:else if cls.name === 'inline-block'}
				<div class="flex w-full items-end justify-center gap-1.5">
					<span class="inline-block h-8 w-10 rounded-md bg-primary/70"></span>
					<span class="inline-block h-6 w-7 rounded-md bg-secondary/60"></span>
					<span class="inline-block h-10 w-6 rounded-md bg-accent/60"></span>
				</div>
			{:else if cls.name === 'inline'}
				<div class="text-center text-xs leading-loose text-base-content/60">
					text <span class="rounded bg-primary/30 px-1.5 py-0.5 font-medium text-primary">A</span>
					inline
					<span class="rounded bg-secondary/30 px-1.5 py-0.5 font-medium text-secondary">B</span>
					<span class="rounded bg-accent/30 px-1.5 py-0.5 font-medium text-accent">C</span>
				</div>
			{:else if cls.name === 'flex'}
				<div class="flex w-full gap-1.5">
					<div class="h-8 flex-1 rounded-md bg-primary/70"></div>
					<div class="h-8 flex-1 rounded-md bg-secondary/60"></div>
					<div class="h-8 flex-1 rounded-md bg-accent/60"></div>
				</div>
			{:else if cls.name === 'inline-flex'}
				<div class="text-center text-xs leading-relaxed text-base-content/50">
					text
					<span class="inline-flex gap-0.5 rounded bg-base-content/10 px-0.5 py-0.5 align-middle">
						<span class="h-4 w-4 rounded bg-primary/70"></span>
						<span class="h-4 w-4 rounded bg-secondary/60"></span>
						<span class="h-4 w-4 rounded bg-accent/60"></span>
					</span>
					text
				</div>
			{:else if cls.name === 'grid'}
				<div class="grid w-full grid-cols-3 gap-1.5">
					<div class="h-6 rounded-md bg-primary/70"></div>
					<div class="h-6 rounded-md bg-secondary/60"></div>
					<div class="h-6 rounded-md bg-accent/60"></div>
				</div>
			{:else if cls.name === 'inline-grid'}
				<div class="text-center text-xs leading-relaxed text-base-content/50">
					text
					<span
						class="inline-grid grid-cols-3 gap-0.5 rounded bg-base-content/10 px-0.5 py-0.5 align-middle"
					>
						<span class="h-4 w-4 rounded bg-primary/70"></span>
						<span class="h-4 w-4 rounded bg-secondary/60"></span>
						<span class="h-4 w-4 rounded bg-accent/60"></span>
					</span>
					text
				</div>
			{:else if cls.name === 'flow-root'}
				<div class="w-full overflow-hidden rounded-md border border-base-content/15 p-2">
					<div class="float-left mr-2 h-7 w-9 rounded bg-secondary/70"></div>
					<div class="flex flex-col justify-center gap-1.5 pt-1">
						<div class="h-2 rounded bg-primary/30"></div>
						<div class="h-2 w-3/4 rounded bg-primary/20"></div>
					</div>
				</div>
			{:else if cls.name === 'contents'}
				<div
					class="relative flex w-full items-center justify-center gap-1.5 rounded-md border border-dashed border-base-content/25 p-2"
				>
					<div
						class="absolute -top-2.5 left-2 rounded bg-base-200 px-1 text-xs text-base-content/30"
					>
						wrapper
					</div>
					<div class="h-6 w-6 rounded bg-primary/70"></div>
					<div class="h-6 w-6 rounded bg-secondary/60"></div>
					<div class="h-6 w-6 rounded bg-accent/60"></div>
				</div>
			{:else if cls.name === 'list-item'}
				<div class="flex flex-col gap-1.5 pl-2">
					<div class="flex items-center gap-2">
						<div class="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></div>
						<div class="h-3 flex-1 rounded bg-primary/30"></div>
					</div>
					<div class="flex items-center gap-2">
						<div class="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"></div>
						<div class="h-3 flex-1 rounded bg-secondary/30"></div>
					</div>
				</div>
			{:else if cls.name === 'hidden'}
				<div
					class="flex items-center gap-1.5 rounded-md border border-dashed border-base-content/20 px-3 py-1.5"
				>
					<span class="icon-[mdi--eye-off-outline] text-base text-base-content/25"></span>
					<span class="text-xs text-base-content/30">非表示</span>
				</div>
			{:else if cls.name === 'sr-only'}
				<div class="flex flex-col items-center gap-1">
					<span class="icon-[mdi--eye-off-outline] text-2xl text-base-content/35"></span>
					<span class="text-xs text-base-content/40">読み上げのみ</span>
				</div>
			{:else if cls.name === 'not-sr-only'}
				<div class="flex flex-col items-center gap-1">
					<span class="icon-[mdi--eye-outline] text-2xl text-primary/70"></span>
					<span class="text-xs text-primary/70">表示を復元</span>
				</div>
			{:else if cls.name === 'table' || cls.name === 'inline-table'}
				<div class="flex w-full flex-col gap-0.5">
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-primary/50 text-center text-xs leading-4 text-primary-content/80"
						>
							TH
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-primary/50 text-center text-xs leading-4 text-primary-content/80"
						>
							TH
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/50"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/50"
						>
							TD
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/50"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/50"
						>
							TD
						</div>
					</div>
				</div>
			{:else if cls.name === 'table-caption'}
				<div class="flex w-full flex-col gap-0.5">
					<div
						class="h-4 w-full rounded-sm bg-primary/40 text-center text-xs leading-4 text-primary/80"
					>
						caption
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
				</div>
			{:else if cls.name === 'table-cell'}
				<div class="flex w-full flex-col gap-0.5">
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-primary/60 text-center text-xs leading-4 text-primary-content/80"
						>
							TD
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
				</div>
			{:else if cls.name === 'table-column'}
				<div class="flex w-full flex-col gap-0.5">
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-primary/60 text-center text-xs leading-4 text-primary-content/80"
						>
							col
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							col
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-primary/30 text-center text-xs leading-4 text-primary/70"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-primary/30 text-center text-xs leading-4 text-primary/70"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
				</div>
			{:else if cls.name === 'table-column-group'}
				<div class="flex w-full flex-col gap-0.5">
					<div class="flex gap-0.5 rounded-t-sm bg-primary/20 px-0.5 pt-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-primary/50 text-center text-xs leading-4 text-primary-content/80"
						>
							col
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-primary/50 text-center text-xs leading-4 text-primary-content/80"
						>
							col
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
				</div>
			{:else if cls.name === 'table-header-group'}
				<div class="flex w-full flex-col gap-0.5">
					<div class="flex gap-0.5 rounded-sm bg-primary/20 p-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-primary/60 text-center text-xs leading-4 text-primary-content/80"
						>
							TH
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-primary/60 text-center text-xs leading-4 text-primary-content/80"
						>
							TH
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
				</div>
			{:else if cls.name === 'table-footer-group'}
				<div class="flex w-full flex-col gap-0.5">
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
					<div class="flex gap-0.5 rounded-sm bg-secondary/20 p-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-secondary/60 text-center text-xs leading-4 text-secondary-content/80"
						>
							TF
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-secondary/60 text-center text-xs leading-4 text-secondary-content/80"
						>
							TF
						</div>
					</div>
				</div>
			{:else if cls.name === 'table-row-group'}
				<div class="flex w-full flex-col gap-0.5">
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TH
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TH
						</div>
					</div>
					<div class="flex flex-col gap-0.5 rounded-sm bg-primary/20 p-0.5">
						<div class="flex gap-0.5">
							<div
								class="h-4 flex-1 rounded-sm bg-primary/40 text-center text-xs leading-4 text-primary/80"
							>
								TD
							</div>
							<div
								class="h-4 flex-1 rounded-sm bg-primary/40 text-center text-xs leading-4 text-primary/80"
							>
								TD
							</div>
						</div>
						<div class="flex gap-0.5">
							<div
								class="h-4 flex-1 rounded-sm bg-primary/40 text-center text-xs leading-4 text-primary/80"
							>
								TD
							</div>
							<div
								class="h-4 flex-1 rounded-sm bg-primary/40 text-center text-xs leading-4 text-primary/80"
							>
								TD
							</div>
						</div>
					</div>
				</div>
			{:else if cls.name === 'table-row'}
				<div class="flex w-full flex-col gap-0.5">
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
					<div class="flex gap-0.5 rounded-sm bg-primary/20 p-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-primary/60 text-center text-xs leading-4 text-primary-content/80"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-primary/60 text-center text-xs leading-4 text-primary-content/80"
						>
							TD
						</div>
					</div>
					<div class="flex gap-0.5">
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
						<div
							class="h-4 flex-1 rounded-sm bg-base-content/10 text-center text-xs leading-4 text-base-content/40"
						>
							TD
						</div>
					</div>
				</div>

				<!-- ── Position ── -->
			{:else if cls.name === 'static'}
				<div class="flex w-full flex-col gap-1">
					<div class="h-4 w-full rounded bg-base-content/15"></div>
					<div class="h-4 w-full rounded bg-primary/70"></div>
					<div class="h-4 w-full rounded bg-base-content/15"></div>
				</div>
			{:else if cls.name === 'relative'}
				<div class="relative h-14 w-full">
					<div
						class="absolute top-0 left-0 h-8 w-20 rounded-md border border-dashed border-primary/30 bg-primary/10"
					></div>
					<div
						class="absolute top-3 left-3 flex h-8 w-20 items-center justify-center rounded-md bg-primary/70 text-xs text-primary-content/80"
					>
						+offset
					</div>
				</div>
			{:else if cls.name === 'absolute'}
				<div class="relative h-14 w-full rounded-md border border-base-content/20 bg-base-300">
					<div
						class="absolute top-2 right-2 flex h-7 w-14 items-center justify-center rounded bg-primary/70 text-xs text-primary-content/80"
					>
						abs
					</div>
				</div>
			{:else if cls.name === 'fixed'}
				<div
					class="flex w-full flex-col overflow-hidden rounded-md border border-base-content/20 bg-base-300"
				>
					<div
						class="flex h-5 w-full items-center justify-center bg-accent/70 text-xs font-medium text-accent-content"
					>
						fixed bar
					</div>
					<div class="flex flex-col gap-1 p-1.5">
						<div class="h-2 rounded bg-base-content/10"></div>
						<div class="h-2 rounded bg-base-content/10"></div>
						<div class="text-center text-xs text-base-content/30">scroll↓</div>
					</div>
				</div>
			{:else if cls.name === 'sticky'}
				<div class="flex w-full items-center gap-1.5">
					<div
						class="flex flex-1 flex-col overflow-hidden rounded-md border border-base-content/20 bg-base-300"
					>
						<div class="h-2 bg-base-content/10"></div>
						<div
							class="flex h-4 items-center justify-center bg-secondary/30 text-xs text-secondary"
						>
							bar
						</div>
						<div class="h-2 bg-base-content/10"></div>
					</div>
					<span class="icon-[mdi--arrow-right] text-xs text-base-content/25"></span>
					<div
						class="flex flex-1 flex-col overflow-hidden rounded-md border border-base-content/20 bg-base-300"
					>
						<div
							class="flex h-4 items-center justify-center bg-secondary/70 text-xs text-secondary-content"
						>
							stuck
						</div>
						<div class="h-2 bg-base-content/10"></div>
						<div class="h-2 bg-base-content/10"></div>
					</div>
				</div>

				<!-- ── Z-Index ── -->
			{:else if cls.name.startsWith('z-') || cls.name.startsWith('-z-')}
				{@const zLabel =
					cls.name === 'z-auto'
						? 'auto'
						: cls.name.startsWith('-z-')
							? cls.name.replace('-z-', '-')
							: cls.name.replace('z-', '')}
				{@const isNeg = cls.name.startsWith('-z-')}
				<div class="relative flex h-12 w-full items-center justify-center">
					<div
						class="absolute h-8 w-14 translate-x-3 translate-y-2 rounded-md bg-base-content/10"
					></div>
					<div
						class="absolute h-8 w-14 translate-x-1.5 translate-y-1 rounded-md bg-base-content/15"
					></div>
					{#if isNeg}
						<div
							class="absolute flex h-8 w-14 translate-y-4 items-center justify-center rounded-md bg-base-content/10 text-xs font-bold text-base-content/30"
						>
							{zLabel}
						</div>
					{:else}
						<div
							class="absolute flex h-8 w-14 items-center justify-center rounded-md bg-primary/70 text-xs font-bold text-primary-content/90"
						>
							{zLabel}
						</div>
					{/if}
				</div>

				<!-- ── Overflow ── -->
			{:else if cls.name === 'overflow-visible'}
				<div class="flex flex-col items-center gap-1">
					<span class="icon-[mdi--arrow-expand] text-2xl text-primary/70"></span>
					<span class="text-xs text-base-content/40">はみ出し表示</span>
				</div>
			{:else if cls.name === 'overflow-hidden'}
				<div
					class="relative h-10 w-24 overflow-hidden rounded-md border border-base-content/20 bg-base-300"
				>
					<div
						class="absolute -top-1 -right-3 flex h-12 w-14 items-center justify-center rounded-md bg-primary/50 text-xs text-primary"
					>
						✂
					</div>
					<div
						class="absolute inset-0 flex items-center justify-start px-2 text-xs text-base-content/40"
					>
						clipped
					</div>
				</div>
			{:else if cls.name === 'overflow-clip'}
				<div
					class="relative h-10 w-24 overflow-hidden rounded-md border border-base-content/20 bg-base-300"
				>
					<div
						class="absolute -top-1 -right-3 flex h-12 w-14 items-center justify-center rounded-md bg-secondary/50 text-xs text-secondary"
					>
						✂
					</div>
					<div class="absolute bottom-0.5 left-1 flex items-center gap-0.5">
						<span class="icon-[mdi--cursor-default-click-outline] text-xs text-base-content/30"
						></span>
						<span class="text-xs text-base-content/30">scroll不可</span>
					</div>
				</div>
			{:else if cls.name === 'overflow-auto' || cls.name === 'overflow-scroll'}
				<div class="flex items-center gap-2">
					<div
						class="h-10 w-20 overflow-auto rounded-md border border-base-content/20 bg-base-300 p-1 text-xs text-base-content/40"
					>
						スクロール可能なコンテンツ...
					</div>
					<span class="icon-[mdi--gesture-swipe-vertical] text-lg text-base-content/30"></span>
				</div>
			{:else if cls.name.startsWith('overflow')}
				{@const isX = cls.name.includes('-x-')}
				{@const mode = cls.name.split('-').at(-1) ?? ''}
				<div class="flex flex-col items-center gap-1">
					{#if isX}
						<span class="icon-[mdi--arrow-left-right] text-xl text-primary/70"></span>
					{:else}
						<span class="icon-[mdi--arrow-up-down] text-xl text-secondary/70"></span>
					{/if}
					<span class="rounded bg-base-content/10 px-1.5 font-mono text-xs text-base-content/50"
						>{mode}</span
					>
				</div>

				<!-- ── Visibility ── -->
			{:else if cls.name === 'visible'}
				<div
					class="flex h-8 w-20 items-center justify-center rounded-md bg-primary/70 text-xs font-medium text-primary-content/90"
				>
					visible
				</div>
			{:else if cls.name === 'invisible'}
				<div class="flex items-center gap-2">
					<div class="h-8 w-8 rounded-md border border-dashed border-primary/40"></div>
					<span class="icon-[mdi--arrow-right] text-sm text-base-content/25"></span>
					<div class="h-8 w-8 rounded-md bg-primary/70"></div>
					<span class="text-xs text-base-content/35">保持</span>
				</div>
			{:else if cls.name === 'collapse'}
				<div class="flex w-full flex-col gap-0.5">
					<div
						class="h-4 w-full rounded-sm bg-base-content/20 px-1 text-xs leading-4 text-base-content/50"
					>
						row 1
					</div>
					<div
						class="h-0 w-full overflow-hidden rounded-sm bg-secondary/30 px-1 text-xs text-secondary/50"
					>
						row 2
					</div>
					<div
						class="h-4 w-full rounded-sm bg-base-content/20 px-1 text-xs leading-4 text-base-content/50"
					>
						row 3
					</div>
				</div>

				<!-- ── Float ── -->
			{:else if cls.name === 'float-left'}
				<div class="w-full overflow-hidden">
					<div class="float-left mr-2 h-8 w-10 rounded-md bg-primary/70"></div>
					<div class="flex flex-col gap-1 pt-0.5">
						<div class="h-2 rounded bg-base-content/20"></div>
						<div class="h-2 w-4/5 rounded bg-base-content/15"></div>
					</div>
				</div>
			{:else if cls.name === 'float-start'}
				<div class="w-full overflow-hidden">
					<div
						class="float-left mr-2 flex h-8 w-10 flex-col items-center justify-center rounded-md bg-primary/70 text-xs text-primary-content/80"
					>
						start
					</div>
					<div class="flex flex-col gap-1 pt-0.5">
						<div class="h-2 rounded bg-base-content/20"></div>
						<div class="text-xs text-primary/50">LTR/RTL対応</div>
					</div>
				</div>
			{:else if cls.name === 'float-right'}
				<div class="w-full overflow-hidden">
					<div class="float-right ml-2 h-8 w-10 rounded-md bg-secondary/70"></div>
					<div class="flex flex-col gap-1 pt-0.5">
						<div class="h-2 rounded bg-base-content/20"></div>
						<div class="h-2 w-4/5 rounded bg-base-content/15"></div>
					</div>
				</div>
			{:else if cls.name === 'float-end'}
				<div class="w-full overflow-hidden">
					<div
						class="float-right ml-2 flex h-8 w-10 flex-col items-center justify-center rounded-md bg-secondary/70 text-xs text-secondary-content/80"
					>
						end
					</div>
					<div class="flex flex-col gap-1 pt-0.5">
						<div class="h-2 rounded bg-base-content/20"></div>
						<div class="text-xs text-secondary/50">LTR/RTL対応</div>
					</div>
				</div>
			{:else if cls.name === 'float-none'}
				<div class="flex w-full flex-col gap-1">
					<div class="h-5 w-10 rounded-md bg-base-content/30"></div>
					<div class="h-2 w-full rounded bg-base-content/15"></div>
					<div class="h-2 w-4/5 rounded bg-base-content/10"></div>
				</div>

				<!-- ── Box Sizing ── -->
			{:else if cls.name === 'box-border'}
				<div
					class="flex h-10 w-24 items-center justify-center rounded-md border-4 border-primary/70 bg-primary/15"
				>
					<span class="font-mono text-xs text-primary/80">border込み</span>
				</div>
			{:else if cls.name === 'box-content'}
				<div class="flex items-center gap-2">
					<div
						class="flex h-9 w-14 items-center justify-center rounded-md border-4 border-secondary/70 bg-secondary/15"
					>
						<span class="font-mono text-xs text-secondary/80">content</span>
					</div>
					<div class="flex flex-col items-start gap-0.5">
						<span class="icon-[mdi--arrow-expand-horizontal] text-sm text-base-content/40"></span>
						<span class="text-xs text-base-content/30">+border</span>
					</div>
				</div>

				<!-- ── Object Fit ── -->
			{:else if cls.name === 'object-contain'}
				<div
					class="relative flex h-12 w-20 items-center justify-center overflow-hidden rounded-md border border-base-content/20 bg-base-300"
				>
					<div
						class="flex h-8 w-14 items-center justify-center rounded bg-primary/60 text-xs text-primary-content/80"
					>
						contain
					</div>
				</div>
			{:else if cls.name === 'object-cover'}
				<div
					class="relative flex h-12 w-20 items-center justify-center overflow-hidden rounded-md border border-base-content/20 bg-base-300"
				>
					<div
						class="flex h-14 w-24 items-center justify-center rounded bg-primary/60 text-xs text-primary-content/80"
					>
						cover
					</div>
				</div>
			{:else if cls.name === 'object-fill'}
				<div
					class="relative flex h-12 w-20 items-center justify-center overflow-hidden rounded-md border border-base-content/20 bg-base-300"
				>
					<div
						class="flex h-full w-full items-center justify-center rounded bg-primary/60 text-xs text-primary-content/80"
					>
						fill
					</div>
				</div>
			{:else if cls.name === 'object-none'}
				<div
					class="relative flex h-12 w-20 items-center justify-center overflow-hidden rounded-md border border-base-content/20 bg-base-300"
				>
					<div
						class="flex h-7 w-7 items-center justify-center rounded bg-primary/60 text-xs text-primary-content/80"
					>
						orig
					</div>
				</div>
			{:else if cls.name === 'object-scale-down'}
				<div
					class="relative flex h-12 w-20 items-center justify-center overflow-hidden rounded-md border border-base-content/20 bg-base-300"
				>
					<div
						class="flex h-6 w-10 items-center justify-center rounded bg-primary/60 text-xs text-primary-content/80"
					>
						↓scale
					</div>
				</div>

				<!-- ── Object Position ── -->
			{:else if cls.name.startsWith('object-')}
				{@const posIdx = objectPositionMap[cls.name] ?? 4}
				<div class="flex flex-col items-center gap-1">
					<div class="grid grid-cols-3 gap-1.5">
						{#each nine as i (i)}
							<div
								class="h-3.5 w-3.5 rounded-sm {i === posIdx ? 'bg-primary' : 'bg-base-content/15'}"
							></div>
						{/each}
					</div>
					<span class="text-xs text-base-content/30">画像のフォーカス位置</span>
				</div>

				<!-- ── Aspect Ratio ── -->
			{:else if cls.name === 'aspect-square'}
				<div
					class="flex aspect-square w-16 items-center justify-center rounded-md bg-primary/70 text-xs text-primary-content/80"
				>
					1:1
				</div>
			{:else if cls.name === 'aspect-video'}
				<div
					class="flex aspect-video w-28 items-center justify-center rounded-md bg-primary/70 text-xs text-primary-content/80"
				>
					16:9
				</div>
			{:else if cls.name === 'aspect-auto'}
				<div class="flex items-end gap-2">
					<div
						class="flex h-10 w-7 items-center justify-center rounded bg-primary/50 text-xs text-primary-content/70"
					>
						縦
					</div>
					<div
						class="flex h-7 w-12 items-center justify-center rounded bg-secondary/50 text-xs text-secondary-content/70"
					>
						横
					</div>
					<span class="mb-1 text-xs text-base-content/30">各固有比</span>
				</div>
			{/if}
		{/snippet}

		{#each category.subcategories as subcategory (subcategory.title)}
			<SubcategorySection {subcategory} preview={layoutPreview} />
		{/each}
	{:else}
		{#each category.subcategories as subcategory (subcategory.title)}
			<SubcategorySection {subcategory} />
		{/each}
	{/if}
</div>
