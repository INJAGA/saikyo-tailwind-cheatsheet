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
					description: 'ブロック要素として表示。幅いっぱいに広がる',
					example: `<span class="block bg-blue-100 text-blue-800 rounded p-2 text-sm text-center">block: 幅いっぱい</span>
<span class="block bg-blue-50 text-blue-700 rounded p-2 text-sm text-center">block: 幅いっぱい</span>`,
					points: [
						'デフォルトで親要素の幅いっぱいに広がる。span や a など inline 要素を block に変えるときに使う',
						'width / height / margin / padding がすべて有効になる',
						'縦方向（ブロック軸）に順番に積み重なる'
					]
				},
				{
					name: 'inline-block',
					css: 'display: inline-block',
					description: 'インライン配置だが幅・高さ・余白を指定できる',
					example: `<div class="p-2">
  <span class="inline-block bg-blue-500 text-white rounded px-4 py-2 text-sm font-bold">A</span>
  <span class="inline-block bg-rose-400 text-white rounded px-4 py-2 text-sm font-bold">B</span>
  <span class="inline-block bg-emerald-400 text-white rounded px-4 py-2 text-sm font-bold">C</span>
  <span class="text-sm text-gray-500 align-middle"> ← テキストと同じ行</span>
</div>`,
					points: [
						'横方向にテキストのように並びながら、width / height が指定できる',
						'block と違い、自動的に幅いっぱいに広がらない（コンテンツ幅になる）',
						'ボタンやバッジなど「横並び＋サイズ指定」が必要な要素に最適'
					]
				},
				{
					name: 'inline',
					css: 'display: inline',
					description: 'テキストのように行内に配置される',
					example: `<p class="p-2 text-sm text-gray-700">
  テキストに
  <span class="inline bg-yellow-200 text-yellow-800 px-1 rounded font-bold">inline A</span>
  続き
  <span class="inline bg-blue-200 text-blue-800 px-1 rounded font-bold">inline B</span>
  が自然に混ざる
</p>`,
					points: [
						'width / height の指定は無視され、コンテンツ幅だけを占有する',
						'上下の margin / padding は隣接要素のレイアウトに影響しない',
						'テキストの強調（span、em、strong）やリンクに使われるデフォルト表示モード'
					]
				},
				{
					name: 'flex',
					css: 'display: flex',
					description: 'フレックスコンテナ。子要素を横並びにする',
					example: `<div class="flex gap-3 p-2">
  <div class="bg-blue-500 text-white rounded p-3 text-sm font-bold">A</div>
  <div class="bg-rose-400 text-white rounded p-3 text-sm font-bold">B</div>
  <div class="bg-emerald-400 text-white rounded p-3 text-sm font-bold">C</div>
</div>`,
					points: [
						'子要素はデフォルトで横一列（row 方向）に並ぶ。flex-col で縦方向に切り替え可能',
						'justify-* で主軸方向（横）、items-* で交差軸方向（縦）の揃えを独立して制御できる',
						'gap-* で子要素間のすき間を指定できる（margin 不要で管理しやすい）'
					]
				},
				{
					name: 'inline-flex',
					css: 'display: inline-flex',
					description: 'インライン配置のフレックスコンテナ',
					example: `<p class="p-2 text-sm text-gray-700">
  文章の中に
  <span class="inline-flex items-center gap-1 bg-blue-100 text-blue-700 rounded px-2 py-0.5 text-xs font-bold">
    <span class="w-2 h-2 rounded-full bg-blue-500"></span>
    タグ
  </span>
  のように埋め込める
</p>`,
					points: [
						'flex の機能を持ちながら、要素自体はテキストと同じ行内に配置される',
						'アイコン付きバッジやインラインチップなど、文中に埋め込むコンポーネントに最適',
						'flex との違いは外側の配置のみ。内部の flex 挙動は同じ'
					]
				},
				{
					name: 'grid',
					css: 'display: grid',
					description: 'グリッドコンテナ。子要素をグリッド配置する',
					example: `<div class="grid grid-cols-3 gap-2 p-2">
  <div class="bg-blue-500 text-white rounded p-2 text-sm font-bold text-center">1</div>
  <div class="bg-rose-400 text-white rounded p-2 text-sm font-bold text-center">2</div>
  <div class="bg-emerald-400 text-white rounded p-2 text-sm font-bold text-center">3</div>
  <div class="bg-blue-300 text-white rounded p-2 text-sm font-bold text-center">4</div>
  <div class="bg-rose-300 text-white rounded p-2 text-sm font-bold text-center">5</div>
  <div class="bg-emerald-300 text-white rounded p-2 text-sm font-bold text-center">6</div>
</div>`,
					points: [
						'grid-cols-{n} で列数を指定する。行数は子要素の数に応じて自動で増える',
						'flex と異なり、行・列の両軸を同時に制御できる二次元レイアウト',
						'col-span-* や row-span-* で特定セルを複数列・行にまたがらせることができる'
					]
				},
				{
					name: 'inline-grid',
					css: 'display: inline-grid',
					description: 'インライン配置のグリッドコンテナ',
					example: `<p class="p-2 text-sm text-gray-700">
  文章の中に
  <span class="inline-grid grid-cols-2 gap-0.5 bg-gray-100 rounded p-0.5">
    <span class="bg-blue-400 text-white text-xs px-1.5 py-0.5 rounded text-center">1</span>
    <span class="bg-rose-400 text-white text-xs px-1.5 py-0.5 rounded text-center">2</span>
    <span class="bg-emerald-400 text-white text-xs px-1.5 py-0.5 rounded text-center">3</span>
    <span class="bg-amber-400 text-white text-xs px-1.5 py-0.5 rounded text-center">4</span>
  </span>
  が埋め込まれる
</p>`,
					points: [
						'grid の機能を持ちながら、要素自体はテキストと同じ行内に配置される',
						'inline-flex 同様、文中に複数セルを持つコンポーネントを埋め込む場面で使う',
						'実用例は少なく、通常は flex または inline-flex で代替できる'
					]
				},
				{
					name: 'flow-root',
					css: 'display: flow-root',
					description: '新しいブロック整形コンテキストを生成。内部のフロートを包含する',
					example: `<div class="flex flex-col gap-3 p-2">
  <div>
    <p class="text-xs text-gray-500 font-bold mb-1">❌ flow-root なし（親の背景が消える）</p>
    <div class="bg-rose-100 rounded p-2 border border-rose-200">
      <div class="float-left w-10 h-10 bg-rose-400 rounded mr-2"></div>
      <div class="float-left w-10 h-10 bg-rose-300 rounded mr-2"></div>
    </div>
  </div>
  <div>
    <p class="text-xs text-gray-500 font-bold mb-1">✅ flow-root あり（背景が正しく表示）</p>
    <div class="flow-root bg-blue-100 rounded p-2 border border-blue-200">
      <div class="float-left w-10 h-10 bg-blue-500 rounded mr-2"></div>
      <div class="float-left w-10 h-10 bg-blue-400 rounded mr-2"></div>
    </div>
  </div>
</div>`,
					points: [
						'内部に float 要素があっても親が高さを持つ（clearfix の現代的代替）',
						'新しいブロック整形コンテキスト（BFC）を生成するため、margin の collapse も防ぐ',
						'overflow: hidden と同様の効果だが、コンテンツがクリップされないのが利点'
					]
				},
				{
					name: 'contents',
					css: 'display: contents',
					description: '要素自体は描画されず、子要素のみが直接表示される',
					example: `<div class="flex gap-3 p-2 bg-gray-100 rounded">
  <div class="contents">
    <div class="bg-blue-500 text-white rounded p-3 text-sm font-bold">A</div>
    <div class="bg-rose-400 text-white rounded p-3 text-sm font-bold">B</div>
  </div>
  <div class="bg-emerald-400 text-white rounded p-3 text-sm font-bold">C</div>
</div>`,
					points: [
						'contents を付けた要素はボックスとして描画されず、その子要素が直接親のフローに参加する',
						'flex / grid の子要素にラッパー div を使いたいが、レイアウトに影響させたくない場合に有効',
						'background / border / padding などは描画されないため注意'
					]
				},
				{
					name: 'list-item',
					css: 'display: list-item',
					description: 'リストアイテムとして表示（マーカー付き）',
					example: `<div class="pl-6 py-2">
  <div class="list-item list-disc text-sm text-gray-700 py-0.5">リストアイテム 1（disc マーカー）</div>
  <div class="list-item list-disc text-sm text-gray-700 py-0.5">リストアイテム 2</div>
  <div class="list-item list-none text-sm text-gray-500 py-0.5">リストアイテム 3（list-none でマーカーなし）</div>
</div>`,
					points: [
						'li 要素と同じ表示になる。div や span を擬似リストアイテムにするときに使う',
						'list-disc / list-decimal などと組み合わせてマーカーの種類を指定できる',
						'マーカーが見えるよう、親要素か自身に pl-* で左余白を確保すること'
					]
				},
				{
					name: 'table',
					css: 'display: table',
					description: 'テーブルとして表示',
					example: `<div class="table w-full text-sm">
  <div class="table-header-group bg-gray-200 text-gray-700 font-bold">
    <div class="table-row">
      <div class="table-cell border border-gray-300 px-3 py-1">クラス</div>
      <div class="table-cell border border-gray-300 px-3 py-1">CSS 値</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell border border-gray-300 px-3 py-1 text-gray-600">flex</div>
      <div class="table-cell border border-gray-300 px-3 py-1 text-gray-600">display: flex</div>
    </div>
    <div class="table-row bg-gray-50">
      <div class="table-cell border border-gray-300 px-3 py-1 text-gray-600">grid</div>
      <div class="table-cell border border-gray-300 px-3 py-1 text-gray-600">display: grid</div>
    </div>
  </div>
</div>`,
					points: [
						'div を使って CSS テーブルを構築できる。table-row / table-cell と組み合わせて使う',
						'HTML の table 要素が使えない場面（フォームレイアウト等）での代替手段',
						'セルは自動的に同じ高さになり、列幅も内容に合わせて調整される'
					]
				},
				{
					name: 'inline-table',
					css: 'display: inline-table',
					description: 'インライン配置のテーブル',
					example: `<p class="p-2 text-sm text-gray-700">
  テキストの中に
  <span class="inline-table border border-gray-300 text-xs mx-1">
    <span class="table-row">
      <span class="table-cell border border-gray-300 px-1 py-0.5 bg-gray-100">A</span>
      <span class="table-cell border border-gray-300 px-1 py-0.5">B</span>
    </span>
  </span>
  が入ります
</p>`,
					points: [
						'table と同じ表示だが、ブロックではなくインライン要素として配置される',
						'テキスト行の中にミニテーブルを埋め込むときに使う（実用例は稀）',
						'通常の table の代わりに使う場面はほぼなく、flex / grid での代替が主流'
					]
				},
				{
					name: 'table-caption',
					css: 'display: table-caption',
					description: 'テーブルキャプション（caption 要素相当）',
					example: `<div class="table w-full text-sm">
  <div class="table-caption text-xs text-gray-500 text-center py-1">表 1: クラス一覧</div>
  <div class="table-row bg-gray-100">
    <div class="table-cell border border-gray-300 px-3 py-1 font-bold text-gray-700">クラス</div>
    <div class="table-cell border border-gray-300 px-3 py-1 font-bold text-gray-700">効果</div>
  </div>
  <div class="table-row">
    <div class="table-cell border border-gray-300 px-3 py-1 text-gray-600">flex</div>
    <div class="table-cell border border-gray-300 px-3 py-1 text-gray-600">横並び</div>
  </div>
</div>`,
					points: [
						'テーブルの外側に caption 要素として配置される。通常はテーブルの上に表示',
						'caption-side CSS プロパティで上下の位置を変更できる',
						'HTML の caption 要素と同じ役割。アクセシビリティ向上にも使われる'
					]
				},
				{
					name: 'table-cell',
					css: 'display: table-cell',
					description: 'テーブルセル（td / th 相当）として表示',
					example: `<div class="table w-full text-sm">
  <div class="table-row">
    <div class="table-cell border border-gray-300 px-3 py-2 bg-blue-50 text-blue-700 font-bold align-middle">セル A</div>
    <div class="table-cell border border-gray-300 px-3 py-2 text-gray-600 align-middle">セル B（高さは自動で揃う）</div>
    <div class="table-cell border border-gray-300 px-3 py-2 text-gray-600 align-bottom">セル C（align-bottom）</div>
  </div>
</div>`,
					points: [
						'同じ行のセルは自動的に同じ高さになる。align-top / align-middle / align-bottom で垂直位置を指定',
						'セル内のコンテンツが少なくても、最も高いセルに合わせて高さが調整される',
						'flex / grid と異なり、列幅はすべてのセルの内容を考慮して自動計算される'
					]
				},
				{
					name: 'table-column',
					css: 'display: table-column',
					description: 'テーブル列（col 相当）として表示',
					example: `<div class="table w-full text-sm">
  <div class="table-row bg-gray-200">
    <div class="table-cell border border-gray-300 px-3 py-1 font-bold text-gray-700 w-32">固定幅列 (w-32)</div>
    <div class="table-cell border border-gray-300 px-3 py-1 font-bold text-gray-700">可変幅列</div>
  </div>
  <div class="table-row">
    <div class="table-cell border border-gray-300 px-3 py-1 text-gray-600">短いテキスト</div>
    <div class="table-cell border border-gray-300 px-3 py-1 text-gray-600">長いテキストが入ると列幅が広がります</div>
  </div>
</div>`,
					points: [
						'col 要素と同じ役割。テーブル全体の列に幅や背景色を一括で適用できる',
						'単体では視覚的に表示されない。table-column-group と組み合わせて使う',
						'実用性は低く、列への一括スタイル適用は thead の th に直接指定する方が一般的'
					]
				},
				{
					name: 'table-header-group',
					css: 'display: table-header-group',
					description: 'テーブルヘッダーグループ（thead 相当）',
					example: `<div class="table w-full text-sm">
  <div class="table-header-group bg-blue-500 text-white font-bold">
    <div class="table-row">
      <div class="table-cell px-3 py-2">名前</div>
      <div class="table-cell px-3 py-2">値</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">flex</div>
      <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">display: flex</div>
    </div>
    <div class="table-row bg-gray-50">
      <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">grid</div>
      <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">display: grid</div>
    </div>
  </div>
</div>`,
					points: [
						'thead 要素と同じ役割。印刷時に各ページの先頭に繰り返し表示される',
						'table-row-group（tbody 相当）と組み合わせて使い、ヘッダー行を視覚的に区別する',
						'位置は DOM の順序に関わらず、常にテーブルの先頭に表示される'
					]
				},
				{
					name: 'table-footer-group',
					css: 'display: table-footer-group',
					description: 'テーブルフッターグループ（tfoot 相当）',
					example: `<div class="table w-full text-sm">
  <div class="table-header-group bg-gray-200 text-gray-700 font-bold">
    <div class="table-row">
      <div class="table-cell px-3 py-1">商品</div>
      <div class="table-cell px-3 py-1">価格</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell border-t border-gray-200 px-3 py-1 text-gray-600">商品 A</div>
      <div class="table-cell border-t border-gray-200 px-3 py-1 text-gray-600">¥1,000</div>
    </div>
  </div>
  <div class="table-footer-group bg-gray-100 font-bold text-gray-700">
    <div class="table-row">
      <div class="table-cell border-t border-gray-300 px-3 py-1">合計</div>
      <div class="table-cell border-t border-gray-300 px-3 py-1">¥1,000</div>
    </div>
  </div>
</div>`,
					points: [
						'tfoot 要素と同じ役割。DOM の順序に関わらず、常にテーブルの末尾に表示される',
						'印刷時は各ページの末尾に繰り返し表示される',
						'合計行や注釈行をテーブルの論理的な末尾に配置するために使う'
					]
				},
				{
					name: 'table-row-group',
					css: 'display: table-row-group',
					description: 'テーブル行グループ（tbody 相当）',
					example: `<div class="table w-full text-sm">
  <div class="table-header-group bg-gray-200 text-gray-700 font-bold">
    <div class="table-row">
      <div class="table-cell px-3 py-1">名前</div>
      <div class="table-cell px-3 py-1">説明</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row hover:bg-blue-50">
      <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">flex</div>
      <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">横並びレイアウト</div>
    </div>
    <div class="table-row hover:bg-blue-50">
      <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">grid</div>
      <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">グリッドレイアウト</div>
    </div>
  </div>
</div>`,
					points: [
						'tbody 要素と同じ役割。テーブルのデータ行をグループ化する',
						'table-header-group や table-footer-group と組み合わせて使う',
						'1 つのテーブルに複数の table-row-group を持てる（複数 tbody と同様）'
					]
				},
				{
					name: 'table-row',
					css: 'display: table-row',
					description: 'テーブル行（tr 相当）として表示',
					example: `<div class="table w-full text-sm">
  <div class="table-row bg-gray-200">
    <div class="table-cell px-3 py-1 font-bold text-gray-700">ヘッダー 1</div>
    <div class="table-cell px-3 py-1 font-bold text-gray-700">ヘッダー 2</div>
  </div>
  <div class="table-row hover:bg-blue-50">
    <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">セル A1</div>
    <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">セル A2</div>
  </div>
  <div class="table-row hover:bg-blue-50">
    <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">セル B1</div>
    <div class="table-cell border-t border-gray-200 px-3 py-1.5 text-gray-600">セル B2</div>
  </div>
</div>`,
					points: [
						'tr 要素と同じ役割。table-cell をまとめる横一行の単位',
						'hover:bg-* などでホバー時の行ハイライトを実装できる',
						'行の高さはすべての table-cell の最大高さに自動で揃う'
					]
				},
				{
					name: 'hidden',
					css: 'display: none',
					description: '要素を非表示にする（レイアウトも占有しない）',
					example: `<div class="flex gap-3 p-2 items-center">
  <div class="bg-blue-500 text-white rounded p-3 text-sm font-bold">表示</div>
  <div class="hidden bg-rose-400 text-white rounded p-3 text-sm font-bold">非表示（見えない）</div>
  <div class="bg-emerald-400 text-white rounded p-3 text-sm font-bold">表示</div>
</div>`,
					points: [
						'display: none と同じ。要素はレンダリングされず、スペースも占有しない',
						'visibility: hidden（invisible）との違い：hidden はスペースも消える、invisible はスペースは残る',
						'レスポンシブ制御で md:block と組み合わせ「モバイルで非表示、PC で表示」などが定番用法'
					]
				},
				{
					name: 'sr-only',
					css: 'position: absolute; width: 1px; height: 1px; ...',
					description: 'スクリーンリーダー専用（視覚的に非表示）',
					example: `<div class="p-3">
  <button class="bg-blue-500 text-white rounded px-4 py-2 text-sm font-bold">
    <span class="sr-only">メニューを開く</span>
    ☰
  </button>
  <p class="text-xs text-gray-500 mt-2">視覚的にはアイコンのみ表示。スクリーンリーダーは「メニューを開く」と読み上げる。</p>
</div>`,
					points: [
						'視覚的には完全に非表示だが、スクリーンリーダーはテキストを読み上げる',
						'アイコンボタンの説明ラベル、フォームのエラーメッセージなどアクセシビリティ向上に使う',
						'display: none や visibility: hidden と異なり、支援技術からは認識される'
					]
				},
				{
					name: 'not-sr-only',
					css: 'position: static; width: auto; ...',
					description: 'sr-only を解除して通常表示に戻す',
					example: `<span class="not-sr-only text-sm text-blue-600">このテキストは表示される（not-sr-only）</span>`,
					points: [
						'sr-only を条件付きで解除するときに使う。例: focus:not-sr-only でフォーカス時だけ表示',
						'「スキップナビゲーション」リンクなど、通常は非表示だがフォーカス時に表示する UI に有効',
						'単独で使うことはほぼなく、sr-only とセットでレスポンシブ / インタラクション制御に使う'
					]
				}
			]
		},
		{
			title: 'Position',
			classes: [
				{
					name: 'static',
					css: 'position: static',
					description: 'デフォルトの配置。top / right / bottom / left は無効',
					example: `<div class="p-3">
  <div class="static bg-gray-100 rounded p-3 text-sm text-gray-700 border border-gray-200">
    <span class="text-xs font-mono text-gray-400 block mb-1">position: static（デフォルト）</span>
    top / left / right / bottom を指定しても無視される
  </div>
</div>`,
					points: [
						'すべての要素のデフォルト値。通常フローに従って配置される',
						'top / right / bottom / left / z-index は無効になる',
						'absolute の子要素の基準にはならない。基準にしたい場合は relative を使う'
					]
				},
				{
					name: 'relative',
					css: 'position: relative',
					description: '通常フローに従い、オフセット指定でずらせる',
					example: `<div class="relative bg-gray-100 rounded p-4 h-24">
  <span class="text-sm text-gray-500">relative の親要素（基準点）</span>
  <div class="absolute top-2 right-2 bg-blue-500 text-white rounded px-2 py-1 text-xs font-bold">
    absolute の子
  </div>
</div>`,
					points: [
						'absolute 子要素の配置基準になる。absolute を使うときは必ず親に relative を付ける',
						'top / left / right / bottom で要素自身を通常位置からずらすこともできる',
						'z-index を使う場合も、relative / absolute / fixed のいずれかが必要'
					]
				},
				{
					name: 'absolute',
					css: 'position: absolute',
					description: '最も近い position 祖先を基準に絶対配置',
					example: `<div class="relative bg-gray-100 rounded p-4 h-28">
  <span class="text-sm text-gray-500">relative の親要素</span>
  <div class="absolute top-3 right-3 bg-blue-500 text-white rounded px-3 py-1 text-xs font-bold">右上</div>
  <div class="absolute bottom-3 left-3 bg-rose-400 text-white rounded px-3 py-1 text-xs font-bold">左下</div>
  <div class="absolute bottom-3 right-3 bg-emerald-400 text-white rounded px-3 py-1 text-xs font-bold">右下</div>
</div>`,
					points: [
						'通常フローから外れるため、他の要素のレイアウトに影響を与えない',
						'基準は「最も近い position: relative / absolute / fixed / sticky の祖先」。なければビューポート',
						'top-0 right-0 などで角に貼り付けるバッジ・アイコンのオーバーレイに最適'
					]
				},
				{
					name: 'fixed',
					css: 'position: fixed',
					description: 'ビューポートを基準に固定配置（スクロールしても動かない）',
					example: `<div class="relative h-32 bg-gray-100 rounded-lg border-2 border-gray-400 overflow-hidden">
  <div class="absolute inset-x-0 top-0 text-center py-0.5 bg-gray-300 text-xs text-gray-600 font-bold tracking-wide">VIEWPORT</div>
  <div class="absolute inset-x-0 bottom-0 overflow-hidden h-24 px-3 pt-2">
    <p class="text-xs text-gray-400">スクロールするコンテンツ...</p>
    <p class="text-xs text-gray-300 mt-1">コンテンツ 2</p>
    <p class="text-xs text-gray-300">コンテンツ 3</p>
  </div>
  <div class="absolute top-5 right-3 bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow">
    fixed: 常にここ
  </div>
  <div class="absolute bottom-3 right-3 text-gray-400 text-xs">↑ スクロールしても動かない</div>
</div>`,
					points: [
						'ビューポート（画面全体）を基準に配置。スクロールしても常に同じ位置に留まる',
						'ナビゲーションバー、フローティングアクションボタン、チャットウィジェットに使われる',
						'通常フローから外れるため、他要素に top: 固定高さ 分の padding を付けて重なりを防ぐ'
					]
				},
				{
					name: 'sticky',
					css: 'position: sticky',
					description: 'スクロール中は relative、閾値に達すると fixed に切り替わる',
					example: `<div class="h-36 overflow-y-auto bg-gray-50 rounded border border-gray-200">
  <div class="sticky top-0 bg-blue-500 text-white px-4 py-2 text-sm font-bold flex items-center justify-between">
    <span>sticky ヘッダー</span>
    <span class="text-xs font-normal opacity-75">↓ スクロールしてみて</span>
  </div>
  <div class="px-4 pt-2 pb-4 flex flex-col gap-2">
    <p class="text-xs text-gray-500">コンテンツ 1</p>
    <p class="text-xs text-gray-500">コンテンツ 2</p>
    <p class="text-xs text-gray-500">コンテンツ 3</p>
    <p class="text-xs text-gray-500">コンテンツ 4</p>
    <p class="text-xs text-gray-500">コンテンツ 5 — ヘッダーは top-0 に固定されたまま</p>
  </div>
</div>`,
					points: [
						'top-0 など閾値を必ず指定すること。指定なしでは fixed にならない',
						'親要素のスクロールコンテナ内でのみ有効。overflow: hidden の親があると機能しない',
						'テーブルの見出し行やサイドバーのナビゲーションによく使われる'
					]
				}
			]
		},
		{
			title: 'Z-Index',
			classes: [
				{
					name: 'z-0',
					css: 'z-index: 0',
					description: 'z-index を 0 に設定',
					example: `<div class="relative h-20 p-2">
  <div class="absolute top-2 left-2 w-20 h-14 bg-blue-500 text-white text-xs flex items-center justify-center rounded font-bold z-10">z-10</div>
  <div class="absolute top-5 left-8 w-20 h-14 bg-gray-400 text-white text-xs flex items-center justify-center rounded font-bold z-0">z-0（手前）</div>
</div>`,
					points: [
						'z-index の基準値。重なり順を明示的にリセットしたいときに使う',
						'z-index を指定するには position が static 以外（relative / absolute / fixed / sticky）である必要がある',
						'同じ z-index の要素は DOM の後ろにある方が手前に表示される'
					]
				},
				{
					name: 'z-10',
					css: 'z-index: 10',
					description: 'z-index を 10 に設定',
					example: `<div class="relative h-20 p-2">
  <div class="absolute top-2 left-2 w-20 h-14 bg-gray-400 text-white text-xs flex items-center justify-center rounded font-bold z-0">z-0</div>
  <div class="absolute top-5 left-8 w-20 h-14 bg-blue-500 text-white text-xs flex items-center justify-center rounded font-bold z-10">z-10（手前）</div>
</div>`,
					points: [
						'ドロップダウン、ツールチップなど小さなオーバーレイ UI によく使われる値',
						'Tailwind の z-index スケールは 0 / 10 / 20 / 30 / 40 / 50 の 6 段階',
						'z-index は同一スタッキングコンテキスト内の要素間でのみ比較される'
					]
				},
				{
					name: 'z-20',
					css: 'z-index: 20',
					description: 'z-index を 20 に設定',
					example: `<div class="relative h-20 p-2">
  <div class="absolute top-2 left-2 w-20 h-14 bg-blue-500 text-white text-xs flex items-center justify-center rounded font-bold z-10">z-10</div>
  <div class="absolute top-5 left-8 w-20 h-14 bg-rose-500 text-white text-xs flex items-center justify-center rounded font-bold z-20">z-20（手前）</div>
</div>`,
					points: [
						'z-10 の要素より手前に表示したい場合に使う',
						'モーダルのバックドロップ（z-20）とモーダル本体（z-30）のような段階的な指定が一般的',
						'数値が大きいほど手前に表示される'
					]
				},
				{
					name: 'z-30',
					css: 'z-index: 30',
					description: 'z-index を 30 に設定',
					example: `<div class="relative h-20 p-2">
  <div class="absolute top-2 left-2 w-20 h-14 bg-rose-500 text-white text-xs flex items-center justify-center rounded font-bold z-20">z-20</div>
  <div class="absolute top-5 left-8 w-20 h-14 bg-emerald-500 text-white text-xs flex items-center justify-center rounded font-bold z-30">z-30（手前）</div>
</div>`,
					points: [
						'モーダルウィンドウ本体など、バックドロップより手前の UI によく使われる',
						'スタッキングコンテキストを新たに作る要素（transform / opacity / filter 付き）はその子に閉じた z-index になる',
						'z-30 以上は「重要な前面 UI」として設計するとわかりやすい'
					]
				},
				{
					name: 'z-40',
					css: 'z-index: 40',
					description: 'z-index を 40 に設定',
					example: `<div class="relative h-20 p-2">
  <div class="absolute top-2 left-2 w-20 h-14 bg-emerald-500 text-white text-xs flex items-center justify-center rounded font-bold z-30">z-30</div>
  <div class="absolute top-5 left-8 w-20 h-14 bg-amber-500 text-white text-xs flex items-center justify-center rounded font-bold z-40">z-40（手前）</div>
</div>`,
					points: [
						'ページヘッダー・サイドバーなど、常に手前に表示したい UI に使う',
						'z-50 を最上位に残しつつ、その下の階層を管理するのに便利な値',
						'z-index の乱用は管理が難しくなる。設計段階で階層を定義しておくとよい'
					]
				},
				{
					name: 'z-50',
					css: 'z-index: 50',
					description: 'z-index を 50 に設定',
					example: `<div class="relative h-20 p-2">
  <div class="absolute top-2 left-2 w-20 h-14 bg-amber-500 text-white text-xs flex items-center justify-center rounded font-bold z-40">z-40</div>
  <div class="absolute top-5 left-8 w-20 h-14 bg-purple-500 text-white text-xs flex items-center justify-center rounded font-bold z-50">z-50（手前）</div>
</div>`,
					points: [
						'Tailwind の標準スケールで最も大きい値。トースト通知など最前面の UI に使う',
						'さらに上位が必要な場合は z-[100] のような任意値を使う',
						'z-50 を多用すると階層が崩れる。本当に最前面に必要なものだけに使う'
					]
				},
				{
					name: 'z-auto',
					css: 'z-index: auto',
					description: 'z-index を auto に設定（スタッキングコンテキストを作らない）',
					example: `<div class="relative h-20 p-2">
  <div class="absolute top-2 left-2 w-20 h-14 bg-gray-400 text-white text-xs flex items-center justify-center rounded font-bold z-auto">z-auto</div>
  <div class="absolute top-5 left-8 w-20 h-14 bg-blue-500 text-white text-xs flex items-center justify-center rounded font-bold z-10">z-10（手前）</div>
</div>`,
					points: [
						'z-index: auto は新しいスタッキングコンテキストを作らない点が z-0 との大きな違い',
						'親のスタッキングコンテキストに属し、DOM の順序で重なりが決まる',
						'明示的に z-index を指定しない場合のデフォルト値'
					]
				},
				{
					name: '-z-10',
					css: 'z-index: -10',
					description: 'z-index を -10 に設定（要素を背面に送る）',
					example: `<div class="relative h-20 flex items-center justify-center">
  <div class="relative z-0 w-28 h-14 bg-blue-500 text-white text-xs flex items-center justify-center rounded font-bold">z-0（手前）</div>
  <div class="relative -z-10 -ml-8 w-28 h-14 bg-rose-400 text-white text-xs flex items-center justify-center rounded font-bold">-z-10（背面）</div>
</div>`,
					points: [
						'要素を通常フローより背面に送る。背景として機能する装飾要素に使う',
						'親要素がスタッキングコンテキストを持つ場合、その親の背面には回れないことに注意',
						'疑似要素（before: / after:）に -z-10 を付けてオーバーレイ効果を作ることが多い'
					]
				}
			]
		},
		{
			title: 'Overflow',
			classes: [
				{
					name: 'overflow-auto',
					css: 'overflow: auto',
					description: 'コンテンツが溢れた場合のみスクロールバーを表示',
					example: `<div class="overflow-auto w-full h-20 bg-gray-100 rounded border border-gray-300 p-2">
  <div class="w-96 whitespace-nowrap text-xs text-gray-600">← 長いコンテンツ →</div>
  <p class="text-xs text-gray-500 mt-1">行 2</p>
  <p class="text-xs text-gray-500">行 3</p>
  <p class="text-xs text-gray-500">行 4（overflow-auto で制御）</p>
  <p class="text-xs text-gray-500">行 5（見えない可能性）</p>
</div>`,
					points: [
						'コンテンツが収まっている間はスクロールバーを非表示にし、溢れたときだけ表示する',
						'overflow-scroll との違いはスクロールバーが常時表示か否か。overflow-auto が通常の選択肢',
						'縦横どちらにも適用される。方向を限定したい場合は overflow-x-auto / overflow-y-auto を使う'
					]
				},
				{
					name: 'overflow-hidden',
					css: 'overflow: hidden',
					description: '溢れたコンテンツを非表示にする',
					example: `<div class="overflow-hidden w-full h-16 bg-gray-100 rounded border border-gray-300 p-2">
  <div class="whitespace-nowrap text-xs text-gray-600">← overflow-hidden: この長いテキストはコンテナ外でクリップされます →</div>
  <p class="text-xs text-gray-500 mt-1">縦方向もクリップ</p>
  <p class="text-xs text-gray-400">この行は見えない</p>
  <p class="text-xs text-gray-400">この行も見えない</p>
</div>`,
					points: [
						'溢れたコンテンツを完全に非表示にする。スクロールもできない',
						'rounded-* と組み合わせて子要素のはみ出しをクリップするのに頻繁に使われる（角丸から画像がはみ出すのを防ぐ）',
						'float 要素を包含する clearfix 代わりにも使えるが、flow-root が現代的な選択肢'
					]
				},
				{
					name: 'overflow-clip',
					css: 'overflow: clip',
					description: '溢れたコンテンツをクリップする（スクロールなし）',
					example: `<div class="overflow-clip w-full h-16 bg-gray-100 rounded border border-gray-300 p-2">
  <div class="whitespace-nowrap text-xs text-gray-600">← overflow-clip: クリップ（JS スクロールも不可）→</div>
  <p class="text-xs text-gray-500 mt-1">overflow-hidden と見た目は同じだが挙動が異なる</p>
  <p class="text-xs text-gray-400">この行は見えない</p>
</div>`,
					points: [
						'overflow-hidden と視覚的には同じだが、スクロールコンテナにはならない点が異なる',
						'JavaScript で scrollTop を操作してもスクロールしない。純粋なクリップのみ行う',
						'パフォーマンスが hidden より良い場合があるが、ブラウザサポートを確認すること'
					]
				},
				{
					name: 'overflow-visible',
					css: 'overflow: visible',
					description: '溢れたコンテンツをそのまま表示する（デフォルト）',
					example: `<div class="overflow-visible h-10 bg-blue-50 rounded border border-blue-200 p-2 mb-8">
  <div class="whitespace-nowrap text-xs text-blue-600">← overflow-visible: コンテナを超えても表示されます →</div>
</div>`,
					points: [
						'デフォルト値。コンテナの境界を超えてコンテンツが描画される',
						'他の overflow 値を一度設定した後、上書きでデフォルトに戻すときに使う',
						'ツールチップやドロップダウンが親要素からはみ出して表示される場合、祖先に overflow: visible が必要'
					]
				},
				{
					name: 'overflow-scroll',
					css: 'overflow: scroll',
					description: '常にスクロールバーを表示する',
					example: `<div class="overflow-scroll w-full h-20 bg-gray-100 rounded border border-gray-300 p-2">
  <div class="w-96 whitespace-nowrap text-xs text-gray-600">← 長いコンテンツ →</div>
  <p class="text-xs text-gray-500 mt-1">行 2</p>
  <p class="text-xs text-gray-500">行 3</p>
  <p class="text-xs text-gray-500">行 4（overflow-scroll で制御）</p>
  <p class="text-xs text-gray-500">行 5（見えない可能性）</p>
</div>`,
					points: [
						'コンテンツが収まっていても常にスクロールバーを表示する',
						'overflow-auto と異なりレイアウトが安定する（スクロールバーの出現でレイアウトがずれない）',
						'縦横両方向にスクロールバーが表示される。方向を限定したい場合は overflow-x-scroll / overflow-y-scroll を使う'
					]
				},
				{
					name: 'overflow-x-auto',
					css: 'overflow-x: auto',
					description: '水平方向のみ auto スクロール',
					example: `<div class="overflow-x-auto w-full h-16 bg-gray-100 rounded border border-gray-300 p-2">
  <div class="whitespace-nowrap text-xs text-gray-600">← overflow-x-auto: この長いテキストがコンテナを超えると水平方向にスクロールできます →</div>
  <p class="text-xs text-gray-500 mt-1">縦方向は通常通り</p>
</div>`,
					points: [
						'水平方向のみスクロール制御。縦方向は overflow: visible のまま',
						'横スクロールテーブルや横スクロールカードリストに使われる',
						'whitespace-nowrap と組み合わせるとコンテンツが折り返さず横にスクロールする'
					]
				},
				{
					name: 'overflow-x-hidden',
					css: 'overflow-x: hidden',
					description: '水平方向のみ溢れを非表示',
					example: `<div class="overflow-x-hidden w-full bg-gray-100 rounded border border-gray-300 p-2">
  <div class="whitespace-nowrap text-xs text-gray-600">← overflow-x-hidden: 横方向のはみ出しをクリップ →</div>
  <p class="text-xs text-gray-500 mt-1">縦方向は通常通り表示</p>
</div>`,
					points: [
						'水平方向のはみ出しのみ非表示にする',
						'スライダーやカルーセルの実装で、横方向のはみ出しを隠すのに使われる',
						'縦方向の overflow: visible と組み合わせられる（例: ドロップダウンが下にはみ出せる）'
					]
				},
				{
					name: 'overflow-x-clip',
					css: 'overflow-x: clip',
					description: '水平方向のみクリップ',
					example: `<div class="overflow-x-clip w-full bg-gray-100 rounded border border-gray-300 p-2">
  <div class="whitespace-nowrap text-xs text-gray-600">← overflow-x-clip: スクロール不可でクリップ →</div>
  <p class="text-xs text-gray-500 mt-1">縦方向は通常通り</p>
</div>`,
					points: [
						'overflow-x-hidden と視覚的には同じだが、スクロールコンテナを作らない',
						'JS でのスクロール操作も受け付けない純粋なクリップ',
						'横方向だけをクリップしたい場合の overflow-x-hidden の代替'
					]
				},
				{
					name: 'overflow-x-visible',
					css: 'overflow-x: visible',
					description: '水平方向のみ溢れを表示',
					example: `<div class="overflow-x-visible h-10 bg-blue-50 rounded border border-blue-200 p-2">
  <div class="whitespace-nowrap text-xs text-blue-600">← overflow-x-visible: 横にはみ出す →</div>
</div>`,
					points: [
						'水平方向のはみ出しをそのまま表示するデフォルト動作',
						'他の overflow-x 値を上書きしてデフォルトに戻すときに使う',
						'overflow-y に clip / hidden / scroll / auto を設定すると、overflow-x は visible にできない（自動で auto になる）'
					]
				},
				{
					name: 'overflow-x-scroll',
					css: 'overflow-x: scroll',
					description: '水平方向のみ常にスクロールバー',
					example: `<div class="overflow-x-scroll w-full h-16 bg-gray-100 rounded border border-gray-300 p-2">
  <div class="whitespace-nowrap text-xs text-gray-600">← overflow-x-scroll: この長いテキストがコンテナを超えると水平方向にスクロールできます →</div>
  <p class="text-xs text-gray-500 mt-1">縦方向は通常通り</p>
</div>`,
					points: [
						'水平スクロールバーを常に表示する',
						'overflow-x-auto との違いはコンテンツが収まっていてもスクロールバーが表示される点',
						'横スクロールテーブルなどでレイアウトの安定を優先する場合に使う'
					]
				},
				{
					name: 'overflow-y-auto',
					css: 'overflow-y: auto',
					description: '垂直方向のみ auto スクロール',
					example: `<div class="overflow-y-auto w-full h-16 bg-gray-100 rounded border border-gray-300 p-2">
  <p class="text-xs text-gray-600">overflow-y-auto: 垂直方向のスクロール制御</p>
  <p class="text-xs text-gray-500 mt-1">行 2</p>
  <p class="text-xs text-gray-500">行 3</p>
  <p class="text-xs text-gray-500">行 4（見えない）</p>
  <p class="text-xs text-gray-500">行 5（見えない）</p>
</div>`,
					points: [
						'垂直方向のみスクロール制御。コンテンツが溢れたときだけスクロールバーを表示',
						'モーダルやサイドバーの中身をスクロール可能にする定番の使い方',
						'高さ（h-* / max-h-*）を指定しないとスクロールが機能しないことに注意'
					]
				},
				{
					name: 'overflow-y-hidden',
					css: 'overflow-y: hidden',
					description: '垂直方向のみ溢れを非表示',
					example: `<div class="overflow-y-hidden w-full h-12 bg-gray-100 rounded border border-gray-300 p-2">
  <p class="text-xs text-gray-600">overflow-y-hidden: 縦方向のはみ出しを非表示</p>
  <p class="text-xs text-gray-400">この行は見えない</p>
  <p class="text-xs text-gray-400">この行も見えない</p>
</div>`,
					points: [
						'垂直方向のはみ出しのみ非表示にする',
						'テキストを一定行数で切り詰めるレイアウト（line-clamp と組み合わせる場合も）に使う',
						'アコーディオンやトランジションで高さをアニメーションする際にも使われる'
					]
				},
				{
					name: 'overflow-y-clip',
					css: 'overflow-y: clip',
					description: '垂直方向のみクリップ',
					example: `<div class="overflow-y-clip w-full h-12 bg-gray-100 rounded border border-gray-300 p-2">
  <p class="text-xs text-gray-600">overflow-y-clip: スクロール不可でクリップ</p>
  <p class="text-xs text-gray-400">この行は見えない</p>
</div>`,
					points: [
						'overflow-y-hidden と視覚的には同じだが、スクロールコンテナを作らない',
						'JS での scrollTop 操作も受け付けない',
						'overflow-x: visible と組み合わせることができる（hidden だと不可）'
					]
				},
				{
					name: 'overflow-y-visible',
					css: 'overflow-y: visible',
					description: '垂直方向のみ溢れを表示',
					example: `<div class="overflow-y-visible h-10 bg-blue-50 rounded border border-blue-200 p-2 mb-6">
  <p class="text-xs text-blue-600">overflow-y-visible: 縦方向にはみ出す</p>
  <p class="text-xs text-blue-400">↓ この行はコンテナ外に表示される</p>
</div>`,
					points: [
						'垂直方向のはみ出しをそのまま表示するデフォルト動作',
						'他の overflow-y 値を上書きしてデフォルトに戻すときに使う',
						'overflow-x に clip / hidden 系を設定すると overflow-y は visible にできない制限がある'
					]
				},
				{
					name: 'overflow-y-scroll',
					css: 'overflow-y: scroll',
					description: '垂直方向のみ常にスクロールバー',
					example: `<div class="overflow-y-scroll w-full h-16 bg-gray-100 rounded border border-gray-300 p-2">
  <p class="text-xs text-gray-600">overflow-y-scroll: 垂直方向のスクロール制御</p>
  <p class="text-xs text-gray-500 mt-1">行 2</p>
  <p class="text-xs text-gray-500">行 3</p>
  <p class="text-xs text-gray-500">行 4（見えない）</p>
  <p class="text-xs text-gray-500">行 5（見えない）</p>
</div>`,
					points: [
						'垂直スクロールバーを常に表示する',
						'overflow-y-auto との違いはコンテンツが収まっていてもスクロールバーが表示される点',
						'スクロールバーの出現によるレイアウトのガタつきを防ぎたい場合に使う'
					]
				}
			]
		},
		{
			title: 'Visibility',
			classes: [
				{
					name: 'visible',
					css: 'visibility: visible',
					description: '要素を表示する（デフォルト）',
					example: `<div class="flex gap-3 p-2 items-center">
  <div class="visible bg-blue-500 text-white rounded p-2 text-sm font-bold">visible（表示）</div>
  <div class="visible bg-emerald-400 text-white rounded p-2 text-sm font-bold">visible（表示）</div>
</div>`,
					points: [
						'すべての要素のデフォルト値。invisible / collapse を解除するときに使う',
						'display: block や opacity: 1 とは異なるプロパティ。hidden（display: none）とは別物',
						'子要素に invisible を使いつつ、特定の子を visible で再表示することができる'
					]
				},
				{
					name: 'invisible',
					css: 'visibility: hidden',
					description: '要素を非表示にする（レイアウトスペースは保持）',
					example: `<div class="flex gap-3 p-2 items-center">
  <div class="bg-blue-500 text-white rounded p-2 text-sm font-bold">表示</div>
  <div class="invisible bg-rose-400 text-white rounded p-2 text-sm font-bold">invisible（スペースは残る）</div>
  <div class="bg-emerald-400 text-white rounded p-2 text-sm font-bold">次の要素</div>
</div>`,
					points: [
						'hidden（display: none）との違い：invisible はスペースを保持したまま非表示になる',
						'ローディング中のプレースホルダーや、位置を維持しながら隠したい要素に使う',
						'スクリーンリーダーからも認識されなくなる点に注意（アクセシビリティ用途では sr-only を検討）'
					]
				},
				{
					name: 'collapse',
					css: 'visibility: collapse',
					description: 'テーブル行・列を折りたたむ（他要素は hidden と同様）',
					example: `<div class="table w-full text-sm">
  <div class="table-row bg-gray-200">
    <div class="table-cell px-3 py-1 font-bold text-gray-700">名前</div>
    <div class="table-cell px-3 py-1 font-bold text-gray-700">値</div>
  </div>
  <div class="table-row collapse">
    <div class="table-cell px-3 py-1 text-gray-600">非表示行（collapse）</div>
    <div class="table-cell px-3 py-1 text-gray-600">この行は折りたたまれる</div>
  </div>
  <div class="table-row">
    <div class="table-cell border-t border-gray-200 px-3 py-1 text-gray-600">表示行</div>
    <div class="table-cell border-t border-gray-200 px-3 py-1 text-gray-600">値</div>
  </div>
</div>`,
					points: [
						'テーブルの行・列を折りたたみ、そのスペースも消す（hidden とは異なりスペースも詰まる）',
						'テーブル以外の要素では hidden と同じ挙動になる（スペース保持なしの非表示）',
						'動的にテーブルの行・列を表示・非表示するときに行の高さがレイアウトに影響しないよう使う'
					]
				}
			]
		},
		{
			title: 'Float',
			classes: [
				{
					name: 'float-left',
					css: 'float: left',
					description: '要素を左側にフロートする',
					example: `<div class="flow-root bg-gray-50 rounded p-3">
  <div class="float-left w-16 h-16 bg-blue-500 text-white text-xs flex items-center justify-center rounded font-bold mr-3">float-left</div>
  <p class="text-sm text-gray-600">テキストが float した要素の右側に回り込みます。親に flow-root を付けると正しく包含されます。</p>
</div>`,
					points: [
						'要素を左端に寄せ、後続のテキストや inline 要素が右側に回り込む',
						'float を使った後は親要素が高さを失う。flow-root / overflow-hidden / clearfix で対処する',
						'現代の CSS では flex / grid が主流。float はテキスト回り込みの用途に限定されてきている'
					]
				},
				{
					name: 'float-right',
					css: 'float: right',
					description: '要素を右側にフロートする',
					example: `<div class="flow-root bg-gray-50 rounded p-3">
  <div class="float-right w-16 h-16 bg-rose-400 text-white text-xs flex items-center justify-center rounded font-bold ml-3">float-right</div>
  <p class="text-sm text-gray-600">テキストが float した要素の左側に回り込みます。右端に画像を配置する昔ながらのレイアウト手法。</p>
</div>`,
					points: [
						'要素を右端に寄せ、後続のテキストや inline 要素が左側に回り込む',
						'画像を右に配置してテキストを左に流すような雑誌レイアウトに使われる',
						'float-left 同様、親要素の高さ崩れに注意。flow-root などで対処する'
					]
				},
				{
					name: 'float-none',
					css: 'float: none',
					description: 'フロートを解除する',
					example: `<div class="flow-root bg-gray-50 rounded p-3">
  <div class="float-left w-12 h-12 bg-gray-300 text-gray-600 text-xs flex items-center justify-center rounded mr-3">float</div>
  <div class="float-none bg-blue-100 text-blue-700 text-sm p-2 rounded">float-none: float を解除。通常フローに戻る</div>
</div>`,
					points: [
						'float: left / right を解除して通常フローに戻す',
						'レスポンシブで特定ブレークポイント以降は float を解除したい場合に使う',
						'単独で使うより md:float-none のようにレスポンシブ修飾子と組み合わせることが多い'
					]
				},
				{
					name: 'float-start',
					css: 'float: inline-start',
					description: '書字方向の開始側にフロート（論理プロパティ）',
					example: `<div class="flow-root bg-gray-50 rounded p-3">
  <div class="float-start w-16 h-12 bg-blue-500 text-white text-xs flex items-center justify-center rounded font-bold mr-3">float-start</div>
  <p class="text-sm text-gray-600">float-start は書字方向の開始側にフロート。LTR（左から右）では左寄せになる。</p>
</div>`,
					points: [
						'LTR（左から右書き）では float: left、RTL（右から左書き）では float: right と同じ挙動',
						'国際化対応（多言語サイト）で書字方向を問わず「開始側にフロート」を指定できる論理プロパティ',
						'float-left の代わりに使うと RTL 言語でも意図通りのレイアウトになる'
					]
				},
				{
					name: 'float-end',
					css: 'float: inline-end',
					description: '書字方向の終了側にフロート（論理プロパティ）',
					example: `<div class="flow-root bg-gray-50 rounded p-3">
  <div class="float-end w-16 h-12 bg-rose-400 text-white text-xs flex items-center justify-center rounded font-bold ml-3">float-end</div>
  <p class="text-sm text-gray-600">float-end は書字方向の終了側にフロート。LTR では右寄せになる。</p>
</div>`,
					points: [
						'LTR では float: right、RTL では float: left と同じ挙動',
						'float-right の論理プロパティ版。多言語サイトの国際化対応に使う',
						'float-start / float-end を使うと dir 属性で書字方向を変えるだけでレイアウトが自動調整される'
					]
				}
			]
		},
		{
			title: 'Box Sizing',
			classes: [
				{
					name: 'box-border',
					css: 'box-sizing: border-box',
					description: 'padding と border を width / height に含める（推奨）',
					example: `<div class="box-border w-32 h-12 border-4 border-blue-400 bg-blue-100 flex items-center justify-center text-xs text-blue-700">border 込みで w-32 に収まる</div>`,
					points: [
						'padding と border を width / height の内側に含める。直感的なサイズ計算ができる',
						'Tailwind は全要素に box-border をデフォルトで適用している（*, ::before, ::after）',
						'w-32 と指定したら border や padding を含めた合計が 128px になる'
					]
				},
				{
					name: 'box-content',
					css: 'box-sizing: content-box',
					description: 'padding と border を width / height の外側に追加する',
					example: `<div class="box-content w-20 h-8 border-4 border-rose-400 bg-rose-100 flex items-center justify-center text-xs text-rose-700">border が w-20 の外側に加算</div>`,
					points: [
						'CSS のデフォルト値だが Tailwind は全要素に box-border をデフォルト適用するため、通常は意識しない',
						'w-32 と指定したらコンテンツ幅が 128px になり、そこに border と padding が外側に加算される',
						'外部ライブラリのコンポーネントが box-content を前提にしているときに使う'
					]
				}
			]
		},
		{
			title: 'Object Fit',
			classes: [
				{
					name: 'object-contain',
					css: 'object-fit: contain',
					description: 'アスペクト比を保ったまま要素内に収める',
					example: `<div class="w-48 h-24 bg-gray-200 border border-gray-300 rounded overflow-hidden">
  <img class="object-contain w-full h-full" src="/tailwind_dog.jpeg" alt="デモ画像（object-contain）">
</div>`,
					points: [
						'画像全体が見えるようにアスペクト比を保ちながら縮小する。余白（レターボックス）が生じる',
						'画像が切れては困る場合（製品画像、ロゴ）に使う',
						'背景色で余白を埋めると object-position と組み合わせて整然としたレイアウトになる'
					]
				},
				{
					name: 'object-cover',
					css: 'object-fit: cover',
					description: 'アスペクト比を保ったまま要素を覆う（はみ出しはクリップ）',
					example: `<div class="w-48 h-24 bg-gray-200 border border-gray-300 rounded overflow-hidden">
  <img class="object-cover w-full h-full" src="/tailwind_dog.jpeg" alt="デモ画像（object-cover）">
</div>`,
					points: [
						'コンテナをぴったり覆うようにアスペクト比を保ちながら拡大・縮小し、はみ出した部分はクリップ',
						'サムネイル・カード画像・ヒーロー画像など、決まったサイズの枠に画像を填め込む定番の使い方',
						'object-position と組み合わせてフォーカス位置を調整できる'
					]
				},
				{
					name: 'object-fill',
					css: 'object-fit: fill',
					description: '要素を引き伸ばして全体を埋める',
					example: `<div class="w-48 h-24 bg-gray-200 border border-gray-300 rounded overflow-hidden">
  <img class="object-fill w-full h-full" src="/tailwind_dog.jpeg" alt="デモ画像（object-fill）">
</div>`,
					points: [
						'アスペクト比を無視してコンテナいっぱいに引き伸ばす（デフォルト値）',
						'画像が歪む可能性があるため、写真などには通常使わない',
						'SVG アイコンや単色画像など、歪んでも問題ない場合に使う'
					]
				},
				{
					name: 'object-none',
					css: 'object-fit: none',
					description: '画像を元のサイズのまま表示する',
					example: `<div class="w-48 h-24 bg-gray-200 border border-gray-300 rounded overflow-hidden">
  <img class="object-none w-full h-full" src="/tailwind_dog.jpeg" alt="デモ画像（object-none）">
</div>`,
					points: [
						'画像を元のサイズで表示し、コンテナからはみ出た部分はクリップされる',
						'拡大・縮小を一切行わないため、高解像度画像をそのまま表示したい場合に使う',
						'object-position と組み合わせてどの部分を表示するか制御できる'
					]
				},
				{
					name: 'object-scale-down',
					css: 'object-fit: scale-down',
					description: 'none か contain の小さい方を適用する',
					example: `<div class="w-48 h-24 bg-gray-200 border border-gray-300 rounded overflow-hidden">
  <img class="object-scale-down w-full h-full" src="/tailwind_dog.jpeg" alt="デモ画像（object-scale-down）">
</div>`,
					points: [
						'画像が小さい場合は元のサイズ（none 相当）、大きい場合は contain と同じ動作をする',
						'画像が常にコンテナより小さくなるように保証しつつ、拡大は行わない',
						'ロゴや小さなアイコンをコンテナに収めつつ引き伸ばさないときに便利'
					]
				}
			]
		},
		{
			title: 'Object Position',
			classes: [
				{
					name: 'object-top',
					css: 'object-position: top',
					description: '上寄せ',
					example: `<div class="w-[200px] h-[200px] rounded overflow-hidden">
  <img class="object-none w-full h-full object-top" src="/tailwind_dog.jpeg" alt="デモ（object-top）">
</div>`,
					points: [
						'画像の上端をコンテナの上端に合わせる',
						'縦長の画像を横長コンテナに object-cover で収める際に上部（顔など）を優先表示',
						'object-fit と組み合わせて使うプロパティ'
					]
				},
				{
					name: 'object-bottom',
					css: 'object-position: bottom',
					description: '下寄せ',
					example: `<div class="w-[200px] h-[200px] rounded overflow-hidden">
  <img class="object-none w-full h-full object-bottom" src="/tailwind_dog.jpeg" alt="デモ（object-bottom）">
</div>`,
					points: [
						'画像の下端をコンテナの下端に合わせる',
						'画像の下部に重要な被写体がある場合に使う',
						'object-cover / object-contain と組み合わせて表示位置を制御する'
					]
				},
				{
					name: 'object-center',
					css: 'object-position: center',
					description: '中央揃え',
					example: `<div class="w-[200px] h-[200px] rounded overflow-hidden">
  <img class="object-none w-full h-full object-center" src="/tailwind_dog.jpeg" alt="デモ（object-center）">
</div>`,
					points: [
						'画像の中央をコンテナの中央に合わせるデフォルト値',
						'object-cover のデフォルト動作と組み合わさり、画像の中心が常に表示される',
						'人物写真など、中央に被写体がある画像に最適'
					]
				},
				{
					name: 'object-left',
					css: 'object-position: left',
					description: '左寄せ',
					example: `<div class="w-[200px] h-[200px] rounded overflow-hidden">
  <img class="object-none w-full h-full object-left" src="/tailwind_dog.jpeg" alt="デモ（object-left）">
</div>`,
					points: [
						'画像の左端をコンテナの左端に合わせる',
						'被写体が左側にある画像で使う',
						'object-left-top / object-left-bottom など対角位置との組み合わせも可能'
					]
				},
				{
					name: 'object-right',
					css: 'object-position: right',
					description: '右寄せ',
					example: `<div class="w-[200px] h-[200px] rounded overflow-hidden">
  <img class="object-none w-full h-full object-right" src="/tailwind_dog.jpeg" alt="デモ（object-right）">
</div>`,
					points: [
						'画像の右端をコンテナの右端に合わせる',
						'被写体が右側にある画像で使う',
						'RTL レイアウトでの対称的なレイアウト調整にも利用できる'
					]
				},
				{
					name: 'object-left-top',
					css: 'object-position: left top',
					description: '左上',
					example: `<div class="w-[200px] h-[200px] rounded overflow-hidden">
  <img class="object-none w-full h-full object-left-top" src="/tailwind_dog.jpeg" alt="デモ（object-left-top）">
</div>`,
					points: [
						'画像の左上をコンテナの左上に合わせる',
						'被写体が画像の左上隅にある場合に使う',
						'8 方向の object-position のうちの 1 つ。任意値 object-[位置] で細かく指定することも可能'
					]
				},
				{
					name: 'object-right-top',
					css: 'object-position: right top',
					description: '右上',
					example: `<div class="w-[200px] h-[200px] rounded overflow-hidden">
  <img class="object-none w-full h-full object-right-top" src="/tailwind_dog.jpeg" alt="デモ（object-right-top）">
</div>`,
					points: [
						'画像の右上をコンテナの右上に合わせる',
						'被写体が画像の右上隅にある場合に使う',
						'object-cover と組み合わせることで、右上の被写体を優先的に表示できる'
					]
				},
				{
					name: 'object-left-bottom',
					css: 'object-position: left bottom',
					description: '左下',
					example: `<div class="w-[200px] h-[200px] rounded overflow-hidden">
  <img class="object-none w-full h-full object-left-bottom" src="/tailwind_dog.jpeg" alt="デモ（object-left-bottom）">
</div>`,
					points: [
						'画像の左下をコンテナの左下に合わせる',
						'被写体が画像の左下隅にある場合に使う',
						'8 方向の object-position のうちの 1 つ'
					]
				},
				{
					name: 'object-right-bottom',
					css: 'object-position: right bottom',
					description: '右下',
					example: `<div class="w-[200px] h-[200px] rounded overflow-hidden">
  <img class="object-none w-full h-full object-right-bottom" src="/tailwind_dog.jpeg" alt="デモ（object-right-bottom）">
</div>`,
					points: [
						'画像の右下をコンテナの右下に合わせる',
						'被写体が画像の右下隅にある場合に使う',
						'8 方向の object-position のうちの 1 つ。任意値で object-[75%_80%] のような指定も可能'
					]
				}
			]
		},
		{
			title: 'Aspect Ratio',
			classes: [
				{
					name: 'aspect-auto',
					css: 'aspect-ratio: auto',
					description: '自然なアスペクト比を使用する',
					example: `<div class="p-2">
  <img class="aspect-auto w-48 bg-gray-200 rounded border border-gray-300" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%234ade80'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%231d4ed8'/%3E%3C/svg%3E" alt="aspect-auto">
  <p class="text-xs text-gray-500 mt-1">画像本来のアスペクト比（300:200）を保持</p>
</div>`,
					points: [
						'画像や動画の固有アスペクト比を保持するデフォルト値',
						'aspect-square / aspect-video を解除してデフォルトに戻すときに使う',
						'img 要素にはデフォルトで固有アスペクト比があるため、通常は指定不要'
					]
				},
				{
					name: 'aspect-square',
					css: 'aspect-ratio: 1 / 1',
					description: '正方形（1:1）のアスペクト比',
					example: `<div class="p-2 flex gap-3">
  <div class="aspect-square w-20 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">1:1</div>
  <div class="aspect-square w-28 bg-rose-400 rounded flex items-center justify-center text-white text-xs font-bold">1:1</div>
  <div class="aspect-square w-12 bg-emerald-400 rounded flex items-center justify-center text-white text-xs font-bold">1:1</div>
</div>`,
					points: [
						'幅を指定するだけで正方形になる。height の指定が不要になる',
						'アバター画像、プロダクトカード、アイコンなど正方形の UI 要素に使う',
						'w-* でサイズを変えると自動的に高さも同じ比率で変わる'
					]
				},
				{
					name: 'aspect-video',
					css: 'aspect-ratio: 16 / 9',
					description: 'ワイドスクリーン（16:9）のアスペクト比',
					example: `<div class="p-2">
  <div class="aspect-video w-full bg-gray-800 rounded flex items-center justify-center">
    <div class="text-white text-sm font-bold">▶ 16:9 動画プレーヤー</div>
  </div>
</div>`,
					points: [
						'YouTube 等の動画プレーヤーに合わせた 16:9 比率を簡単に実現できる',
						'width: 100% と組み合わせると、親コンテナの幅に応じて高さが自動調整されるレスポンシブ動画になる',
						'iframe の動画埋め込みでも aspect-video を使うとレスポンシブ対応が容易になる'
					]
				}
			]
		}
	]
};

export default layout;
