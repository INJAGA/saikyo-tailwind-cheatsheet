# Borders

## Border Width

| クラス              | プロパティ                                        |
| ------------------- | ------------------------------------------------- |
| `border`            | `border-width: 1px`                               |
| `border-0`          | `border-width: 0px`                               |
| `border-2`          | `border-width: 2px`                               |
| `border-4`          | `border-width: 4px`                               |
| `border-8`          | `border-width: 8px`                               |
| `border-x`          | `border-left/right-width: 1px`                    |
| `border-x-<number>` | `border-left/right-width: <number>px`             |
| `border-y`          | `border-top/bottom-width: 1px`                    |
| `border-y-<number>` | `border-top/bottom-width: <number>px`             |
| `border-t`          | `border-top-width: 1px`                           |
| `border-t-<number>` | `border-top-width: <number>px`                    |
| `border-r`          | `border-right-width: 1px`                         |
| `border-r-<number>` | `border-right-width: <number>px`                  |
| `border-b`          | `border-bottom-width: 1px`                        |
| `border-b-<number>` | `border-bottom-width: <number>px`                 |
| `border-l`          | `border-left-width: 1px`                          |
| `border-l-<number>` | `border-left-width: <number>px`                   |
| `border-s`          | `border-inline-start-width: 1px` (論理プロパティ) |
| `border-e`          | `border-inline-end-width: 1px` (論理プロパティ)   |

## Border Color

| クラス                             | 説明                     |
| ---------------------------------- | ------------------------ |
| `border-inherit`                   | 親要素の色を継承         |
| `border-current`                   | `currentColor`           |
| `border-transparent`               | 透明                     |
| `border-black`                     | `#000000`                |
| `border-white`                     | `#ffffff`                |
| `border-<color>-<shade>`           | カラーパレット (50〜950) |
| `border-<color>-<shade>/<opacity>` | 透明度付き               |
| `border-x-<color>-<shade>`         | 左右のボーダー色         |
| `border-y-<color>-<shade>`         | 上下のボーダー色         |
| `border-t-<color>-<shade>`         | 上ボーダー色             |
| `border-r-<color>-<shade>`         | 右ボーダー色             |
| `border-b-<color>-<shade>`         | 下ボーダー色             |
| `border-l-<color>-<shade>`         | 左ボーダー色             |
| `border-[<value>]`                 | 任意のカラー値           |

## Border Style

| クラス          | プロパティ             |
| --------------- | ---------------------- |
| `border-solid`  | `border-style: solid`  |
| `border-dashed` | `border-style: dashed` |
| `border-dotted` | `border-style: dotted` |
| `border-double` | `border-style: double` |
| `border-hidden` | `border-style: hidden` |
| `border-none`   | `border-style: none`   |

## Border Radius

| クラス              | 値                                |
| ------------------- | --------------------------------- |
| `rounded-none`      | `border-radius: 0px`              |
| `rounded-xs`        | `border-radius: 0.125rem` (2px)   |
| `rounded-sm`        | `border-radius: 0.25rem` (4px)    |
| `rounded`           | `border-radius: 0.25rem` (4px)    |
| `rounded-md`        | `border-radius: 0.375rem` (6px)   |
| `rounded-lg`        | `border-radius: 0.5rem` (8px)     |
| `rounded-xl`        | `border-radius: 0.75rem` (12px)   |
| `rounded-2xl`       | `border-radius: 1rem` (16px)      |
| `rounded-3xl`       | `border-radius: 1.5rem` (24px)    |
| `rounded-4xl`       | `border-radius: 2rem` (32px)      |
| `rounded-full`      | `border-radius: 9999px`           |
| `rounded-t-*`       | 上辺2コーナー                     |
| `rounded-r-*`       | 右辺2コーナー                     |
| `rounded-b-*`       | 下辺2コーナー                     |
| `rounded-l-*`       | 左辺2コーナー                     |
| `rounded-tl-*`      | 左上コーナー                      |
| `rounded-tr-*`      | 右上コーナー                      |
| `rounded-br-*`      | 右下コーナー                      |
| `rounded-bl-*`      | 左下コーナー                      |
| `rounded-ss-*`      | inline-start + block-start (論理) |
| `rounded-se-*`      | inline-end + block-start (論理)   |
| `rounded-ee-*`      | inline-end + block-end (論理)     |
| `rounded-es-*`      | inline-start + block-end (論理)   |
| `rounded-[<value>]` | 任意の値                          |

## Outline

| クラス                     | プロパティ                                 |
| -------------------------- | ------------------------------------------ |
| `outline`                  | `outline-width: 1px; outline-style: solid` |
| `outline-<number>`         | `outline-width: <number>px` (0〜8)         |
| `outline-none`             | `outline: none`                            |
| `outline-hidden`           | `outline: hidden`                          |
| `outline-dashed`           | `outline-style: dashed`                    |
| `outline-dotted`           | `outline-style: dotted`                    |
| `outline-double`           | `outline-style: double`                    |
| `outline-solid`            | `outline-style: solid`                     |
| `outline-<color>-<shade>`  | アウトラインカラー                         |
| `outline-offset-0`         | `outline-offset: 0px`                      |
| `outline-offset-1`         | `outline-offset: 1px`                      |
| `outline-offset-2`         | `outline-offset: 2px`                      |
| `outline-offset-4`         | `outline-offset: 4px`                      |
| `outline-offset-8`         | `outline-offset: 8px`                      |
| `outline-offset-[<value>]` | 任意の値                                   |

## Divide (子要素間のボーダー)

| クラス                   | プロパティ                         |
| ------------------------ | ---------------------------------- |
| `divide-x`               | 水平方向の子要素間に左ボーダー 1px |
| `divide-x-<number>`      | 左ボーダー <number>px              |
| `divide-x-reverse`       | `flex-row-reverse` 用の反転        |
| `divide-y`               | 垂直方向の子要素間に上ボーダー 1px |
| `divide-y-<number>`      | 上ボーダー <number>px              |
| `divide-y-reverse`       | `flex-col-reverse` 用の反転        |
| `divide-<color>-<shade>` | 区切りボーダーカラー               |
| `divide-solid`           | `border-style: solid`              |
| `divide-dashed`          | `border-style: dashed`             |
| `divide-dotted`          | `border-style: dotted`             |
| `divide-double`          | `border-style: double`             |
| `divide-none`            | `border-style: none`               |

## Ring (フォーカスリング)

| クラス                           | プロパティ                                         |
| -------------------------------- | -------------------------------------------------- |
| `ring`                           | `box-shadow: 0 0 0 3px ...` (ユーティリティリング) |
| `ring-0`                         | リング幅 0px                                       |
| `ring-1`                         | リング幅 1px                                       |
| `ring-2`                         | リング幅 2px                                       |
| `ring-4`                         | リング幅 4px                                       |
| `ring-8`                         | リング幅 8px                                       |
| `ring-inset`                     | `box-shadow: inset 0 0 0 ...`                      |
| `ring-<color>-<shade>`           | リングカラー                                       |
| `ring-<color>-<shade>/<opacity>` | 透明度付きリングカラー                             |
| `ring-offset-0`                  | リングオフセット 0px                               |
| `ring-offset-1`                  | リングオフセット 1px                               |
| `ring-offset-2`                  | リングオフセット 2px                               |
| `ring-offset-4`                  | リングオフセット 4px                               |
| `ring-offset-8`                  | リングオフセット 8px                               |
| `ring-offset-<color>-<shade>`    | リングオフセットカラー                             |
| `ring-[<value>]`                 | 任意の値                                           |
