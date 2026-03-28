export type UtilityClass = {
	name: string; // e.g., "text-lg"
	css: string; // e.g., "font-size: 1.125rem"
	description?: string; // 検索用の説明（日本語）
	renderHint?: string; // カテゴリ固有のプレビュー用データ（例: 背景色コード、表示方式トークン）
	example?: string; // HTMLコード例（文字列として表示・レンダリング）
	points?: string[]; // ポイント説明（日本語、2〜3件）
};

export type Subcategory = {
	title: string; // e.g., "Font Size"
	classes: UtilityClass[];
};

export type Category = {
	id: string; // URLパス e.g., "typography"
	title: string; // e.g., "Typography"
	subcategories: Subcategory[];
};
