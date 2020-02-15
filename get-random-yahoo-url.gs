//ランダムなYahooの検索URL：検索キーワード、追加の検索情報；Yahooのクローラーブロック対策で検索する際のURLをランダムに取得します
function getRandUrl(keyword, addInfo){
  //¥ランダムな数字を取得
  var randnum = Math.floor( Math.random() * 3 );
  const url0 = 'https://search.yahoo.co.jp/search?p=' + keyword + addInfo + '&x=wrt&aq=0&oq=s&ai=Sjt_tCI5SzOdJilsraJQyA&at=s&ts=2088&ei=UTF-8&fr=top_ga1_sa&mfb=P041';
  const url1 = 'https://search.yahoo.co.jp/search?p=' + keyword + addInfo + '&fr=top_ga1_sa&ei=UTF-8&mfb=P040&ts=13134&aq=0&oq=psycho&at=s&ai=5SyEDsXxRrSC_X0qXzPoFA';  
  const url2 = 'https://search.yahoo.co.jp/search?p=' + keyword + addInfo + '&x=wrt&aq=-1&ai=Lpf7cqwkQgmM5NfUTShEHA&ts=4176&ei=UTF-8&fr=top_ga1_sa';
  const url3 = 'https://search.yahoo.co.jp/search?p=' + keyword + addInfo + '&x=wrt&aq=-1&ai=cBzLISCTSjSSiCi1JscaQA&ts=3933&ei=UTF-8&fr=top_ga1_sa';
  const urls = [url0,　url1, url2, url3];
  return urls[randnum];
}
