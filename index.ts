import * as JWF from 'javascript-window-framework'

function Main() {
	const listView = new JWF.ListView({frame:true})	//リストビューをフレーム付きで作成
	listView.addHeader(['番号','名前','攻撃力'])	//ヘッダの作成
	listView.addItem([1,'竹槍',5])					//アイテムの設定
	listView.addItem([2,'棍棒', 10])
	listView.addItem([3,'銅の剣', 10])
	listView.setPos()							//ウインドウを中央へ移動

	listView.addEventListener('itemClick',(e)=>{	//アイテムクリック処理
		const name = listView.getItemText(e.itemIndex,1)	//リストビューからデータを取り出す
		new JWF.MessageBox('メッセージ',name+"が選択された")	//メッセージボックスの表示
	})
}

//ページ読み込み時に実行する処理を設定
addEventListener("DOMContentLoaded", Main)