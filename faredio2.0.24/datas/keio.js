/**************************

Faredio 1.0 Data File(For 2.0 converted)
Sample#京王電鉄
Copyright(C) tamantrain

***************************/

/*データファイルの名前*/
dataName = "Sample#京王電鉄";
userCalc = "keio_kasan.js";		//Faredio2.0用に追加した行
dataFileName = "keio.js";		//Faredio2.0ではこの行を追加

/*総駅数より少し多いぐらいの駅数を設定*/
var maxCount = MAXSTACT;	//Faredio2.0で読み込むときはMAXSTACT
/*全路線*/
//line→lineNameに変更
var lineName = new Array("","京王線","京王新線","相模原線","競馬場線","動物園線","井の頭線","高尾線");

var showLowestValue = true;	//最安運賃を常に表示する場合はtrue、そうでない場合false(初期値：true)
var kirisute = false;		//小児運賃等で、10円未満の端数を切り上げる場合はfalse、切り捨てる場合はtrue(初期値：false)

/*各路線の運賃規定の番号*/
var linesByFS = new Array(-1,0,0,0,0,0,0,0,0);

/*▼▼▼▼▼▼▼▼必須定義(変更不可)▼▼▼▼▼▼▼▼*/
var sta = new Array(maxCount + 1);
var km = new Array(lineName.length);	//line→lineNameに変更
var tokuteiUnchin = new Array();
var kasanType = new Array();

var DATACOUNTER = 0;
for (DATACOUNTER = 0; DATACOUNTER <= maxCount; DATACOUNTER++)
	sta[DATACOUNTER] = new Array(lineName.length);	//line→lineNameに変更
for (DATACOUNTER = 0; DATACOUNTER < lineName.length; DATACOUNTER++)	//line→lineNameに変更
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
fareTypes[0] = new Fare();
fareTypes[0].addCostToKillo(1, 4, 124);
fareTypes[0].addCostToKillo(5, 6, 133);
fareTypes[0].addCostToKillo(7, 9, 154);
fareTypes[0].addCostToKillo(10,12,174);
fareTypes[0].addCostToKillo(13,15,195);
fareTypes[0].addCostToKillo(16,19,237);
fareTypes[0].addCostToKillo(20,24,278);
fareTypes[0].addCostToKillo(25,30,319);
fareTypes[0].addCostToKillo(31,36,340);
fareTypes[0].addCostToKillo(37,43,360);
fareTypes[0].addCostToKillo(44,48,381);

/*特定運賃*/


/*加算特定運賃*/
kasan[0] = new Fare();
kasan[0].addCostToKillo(1, 8, 10);
kasan[0].addCostToKillo(9, 13,20);
kasan[0].addCostToKillo(14,16,40);
kasan[0].addCostToKillo(17,19,60);
kasan[0].addCostToKillo(20,22,80);


/*京王線*/
sta[1][1] = "新宿";		km[1][1] = 0;
sta[2][1] = "初台";		km[1][2] = 17;
sta[3][1] = "幡ヶ谷";		km[1][3] = 10;
sta[4][1] = "笹塚";		km[1][4] = 9;
sta[5][1] = "代田橋";		km[1][5] = 8;
sta[13][1] = "明大前";		km[1][13] = 8;
sta[23][1] = "下高井戸";	km[1][23] = 9;
sta[24][1] = "桜上水";		km[1][24] = 9;
sta[25][1] = "上北沢";		km[1][25] = 8;
sta[26][1] = "八幡山";		km[1][26] = 6;
sta[27][1] = "芦花公園";	km[1][27] = 7;
sta[28][1] = "千歳烏山";	km[1][28] = 8;
sta[29][1] = "仙川";		km[1][29] = 16;
sta[30][1] = "つつじヶ丘";	km[1][30] = 10;
sta[31][1] = "柴崎";		km[1][31] = 8;
sta[32][1] = "国領";		km[1][32] = 9;
sta[33][1] = "布田";		km[1][33] = 7;
sta[34][1] = "調布";		km[1][34] = 6;
sta[47][1] = "西調布";		km[1][47] = 15;
sta[48][1] = "飛田給";		km[1][48] = 7;
sta[49][1] = "武蔵野台";	km[1][49] = 11;
sta[50][1] = "多磨霊園";	km[1][50] = 8;
sta[51][1] = "東府中";		km[1][51] = 8;
sta[53][1] = "府中";		km[1][53] = 15;
sta[54][1] = "分倍河原";	km[1][54] = 12;
sta[55][1] = "中河原";		km[1][55] = 16;
sta[56][1] = "聖蹟桜ヶ丘";	km[1][56] = 16;
sta[57][1] = "百草園";		km[1][57] = 17;
sta[58][1] = "高幡不動";	km[1][58] = 17;
sta[60][1] = "南平";		km[1][60] = 24;
sta[61][1] = "平山城址公園";	km[1][61] = 13;
sta[62][1] = "長沼";		km[1][62] = 15;
sta[63][1] = "北野";		km[1][63] = 12;
sta[70][1] = "京王八王子";	km[1][70] = 18;

/*京王新線*/
sta[1][2] = "新線新宿";		km[2][1] = 0;
sta[2][2] = "初台";		km[2][2] = 17;
sta[3][2] = "幡ヶ谷";		km[2][3] = 10;
sta[4][2] = "笹塚";		km[2][4] = 9;

/*相模原線*/
directLines.Add(3, 8);	//路線番号3と路線番号5は同一路線であることを定義
sta[34][3] = "調布";		km[3][34] = 0;
sta[35][3] = "京王多摩川";	km[3][35] = 12;
//kasanType[8] = 0;	//加算特定運賃の指定
//sta[35][3] = "京王多摩川";	km[3][35] = 0;
sta[36][3] = "京王稲田堤";	km[3][36] = 13;
sta[37][3] = "京王よみうりランド";km[3][37] = 14;
sta[38][3] = "稲城";		km[3][38] = 16;
sta[40][3] = "若葉台";		km[3][40] = 33;
sta[41][3] = "京王永山";	km[3][41] = 26;
sta[42][3] = "京王多摩センター";km[3][42] = 23;
sta[43][3] = "京王堀之内";	km[3][43] = 23;
sta[44][3] = "南大沢";		km[3][44] = 22;
sta[45][3] = "多摩境";		km[3][45] = 19;
sta[46][3] = "橋本";		km[3][46] = 25;

/*競馬場線*/
sta[51][4] = "東府中";		km[4][51] = 0;
sta[52][4] = "府中競馬正門前";	km[4][52] = 9;

/*動物園線*/
sta[58][5] = "高幡不動";	km[5][58] = 0;
sta[59][5] = "多摩動物公園";	km[5][59] = 20;

/*井の頭線*/
sta[6][6] = "渋谷";		km[6][6] = 0;
sta[7][6] = "神泉";		km[6][7] = 5;
sta[8][6] = "駒場東大前";	km[6][8] = 9;
sta[9][6] = "池ノ上";		km[6][9] = 10;
sta[10][6] = "下北沢";		km[6][10] = 6;
sta[11][6] = "新代田";		km[6][11] = 5;
sta[12][6] = "東松原";		km[6][12] = 5;
sta[13][6] = "明大前";		km[6][13] = 9;
sta[14][6] = "永福町";		km[6][14] = 11;
sta[15][6] = "西永福";		km[6][15] = 7;
sta[16][6] = "浜田山";		km[6][16] = 8;
sta[17][6] = "高井戸";		km[6][17] = 12;
sta[18][6] = "富士見ヶ丘";	km[6][18] = 8;
sta[19][6] = "久我山";		km[6][19] = 7;
sta[20][6] = "三鷹台";		km[6][20] = 10;
sta[21][6] = "井の頭公園";	km[6][21] = 9;
sta[22][6] = "吉祥寺";		km[6][22] = 6;

/*高尾線*/
sta[63][7] = "北野";		km[7][63] = 0;
sta[64][7] = "京王片倉";	km[7][64] = 17;
sta[65][7] = "山田";		km[7][65] = 15;
sta[66][7] = "めじろ台";	km[7][66] = 11;
sta[67][7] = "狭間";		km[7][67] = 15;
sta[68][7] = "高尾";		km[7][68] = 11;
sta[69][7] = "高尾山口";	km[7][69] = 17;

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
		ruleBuf.addFareTable(fareTypes[i].fareK[j]["min"], fareTypes[i].fareK[j]["max"], fareTypes[i].fareM[j]);
	}
	fareRule[i] = ruleBuf;
}

/****************************************************/

//本線・初台、幡ヶ谷を乗降禁止駅に指定

lines[0].banUse.push(2);
lines[0].banUse.push(3);