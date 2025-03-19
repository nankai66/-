/**************************

Faredio 1.0 Data File(For 2.0 converted)
Sample#西武鉄道
Copyright(C) tamantrain

***************************/

/*データファイルの名前*/
var dataName = "Sample#西武鉄道";
dataFileName = "seibu.js";		//Faredio2.0で読み込むときはこの行を追加

/*総駅数より少し多いぐらいの駅数を設定*/
var maxCount = MAXSTACT;	//Faredio2.0で読み込むときはMAXSTACTを指定
/*全路線*/
var lineName = new Array("",
				  "新宿線","拝島線","国分寺線","西武園線","多摩湖線",
				  "池袋線","秩父線","豊島線","西武有楽町線","狭山線","山口線",
				  "多摩川線"
				 );	//Faredio2.0で読み込むときはline→lineNameに変更

var showLowestValue = true;	//最安運賃を常に表示する場合はtrue、そうでない場合false(初期値：true)
var kirisute = false;		//小児運賃等で、10円未満の端数を切り上げる場合はfalse、切り捨てる場合はtrue(初期値：false)

/*各路線の運賃規定の番号*/
var linesByFS = new Array(-1,0,0,0,0,0,0,0,0,0,0,0,0);

/*▼▼▼▼▼▼▼▼必須定義(変更不可)▼▼▼▼▼▼▼▼*/
var sta = new Array(maxCount + 1);
var km = new Array(lineName.length);	//Faredio2.0で読み込むときはline→lineNameに変更
var tokuteiUnchin = new Array();
var kasanType = new Array();

var DATACOUNTER = 0;
for (DATACOUNTER = 0; DATACOUNTER <= maxCount; DATACOUNTER++)
	sta[DATACOUNTER] = new Array(lineName.length);	//Faredio2.0で読み込むときはline→lineNameに変更
for (DATACOUNTER = 0; DATACOUNTER < lineName.length; DATACOUNTER++)	//Faredio2.0で読み込むときはline→lineNameに変更
{
	km[DATACOUNTER] = new Array();
}
/*運賃を管理するクラス*/
var Fare = function()
{
	var _this = this;

	_this.fareM = new Array();
	_this.fareK = new Array();

	for (DATACOUNTER = 0; DATACOUNTER < _this.fareK.length; DATACOUNTER++)
		_this.fareK[DATACOUNTER] = new Array();
		
	this.addCostToKillo = function(minK, maxK, fareCost)
	{
		_this.newFD = new Array();
		_this.newFD["min"] = minK;
		_this.newFD["max"] = maxK;
		_this.fareM.push(fareCost);
		_this.fareK.push(_this.newFD);
	}
}
/*同一路線とみなす路線・直通運転を行っていて乗り換える必要がない路線のクラス*/
var DirectLines = function()
{
	var me = this;

	me.linesA = new Array();
	me.linesB = new Array();
	//直通運転パターンを追加
	me.Add = function(line1, line2)
	{
		me.linesA.push(line1);
		me.linesB.push(line2);
	}
	//直通運転を行っている路線か確認
	me.AbleDirect = function(line1, line2)
	{
		var DATACOUNTER = 0, ptnCnt = me.linesA.length;
		var directPair = false;
		while (DATACOUNTER < ptnCnt && !directPair)
		{
			directPair = (me.linesA[DATACOUNTER] == line1 && me.linesB[DATACOUNTER] == line2) || (me.linesA[DATACOUNTER] == line2 && me.linesB[DATACOUNTER] == line1)
			DATACOUNTER++;
		}
		return directPair;
	}
}

var fareTypes = new Array();
var kasan = new Array();
var kasanType = new Array();
var directLines = new DirectLines();
/*▲▲▲▲▲▲▲▲▲▲▲ここまで編集不可▲▲▲▲▲▲▲▲▲▲▲*/

/*運賃規定*/

/*普通運賃*/
/*規定0*/
//Faredio2.0で読み込む場合はICカードの運賃を入力
fareTypes[0] = new Fare();
fareTypes[0].addCostToKillo(0, 4, 144);
fareTypes[0].addCostToKillo(5, 8, 174);
fareTypes[0].addCostToKillo(9,12, 206);
fareTypes[0].addCostToKillo(13,16,237);
fareTypes[0].addCostToKillo(17,20,267);
fareTypes[0].addCostToKillo(21,24,299);
fareTypes[0].addCostToKillo(25,28,340);
fareTypes[0].addCostToKillo(29,32,370);
fareTypes[0].addCostToKillo(33,36,401);
fareTypes[0].addCostToKillo(37,40,432);
fareTypes[0].addCostToKillo(41,44,463);
fareTypes[0].addCostToKillo(45,48,494);
fareTypes[0].addCostToKillo(49,52,524);
fareTypes[0].addCostToKillo(53,56,556);
fareTypes[0].addCostToKillo(57,60,597);
fareTypes[0].addCostToKillo(61,64,627);
fareTypes[0].addCostToKillo(65,68,669);
fareTypes[0].addCostToKillo(69,72,699);
fareTypes[0].addCostToKillo(73,76,740);
fareTypes[0].addCostToKillo(77,81,772);

/*特定運賃*/


/*新宿線*/
sta[17][1] = "西武新宿";	km[1][17] = 0;
sta[18][1] = "高田馬場";	km[1][18] = 20;
sta[19][1] = "下落合";		km[1][19] = 12;
sta[20][1] = "中井";		km[1][20] = 07;
sta[21][1] = "新井薬師前";	km[1][21] = 13;
sta[22][1] = "沼袋";		km[1][22] = 09;
sta[23][1] = "野方";		km[1][23] = 10;
sta[24][1] = "都立家政";	km[1][24] = 09;
sta[25][1] = "鷺ノ宮";		km[1][25] = 05;
sta[26][1] = "下井草";		km[1][26] = 13;
sta[27][1] = "井荻";		km[1][27] = 09;
sta[28][1] = "上井草";		km[1][28] = 10;
sta[29][1] = "上石神井";	km[1][29] = 11;
sta[30][1] = "武蔵関";		km[1][30] = 13;
sta[31][1] = "東伏見";		km[1][31] = 12;
sta[32][1] = "西武柳沢";	km[1][32] = 10;
sta[33][1] = "田無";		km[1][33] = 13;
sta[34][1] = "花小金井";	km[1][34] = 23;
sta[35][1] = "小平";		km[1][35] = 27;
sta[36][1] = "久米川";		km[1][36] = 20;
sta[37][1] = "東村山";		km[1][37] = 14;
sta[38][1] = "所沢";		km[1][38] = 29;
sta[63][1] = "航空公園";	km[1][63] = 16;
sta[64][1] = "新所沢";		km[1][64] = 12;
sta[65][1] = "入曽";		km[1][65] = 39;
sta[66][1] = "狭山市";		km[1][66] = 30;
sta[67][1] = "新狭山";		km[1][67] = 27;
sta[68][1] = "南大塚";		km[1][68] = 26;
sta[69][1] = "本川越";		km[1][69] = 36;

/*拝島線*/
sta[35][2] = "小平";		km[2][35] = 0;
sta[50][2] = "萩山";		km[2][50] = 11;
sta[54][2] = "小川";		km[2][54] = 16;
sta[55][2] = "東大和市";	km[2][55] = 30;
sta[56][2] = "玉川上水";	km[2][56] = 15;
sta[57][2] = "武蔵砂川";	km[2][57] = 24;
sta[58][2] = "西武立川";	km[2][58] = 20;
sta[59][2] = "拝島";		km[2][59] = 27;

/*国分寺線*/
sta[37][3] = "東村山";		km[3][37] = 0;
sta[54][3] = "小川";		km[3][54] = 21;
sta[60][3] = "鷹の台";		km[3][60] = 15;
sta[61][3] = "恋ヶ窪";		km[3][61] = 15;
sta[62][3] = "国分寺";		km[3][62] = 27;

/*西武園線*/
sta[37][4] = "東村山";		km[4][37] = 0;
sta[53][4] = "西武園";		km[4][53] = 24;

/*多摩湖線*/
sta[47][5] = "西武遊園地";	km[5][47] = 0;
sta[48][5] = "武蔵大和";	km[5][48] = 11;
sta[49][5] = "八坂";		km[5][49] = 25;
sta[50][5] = "萩山";		km[5][50] = 10;
sta[51][5] = "青梅街道";	km[5][51] = 12;
sta[52][5] = "一橋学園";	km[5][52] = 10;
sta[62][5] = "国分寺";		km[5][62] = 24;

/*池袋線*/
sta[1][6] = "池袋";			km[6][1] = 0;
sta[2][6] = "椎名町";		km[6][2] = 19;
sta[3][6] = "東長崎";		km[6][3] = 12;
sta[4][6] = "江古田";		km[6][4] = 12;
sta[5][6] = "桜台";			km[6][5] = 09;
sta[6][6] = "練馬";			km[6][6] = 08;
sta[7][6] = "中村橋";		km[6][7] = 15;
sta[8][6] = "富士見台";		km[6][8] = 08;
sta[9][6] = "練馬高野台";	km[6][9] = 12;
sta[10][6] = "石神井公園";	km[6][10] = 11;
sta[11][6] = "大泉学園";	km[6][11] = 19;
sta[12][6] = "保谷";		km[6][12] = 16;
sta[13][6] = "ひばりケ丘";	km[6][13] = 23;
sta[14][6] = "東久留米";	km[6][14] = 14;
sta[15][6] = "清瀬";		km[6][15] = 18;
sta[16][6] = "秋津";		km[6][16] = 22;
sta[38][6] = "所沢";		km[6][38] = 30;
sta[39][6] = "西所沢";		km[6][39] = 24;
sta[70][6] = "小手指";		km[6][70] = 22;
sta[71][6] = "狭山ヶ丘";	km[6][71] = 22;
sta[72][6] = "武蔵藤沢";	km[6][72] = 13;
sta[73][6] = "稲荷山公園";	km[6][73] = 30;
sta[74][6] = "入間市";		km[6][74] = 09;
sta[75][6] = "仏子";		km[6][75] = 29;
sta[76][6] = "元加治";		km[6][76] = 13;
sta[77][6] = "飯能";		km[6][77] = 27;
sta[78][6] = "東飯能";		km[6][78] = 08;
sta[79][6] = "高麗";		km[6][79] = 40;
sta[80][6] = "武蔵横手";	km[6][80] = 28;
sta[81][6] = "東吾野";		km[6][81] = 25;
sta[82][6] = "吾野";		km[6][82] = 40;

/*秩父線*/
sta[82][7] = "吾野";		km[7][82] = 0;
sta[83][7] = "西吾野";		km[7][83] = 36;
sta[84][7] = "正丸";		km[7][84] = 27;
sta[85][7] = "芦ケ久保";	km[7][85] = 61;
sta[86][7] = "横瀬";		km[7][86] = 40;
sta[87][7] = "西武秩父";	km[7][87] = 26;

/*豊島線*/
sta[6][8] = "練馬";			km[8][6] = 0;
sta[40][8] = "豊島園";		km[8][40] = 10;

/*西武有楽町線*/
sta[6][9] = "練馬";			km[9][6] = 0;
sta[41][9] = "新桜台";		km[9][41] = 14;
sta[42][9] = "小竹向原";	km[9][42] = 12;

/*狭山線*/
sta[39][10] = "西所沢";		km[10][39] = 0;
sta[43][10] = "下山口";		km[10][43] = 18;
sta[44][10] = "西武球場前";	km[10][44] = 24;

/*山口線*/
sta[44][11] = "西武球場前";	km[11][44] = 0;
sta[46][11] = "遊園地西";	km[11][46] = 25;
sta[47][11] = "西武遊園地";	km[11][47] = 03;

/*多摩川線*/
sta[89][12] = "武蔵境";		km[12][89] = 0;
sta[90][12] = "新小金井";	km[12][90] = 19;
sta[91][12] = "多磨";		km[12][91] = 22;
sta[92][12] = "白糸台";		km[12][92] = 14;
sta[93][12] = "競艇場前";	km[12][93] = 15;
sta[94][12] = "是政";		km[12][94] = 10;

/******Faredio 2.0データに読み替えるスクリプト*******/

//駅の追加
for (var i=0; i<MAXSTACT; i++) {
	for (var j=1; j<lineName.length; j++) {
		if (sta[i][j]!=undefined) {
			stationList.staList[i] = new Station(sta[i][j], "", "");
			break;
		}
	}
}

//路線の追加
for (var j=1; j<lineName.length; j++) {
	var newLineBuf = new Line(lineName[j], linesByFS[j], false);
	var staListBuf = new Array();
	var BSBuf = new Array();

	for (var i=0; i<stationList.staList.length; i++) {
		if (sta[i][j]!=undefined) {
			staListBuf.push(i);
			if (km[j][i]!=undefined && km[j][i]) BSBuf.push(km[j][i] / 10.0);
		}
	}

	newLineBuf.setSta(staListBuf, BSBuf);
	lines.push(newLineBuf);
}

//運賃規定の追加
for (var i=0; i<fareTypes.length; i++) {
	var ruleBuf = new FareTable(1);
	for (var j=0; j<fareTypes[i].fareM.length; j++) {
		ruleBuf.fareRows.push(new FareRow(fareTypes[i].fareK[j]["min"], fareTypes[i].fareK[j]["max"], fareTypes[i].fareM[j]));
	}
	fareRule[i] = ruleBuf;
}

/****************************************************/

MAXLINE = 5;