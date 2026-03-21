# Accessibility

## Screen Reader

| クラス | 説明 |
|--------|------|
| `sr-only` | 視覚的に非表示だがスクリーンリーダーには読まれる (`position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0`) |
| `not-sr-only` | `sr-only` を解除して通常表示に戻す |

## Forced Color Adjust

| クラス | プロパティ |
|--------|-----------|
| `forced-color-adjust-auto` | `forced-color-adjust: auto` |
| `forced-color-adjust-none` | `forced-color-adjust: none` |

## レスポンシブバリアント

Tailwindのすべてのユーティリティはブレークポイントプレフィックスで条件付き適用が可能。

| プレフィックス | ブレークポイント |
|--------------|----------------|
| (なし) | 全サイズ (モバイルファースト) |
| `sm:` | `width >= 640px` |
| `md:` | `width >= 768px` |
| `lg:` | `width >= 1024px` |
| `xl:` | `width >= 1280px` |
| `2xl:` | `width >= 1536px` |
| `max-sm:` | `width < 640px` |
| `max-md:` | `width < 768px` |
| `max-lg:` | `width < 1024px` |
| `max-xl:` | `width < 1280px` |
| `max-2xl:` | `width < 1536px` |

## ステートバリアント

| バリアント | 対象 |
|-----------|------|
| `hover:` | `:hover` |
| `focus:` | `:focus` |
| `focus-within:` | `:focus-within` |
| `focus-visible:` | `:focus-visible` |
| `active:` | `:active` |
| `visited:` | `:visited` |
| `target:` | `:target` |
| `disabled:` | `:disabled` |
| `enabled:` | `:enabled` |
| `checked:` | `:checked` |
| `indeterminate:` | `:indeterminate` |
| `default:` | `:default` |
| `required:` | `:required` |
| `valid:` | `:valid` |
| `invalid:` | `:invalid` |
| `in-range:` | `:in-range` |
| `out-of-range:` | `:out-of-range` |
| `placeholder-shown:` | `:placeholder-shown` |
| `autofill:` | `:autofill` |
| `read-only:` | `:read-only` |
| `first:` | `:first-child` |
| `last:` | `:last-child` |
| `only:` | `:only-child` |
| `odd:` | `:nth-child(odd)` |
| `even:` | `:nth-child(even)` |
| `first-of-type:` | `:first-of-type` |
| `last-of-type:` | `:last-of-type` |
| `only-of-type:` | `:only-of-type` |
| `nth-<number>:` | `:nth-child(<number>)` ⚡ |
| `nth-last-<number>:` | `:nth-last-child(<number>)` ⚡ |
| `nth-of-type-<number>:` | `:nth-of-type(<number>)` ⚡ |

## グループ・ピアバリアント

| バリアント | 説明 |
|-----------|------|
| `group` | 親要素に付与するマーカークラス |
| `group-hover:` | 親に `group` がある場合のホバー |
| `group-focus:` | 親に `group` がある場合のフォーカス |
| `group-active:` | 親に `group` がある場合のアクティブ |
| `group-disabled:` | 親に `group` がある場合のdisabled |
| `group/<name>` | 名前付きグループ |
| `group-hover/<name>:` | 名前付きグループのホバー |
| `peer` | 兄弟要素に付与するマーカークラス |
| `peer-hover:` | 兄弟に `peer` がある場合のホバー |
| `peer-focus:` | 兄弟に `peer` がある場合のフォーカス |
| `peer-checked:` | 兄弟に `peer` がある場合のchecked |
| `peer-disabled:` | 兄弟に `peer` がある場合のdisabled |
| `peer/<name>` | 名前付きピア |

## メディアクエリバリアント

| バリアント | 説明 |
|-----------|------|
| `dark:` | ダークモード |
| `light:` | ライトモード |
| `print:` | 印刷時 |
| `motion-reduce:` | `prefers-reduced-motion: reduce` |
| `motion-safe:` | `prefers-reduced-motion: no-preference` |
| `contrast-more:` | `prefers-contrast: more` |
| `contrast-less:` | `prefers-contrast: less` |
| `forced-colors:` | `forced-colors: active` |
| `portrait:` | 縦向き |
| `landscape:` | 横向き |

## 任意のバリアント

| バリアント | 説明 |
|-----------|------|
| `[&:nth-child(3)]:` | 任意のCSSセレクター |
| `[@media(min-width:900px)]:` | 任意のメディアクエリ |
| `[@supports(display:grid)]:` | `@supports` クエリ |
| `[.parent_&]:` | 特定の親クラスが存在する場合 |
