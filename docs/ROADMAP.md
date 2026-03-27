# 実装ロードマップ

## フェーズ 1: 基盤 UI（全カテゴリ共通）

カテゴリ実装を始める前に一度だけ行う基盤整備。

### #1 セットアップ

- [x] `@sveltejs/adapter-auto` → `@sveltejs/adapter-cloudflare` へ変更
- [x] `svelte.config.js` のアダプター設定を更新

### #2 データ型定義

- [x] `src/lib/types.ts` に `UtilityClass` / `Subcategory` / `Category` 型を定義

### #3 ルーティング・レイアウト

- [x] `src/routes/+layout.svelte` にカテゴリナビゲーションヘッダーを実装
- [x] `src/routes/[category]/+page.svelte` を作成（カテゴリページ）
- [x] `src/routes/[category]/+page.ts` で params からカテゴリデータを取得
- [x] `src/routes/+page.svelte` で `/layout` へリダイレクト
- [x] `src/lib/data/index.ts` — 全カテゴリをまとめてエクスポート

### #4 共通コンポーネント

- [x] `src/lib/components/ClassCard.svelte` — クラスカードコンポーネント（名前・CSS値・プレビュー枠・コピーボタン）
- [x] `src/lib/components/SubcategorySection.svelte` — サブカテゴリ見出し + カードグリッド

---

## フェーズ 2: カテゴリ別実装（順番に1カテゴリずつ）

各カテゴリで「プレビュー方式検討 → データ定義 → プレビュー実装 → 動作確認」をセットで行う。
プレビュー実装方針の参考は `SPEC.md` のカテゴリ別プレビュー実装方針テーブルを参照。

### #5 Layout

- [x] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [x] `src/lib/data/layout.ts` — データ作成（Display, Position, Z-Index, Overflow, Visibility, Float, Box Sizing, Object Fit, Object Position, Aspect Ratio）
- [x] Layout プレビュー — `<div>` ボックス群で display の挙動を可視化

### #6 Flexbox

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/flexbox.ts` — データ作成
- [ ] Flexbox プレビュー — flex コンテナ + 子要素で並び方・整列を可視化

### #7 Grid

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/grid.ts` — データ作成
- [ ] Grid プレビュー — グリッドコンテナ + 子セルでレイアウトを可視化

### #8 Spacing

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/spacing.ts` — データ作成（Padding, Margin, Gap）
- [ ] Spacing プレビュー — 色付きボックスで余白・間隔を可視化

### #9 Sizing

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/sizing.ts` — データ作成（Width, Height など）
- [ ] Sizing プレビュー — 色付きボックスで実寸を表示

### #10 Typography

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/typography.ts` — データ作成（Font, Text など）
- [ ] Typography プレビュー — サンプルテキストにクラスを適用して表示

### #11 Backgrounds

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/backgrounds.ts` — データ作成
- [ ] Backgrounds プレビュー — 固定サイズ `<div>` に背景色・グラデーションを表示

### #12 Borders

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/borders.ts` — データ作成
- [ ] Borders プレビュー — ボーダーの太さ・スタイル・角丸を表示

### #13 Effects

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/effects.ts` — データ作成（Shadow, Opacity）
- [ ] Effects プレビュー — シャドウ・透明度のデモ

### #14 Filters

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/filters.ts` — データ作成（Blur, Brightness など）
- [ ] Filters プレビュー — 色付きボックスでフィルターを適用して比較

### #15 Transitions

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/transitions.ts` — データ作成
- [ ] Transitions プレビュー — hover でトランジションが発動するデモ

### #16 Transforms

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/transforms.ts` — データ作成（Rotate, Scale, Translate）
- [ ] Transforms プレビュー — 変形したボックスのデモ

### #17 Interactivity

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/interactivity.ts` — データ作成（Cursor, Pointer Events）
- [ ] Interactivity プレビュー — カーソル変化のデモ

### #18 SVG

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/svg.ts` — データ作成（Fill, Stroke）
- [ ] SVG プレビュー — Iconify アイコンへの fill/stroke 適用デモ

### #19 Accessibility

- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/accessibility.ts` — データ作成（Screen Reader, Focus）
- [ ] Accessibility プレビュー — 動作説明テキスト表示

---

## フェーズ 3: 追加機能

### #20 全カテゴリ横断検索

- [ ] 全カテゴリのクラス一覧をフラットにまとめた検索インデックスを生成
- [ ] ヘッダーに検索入力コンポーネントを実装（クラス名・CSS値・description でリアルタイム絞り込み）
- [ ] 検索中は全カテゴリを横断してヒットしたクラスのカードをカテゴリセクション別に一覧表示

### #21 クリップボードコピー

- [ ] `ClassCard` のコピーボタンに `navigator.clipboard.writeText` を実装
- [ ] コピー成功時のフィードバック表示（トースト or アイコン変化）

### #22 ダークモード

- [ ] daisyUI の `data-theme` を使ったライト/ダーク切り替えを実装
- [ ] テーマ状態を `localStorage` に保存して再訪時に復元
- [ ] ヘッダーのトグルボタンに現在のテーマアイコンを表示
