/*データファイルの名前*/
dataName = "青川鉄道";
dataFileName = "aokawa.js";
MAXLINE = 10;

//扇平線の駅
stationList.addToStaList(new Station("扇平", "Ogidaira", "AO15"));
stationList.addToStaList(new Station("金月", "Kanatsuki", "AO14"));
stationList.addToStaList(new Station("水成", "Mizunari", "AO13"));
stationList.addToStaList(new Station("溜止", "Ogidaira", "AO12"));
stationList.addToStaList(new Station("青鉄公園前", "Aotetu-Koen-mae", "AO11")); //ドーム線分岐予定
stationList.addToStaList(new Station("要台", "Kanamedai", "AO10"));
stationList.addToStaList(new Station("上妻井", "Kamitsumai", "AO9"));
stationList.addToStaList(new Station("妻井", "Tsumai", "AO8"));
stationList.addToStaList(new Station("一ノ", "Ichino", "AO7"));
stationList.addToStaList(new Station("地球通り", "Chikyu-Dori", "AO6"));
stationList.addToStaList(new Station("素田", "Motoda", "AO5"));
stationList.addToStaList(new Station("袖住", "Sodesumi", "AO4"));
stationList.addToStaList(new Station("春井", "Harui", "AO3"));
stationList.addToStaList(new Station("都塚", "Totsuka", "AO2"));
stationList.addToStaList(new Station("七日市", "Nanokaichi", "AO1"));    //七日市←本線追加後削除予定


//■■■扇平線■■■
var Ogi = new Line("扇平線", 0, false, "#00b0b3");
var OgiList = new Array();
var OGD = new Array();

OgiList.push(stationList.searchFromNumberling(AO15));
OGD.push(0.9);	//扇平-金月
OgiList.push(stationList.searchFromNumberling(AO14));
OGD.push(1.4);	//金月-水成
OgiList.push(stationList.searchFromNumberling(AO13));
OGD.push(1.4);	//水成-溜止
OgiList.push(stationList.searchFromNumberling(AO12));
OGD.push(2.2);	//溜止-青鉄公園前
OgiList.push(stationList.searchFromName(青鉄公園前));　　//ドーム線分岐のため駅名指定
OGD.push(0.8);	//青鉄公園前-要台
OgiList.push(stationList.searchFromNumberling(AO10));
OGD.push(2.8);	//要台-上妻井
OgiList.push(stationList.searchFromNumberling(AO9));
OGD.push(2.4);	//上妻井-妻井
OgiList.push(stationList.searchFromNumberling(AO8));
OGD.push(2.1);	//妻井-一ノ
OgiList.push(stationList.searchFromNumberling(AO7));
OGD.push(1.6);	//一ノ-地球通り
OgiList.push(stationList.searchFromNumberling(AO6));
OGD.push(0.8);  //地球通り-素田
OgiList.push(stationList.searchFromNumberling(AO5));
OGD.push(1.4);  //素田-袖住
OgiList.push(stationList.searchFromNumberling(AO4));
OGD.push(2.4);  //袖住-春井
OgiList.push(stationList.searchFromNumberling(AO3));
OGD.push(1.1);  //春井-都塚
OgiList.push(stationList.searchFromNumberling(AO2));
OGD.push(1.4);  //都塚-七日市
OgiList.push(stationList.searchFromNumberling(AO1));
