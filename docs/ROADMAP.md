# 実装ロードマップ

## フェーズ 1: 基盤 UI（全カテゴリ共通）

カテゴリ実装を始める前に一度だけ行う基盤整備。

### セットアップ
- [ ] `@sveltejs/adapter-auto` → `@sveltejs/adapter-cloudflare` へ変更
- [ ] `svelte.config.js` のアダプター設定を更新

### データ型定義
- [ ] `src/lib/types.ts` に `UtilityClass` / `Subcategory` / `Category` 型を定義

### ルーティング・レイアウト
- [ ] `src/routes/+layout.svelte` にカテゴリナビゲーションヘッダーを実装
- [ ] `src/routes/[category]/+page.svelte` を作成（カテゴリページ）
- [ ] `src/routes/[category]/+page.ts` で params からカテゴリデータを取得
- [ ] `src/routes/+page.svelte` で `/layout` へリダイレクト
- [ ] `src/lib/data/index.ts` — 全カテゴリをまとめてエクスポート

### 共通コンポーネント
- [ ] `src/lib/components/ClassCard.svelte` — クラスカードコンポーネント（名前・CSS値・プレビュー枠・コピーボタン）
- [ ] `src/lib/components/SubcategorySection.svelte` — サブカテゴリ見出し + カードグリッド

---

## フェーズ 2: カテゴリ別実装（順番に1カテゴリずつ）

各カテゴリで「プレビュー方式検討 → データ定義 → プレビュー実装 → 動作確認」をセットで行う。
プレビュー実装方針の参考は `SPEC.md` のカテゴリ別プレビュー実装方針テーブルを参照。

### Layout
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/layout.ts` — データ作成（Display, Position, Inset, Z-Index, Overflow など）
- [ ] Layout プレビュー — `<div>` ボックス群で display の挙動を可視化

### Flexbox
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/flexbox.ts` — データ作成
- [ ] Flexbox プレビュー — flex コンテナ + 子要素で並び方・整列を可視化

### Grid
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/grid.ts` — データ作成
- [ ] Grid プレビュー — グリッドコンテナ + 子セルでレイアウトを可視化

### Spacing
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/spacing.ts` — データ作成（Padding, Margin, Gap）
- [ ] Spacing プレビュー — 色付きボックスで余白・間隔を可視化

### Sizing
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/sizing.ts` — データ作成（Width, Height など）
- [ ] Sizing プレビュー — 色付きボックスで実寸を表示

### Typography
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/typography.ts` — データ作成（Font, Text など）
- [ ] Typography プレビュー — サンプルテキストにクラスを適用して表示

### Backgrounds
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/backgrounds.ts` — データ作成
- [ ] Backgrounds プレビュー — 固定サイズ `<div>` に背景色・グラデーションを表示

### Borders
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/borders.ts` — データ作成
- [ ] Borders プレビュー — ボーダーの太さ・スタイル・角丸を表示

### Effects
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/effects.ts` — データ作成（Shadow, Opacity）
- [ ] Effects プレビュー — シャドウ・透明度のデモ

### Filters
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/filters.ts` — データ作成（Blur, Brightness など）
- [ ] Filters プレビュー — 色付きボックスでフィルターを適用して比較

### Transitions
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/transitions.ts` — データ作成
- [ ] Transitions プレビュー — hover でトランジションが発動するデモ

### Transforms
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/transforms.ts` — データ作成（Rotate, Scale, Translate）
- [ ] Transforms プレビュー — 変形したボックスのデモ

### Interactivity
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/interactivity.ts` — データ作成（Cursor, Pointer Events）
- [ ] Interactivity プレビュー — カーソル変化のデモ

### SVG
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/svg.ts` — データ作成（Fill, Stroke）
- [ ] SVG プレビュー — Iconify アイコンへの fill/stroke 適用デモ

### Accessibility
- [ ] プレビュー方式を複数パターン試作してブラウザで確認・方式決定
- [ ] `src/lib/data/accessibility.ts` — データ作成（Screen Reader, Focus）
- [ ] Accessibility プレビュー — 動作説明テキスト表示

---

## フェーズ 3: 追加機能

### 全カテゴリ横断検索
- [ ] 全カテゴリのクラス一覧をフラットにまとめた検索インデックスを生成
- [ ] ヘッダーに検索入力コンポーネントを実装（クラス名・CSS値・description でリアルタイム絞り込み）
- [ ] 検索中は全カテゴリを横断してヒットしたクラスのカードをカテゴリセクション別に一覧表示

### クリップボードコピー
- [ ] `ClassCard` のコピーボタンに `navigator.clipboard.writeText` を実装
- [ ] コピー成功時のフィードバック表示（トースト or アイコン変化）

### ダークモード
- [ ] daisyUI の `data-theme` を使ったライト/ダーク切り替えを実装
- [ ] テーマ状態を `localStorage` に保存して再訪時に復元
- [ ] ヘッダーのトグルボタンに現在のテーマアイコンを表示
