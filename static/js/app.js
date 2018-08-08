'use strict';

// Clipboard
var shareBtn = document.getElementById("copyUrl");

if (shareBtn != null) {

  shareBtn.addEventListener('click', function () {
    var dummy = document.createElement('input'); //inputを作成
    var title = shareBtn.dataset.title; //ボタンのdata属性にある記事タイトルを取得
    var url = window.location.href; //URLを取得
    document.body.appendChild(dummy); //bodyにinputを設置
    dummy.value = '\u300C' + title + '\u300D ' + url; //inputのvalueをtitleとURLに
    dummy.select(); //inputを選択
    document.execCommand('copy'); //選択したものをクリップボードにコピー
    document.body.removeChild(dummy); //設置したinputを削除
  });
}