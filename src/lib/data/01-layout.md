# Layout

## Display

| クラス | プロパティ |
|--------|-----------|
| `block` | `display: block` |
| `inline-block` | `display: inline-block` |
| `inline` | `display: inline` |
| `flex` | `display: flex` |
| `inline-flex` | `display: inline-flex` |
| `grid` | `display: grid` |
| `inline-grid` | `display: inline-grid` |
| `flow-root` | `display: flow-root` |
| `contents` | `display: contents` |
| `list-item` | `display: list-item` |
| `table` | `display: table` |
| `inline-table` | `display: inline-table` |
| `table-caption` | `display: table-caption` |
| `table-cell` | `display: table-cell` |
| `table-column` | `display: table-column` |
| `table-column-group` | `display: table-column-group` |
| `table-footer-group` | `display: table-footer-group` |
| `table-header-group` | `display: table-header-group` |
| `table-row-group` | `display: table-row-group` |
| `table-row` | `display: table-row` |
| `hidden` | `display: none` |
| `sr-only` | スクリーンリーダー専用（視覚的に非表示） |
| `not-sr-only` | `sr-only` を解除 |

## Position

| クラス | プロパティ |
|--------|-----------|
| `static` | `position: static` |
| `relative` | `position: relative` |
| `absolute` | `position: absolute` |
| `fixed` | `position: fixed` |
| `sticky` | `position: sticky` |

## Inset (Top / Right / Bottom / Left)

| クラス | プロパティ |
|--------|-----------|
| `inset-<number>` | `inset: calc(var(--spacing) * <number>)` |
| `inset-x-<number>` | `left/right: calc(var(--spacing) * <number>)` |
| `inset-y-<number>` | `top/bottom: calc(var(--spacing) * <number>)` |
| `inset-auto` | `inset: auto` |
| `inset-px` | `inset: 1px` |
| `inset-full` | `inset: 100%` |
| `top-<number>` | `top: calc(var(--spacing) * <number>)` |
| `right-<number>` | `right: calc(var(--spacing) * <number>)` |
| `bottom-<number>` | `bottom: calc(var(--spacing) * <number>)` |
| `left-<number>` | `left: calc(var(--spacing) * <number>)` |
| `top-auto` | `top: auto` |
| `top-px` | `top: 1px` |
| `top-full` | `top: 100%` |
| `inset-s-<number>` | `inset-inline-start: ...` (論理プロパティ) |
| `inset-e-<number>` | `inset-inline-end: ...` (論理プロパティ) |

## Z-Index

| クラス | プロパティ |
|--------|-----------|
| `z-0` | `z-index: 0` |
| `z-10` | `z-index: 10` |
| `z-20` | `z-index: 20` |
| `z-30` | `z-index: 30` |
| `z-40` | `z-index: 40` |
| `z-50` | `z-index: 50` |
| `z-auto` | `z-index: auto` |
| `-z-10` | `z-index: -10` |
| `z-[<value>]` | 任意の値 |

## Overflow

| クラス | プロパティ |
|--------|-----------|
| `overflow-auto` | `overflow: auto` |
| `overflow-hidden` | `overflow: hidden` |
| `overflow-clip` | `overflow: clip` |
| `overflow-visible` | `overflow: visible` |
| `overflow-scroll` | `overflow: scroll` |
| `overflow-x-auto` | `overflow-x: auto` |
| `overflow-x-hidden` | `overflow-x: hidden` |
| `overflow-x-clip` | `overflow-x: clip` |
| `overflow-x-visible` | `overflow-x: visible` |
| `overflow-x-scroll` | `overflow-x: scroll` |
| `overflow-y-auto` | `overflow-y: auto` |
| `overflow-y-hidden` | `overflow-y: hidden` |
| `overflow-y-clip` | `overflow-y: clip` |
| `overflow-y-visible` | `overflow-y: visible` |
| `overflow-y-scroll` | `overflow-y: scroll` |

## Overscroll Behavior

| クラス | プロパティ |
|--------|-----------|
| `overscroll-auto` | `overscroll-behavior: auto` |
| `overscroll-contain` | `overscroll-behavior: contain` |
| `overscroll-none` | `overscroll-behavior: none` |
| `overscroll-x-auto` | `overscroll-behavior-x: auto` |
| `overscroll-x-contain` | `overscroll-behavior-x: contain` |
| `overscroll-x-none` | `overscroll-behavior-x: none` |
| `overscroll-y-auto` | `overscroll-behavior-y: auto` |
| `overscroll-y-contain` | `overscroll-behavior-y: contain` |
| `overscroll-y-none` | `overscroll-behavior-y: none` |

## Visibility

| クラス | プロパティ |
|--------|-----------|
| `visible` | `visibility: visible` |
| `invisible` | `visibility: hidden` |
| `collapse` | `visibility: collapse` |

## Float

| クラス | プロパティ |
|--------|-----------|
| `float-left` | `float: left` |
| `float-right` | `float: right` |
| `float-none` | `float: none` |
| `float-start` | `float: inline-start` |
| `float-end` | `float: inline-end` |

## Clear

| クラス | プロパティ |
|--------|-----------|
| `clear-left` | `clear: left` |
| `clear-right` | `clear: right` |
| `clear-both` | `clear: both` |
| `clear-none` | `clear: none` |
| `clear-start` | `clear: inline-start` |
| `clear-end` | `clear: inline-end` |

## Box Sizing

| クラス | プロパティ |
|--------|-----------|
| `box-border` | `box-sizing: border-box` |
| `box-content` | `box-sizing: content-box` |

## Box Decoration Break

| クラス | プロパティ |
|--------|-----------|
| `box-decoration-clone` | `box-decoration-break: clone` |
| `box-decoration-slice` | `box-decoration-break: slice` |

## Isolation

| クラス | プロパティ |
|--------|-----------|
| `isolate` | `isolation: isolate` |
| `isolation-auto` | `isolation: auto` |

## Object Fit

| クラス | プロパティ |
|--------|-----------|
| `object-contain` | `object-fit: contain` |
| `object-cover` | `object-fit: cover` |
| `object-fill` | `object-fit: fill` |
| `object-none` | `object-fit: none` |
| `object-scale-down` | `object-fit: scale-down` |

## Object Position

| クラス | プロパティ |
|--------|-----------|
| `object-bottom` | `object-position: bottom` |
| `object-center` | `object-position: center` |
| `object-left` | `object-position: left` |
| `object-left-bottom` | `object-position: left bottom` |
| `object-left-top` | `object-position: left top` |
| `object-right` | `object-position: right` |
| `object-right-bottom` | `object-position: right bottom` |
| `object-right-top` | `object-position: right top` |
| `object-top` | `object-position: top` |

## Aspect Ratio

| クラス | プロパティ |
|--------|-----------|
| `aspect-auto` | `aspect-ratio: auto` |
| `aspect-square` | `aspect-ratio: 1 / 1` |
| `aspect-video` | `aspect-ratio: 16 / 9` |
| `aspect-[<ratio>]` | 任意の比率 (例: `aspect-[4/3]`) |

## Container

| クラス | 説明 |
|--------|------|
| `container` | max-widthをブレークポイントに合わせて設定 |
| `mx-auto` | 中央揃え（`container` と組み合わせて使用） |

## Columns

| クラス | プロパティ |
|--------|-----------|
| `columns-<number>` | `columns: <number>` (1〜12) |
| `columns-auto` | `columns: auto` |
| `columns-3xs` | `columns: 16rem` |
| `columns-2xs` | `columns: 18rem` |
| `columns-xs` | `columns: 20rem` |
| `columns-sm` | `columns: 24rem` |
| `columns-md` | `columns: 28rem` |
| `columns-lg` | `columns: 32rem` |
| `columns-xl` | `columns: 36rem` |
| `columns-2xl` | `columns: 42rem` |
| `columns-3xl` | `columns: 48rem` |

## Break

| クラス | プロパティ |
|--------|-----------|
| `break-after-auto` | `break-after: auto` |
| `break-after-avoid` | `break-after: avoid` |
| `break-after-all` | `break-after: all` |
| `break-after-page` | `break-after: page` |
| `break-after-column` | `break-after: column` |
| `break-before-auto` | `break-before: auto` |
| `break-before-avoid` | `break-before: avoid` |
| `break-before-all` | `break-before: all` |
| `break-before-page` | `break-before: page` |
| `break-before-column` | `break-before: column` |
| `break-inside-auto` | `break-inside: auto` |
| `break-inside-avoid` | `break-inside: avoid` |
| `break-inside-avoid-page` | `break-inside: avoid-page` |
| `break-inside-avoid-column` | `break-inside: avoid-column` |
