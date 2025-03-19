/*データファイルの名前*/
dataName = "青川鉄道";
dataFileName = "aokawa2s.js";
MAXLINE = 1;

//扇平線の駅
stationList.addToStaList(new Station("扇平", "Ogidaira", "OG09"));
stationList.addToStaList(new Station("金月", "Kanatsuki", "OG10"));
stationList.addToStaList(new Station("水成", "Mizunari", "OG11"));
stationList.addToStaList(new Station("溜止", "Ogidaira", "OG12"));
stationList.addToStaList(new Station("青鉄公園前", "Aotetu-Koen-mae", "OG13")); //ドーム線分岐予定
stationList.addToStaList(new Station("要台", "Kanamedai", "OG14"));
stationList.addToStaList(new Station("上妻井", "Kamitsumai", "OG15"));
stationList.addToStaList(new Station("妻井", "Tsumai", "OG16"));
stationList.addToStaList(new Station("一ノ", "Ichino", "OG17"));
stationList.addToStaList(new Station("地球通り", "Chikyu-Dori", "OG18"));
stationList.addToStaList(new Station("素田", "Motoda", "OG19"));
stationList.addToStaList(new Station("袖住", "Sodesumi", "OG20"));
stationList.addToStaList(new Station("春井", "Harui", "OG21"));
stationList.addToStaList(new Station("都塚", "Totsuka", "OG22"));
stationList.addToStaList(new Station("七日市", "Nanokaichi", "AO21"));    //七日市←本線追加後削除予定





//3.路線インスタンス
var ogi = new Line("扇平線",0,false,"#ab6212");
var hats = new Array();
var chak = new Array();







//4．路線の追加(2) 路線上に存在する駅の指定
hats.push(stationList.searchFromNumberling("OG09"));
chak.push(2.1);
hats.push(stationList.searchFromNumberling("OG10"));
chak.push(1.7);
hats.push(stationList.searchFromNumberling("OG11"));
chak.push(1.2);
hats.push(stationList.searchFromNumberling("OG12"));
chak.push(1.5);
hats.push(stationList.searchFromNumberling("OG13"));
chak.push(0.7);
hats.push(stationList.searchFromNumberling("OG14"));
chak.push(0.9);
hats.push(stationList.searchFromNumberling("OG15"));
chak.push(1.2);
hats.push(stationList.searchFromNumberling("OG16"));
chak.push(1.3);
hats.push(stationList.searchFromNumberling("OG17"));
chak.push(1.2);
hats.push(stationList.searchFromNumberling("OG18"));
chak.push(0.7);
hats.push(stationList.searchFromNumberling("OG19"));
chak.push(0.8);
hats.push(stationList.searchFromNumberling("OG20"));
chak.push(1.3);
hats.push(stationList.searchFromNumberling("OG21"));
chak.push(0.6);
hats.push(stationList.searchFromNumberling("OG22"));
chak.push(0.8);
hats.push(stationList.searchFromNumberling("AO21"));



//5．路線の追加(3) 路線インスタンスの登録
ogi.setSta(hats, chak);
lines.push(ogi);




//通常の運賃規定[小田急]
var normRule = new FareTable(1);
normRule.fareRows.push(new FareRow(0,3,124));
normRule.fareRows.push(new FareRow(4,6,154));
normRule.fareRows.push(new FareRow(7,9,185));
normRule.fareRows.push(new FareRow(10,13,216));
normRule.fareRows.push(new FareRow(14,17,247));
normRule.fareRows.push(new FareRow(18,21,278));
normRule.fareRows.push(new FareRow(22,25,308));
normRule.fareRows.push(new FareRow(26,29,340));
normRule.fareRows.push(new FareRow(30,33,370));
normRule.fareRows.push(new FareRow(34,37,411));
normRule.fareRows.push(new FareRow(38,41,453));
normRule.fareRows.push(new FareRow(42,46,494));
normRule.fareRows.push(new FareRow(47,51,535));
normRule.fareRows.push(new FareRow(52,56,586));
normRule.fareRows.push(new FareRow(57,61,627));
normRule.fareRows.push(new FareRow(62,66,669));
normRule.fareRows.push(new FareRow(67,71,720));
normRule.fareRows.push(new FareRow(72,76,772));
normRule.fareRows.push(new FareRow(77,81,822));
normRule.fareRows.push(new FareRow(82,83,874));
fareRule[0] = normRule;












