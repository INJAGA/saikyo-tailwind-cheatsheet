# Grid

## Grid Template Columns

| クラス | プロパティ |
|--------|-----------|
| `grid-cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr))` |
| `grid-cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr))` |
| `grid-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr))` |
| `grid-cols-4` | `grid-template-columns: repeat(4, minmax(0, 1fr))` |
| `grid-cols-5` | `grid-template-columns: repeat(5, minmax(0, 1fr))` |
| `grid-cols-6` | `grid-template-columns: repeat(6, minmax(0, 1fr))` |
| `grid-cols-7` | `grid-template-columns: repeat(7, minmax(0, 1fr))` |
| `grid-cols-8` | `grid-template-columns: repeat(8, minmax(0, 1fr))` |
| `grid-cols-9` | `grid-template-columns: repeat(9, minmax(0, 1fr))` |
| `grid-cols-10` | `grid-template-columns: repeat(10, minmax(0, 1fr))` |
| `grid-cols-11` | `grid-template-columns: repeat(11, minmax(0, 1fr))` |
| `grid-cols-12` | `grid-template-columns: repeat(12, minmax(0, 1fr))` |
| `grid-cols-none` | `grid-template-columns: none` |
| `grid-cols-subgrid` | `grid-template-columns: subgrid` |
| `grid-cols-[<value>]` | 任意の値 |

## Grid Template Rows

| クラス | プロパティ |
|--------|-----------|
| `grid-rows-<number>` | `grid-template-rows: repeat(<number>, minmax(0, 1fr))` (1〜12) |
| `grid-rows-none` | `grid-template-rows: none` |
| `grid-rows-subgrid` | `grid-template-rows: subgrid` |
| `grid-rows-[<value>]` | 任意の値 |

## Column Placement

| クラス | プロパティ |
|--------|-----------|
| `col-auto` | `grid-column: auto` |
| `col-span-<number>` | `grid-column: span <number> / span <number>` (1〜12) |
| `col-span-full` | `grid-column: 1 / -1` |
| `col-start-<number>` | `grid-column-start: <number>` (1〜13) |
| `col-start-auto` | `grid-column-start: auto` |
| `col-end-<number>` | `grid-column-end: <number>` (1〜13) |
| `col-end-auto` | `grid-column-end: auto` |

## Row Placement

| クラス | プロパティ |
|--------|-----------|
| `row-auto` | `grid-row: auto` |
| `row-span-<number>` | `grid-row: span <number> / span <number>` (1〜12) |
| `row-span-full` | `grid-row: 1 / -1` |
| `row-start-<number>` | `grid-row-start: <number>` (1〜13) |
| `row-start-auto` | `grid-row-start: auto` |
| `row-end-<number>` | `grid-row-end: <number>` (1〜13) |
| `row-end-auto` | `grid-row-end: auto` |

## Grid Auto Flow

| クラス | プロパティ |
|--------|-----------|
| `grid-flow-row` | `grid-auto-flow: row` |
| `grid-flow-col` | `grid-auto-flow: column` |
| `grid-flow-dense` | `grid-auto-flow: dense` |
| `grid-flow-row-dense` | `grid-auto-flow: row dense` |
| `grid-flow-col-dense` | `grid-auto-flow: column dense` |

## Grid Auto Columns

| クラス | プロパティ |
|--------|-----------|
| `auto-cols-auto` | `grid-auto-columns: auto` |
| `auto-cols-min` | `grid-auto-columns: min-content` |
| `auto-cols-max` | `grid-auto-columns: max-content` |
| `auto-cols-fr` | `grid-auto-columns: minmax(0, 1fr)` |
| `auto-cols-[<value>]` | 任意の値 |

## Grid Auto Rows

| クラス | プロパティ |
|--------|-----------|
| `auto-rows-auto` | `grid-auto-rows: auto` |
| `auto-rows-min` | `grid-auto-rows: min-content` |
| `auto-rows-max` | `grid-auto-rows: max-content` |
| `auto-rows-fr` | `grid-auto-rows: minmax(0, 1fr)` |
| `auto-rows-[<value>]` | 任意の値 |

## Gap

| クラス | プロパティ |
|--------|-----------|
| `gap-<number>` | `gap: calc(var(--spacing) * <number>)` |
| `gap-px` | `gap: 1px` |
| `gap-x-<number>` | `column-gap: calc(var(--spacing) * <number>)` |
| `gap-x-px` | `column-gap: 1px` |
| `gap-y-<number>` | `row-gap: calc(var(--spacing) * <number>)` |
| `gap-y-px` | `row-gap: 1px` |
| `gap-[<value>]` | 任意の値 |
