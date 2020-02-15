//トップの検索結果：キーワード、追加の検索ワード；まーまーブロックされる
function getKeywordSite(keyword, addInfo) {
  //クローラーブロック対策
  var url = getRandUrl(keyword, addInfo);
  //urlにリクエストを送信する
  var payload = {"value": "key"};
  var response = UrlFetchApp.fetch(
    url,
    {
      method: "PUT",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
    }
  );
  //戻って来たのを文字列に変換
  var html = response.getContentText();
  //正規表現でリンクのあるaタグを表現、「.*」任意の文字列の任意の数（＊）
  //gはpythonのスクレイピングで言う所の「find_all」の「_all」の部分、一致する全ての文字列という意味
  var reglink =/<a href.*?">/g;
  //正規表現にマッチするタグを取ってくる、pythonでいうならsoup.find_all('a')
  //Yahooはaタグの4番目にトップの検索結果が出てくる
  var link = html.match(reglink)[3];
  //aタグの要らない部分、S,Eはstartとend
  var linkExtraS = '<a href="'; 
  var linkExtraE = '">';
  //リンクがnullでない時、文字列なので、不要な部分を削る、pythonなら.string
  if(link != null){
    var linkText = link.replace(linkExtraS,"")
    var linkText = linkText.replace(linkExtraE, "")
  }
  return linkText;
  
  /*
  for(var i =0;i<link.length;i++){
    if(link[i].match(linktextreg)){
      var linktext = link[i].match(linktextreg)[0];
      var linktext = linktext.replace(/a href="\/url\?q=/g,"").replace(/&amp/g,"");
      linktextarray.push([linktext]);
    }
  }
  */
  //return linktextarray[0];
}
