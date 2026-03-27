# saikyo-tailwind-cheatsheet

Tailwind CSS v4 のユーティリティクラスを視覚的・直感的に参照できるチートシートアプリ。

詳細な仕様は [SPEC.md](docs/SPEC.md) を参照。

## スタック

- **[SvelteKit](https://svelte.dev/docs/kit/introduction)** + **[Svelte 5](https://svelte.dev/docs/svelte/overview)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[TailwindCSS v4](https://tailwindcss.com/)**
- **[daisyUI v5](https://daisyui.com/)**
- **[Iconify](https://iconify.design/)** (**[@iconify/tailwind4](https://iconify.design/docs/usage/css/tailwind/tailwind4/)**)
- **[adapter-cloudflare](https://svelte.dev/docs/kit/adapter-cloudflare)** (Cloudflare Workers デプロイ)
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)**

## セットアップ

```sh
pnpm install
```

## コマンド

| コマンド       | 説明                        |
| -------------- | --------------------------- |
| `pnpm dev`     | 開発サーバー起動            |
| `pnpm build`   | ビルド                      |
| `pnpm preview` | プレビュー                  |
| `pnpm check`   | 型チェック                  |
| `pnpm lint`    | lint & フォーマットチェック |
| `pnpm format`  | フォーマット                |

## AIエージェント

### エージェント指示ファイル

| ハーネス                                              | メモリーファイル                                    | MCP設定                                    |
| ----------------------------------------------------- | --------------------------------------------------- | ------------------------------------------ |
| [Claude Code](https://claude.ai/code)                 | [`CLAUDE.md`](CLAUDE.md) → [`AGENTS.md`](AGENTS.md) | [`.mcp.json`](.mcp.json)                   |
| [OpenAI Codex](https://openai.com/codex/)             | [`AGENTS.md`](AGENTS.md)                            | [`.codex/config.toml`](.codex/config.toml) |
| [GitHub Copilot](https://github.com/features/copilot) | [`AGENTS.md`](AGENTS.md)                            | [`.vscode/mcp.json`](.vscode/mcp.json)     |
| [Cursor](https://www.cursor.com/)                     | [`AGENTS.md`](AGENTS.md)                            | [`.cursor/mcp.json`](.cursor/mcp.json)     |

### MCP設定

[Svelte公式MCPサーバー](https://mcp.svelte.dev/)を設定済み。Svelte 5・SvelteKitのドキュメント参照、コード自動修正などが利用できる。

| ツール              | 用途                                       |
| ------------------- | ------------------------------------------ |
| `list-sections`     | 利用可能なドキュメントセクション一覧を取得 |
| `get-documentation` | 特定セクションのドキュメントを取得         |
| `svelte-autofixer`  | Svelteコードの問題点・改善提案を返す       |
| `playground-link`   | Svelte Playgroundリンクを生成              |
