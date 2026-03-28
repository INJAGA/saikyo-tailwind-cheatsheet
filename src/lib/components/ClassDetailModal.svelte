<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { UtilityClass } from '$lib/types';

	let {
		cls,
		preview,
		dialogEl = $bindable()
	}: {
		cls: UtilityClass;
		preview?: Snippet<[UtilityClass]>;
		dialogEl?: HTMLDialogElement | null;
	} = $props();

	function closeOnBackdrop(e: MouseEvent) {
		if (e.target === e.currentTarget) dialogEl?.close();
	}

	const isObjectClass = $derived(cls.name.startsWith('object-'));
</script>

<dialog bind:this={dialogEl} class="modal" onclick={closeOnBackdrop}>
	<div class="modal-box flex w-full max-w-2xl flex-col overflow-hidden p-0">
		<!-- Header -->
		<div
			class="flex shrink-0 items-start justify-between gap-4 border-b border-base-content/10 px-6 pt-6 pb-5"
		>
			<div class="flex min-w-0 flex-col gap-2">
				<code class="font-mono text-xl font-bold tracking-tight text-base-content">{cls.name}</code>
				<div class="flex flex-wrap items-center gap-2">
					<span
						class="rounded-md bg-base-200 px-2 py-1 font-mono text-xs leading-relaxed break-all text-base-content/50"
						>{cls.css}</span
					>
				</div>
				{#if cls.description}
					<p class="text-sm leading-relaxed text-base-content/60">{cls.description}</p>
				{/if}
			</div>
			<button
				class="btn mt-0.5 btn-circle shrink-0 btn-ghost btn-sm"
				onclick={() => dialogEl?.close()}
				aria-label="閉じる"
			>
				<span class="icon-[mdi--close] text-lg"></span>
			</button>
		</div>

		<!-- Scrollable body -->
		<div class="flex flex-col gap-0 overflow-y-auto">
			<!-- Visual Preview -->
			{#if preview}
				<div class="border-b border-base-content/10 px-6 py-5">
					<p
						class="mb-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-base-content/30 uppercase"
					>
						<span class="inline-block h-3.5 w-1 rounded-full bg-primary/60"></span>
						プレビュー
					</p>
					<div class="flex min-h-24 items-center justify-center rounded-xl bg-base-200 p-6">
						{@render preview(cls)}
					</div>
				</div>
			{/if}

			<!-- Code Example -->
			{#if cls.example}
				<div class="flex flex-col gap-5 border-b border-base-content/10 px-6 py-5">
					<!-- Code block -->
					<div>
						<p
							class="mb-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-base-content/30 uppercase"
						>
							<span class="inline-block h-3.5 w-1 rounded-full bg-primary/60"></span>
							コード例
						</p>
						<div class="overflow-hidden rounded-xl border border-base-content/10">
							<!-- Code header bar -->
							<div
								class="flex items-center justify-between border-b border-base-content/10 bg-base-300 px-4 py-2"
							>
								<div class="flex items-center gap-1.5">
									<span class="h-2.5 w-2.5 rounded-full bg-base-content/15"></span>
									<span class="h-2.5 w-2.5 rounded-full bg-base-content/15"></span>
									<span class="h-2.5 w-2.5 rounded-full bg-base-content/15"></span>
								</div>
								<span class="font-mono text-xs text-base-content/30">HTML</span>
							</div>
							<pre
								class="overflow-x-auto bg-base-300/50 p-4 font-mono text-xs leading-relaxed whitespace-pre text-base-content/75"><code
									>{cls.example}</code
								></pre>
						</div>
					</div>

					<!-- Rendered Result -->
					<div>
						<p
							class="mb-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-base-content/30 uppercase"
						>
							<span class="inline-block h-3.5 w-1 rounded-full bg-primary/60"></span>
							描画結果
						</p>
						<!-- データは layout.ts の静的コンテンツのみ。XSS リスクなし -->
						<div class="min-h-16 rounded-xl border border-base-content/10 bg-base-100 p-5">
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html cls.example}
						</div>

						<!-- Reference image for object-* classes -->
						{#if isObjectClass}
							<div class="mt-3 rounded-xl border-2 border-dashed border-base-content/20 p-4">
								<div class="mb-3 flex items-center gap-1.5">
									<span class="icon-[mdi--image-outline] text-sm text-base-content/40"></span>
									<span class="text-xs font-medium text-base-content/40"
										>参考：元画像（スタイル未適用）</span
									>
								</div>
								<img src="/tailwind_dog.jpeg" alt="元画像" class="max-h-48 w-auto rounded-lg" />
							</div>
						{/if}
					</div>
				</div>
			{/if}

			<!-- Key Points -->
			{#if cls.points && cls.points.length > 0}
				<div class="px-6 py-5">
					<p
						class="mb-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-base-content/30 uppercase"
					>
						<span class="inline-block h-3.5 w-1 rounded-full bg-primary/60"></span>
						ポイント
					</p>
					<ul class="flex flex-col gap-2">
						{#each cls.points as point, i (i)}
							<li
								class="flex items-start gap-3 rounded-lg bg-base-200/60 px-3.5 py-3 text-sm leading-relaxed text-base-content/70"
							>
								<span
									class="mt-0.5 icon-[mdi--check-circle-outline] shrink-0 text-base text-primary"
								></span>
								{point}
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	</div>
</dialog>
