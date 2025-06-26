// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  kaisu=kaisu+1;
  let k =document.querySelector('span#kaisu');
  k.textContent=kaisu;
  let n=document.querySelector('input[name="number"]');
  number=n.value;
  yoso=Number(number);
  let a=document.querySelector('span#answer');
  a.textContent=yoso;
  let p=document.querySelector('p#result');
  console.log(kaisu+"回目の予想:"+yoso);
  if(kaisu>=4){
    p.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";
  }else if(kotae!=yoso&&kaisu==3){
    p.textContent="まちがい.残念でしたこたえは"+kotae+"です。";
  }
  else if(kotae<yoso&&kaisu<3){
    p.textContent="まちがい.答えはもっと小さいですよ";
  }
  else if(kotae>yoso&&kaisu<3){
    p.textContent="まちがい.答えはもっと大きいですよ";
  }else if(kotae===yoso){
    kaisu=4;
    p.textContent="正解です.おめでとう！";
    
  }
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
let b =document.querySelector('button#print');
b.addEventListener('click',hantei);