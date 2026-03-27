# Typography

## Font Family

| クラス           | プロパティ                                       |
| ---------------- | ------------------------------------------------ |
| `font-sans`      | `font-family: ui-sans-serif, system-ui, ...`     |
| `font-serif`     | `font-family: ui-serif, Georgia, ...`            |
| `font-mono`      | `font-family: ui-monospace, SFMono-Regular, ...` |
| `font-[<value>]` | 任意のフォントファミリー                         |

## Font Size

| クラス                 | フォントサイズ                        | ラインハイト |
| ---------------------- | ------------------------------------- | ------------ |
| `text-xs`              | 12px (0.75rem)                        | 1            |
| `text-sm`              | 14px (0.875rem)                       | 1.25         |
| `text-base`            | 16px (1rem)                           | 1.5          |
| `text-lg`              | 18px (1.125rem)                       | 1.75         |
| `text-xl`              | 20px (1.25rem)                        | 1.75         |
| `text-2xl`             | 24px (1.5rem)                         | 2            |
| `text-3xl`             | 30px (1.875rem)                       | 2.25         |
| `text-4xl`             | 36px (2.25rem)                        | 2.5          |
| `text-5xl`             | 48px (3rem)                           | 1            |
| `text-6xl`             | 60px (3.75rem)                        | 1            |
| `text-7xl`             | 72px (4.5rem)                         | 1            |
| `text-8xl`             | 96px (6rem)                           | 1            |
| `text-9xl`             | 128px (8rem)                          | 1            |
| `text-<size>/<number>` | フォントサイズ + ラインハイト同時指定 |
| `text-[<value>]`       | 任意の値                              |

## Font Weight

| クラス            | 値       |
| ----------------- | -------- |
| `font-thin`       | 100      |
| `font-extralight` | 200      |
| `font-light`      | 300      |
| `font-normal`     | 400      |
| `font-medium`     | 500      |
| `font-semibold`   | 600      |
| `font-bold`       | 700      |
| `font-extrabold`  | 800      |
| `font-black`      | 900      |
| `font-[<value>]`  | 任意の値 |

## Font Style

| クラス       | プロパティ           |
| ------------ | -------------------- |
| `italic`     | `font-style: italic` |
| `not-italic` | `font-style: normal` |

## Font Variant Numeric

| クラス               | プロパティ                                 |
| -------------------- | ------------------------------------------ |
| `normal-nums`        | `font-variant-numeric: normal`             |
| `ordinal`            | `font-variant-numeric: ordinal`            |
| `slashed-zero`       | `font-variant-numeric: slashed-zero`       |
| `lining-nums`        | `font-variant-numeric: lining-nums`        |
| `oldstyle-nums`      | `font-variant-numeric: oldstyle-nums`      |
| `proportional-nums`  | `font-variant-numeric: proportional-nums`  |
| `tabular-nums`       | `font-variant-numeric: tabular-nums`       |
| `diagonal-fractions` | `font-variant-numeric: diagonal-fractions` |
| `stacked-fractions`  | `font-variant-numeric: stacked-fractions`  |

## Letter Spacing

| クラス               | プロパティ                 |
| -------------------- | -------------------------- |
| `tracking-tighter`   | `letter-spacing: -0.05em`  |
| `tracking-tight`     | `letter-spacing: -0.025em` |
| `tracking-normal`    | `letter-spacing: 0em`      |
| `tracking-wide`      | `letter-spacing: 0.025em`  |
| `tracking-wider`     | `letter-spacing: 0.05em`   |
| `tracking-widest`    | `letter-spacing: 0.1em`    |
| `tracking-[<value>]` | 任意の値                   |

## Line Height

| クラス              | プロパティ                                     |
| ------------------- | ---------------------------------------------- |
| `leading-none`      | `line-height: 1`                               |
| `leading-tight`     | `line-height: 1.25`                            |
| `leading-snug`      | `line-height: 1.375`                           |
| `leading-normal`    | `line-height: 1.5`                             |
| `leading-relaxed`   | `line-height: 1.625`                           |
| `leading-loose`     | `line-height: 2`                               |
| `leading-<number>`  | `line-height: calc(var(--spacing) * <number>)` |
| `leading-[<value>]` | 任意の値                                       |

## Text Alignment

| クラス         | プロパティ            |
| -------------- | --------------------- |
| `text-left`    | `text-align: left`    |
| `text-center`  | `text-align: center`  |
| `text-right`   | `text-align: right`   |
| `text-justify` | `text-align: justify` |
| `text-start`   | `text-align: start`   |
| `text-end`     | `text-align: end`     |

## Text Color

| クラス                           | 説明                                |
| -------------------------------- | ----------------------------------- |
| `text-inherit`                   | 親要素の色を継承                    |
| `text-current`                   | `currentColor`                      |
| `text-transparent`               | 透明                                |
| `text-black`                     | `#000000`                           |
| `text-white`                     | `#ffffff`                           |
| `text-<color>-<shade>`           | カラーパレット (50〜950)            |
| `text-<color>-<shade>/<opacity>` | 透明度付き (例: `text-blue-500/75`) |
| `text-[<value>]`                 | 任意のカラー値                      |

**利用可能なカラー**: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

## Text Decoration

| クラス         | プロパティ                           |
| -------------- | ------------------------------------ |
| `underline`    | `text-decoration-line: underline`    |
| `overline`     | `text-decoration-line: overline`     |
| `line-through` | `text-decoration-line: line-through` |
| `no-underline` | `text-decoration-line: none`         |

## Text Decoration Color

| クラス                       | プロパティ                            |
| ---------------------------- | ------------------------------------- |
| `decoration-inherit`         | `text-decoration-color: inherit`      |
| `decoration-current`         | `text-decoration-color: currentColor` |
| `decoration-transparent`     | `text-decoration-color: transparent`  |
| `decoration-<color>-<shade>` | カラーパレット                        |
| `decoration-[<value>]`       | 任意の値                              |

## Text Decoration Style

| クラス              | プロパティ                      |
| ------------------- | ------------------------------- |
| `decoration-solid`  | `text-decoration-style: solid`  |
| `decoration-double` | `text-decoration-style: double` |
| `decoration-dotted` | `text-decoration-style: dotted` |
| `decoration-dashed` | `text-decoration-style: dashed` |
| `decoration-wavy`   | `text-decoration-style: wavy`   |

## Text Decoration Thickness

| クラス                 | プロパティ                             |
| ---------------------- | -------------------------------------- |
| `decoration-auto`      | `text-decoration-thickness: auto`      |
| `decoration-from-font` | `text-decoration-thickness: from-font` |
| `decoration-0`         | `text-decoration-thickness: 0px`       |
| `decoration-1`         | `text-decoration-thickness: 1px`       |
| `decoration-2`         | `text-decoration-thickness: 2px`       |
| `decoration-4`         | `text-decoration-thickness: 4px`       |
| `decoration-8`         | `text-decoration-thickness: 8px`       |
| `decoration-[<value>]` | 任意の値                               |

## Underline Offset

| クラス                       | プロパティ                    |
| ---------------------------- | ----------------------------- |
| `underline-offset-auto`      | `text-underline-offset: auto` |
| `underline-offset-0`         | `text-underline-offset: 0px`  |
| `underline-offset-1`         | `text-underline-offset: 1px`  |
| `underline-offset-2`         | `text-underline-offset: 2px`  |
| `underline-offset-4`         | `text-underline-offset: 4px`  |
| `underline-offset-8`         | `text-underline-offset: 8px`  |
| `underline-offset-[<value>]` | 任意の値                      |

## Text Transform

| クラス        | プロパティ                   |
| ------------- | ---------------------------- |
| `uppercase`   | `text-transform: uppercase`  |
| `lowercase`   | `text-transform: lowercase`  |
| `capitalize`  | `text-transform: capitalize` |
| `normal-case` | `text-transform: none`       |

## Text Overflow

| クラス          | プロパティ                                                       |
| --------------- | ---------------------------------------------------------------- |
| `truncate`      | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` |
| `text-ellipsis` | `text-overflow: ellipsis`                                        |
| `text-clip`     | `text-overflow: clip`                                            |

## Text Wrap

| クラス         | プロパティ           |
| -------------- | -------------------- |
| `text-wrap`    | `text-wrap: wrap`    |
| `text-nowrap`  | `text-wrap: nowrap`  |
| `text-balance` | `text-wrap: balance` |
| `text-pretty`  | `text-wrap: pretty`  |

## Whitespace

| クラス                    | プロパティ                  |
| ------------------------- | --------------------------- |
| `whitespace-normal`       | `white-space: normal`       |
| `whitespace-nowrap`       | `white-space: nowrap`       |
| `whitespace-pre`          | `white-space: pre`          |
| `whitespace-pre-wrap`     | `white-space: pre-wrap`     |
| `whitespace-pre-line`     | `white-space: pre-line`     |
| `whitespace-break-spaces` | `white-space: break-spaces` |

## Word Break

| クラス         | プロパティ                                  |
| -------------- | ------------------------------------------- |
| `break-normal` | `overflow-wrap: normal; word-break: normal` |
| `break-words`  | `overflow-wrap: break-word`                 |
| `break-all`    | `word-break: break-all`                     |
| `break-keep`   | `word-break: keep-all`                      |

## Hyphens

| クラス           | プロパティ        |
| ---------------- | ----------------- |
| `hyphens-none`   | `hyphens: none`   |
| `hyphens-manual` | `hyphens: manual` |
| `hyphens-auto`   | `hyphens: auto`   |

## Vertical Align

| クラス              | プロパティ                    |
| ------------------- | ----------------------------- |
| `align-baseline`    | `vertical-align: baseline`    |
| `align-top`         | `vertical-align: top`         |
| `align-middle`      | `vertical-align: middle`      |
| `align-bottom`      | `vertical-align: bottom`      |
| `align-text-top`    | `vertical-align: text-top`    |
| `align-text-bottom` | `vertical-align: text-bottom` |
| `align-sub`         | `vertical-align: sub`         |
| `align-super`       | `vertical-align: super`       |
| `align-[<value>]`   | 任意の値                      |

## List Style Type

| クラス           | プロパティ                 |
| ---------------- | -------------------------- |
| `list-none`      | `list-style-type: none`    |
| `list-disc`      | `list-style-type: disc`    |
| `list-decimal`   | `list-style-type: decimal` |
| `list-[<value>]` | 任意の値                   |

## List Style Position

| クラス         | プロパティ                     |
| -------------- | ------------------------------ |
| `list-inside`  | `list-style-position: inside`  |
| `list-outside` | `list-style-position: outside` |

## Text Indent

| クラス             | プロパティ                                     |
| ------------------ | ---------------------------------------------- |
| `indent-<number>`  | `text-indent: calc(var(--spacing) * <number>)` |
| `indent-px`        | `text-indent: 1px`                             |
| `-indent-<number>` | 負のインデント                                 |
| `indent-[<value>]` | 任意の値                                       |

## Text Shadow ⚡

| クラス                  | 説明                   |
| ----------------------- | ---------------------- |
| `text-shadow-none`      | テキストシャドウなし   |
| `text-shadow-2xs`       | 極小のテキストシャドウ |
| `text-shadow-xs`        | 小さなテキストシャドウ |
| `text-shadow-sm`        | 小テキストシャドウ     |
| `text-shadow-md`        | 中テキストシャドウ     |
| `text-shadow-lg`        | 大テキストシャドウ     |
| `text-shadow-xl`        | 特大テキストシャドウ   |
| `text-shadow-[<value>]` | 任意の値               |
