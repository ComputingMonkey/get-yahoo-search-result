//ーーーーーー注意ーーーーーー
//（戻り値）：（引数）；（関数の補足）と言った記述をします、ご留意下さい
//全角空白は全て半角空白に置換してください、半角空白は+です
//置き換えて良いものは//¥を付けます

//スプレッドシートの埋め込みスクリプトは使わないで下さい、botと認識されます

//最初にwriteUrl、次からはoverWriteを繰り返していくイメージです


//シート、最終行
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var sheet = spreadsheet.getSheetByName('searchResult');
var lastRow = sheet.getLastRow();

//¥追加で検索する情報
var addInfo = '+店舗+情報'

//Yahooにアクセス禁止された時に出てくるurl
var errorUrl = 'https://login.yahoo.co.jp/config/login" style="display:inline-block;'

//¥Yahooにブロックされた時のメッセージ
var errorMsg = 'Yahooにブロックされてます';

//ーーーーーーデバッグ用ーーーーーー
function debug(){
  var nextRow = getNextRow(7, sheet);
  for(i = 0;i < 50 - (nextRow -1) ;i++){
    sheet.getRange(nextRow + i, 7).setValue('hoge');
  }
}
