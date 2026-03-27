import type { Category } from '$lib/types';

const layout: Category = {
	id: 'layout',
	title: 'Layout',
	subcategories: [
		{
			title: 'Display',
			classes: [
				{
					name: 'block',
					css: 'display: block',
					description: 'ブロック要素として表示。幅いっぱいに広がる'
				},
				{
					name: 'inline-block',
					css: 'display: inline-block',
					description: 'インライン配置だが幅・高さ・余白を指定できる'
				},
				{ name: 'inline', css: 'display: inline', description: 'テキストのように行内に配置される' },
				{
					name: 'flex',
					css: 'display: flex',
					description: 'フレックスコンテナ。子要素を横並びにする'
				},
				{
					name: 'inline-flex',
					css: 'display: inline-flex',
					description: 'インライン配置のフレックスコンテナ'
				},
				{
					name: 'grid',
					css: 'display: grid',
					description: 'グリッドコンテナ。子要素をグリッド配置する'
				},
				{
					name: 'inline-grid',
					css: 'display: inline-grid',
					description: 'インライン配置のグリッドコンテナ'
				},
				{
					name: 'hidden',
					css: 'display: none',
					description: '要素を非表示にする（レイアウトも占有しない）'
				}
			]
		}
	] // #5 で全サブカテゴリを実装
};

export default layout;
