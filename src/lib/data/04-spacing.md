# Spacing

> Tailwind v4では `--spacing` CSS変数（デフォルト: `0.25rem`）を基準に計算されます。
> 例: `p-4` → `padding: calc(var(--spacing) * 4)` = `1rem`

## Padding

| クラス | プロパティ |
|--------|-----------|
| `p-<number>` | `padding: calc(var(--spacing) * <number>)` |
| `p-px` | `padding: 1px` |
| `p-0` | `padding: 0` |
| `px-<number>` | `padding-left/right: ...` |
| `py-<number>` | `padding-top/bottom: ...` |
| `pt-<number>` | `padding-top: ...` |
| `pr-<number>` | `padding-right: ...` |
| `pb-<number>` | `padding-bottom: ...` |
| `pl-<number>` | `padding-left: ...` |
| `ps-<number>` | `padding-inline-start: ...` (論理プロパティ) |
| `pe-<number>` | `padding-inline-end: ...` (論理プロパティ) |
| `pbs-<number>` | `padding-block-start: ...` (論理プロパティ) |
| `pbe-<number>` | `padding-block-end: ...` (論理プロパティ) |
| `p-[<value>]` | 任意の値 (例: `p-[1.5rem]`) |

**よく使う数値**: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96

## Margin

| クラス | プロパティ |
|--------|-----------|
| `m-<number>` | `margin: calc(var(--spacing) * <number>)` |
| `m-px` | `margin: 1px` |
| `m-auto` | `margin: auto` |
| `-m-<number>` | `margin: calc(var(--spacing) * -<number>)` (負の値) |
| `mx-<number>` | `margin-left/right: ...` |
| `mx-auto` | `margin-left/right: auto` (中央揃え) |
| `my-<number>` | `margin-top/bottom: ...` |
| `mt-<number>` | `margin-top: ...` |
| `mr-<number>` | `margin-right: ...` |
| `mb-<number>` | `margin-bottom: ...` |
| `ml-<number>` | `margin-left: ...` |
| `-mt-<number>` | `margin-top: 負の値` |
| `ms-<number>` | `margin-inline-start: ...` (論理プロパティ) |
| `me-<number>` | `margin-inline-end: ...` (論理プロパティ) |
| `mbs-<number>` | `margin-block-start: ...` (論理プロパティ) |
| `mbe-<number>` | `margin-block-end: ...` (論理プロパティ) |
| `m-[<value>]` | 任意の値 |

## Space Between (子要素間のスペース)

| クラス | プロパティ |
|--------|-----------|
| `space-x-<number>` | 子要素の `margin-left` を設定 |
| `space-y-<number>` | 子要素の `margin-top` を設定 |
| `space-x-px` | `margin-left: 1px` |
| `space-y-px` | `margin-top: 1px` |
| `space-x-reverse` | `flex-row-reverse` 使用時に方向を反転 |
| `space-y-reverse` | `flex-col-reverse` 使用時に方向を反転 |
| `-space-x-<number>` | 負のスペース |
| `-space-y-<number>` | 負のスペース |
