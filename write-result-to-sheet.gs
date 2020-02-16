//空でない最終列の数字：行；途中でリクエストが止まってしまった時途中から再開する時に使用する
function getNextRow(col, anySheet){
  for(var i = 1;i <= anySheet.getLastRow();i++){
    var key = anySheet.getRange(i,col).getValue();
    if(key == null || key == ''){
      Logger.log(col + '列の空白じゃない最終行は'　+ i + '行です');
      return i;
    }
  }
}

//シートの1列目に関して、それぞれ検索のトップを2列目に記録する
function writeUrl(){
  //キーワードを取得して二次元配列を一次元配列に変換
  var keywords = sheet.getRange(2,1,sheet.getLastRow()).getValues();
  var keywords = Array.prototype.concat.apply([],keywords);
  //2行目の空でない最終行
  //nextRowから最終行までクローリング
  var nextRow = getNextRow(2,sheet);
  for(var i = 0;i <= keywords.length - nextRow;i++){
    //検索結果：1行目のキーワード、追加の検索条件；
    var url = getKeywordSite(keywords[i], addInfo);
    //ブロックされた時にエラーメッセージを記録する
    if(url == errorUrl){
      var url = errorMsg;
    }
    //2行目に結果を記録する
    sheet.getRange(nextRow + i, 2).setValue(url);
    //次の処理までに0.5秒のインターバル
    Utilities.sleep(1000);
  }
  //エラー率を記録
  getRatio();
}

//Yahooにブロックされたキーワードだけもう一度クローリングする
function overWriteUrl(){
  //リザルトである2行目に行う処理
  for(i = 1;i <= lastRow;i++){
    //2行目がエラーメッセージということは、前回取得に失敗したキーワードであるという事
    //エラーメッセージでないか判別するために一度リザルトのurlを取得、そして判別
    var key = sheet.getRange(i, 2).getValue();
    if(key == errorMsg){
      //エラーメッセージが出た行のキーワードを取得し、クローリングする
      var keyword = sheet.getRange(i,1).getValue();
      var url = getKeywordSite(keyword, addInfo);
      //今回もエラーURLが出て来た時にURLをエラーメッセージに変える
      if(url == errorUrl){
        var url = errorMsg;
      }
      //2行目に結果をセット
      sheet.getRange(i, 2).setValue(url);
    }
  }
  //エラー率を記録
  getRatio();
}
