// Clipboard
/*
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
}*/

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
/*
let vh = window.innerHeight * 0.01;
console.log(window.innerHeight);
console.log(vh);
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
*/