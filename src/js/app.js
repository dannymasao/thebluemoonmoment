// Clipboard
const shareBtn = document.getElementById("copyUrl");

if (shareBtn != null) {

  shareBtn.addEventListener('click', function() {
    const dummy = document.createElement('input'); //inputを作成
    const title = shareBtn.dataset.title; //ボタンのdata属性にある記事タイトルを取得
    const url = window.location.href; //URLを取得
    document.body.appendChild(dummy); //bodyにinputを設置
    dummy.value = `「${title}」 ${url}`; //inputのvalueをtitleとURLに
    dummy.select(); //inputを選択
    document.execCommand('copy'); //選択したものをクリップボードにコピー
    document.body.removeChild(dummy); //設置したinputを削除
    
  });
}