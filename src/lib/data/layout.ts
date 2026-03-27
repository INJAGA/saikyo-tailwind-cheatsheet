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
					name: 'flow-root',
					css: 'display: flow-root',
					description: '新しいブロック整形コンテキストを生成。内部のフロートを包含する'
				},
				{
					name: 'contents',
					css: 'display: contents',
					description: '要素自体は描画されず、子要素のみが直接表示される'
				},
				{
					name: 'list-item',
					css: 'display: list-item',
					description: 'リストアイテムとして表示（マーカー付き）'
				},
				{ name: 'table', css: 'display: table', description: 'テーブルとして表示' },
				{
					name: 'inline-table',
					css: 'display: inline-table',
					description: 'インライン配置のテーブル'
				},
				{
					name: 'table-caption',
					css: 'display: table-caption',
					description: 'テーブルキャプション（caption 要素相当）'
				},
				{
					name: 'table-cell',
					css: 'display: table-cell',
					description: 'テーブルセル（td / th 相当）として表示'
				},
				{
					name: 'table-column',
					css: 'display: table-column',
					description: 'テーブル列（col 相当）として表示'
				},
				{
					name: 'table-header-group',
					css: 'display: table-header-group',
					description: 'テーブルヘッダーグループ（thead 相当）'
				},
				{
					name: 'table-footer-group',
					css: 'display: table-footer-group',
					description: 'テーブルフッターグループ（tfoot 相当）'
				},
				{
					name: 'table-row-group',
					css: 'display: table-row-group',
					description: 'テーブル行グループ（tbody 相当）'
				},
				{
					name: 'table-row',
					css: 'display: table-row',
					description: 'テーブル行（tr 相当）として表示'
				},
				{
					name: 'hidden',
					css: 'display: none',
					description: '要素を非表示にする（レイアウトも占有しない）'
				},
				{
					name: 'sr-only',
					css: 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0',
					description: 'スクリーンリーダー専用（視覚的に非表示）'
				},
				{
					name: 'not-sr-only',
					css: 'position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal',
					description: 'sr-only を解除して通常表示に戻す'
				}
			]
		},
		{
			title: 'Position',
			classes: [
				{
					name: 'static',
					css: 'position: static',
					description: 'デフォルトの配置。top / right / bottom / left は無効'
				},
				{
					name: 'relative',
					css: 'position: relative',
					description: '通常フローに従い、オフセット指定でずらせる'
				},
				{
					name: 'absolute',
					css: 'position: absolute',
					description: '最も近い position 祖先を基準に絶対配置'
				},
				{
					name: 'fixed',
					css: 'position: fixed',
					description: 'ビューポートを基準に固定配置（スクロールしても動かない）'
				},
				{
					name: 'sticky',
					css: 'position: sticky',
					description: 'スクロール中は relative、閾値に達すると fixed に切り替わる'
				}
			]
		},
		{
			title: 'Z-Index',
			classes: [
				{ name: 'z-0', css: 'z-index: 0', description: 'z-index を 0 に設定' },
				{ name: 'z-10', css: 'z-index: 10', description: 'z-index を 10 に設定' },
				{ name: 'z-20', css: 'z-index: 20', description: 'z-index を 20 に設定' },
				{ name: 'z-30', css: 'z-index: 30', description: 'z-index を 30 に設定' },
				{ name: 'z-40', css: 'z-index: 40', description: 'z-index を 40 に設定' },
				{ name: 'z-50', css: 'z-index: 50', description: 'z-index を 50 に設定' },
				{
					name: 'z-auto',
					css: 'z-index: auto',
					description: 'z-index を auto に設定（スタッキングコンテキストを作らない）'
				},
				{
					name: '-z-10',
					css: 'z-index: -10',
					description: 'z-index を -10 に設定（要素を背面に送る）'
				}
			]
		},
		{
			title: 'Overflow',
			classes: [
				{
					name: 'overflow-auto',
					css: 'overflow: auto',
					description: 'コンテンツが溢れた場合のみスクロールバーを表示'
				},
				{
					name: 'overflow-hidden',
					css: 'overflow: hidden',
					description: '溢れたコンテンツを非表示にする'
				},
				{
					name: 'overflow-clip',
					css: 'overflow: clip',
					description: '溢れたコンテンツをクリップする（スクロールなし）'
				},
				{
					name: 'overflow-visible',
					css: 'overflow: visible',
					description: '溢れたコンテンツをそのまま表示する（デフォルト）'
				},
				{
					name: 'overflow-scroll',
					css: 'overflow: scroll',
					description: '常にスクロールバーを表示する'
				},
				{
					name: 'overflow-x-auto',
					css: 'overflow-x: auto',
					description: '水平方向のみ auto スクロール'
				},
				{
					name: 'overflow-x-hidden',
					css: 'overflow-x: hidden',
					description: '水平方向のみ溢れを非表示'
				},
				{
					name: 'overflow-x-clip',
					css: 'overflow-x: clip',
					description: '水平方向のみクリップ'
				},
				{
					name: 'overflow-x-visible',
					css: 'overflow-x: visible',
					description: '水平方向のみ溢れを表示'
				},
				{
					name: 'overflow-x-scroll',
					css: 'overflow-x: scroll',
					description: '水平方向のみ常にスクロールバー'
				},
				{
					name: 'overflow-y-auto',
					css: 'overflow-y: auto',
					description: '垂直方向のみ auto スクロール'
				},
				{
					name: 'overflow-y-hidden',
					css: 'overflow-y: hidden',
					description: '垂直方向のみ溢れを非表示'
				},
				{
					name: 'overflow-y-clip',
					css: 'overflow-y: clip',
					description: '垂直方向のみクリップ'
				},
				{
					name: 'overflow-y-visible',
					css: 'overflow-y: visible',
					description: '垂直方向のみ溢れを表示'
				},
				{
					name: 'overflow-y-scroll',
					css: 'overflow-y: scroll',
					description: '垂直方向のみ常にスクロールバー'
				}
			]
		},
		{
			title: 'Visibility',
			classes: [
				{
					name: 'visible',
					css: 'visibility: visible',
					description: '要素を表示する（デフォルト）'
				},
				{
					name: 'invisible',
					css: 'visibility: hidden',
					description: '要素を非表示にする（レイアウトスペースは保持）'
				},
				{
					name: 'collapse',
					css: 'visibility: collapse',
					description: 'テーブル行・列を折りたたむ（他要素は hidden と同様）'
				}
			]
		},
		{
			title: 'Float',
			classes: [
				{ name: 'float-left', css: 'float: left', description: '要素を左側にフロートする' },
				{ name: 'float-right', css: 'float: right', description: '要素を右側にフロートする' },
				{ name: 'float-none', css: 'float: none', description: 'フロートを解除する' },
				{
					name: 'float-start',
					css: 'float: inline-start',
					description: '書字方向の開始側にフロート（論理プロパティ）'
				},
				{
					name: 'float-end',
					css: 'float: inline-end',
					description: '書字方向の終了側にフロート（論理プロパティ）'
				}
			]
		},
		{
			title: 'Box Sizing',
			classes: [
				{
					name: 'box-border',
					css: 'box-sizing: border-box',
					description: 'padding と border を width / height に含める（推奨）'
				},
				{
					name: 'box-content',
					css: 'box-sizing: content-box',
					description: 'padding と border を width / height の外側に追加する'
				}
			]
		},
		{
			title: 'Object Fit',
			classes: [
				{
					name: 'object-contain',
					css: 'object-fit: contain',
					description: 'アスペクト比を保ったまま要素内に収める'
				},
				{
					name: 'object-cover',
					css: 'object-fit: cover',
					description: 'アスペクト比を保ったまま要素を覆う（はみ出しはクリップ）'
				},
				{
					name: 'object-fill',
					css: 'object-fit: fill',
					description: '要素を引き伸ばして全体を埋める'
				},
				{
					name: 'object-none',
					css: 'object-fit: none',
					description: '画像を元のサイズのまま表示する'
				},
				{
					name: 'object-scale-down',
					css: 'object-fit: scale-down',
					description: 'none か contain の小さい方を適用する'
				}
			]
		},
		{
			title: 'Object Position',
			classes: [
				{ name: 'object-top', css: 'object-position: top', description: '上寄せ' },
				{ name: 'object-bottom', css: 'object-position: bottom', description: '下寄せ' },
				{ name: 'object-center', css: 'object-position: center', description: '中央揃え' },
				{ name: 'object-left', css: 'object-position: left', description: '左寄せ' },
				{ name: 'object-right', css: 'object-position: right', description: '右寄せ' },
				{
					name: 'object-left-top',
					css: 'object-position: left top',
					description: '左上'
				},
				{
					name: 'object-right-top',
					css: 'object-position: right top',
					description: '右上'
				},
				{
					name: 'object-left-bottom',
					css: 'object-position: left bottom',
					description: '左下'
				},
				{
					name: 'object-right-bottom',
					css: 'object-position: right bottom',
					description: '右下'
				}
			]
		},
		{
			title: 'Aspect Ratio',
			classes: [
				{
					name: 'aspect-auto',
					css: 'aspect-ratio: auto',
					description: '自然なアスペクト比を使用する'
				},
				{
					name: 'aspect-square',
					css: 'aspect-ratio: 1 / 1',
					description: '正方形（1:1）のアスペクト比'
				},
				{
					name: 'aspect-video',
					css: 'aspect-ratio: 16 / 9',
					description: 'ワイドスクリーン（16:9）のアスペクト比'
				}
			]
		}
	]
};

export default layout;
