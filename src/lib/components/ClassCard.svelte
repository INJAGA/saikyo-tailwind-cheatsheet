<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { UtilityClass } from '$lib/types';

	let { cls, preview }: { cls: UtilityClass; preview?: Snippet<[UtilityClass]> } = $props();
	let copied = $state(false);

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
		{#if preview}
			<div
				class="flex min-h-14 items-center justify-center overflow-hidden rounded-lg bg-base-200 p-3"
			>
				{@render preview(cls)}
			</div>
		{/if}

		<code class="badge max-w-full self-start truncate badge-outline font-mono badge-sm">
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

		<div class="mt-auto flex justify-end">
			<button
				class="btn gap-1 text-base-content/40 btn-ghost transition-colors btn-xs hover:text-primary"
				onclick={copy}
				aria-label="クラス名をコピー: {cls.name}"
			>
				{#if copied}
					<span class="icon-[mdi--check] text-sm text-success"></span>
					<span class="text-success">コピー済み</span>
				{:else}
					<span class="icon-[mdi--content-copy] text-sm"></span>
					<span>コピー</span>
				{/if}
			</button>
		</div>
	</div>
</div>
