/*ƒf[ƒ^ƒtƒ@ƒCƒ‹‚Ì–¼‘O*/
dataName = "Âì“S“¹";
dataFileName = "aokawa2s.js";
MAXLINE = 1;

//î•½ü‚Ì‰w
stationList.addToStaList(new Station("î•½", "Ogidaira", "OG09"));
stationList.addToStaList(new Station("‹àŒ", "Kanatsuki", "OG10"));
stationList.addToStaList(new Station("…¬", "Mizunari", "OG11"));
stationList.addToStaList(new Station("—­~", "Ogidaira", "OG12"));
stationList.addToStaList(new Station("Â“SŒö‰€‘O", "Aotetu-Koen-mae", "OG13")); //ƒh[ƒ€ü•ªŠò—\’è
stationList.addToStaList(new Station("—v‘ä", "Kanamedai", "OG14"));
stationList.addToStaList(new Station("ãÈˆä", "Kamitsumai", "OG15"));
stationList.addToStaList(new Station("Èˆä", "Tsumai", "OG16"));
stationList.addToStaList(new Station("ˆêƒm", "Ichino", "OG17"));
stationList.addToStaList(new Station("’n‹…’Ê‚è", "Chikyu-Dori", "OG18"));
stationList.addToStaList(new Station("‘f“c", "Motoda", "OG19"));
stationList.addToStaList(new Station("‘³Z", "Sodesumi", "OG20"));
stationList.addToStaList(new Station("tˆä", "Harui", "OG21"));
stationList.addToStaList(new Station("“s’Ë", "Totsuka", "OG22"));
stationList.addToStaList(new Station("µ“ús", "Nanokaichi", "AO21"));    //µ“ús©–{ü’Ç‰ÁŒãíœ—\’è





//3.˜HüƒCƒ“ƒXƒ^ƒ“ƒX
var ogi = new Line("î•½ü",0,false,"#ab6212");
var hats = new Array();
var chak = new Array();







//4D˜Hü‚Ì’Ç‰Á(2) ˜Hüã‚É‘¶İ‚·‚é‰w‚Ìw’è
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



//5D˜Hü‚Ì’Ç‰Á(3) ˜HüƒCƒ“ƒXƒ^ƒ“ƒX‚Ì“o˜^
ogi.setSta(hats, chak);
lines.push(ogi);




//’Êí‚Ì‰^’À‹K’è[¬“c‹}]
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












