/**************************

Faredio 1.0 Data File(For 2.0 converted)
Sample#�����d�S
Copyright(C) tamantrain

***************************/

/*�f�[�^�t�@�C���̖��O*/
dataName = "Sample#�����d�S";
userCalc = "keio_kasan.js";		//Faredio2.0�p�ɒǉ������s
dataFileName = "keio.js";		//Faredio2.0�ł͂��̍s��ǉ�

/*���w����菭���������炢�̉w����ݒ�*/
var maxCount = MAXSTACT;	//Faredio2.0�œǂݍ��ނƂ���MAXSTACT
/*�S�H��*/
//line��lineName�ɕύX
var lineName = new Array("","������","�����V��","���͌���","���n���","��������","��̓���","������");

var showLowestValue = true;	//�ň��^������ɕ\������ꍇ��true�A�����łȂ��ꍇfalse(�����l�Ftrue)
var kirisute = false;		//�����^�����ŁA10�~�����̒[����؂�グ��ꍇ��false�A�؂�̂Ă�ꍇ��true(�����l�Ffalse)

/*�e�H���̉^���K��̔ԍ�*/
var linesByFS = new Array(-1,0,0,0,0,0,0,0,0);

/*�����������������K�{��`(�ύX�s��)����������������*/
var sta = new Array(maxCount + 1);
var km = new Array(lineName.length);	//line��lineName�ɕύX
var tokuteiUnchin = new Array();
var kasanType = new Array();

var DATACOUNTER = 0;
for (DATACOUNTER = 0; DATACOUNTER <= maxCount; DATACOUNTER++)
	sta[DATACOUNTER] = new Array(lineName.length);	//line��lineName�ɕύX
for (DATACOUNTER = 0; DATACOUNTER < lineName.length; DATACOUNTER++)	//line��lineName�ɕύX
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

/*����^��*/


/*���Z����^��*/
kasan[0] = new Fare();
kasan[0].addCostToKillo(1, 8, 10);
kasan[0].addCostToKillo(9, 13,20);
kasan[0].addCostToKillo(14,16,40);
kasan[0].addCostToKillo(17,19,60);
kasan[0].addCostToKillo(20,22,80);


/*������*/
sta[1][1] = "�V�h";		km[1][1] = 0;
sta[2][1] = "����";		km[1][2] = 17;
sta[3][1] = "�����J";		km[1][3] = 10;
sta[4][1] = "����";		km[1][4] = 9;
sta[5][1] = "��c��";		km[1][5] = 8;
sta[13][1] = "����O";		km[1][13] = 8;
sta[23][1] = "�������";	km[1][23] = 9;
sta[24][1] = "���㐅";		km[1][24] = 9;
sta[25][1] = "��k��";		km[1][25] = 8;
sta[26][1] = "�����R";		km[1][26] = 6;
sta[27][1] = "���Ԍ���";	km[1][27] = 7;
sta[28][1] = "��ΉG�R";	km[1][28] = 8;
sta[29][1] = "���";		km[1][29] = 16;
sta[30][1] = "�����u";	km[1][30] = 10;
sta[31][1] = "�č�";		km[1][31] = 8;
sta[32][1] = "����";		km[1][32] = 9;
sta[33][1] = "�z�c";		km[1][33] = 7;
sta[34][1] = "���z";		km[1][34] = 6;
sta[47][1] = "�����z";		km[1][47] = 15;
sta[48][1] = "��c��";		km[1][48] = 7;
sta[49][1] = "�������";	km[1][49] = 11;
sta[50][1] = "�����쉀";	km[1][50] = 8;
sta[51][1] = "���{��";		km[1][51] = 8;
sta[53][1] = "�{��";		km[1][53] = 15;
sta[54][1] = "���{�͌�";	km[1][54] = 12;
sta[55][1] = "���͌�";		km[1][55] = 16;
sta[56][1] = "���֍����u";	km[1][56] = 16;
sta[57][1] = "�S����";		km[1][57] = 17;
sta[58][1] = "�����s��";	km[1][58] = 17;
sta[60][1] = "�약";		km[1][60] = 24;
sta[61][1] = "���R�隬����";	km[1][61] = 13;
sta[62][1] = "����";		km[1][62] = 15;
sta[63][1] = "�k��";		km[1][63] = 12;
sta[70][1] = "���������q";	km[1][70] = 18;

/*�����V��*/
sta[1][2] = "�V���V�h";		km[2][1] = 0;
sta[2][2] = "����";		km[2][2] = 17;
sta[3][2] = "�����J";		km[2][3] = 10;
sta[4][2] = "����";		km[2][4] = 9;

/*���͌���*/
directLines.Add(3, 8);	//�H���ԍ�3�ƘH���ԍ�5�͓���H���ł��邱�Ƃ��`
sta[34][3] = "���z";		km[3][34] = 0;
sta[35][3] = "����������";	km[3][35] = 12;
//kasanType[8] = 0;	//���Z����^���̎w��
//sta[35][3] = "����������";	km[3][35] = 0;
sta[36][3] = "������c��";	km[3][36] = 13;
sta[37][3] = "������݂��胉���h";km[3][37] = 14;
sta[38][3] = "���";		km[3][38] = 16;
sta[40][3] = "��t��";		km[3][40] = 33;
sta[41][3] = "�����i�R";	km[3][41] = 26;
sta[42][3] = "���������Z���^�[";km[3][42] = 23;
sta[43][3] = "�����x�V��";	km[3][43] = 23;
sta[44][3] = "����";		km[3][44] = 22;
sta[45][3] = "������";		km[3][45] = 19;
sta[46][3] = "���{";		km[3][46] = 25;

/*���n���*/
sta[51][4] = "���{��";		km[4][51] = 0;
sta[52][4] = "�{�����n����O";	km[4][52] = 9;

/*��������*/
sta[58][5] = "�����s��";	km[5][58] = 0;
sta[59][5] = "������������";	km[5][59] = 20;

/*��̓���*/
sta[6][6] = "�a�J";		km[6][6] = 0;
sta[7][6] = "�_��";		km[6][7] = 5;
sta[8][6] = "��꓌��O";	km[6][8] = 9;
sta[9][6] = "�r�m��";		km[6][9] = 10;
sta[10][6] = "���k��";		km[6][10] = 6;
sta[11][6] = "�V��c";		km[6][11] = 5;
sta[12][6] = "������";		km[6][12] = 5;
sta[13][6] = "����O";		km[6][13] = 9;
sta[14][6] = "�i����";		km[6][14] = 11;
sta[15][6] = "���i��";		km[6][15] = 7;
sta[16][6] = "�l�c�R";		km[6][16] = 8;
sta[17][6] = "�����";		km[6][17] = 12;
sta[18][6] = "�x�m�����u";	km[6][18] = 8;
sta[19][6] = "�v��R";		km[6][19] = 7;
sta[20][6] = "�O���";		km[6][20] = 10;
sta[21][6] = "��̓�����";	km[6][21] = 9;
sta[22][6] = "�g�ˎ�";		km[6][22] = 6;

/*������*/
sta[63][7] = "�k��";		km[7][63] = 0;
sta[64][7] = "�����Бq";	km[7][64] = 17;
sta[65][7] = "�R�c";		km[7][65] = 15;
sta[66][7] = "�߂����";	km[7][66] = 11;
sta[67][7] = "����";		km[7][67] = 15;
sta[68][7] = "����";		km[7][68] = 11;
sta[69][7] = "�����R��";	km[7][69] = 17;

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
		ruleBuf.addFareTable(fareTypes[i].fareK[j]["min"], fareTypes[i].fareK[j]["max"], fareTypes[i].fareM[j]);
	}
	fareRule[i] = ruleBuf;
}

/****************************************************/

//�{���E����A�����J����~�֎~�w�Ɏw��

lines[0].banUse.push(2);
lines[0].banUse.push(3);