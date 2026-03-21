# Backgrounds

## Background Color

| クラス | 説明 |
|--------|------|
| `bg-inherit` | 親要素の背景色を継承 |
| `bg-current` | `currentColor` |
| `bg-transparent` | 透明 |
| `bg-black` | `#000000` |
| `bg-white` | `#ffffff` |
| `bg-<color>-<shade>` | カラーパレット (50〜950) |
| `bg-<color>-<shade>/<opacity>` | 透明度付き (例: `bg-blue-500/75`) |
| `bg-[<value>]` | 任意のカラー値 |

**利用可能なカラー**: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

## Background Image / Gradient

| クラス | プロパティ |
|--------|-----------|
| `bg-none` | `background-image: none` |
| `bg-linear-to-t` | 上方向の線形グラデーション |
| `bg-linear-to-tr` | 右上方向の線形グラデーション |
| `bg-linear-to-r` | 右方向の線形グラデーション |
| `bg-linear-to-br` | 右下方向の線形グラデーション |
| `bg-linear-to-b` | 下方向の線形グラデーション |
| `bg-linear-to-bl` | 左下方向の線形グラデーション |
| `bg-linear-to-l` | 左方向の線形グラデーション |
| `bg-linear-to-tl` | 左上方向の線形グラデーション |
| `bg-linear-<angle>` | 角度指定 (例: `bg-linear-45`) ⚡ |
| `bg-radial` | 放射状グラデーション ⚡ |
| `bg-radial-[<value>]` | カスタム放射状グラデーション ⚡ |
| `bg-conic` | コニカルグラデーション ⚡ |
| `bg-conic-[<value>]` | カスタムコニカルグラデーション ⚡ |

## Gradient Color Stops

| クラス | プロパティ |
|--------|-----------|
| `from-<color>-<shade>` | グラデーション開始色 |
| `from-<color>-<shade>/<opacity>` | 透明度付き開始色 |
| `via-<color>-<shade>` | グラデーション中間色 |
| `via-<color>-<shade>/<opacity>` | 透明度付き中間色 |
| `to-<color>-<shade>` | グラデーション終端色 |
| `to-<color>-<shade>/<opacity>` | 透明度付き終端色 |
| `from-0%` | 開始位置 0% |
| `from-50%` | 開始位置 50% |
| `via-50%` | 中間位置 50% |
| `to-100%` | 終端位置 100% |
| `from-[<value>]` | 任意の値 |

## Background Position

| クラス | プロパティ |
|--------|-----------|
| `bg-bottom` | `background-position: bottom` |
| `bg-center` | `background-position: center` |
| `bg-left` | `background-position: left` |
| `bg-left-bottom` | `background-position: left bottom` |
| `bg-left-top` | `background-position: left top` |
| `bg-right` | `background-position: right` |
| `bg-right-bottom` | `background-position: right bottom` |
| `bg-right-top` | `background-position: right top` |
| `bg-top` | `background-position: top` |
| `bg-[<value>]` | 任意の値 |

## Background Repeat

| クラス | プロパティ |
|--------|-----------|
| `bg-repeat` | `background-repeat: repeat` |
| `bg-no-repeat` | `background-repeat: no-repeat` |
| `bg-repeat-x` | `background-repeat: repeat-x` |
| `bg-repeat-y` | `background-repeat: repeat-y` |
| `bg-repeat-round` | `background-repeat: round` |
| `bg-repeat-space` | `background-repeat: space` |

## Background Size

| クラス | プロパティ |
|--------|-----------|
| `bg-auto` | `background-size: auto` |
| `bg-cover` | `background-size: cover` |
| `bg-contain` | `background-size: contain` |
| `bg-[<value>]` | 任意の値 |

## Background Attachment

| クラス | プロパティ |
|--------|-----------|
| `bg-fixed` | `background-attachment: fixed` |
| `bg-scroll` | `background-attachment: scroll` |
| `bg-local` | `background-attachment: local` |

## Background Clip

| クラス | プロパティ |
|--------|-----------|
| `bg-clip-border` | `background-clip: border-box` |
| `bg-clip-padding` | `background-clip: padding-box` |
| `bg-clip-content` | `background-clip: content-box` |
| `bg-clip-text` | `background-clip: text` |

## Background Origin

| クラス | プロパティ |
|--------|-----------|
| `bg-origin-border` | `background-origin: border-box` |
| `bg-origin-padding` | `background-origin: padding-box` |
| `bg-origin-content` | `background-origin: content-box` |
