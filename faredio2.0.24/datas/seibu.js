/**************************

Faredio 1.0 Data File(For 2.0 converted)
Sample#�����S��
Copyright(C) tamantrain

***************************/

/*�f�[�^�t�@�C���̖��O*/
var dataName = "Sample#�����S��";
dataFileName = "seibu.js";		//Faredio2.0�œǂݍ��ނƂ��͂��̍s��ǉ�

/*���w����菭���������炢�̉w����ݒ�*/
var maxCount = MAXSTACT;	//Faredio2.0�œǂݍ��ނƂ���MAXSTACT���w��
/*�S�H��*/
var lineName = new Array("",
				  "�V�h��","�q����","��������","��������","�����ΐ�",
				  "�r�ܐ�","������","�L����","�����L�y����","���R��","�R����",
				  "�������"
				 );	//Faredio2.0�œǂݍ��ނƂ���line��lineName�ɕύX

var showLowestValue = true;	//�ň��^������ɕ\������ꍇ��true�A�����łȂ��ꍇfalse(�����l�Ftrue)
var kirisute = false;		//�����^�����ŁA10�~�����̒[����؂�グ��ꍇ��false�A�؂�̂Ă�ꍇ��true(�����l�Ffalse)

/*�e�H���̉^���K��̔ԍ�*/
var linesByFS = new Array(-1,0,0,0,0,0,0,0,0,0,0,0,0);

/*�����������������K�{��`(�ύX�s��)����������������*/
var sta = new Array(maxCount + 1);
var km = new Array(lineName.length);	//Faredio2.0�œǂݍ��ނƂ���line��lineName�ɕύX
var tokuteiUnchin = new Array();
var kasanType = new Array();

var DATACOUNTER = 0;
for (DATACOUNTER = 0; DATACOUNTER <= maxCount; DATACOUNTER++)
	sta[DATACOUNTER] = new Array(lineName.length);	//Faredio2.0�œǂݍ��ނƂ���line��lineName�ɕύX
for (DATACOUNTER = 0; DATACOUNTER < lineName.length; DATACOUNTER++)	//Faredio2.0�œǂݍ��ނƂ���line��lineName�ɕύX
{
	km[DATACOUNTER] = new Array();
}
/*�^�����Ǘ�����N���X*/
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
/*����H���Ƃ݂Ȃ��H���E���ʉ^�]���s���Ă��ď�芷����K�v���Ȃ��H���̃N���X*/
var DirectLines = function()
{
	var me = this;

	me.linesA = new Array();
	me.linesB = new Array();
	//���ʉ^�]�p�^�[����ǉ�
	me.Add = function(line1, line2)
	{
		me.linesA.push(line1);
		me.linesB.push(line2);
	}
	//���ʉ^�]���s���Ă���H�����m�F
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
/*���������������������������܂ŕҏW�s����������������������*/

/*�^���K��*/

/*���ʉ^��*/
/*�K��0*/
//Faredio2.0�œǂݍ��ޏꍇ��IC�J�[�h�̉^�������
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

/*����^��*/


/*�V�h��*/
sta[17][1] = "�����V�h";	km[1][17] = 0;
sta[18][1] = "���c�n��";	km[1][18] = 20;
sta[19][1] = "������";		km[1][19] = 12;
sta[20][1] = "����";		km[1][20] = 07;
sta[21][1] = "�V���t�O";	km[1][21] = 13;
sta[22][1] = "����";		km[1][22] = 09;
sta[23][1] = "���";		km[1][23] = 10;
sta[24][1] = "�s���Ɛ�";	km[1][24] = 09;
sta[25][1] = "��m�{";		km[1][25] = 05;
sta[26][1] = "���䑐";		km[1][26] = 13;
sta[27][1] = "�䉬";		km[1][27] = 09;
sta[28][1] = "��䑐";		km[1][28] = 10;
sta[29][1] = "��ΐ_��";	km[1][29] = 11;
sta[30][1] = "������";		km[1][30] = 13;
sta[31][1] = "������";		km[1][31] = 12;
sta[32][1] = "��������";	km[1][32] = 10;
sta[33][1] = "�c��";		km[1][33] = 13;
sta[34][1] = "�ԏ�����";	km[1][34] = 23;
sta[35][1] = "����";		km[1][35] = 27;
sta[36][1] = "�v�Đ�";		km[1][36] = 20;
sta[37][1] = "�����R";		km[1][37] = 14;
sta[38][1] = "����";		km[1][38] = 29;
sta[63][1] = "�q�����";	km[1][63] = 16;
sta[64][1] = "�V����";		km[1][64] = 12;
sta[65][1] = "���]";		km[1][65] = 39;
sta[66][1] = "���R�s";		km[1][66] = 30;
sta[67][1] = "�V���R";		km[1][67] = 27;
sta[68][1] = "����";		km[1][68] = 26;
sta[69][1] = "�{��z";		km[1][69] = 36;

/*�q����*/
sta[35][2] = "����";		km[2][35] = 0;
sta[50][2] = "���R";		km[2][50] = 11;
sta[54][2] = "����";		km[2][54] = 16;
sta[55][2] = "����a�s";	km[2][55] = 30;
sta[56][2] = "�ʐ�㐅";	km[2][56] = 15;
sta[57][2] = "��������";	km[2][57] = 24;
sta[58][2] = "��������";	km[2][58] = 20;
sta[59][2] = "�q��";		km[2][59] = 27;

/*��������*/
sta[37][3] = "�����R";		km[3][37] = 0;
sta[54][3] = "����";		km[3][54] = 21;
sta[60][3] = "��̑�";		km[3][60] = 15;
sta[61][3] = "�����E";		km[3][61] = 15;
sta[62][3] = "������";		km[3][62] = 27;

/*��������*/
sta[37][4] = "�����R";		km[4][37] = 0;
sta[53][4] = "������";		km[4][53] = 24;

/*�����ΐ�*/
sta[47][5] = "�����V���n";	km[5][47] = 0;
sta[48][5] = "������a";	km[5][48] = 11;
sta[49][5] = "����";		km[5][49] = 25;
sta[50][5] = "���R";		km[5][50] = 10;
sta[51][5] = "�~�X��";	km[5][51] = 12;
sta[52][5] = "�ꋴ�w��";	km[5][52] = 10;
sta[62][5] = "������";		km[5][62] = 24;

/*�r�ܐ�*/
sta[1][6] = "�r��";			km[6][1] = 0;
sta[2][6] = "�Ŗ���";		km[6][2] = 19;
sta[3][6] = "������";		km[6][3] = 12;
sta[4][6] = "�]�Óc";		km[6][4] = 12;
sta[5][6] = "����";			km[6][5] = 09;
sta[6][6] = "���n";			km[6][6] = 08;
sta[7][6] = "������";		km[6][7] = 15;
sta[8][6] = "�x�m����";		km[6][8] = 08;
sta[9][6] = "���n�����";	km[6][9] = 12;
sta[10][6] = "�ΐ_�����";	km[6][10] = 11;
sta[11][6] = "���w��";	km[6][11] = 19;
sta[12][6] = "�ےJ";		km[6][12] = 16;
sta[13][6] = "�Ђ΂�P�u";	km[6][13] = 23;
sta[14][6] = "���v����";	km[6][14] = 14;
sta[15][6] = "����";		km[6][15] = 18;
sta[16][6] = "�H��";		km[6][16] = 22;
sta[38][6] = "����";		km[6][38] = 30;
sta[39][6] = "������";		km[6][39] = 24;
sta[70][6] = "����w";		km[6][70] = 22;
sta[71][6] = "���R���u";	km[6][71] = 22;
sta[72][6] = "��������";	km[6][72] = 13;
sta[73][6] = "��׎R����";	km[6][73] = 30;
sta[74][6] = "���Ԏs";		km[6][74] = 09;
sta[75][6] = "���q";		km[6][75] = 29;
sta[76][6] = "������";		km[6][76] = 13;
sta[77][6] = "�є\";		km[6][77] = 27;
sta[78][6] = "���є\";		km[6][78] = 08;
sta[79][6] = "����";		km[6][79] = 40;
sta[80][6] = "��������";	km[6][80] = 28;
sta[81][6] = "�����";		km[6][81] = 25;
sta[82][6] = "���";		km[6][82] = 40;

/*������*/
sta[82][7] = "���";		km[7][82] = 0;
sta[83][7] = "�����";		km[7][83] = 36;
sta[84][7] = "����";		km[7][84] = 27;
sta[85][7] = "���P�v��";	km[7][85] = 61;
sta[86][7] = "����";		km[7][86] = 40;
sta[87][7] = "��������";	km[7][87] = 26;

/*�L����*/
sta[6][8] = "���n";			km[8][6] = 0;
sta[40][8] = "�L����";		km[8][40] = 10;

/*�����L�y����*/
sta[6][9] = "���n";			km[9][6] = 0;
sta[41][9] = "�V����";		km[9][41] = 14;
sta[42][9] = "���|����";	km[9][42] = 12;

/*���R��*/
sta[39][10] = "������";		km[10][39] = 0;
sta[43][10] = "���R��";		km[10][43] = 18;
sta[44][10] = "��������O";	km[10][44] = 24;

/*�R����*/
sta[44][11] = "��������O";	km[11][44] = 0;
sta[46][11] = "�V���n��";	km[11][46] = 25;
sta[47][11] = "�����V���n";	km[11][47] = 03;

/*�������*/
sta[89][12] = "������";		km[12][89] = 0;
sta[90][12] = "�V������";	km[12][90] = 19;
sta[91][12] = "����";		km[12][91] = 22;
sta[92][12] = "������";		km[12][92] = 14;
sta[93][12] = "������O";	km[12][93] = 15;
sta[94][12] = "����";		km[12][94] = 10;

/******Faredio 2.0�f�[�^�ɓǂݑւ���X�N���v�g*******/

//�w�̒ǉ�
for (var i=0; i<MAXSTACT; i++) {
	for (var j=1; j<lineName.length; j++) {
		if (sta[i][j]!=undefined) {
			stationList.staList[i] = new Station(sta[i][j], "", "");
			break;
		}
	}
}

//�H���̒ǉ�
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

//�^���K��̒ǉ�
for (var i=0; i<fareTypes.length; i++) {
	var ruleBuf = new FareTable(1);
	for (var j=0; j<fareTypes[i].fareM.length; j++) {
		ruleBuf.fareRows.push(new FareRow(fareTypes[i].fareK[j]["min"], fareTypes[i].fareK[j]["max"], fareTypes[i].fareM[j]));
	}
	fareRule[i] = ruleBuf;
}

/****************************************************/

MAXLINE = 5;