<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { UtilityClass } from '$lib/types';
	import ClassDetailModal from './ClassDetailModal.svelte';

	let { cls, preview }: { cls: UtilityClass; preview?: Snippet<[UtilityClass]> } = $props();
	let copied = $state(false);
	let dialogEl = $state<HTMLDialogElement | null>(null);

	function copy() {
		navigator.clipboard.writeText(cls.name);
		copied = true;
		setTimeout(() => (copied = false), 1500);
	}
</script>

<div
	class="group card cursor-default border border-base-content/10 bg-base-100 transition-all duration-200 card-sm hover:border-primary/40 hover:shadow-md"
>
	<div class="card-body flex flex-col gap-3 p-4">
		<!-- クラス名 + コピーボタン -->
		<div class="flex min-w-0 items-center gap-1.5">
			<code class="badge min-w-0 flex-1 truncate badge-outline font-mono badge-sm">
				{cls.name}
			</code>
			<button
				class="btn btn-circle shrink-0 btn-ghost transition-colors btn-xs {copied
					? 'text-success'
					: 'text-base-content/30 hover:text-primary'}"
				onclick={copy}
				aria-label="クラス名をコピー: {cls.name}"
			>
				{#if copied}
					<span class="icon-[mdi--check] text-sm"></span>
				{:else}
					<span class="icon-[mdi--content-copy] text-sm"></span>
				{/if}
			</button>
		</div>

		{#if preview}
			<div
				class="flex min-h-14 items-center justify-center overflow-hidden rounded-lg bg-base-200 p-3"
			>
				{@render preview(cls)}
			</div>
		{/if}

		<p class="font-mono text-xs leading-relaxed break-all text-base-content/50">
			{cls.css}
		</p>

		{#if cls.description}
			<p class="text-xs leading-relaxed text-base-content/60">
				{cls.description}
			</p>
		{/if}

		{#if cls.example || cls.points?.length}
			<div class="mt-auto flex justify-end">
				<button
					class="btn btn-circle text-base-content/30 btn-ghost btn-xs hover:text-secondary"
					onclick={() => dialogEl?.showModal()}
					aria-label="{cls.name} の詳細を見る"
				>
					<span class="icon-[mdi--information-outline] text-sm"></span>
				</button>
			</div>
		{/if}
	</div>
</div>

<ClassDetailModal bind:dialogEl {cls} {preview} />
