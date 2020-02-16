var ratioSheet = spreadsheet.getSheetByName('ratio');
//var ratioNextCol = ratioSheet.getLastColumn() + 1;
//+0これから開発、成功率を記録する
function getRatio(){
  var count = 0;
  var ratioNextRow = getNextRow(1, ratioSheet);
  Logger.log(ratioNextRow);
  //リザルトである2行目に行う処理
  for(i = 1;i <= lastRow;i++){
    //2行目がエラーメッセージということは、前回取得に失敗したキーワードであるという事
    //エラーメッセージでないか判別するために一度リザルトのurlを取得、そして判別
    var key = sheet.getRange(i, 2).getValue();
    if(key == errorMsg){
      //エラーメッセージが出た行についてカウント
      count ++;     
    }
  }
  //3桁まで取得
  var ratio = Math.round( (count / lastRow) * 10000) / 100;
  var percent = 'エラー率：' + ratio + '％';
  ratioSheet.getRange(ratioNextRow, 1).setValue(percent);
  
}