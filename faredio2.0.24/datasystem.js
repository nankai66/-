/*************************

Faredio 2.0 Program "datasystem.js"
���̃t�@�C���́AFaredio 2.0�̃V�X�e�����\������K�{�t�@�C���ł��B
�ҏW���Ȃ��ł��������B
Copyright(C) tamantrain

*************************/

//�ϐ���`��(1)
var MAXSTACT = 100;	//1�H���ɍő�ݒu�ł���w��
var MAXFIND = 50;	//����search�֐���������o�H��
var MAXLINE = 5;	//��̌o�H�ɂ����H���܂ŋ��e���邩
var DEFAULTCOLOR = "#9b9b9b";	//����̃��C���J���[
var ERR = -1;	//�G���[�萔

/***************************************/

//1�w�Ɋւ���N���X: Station(�w��, ���[�}���\�L, �w�i���o�����O)
Station = function(_name, _roman, _numberling) {
	this.name = _name;
	this.roman = _roman;
	this.numberling = _numberling;
}

/***************************************/

//�w�S�Ă��Ǘ�����N���X: StationList
StationList = function() {
	this.staList = new Array();
}
//�w���X�g�ɉw��ǉ����郁�\�b�h: addToStaList(������Station�^)
StationList.prototype.addToStaList = function(_station) {
	this.staList.push(_station);
}

//�w������w�ԍ����������ĕԂ��֐�
StationList.prototype.searchFromName = function(_name) {
	var maxCnt = this.staList.length;
	var result = ERR;

	for (var i=0; i<maxCnt; i++) {
		if (this.staList[i].name == _name) {
			result = i; break;
		}
	}

	return result;
}

//���[�}���\�L����w�ԍ����������ĕԂ��֐�
StationList.prototype.searchFromRoman = function(_roman) {
	var maxCnt = this.staList.length;
	var result = ERR;

	for (var i=0; i<maxCnt; i++) {
		if (this.staList[i].roman == _roman) {
			result = i; break;
		}
	}

	return result;
}

//�w�i���o�����O����w�ԍ����������ĕԂ��֐�
StationList.prototype.searchFromNumberling = function(_numberling) {
	var maxCnt = this.staList.length;
	var result = ERR;

	for (var i=0; i<maxCnt; i++) {
		if (this.staList[i].numberling == _numberling) {
			result = i; break;
		}
	}

	return result;
}

/***************************************/
//��芷���֎~�̋K��
//_staNum: �w�ԍ�
//_lineNum: ��芷����̘H��

BanTransfer = function(_staNum, _lineNum) {
	this.staNum = _staNum;
	this.lineNum = _lineNum;
}

/***************************************/

//�H���Ɋւ���N���X: Line
Line = function(_name, _fareRule, _walk, _color) {
	this.name = _name;
	this.staNum = new Array();	//�ݒu�����w�ԍ��̑Ή��\
	this.roadK = new Array();	//i�Ԗڂ���(i+1)�Ԗڂ܂ł̉w�ԃL��
	this.fareRule = _fareRule;	//�K�p����^���K��̔ԍ�
	this.walk = false;
	if (_walk!=undefined) this.walk = _walk;	//�k���A���Ȃ�true
	this.banUse = new Array();	//��~�֎~�w
	this.banTrans = new Array();	//��芷���֎~�w
	this.color = DEFAULTCOLOR;
	if (_color != undefined) this.color = _color;	//�H���J���[
}

Line.prototype.setSta = function(_staNum, _roadK) {
	for (var i=0; i<_staNum.length; i++) {
		this.staNum[i] = _staNum[i];
		if (i<_roadK.length) this.roadK[i] = _roadK[i];
	}
}

//���̘H����ɂ��̉w�����邩�ǂ����𔻒肵�A����΂��̘H���ɂ�����w�ԍ����A�Ȃ���΃G���[�l�ŕԂ����\�b�h
Line.prototype.exsist = function(_staNum) {
	var result = ERR;

	for (var i=0; i<this.staNum.length; i++) {
		if (this.staNum[i] == _staNum) { result = i; break; }
	}

	return result;
}

//�H�����̓�w�Ԃ̃L������Ԃ����\�b�h
//sta1, sta2�͉w�ԍ��Ŏw��F���w�Ƃ����̘H����ɂ��邱�Ƃ��O��
Line.prototype.distance = function(sta1, sta2) {
	var sta1IL = this.exsist(sta1);
	var sta2IL = this.exsist(sta2);
	var sta12buf = 0;
	var killo = 0;

	if (sta1IL > sta2IL) {
		sta12buf = sta2IL;
		sta2IL = sta1IL;
		sta1IL = sta12buf;
	}

	for (var i=sta1IL; i<sta2IL; i++) {
		killo += this.roadK[i];
	}

	return killo;
}

//�H�����̓�w�Ԃ̃L������Ԃ����\�b�h
//sta1, sta2�͂��̘H���ɂ�����w�ԍ��Ŏw��F���w�Ƃ����̘H����ɂ��邱�Ƃ��O��
Line.prototype.distanceOL = function(sta1, sta2) {
	var sta1IL = sta1;
	var sta2IL = sta2;
	var sta12buf = 0;
	var killo = 0;

	if (sta1IL > sta2IL) {
		sta12buf = sta2IL;
		sta2IL = sta1IL;
		sta1IL = sta12buf;
	}

	for (var i=sta1IL; i<sta2IL; i++) {
		killo += this.roadK[i];
	}

	return killo;
}

//��芷���֎~�w�̎w��
Line.prototype.addBanTrans = function(_staNum, _lineNum) {
	this.banTrans.push(new BanTransfer(_staNum, _lineNum));
}

//���̉w����~�֎~�w���ǂ����𔻒�
Line.prototype.banUseSta = function(_staNumOnLine) {
	var result = false;

	for (var i=0; i<this.banUse.length; i++) {
		if (this.banUse[i]==this.staNum[_staNumOnLine]) { result = true; break; }
	}

	return result;
}

//��芷���֎~���ǂ����𔻒�
Line.prototype.banTransSta = function(_staNumOnLine, _lineNum) {
	var result = false;

	//��~�֎~�w�̏ꍇ��芷���֎~�w�Ɣ���
	result = this.banUseSta(_staNumOnLine);

	if (!result) for (var i=0; i<this.banTrans.length; i++) {
		if (this.banTrans[i].staNum==this.staNum[_staNumOnLine] && this.banTrans[i].lineNum==_lineNum) {
			result = true; break;
		}
	}

	return result;
}

/***************************************/

//�^�����ڂ�1��1��: FareRow(�^����IC�J�[�h�̉^���Ŏw��)
FareRow = function(_minK, _maxK, _fare) {
	this.minK = _minK;
	this.maxK = _maxK;
	this.fare = _fare;
}

//�����Ղ̎��̉^�����擾���郁�\�b�h
FareRow.prototype.getTicketFare = function(_ICmode) {
	//_ICmode
	//0: �����Ղ̏ꍇIC�J�[�h�̉^���̉~�P�ʐ؂�̂�
	//1: �����Ղ̏ꍇIC�J�[�h�̉^���̉~�P�ʐ؂�グ
	//2: �����Ղ̏ꍇIC�J�[�h�̉^���̉~�P�ʎl�̌ܓ�
	//����ȊO: �����Ղ�IC�J�[�h�̉^���͓���

	var baseFare = this.fare;	//��̉^��(IC��l)
	var adultFare = baseFare;	//�����Ղ̑�l�^��

	switch (_ICmode) {
	  case 0: adultFare = 10*Math.floor(baseFare*0.1); break;
	  case 1: adultFare = 10*Math.ceil(baseFare*0.1); break;
	  case 2: adultFare = 10*Math.round(baseFare*0.1); break;
	}

	return adultFare;
}

/***************************************/

//�^���K����߂�N���X: FareTable
FareTable = function(_ICmode) {
	this.fareRows = new Array();
	this.ICmode = _ICmode;
}

FareTable.prototype.addFareTable = function(_minK, _maxK, _fare) {
	var fareRowBuf = new FareRow(_minK, _maxK, _fare);
	this.fareRows.push(fareRowBuf);
}
//�e�[�u������IC�^����Ԃ����\�b�h
FareTable.prototype.findFareIC = function(_killo) {
	var foundFare = 0;

	for (var i=0; i<this.fareRows.length; i++) {
		if ((this.fareRows[i].minK-1)<_killo && _killo<=this.fareRows[i].maxK) {
			foundFare = this.fareRows[i].fare;
			break;
		}
	}

	return foundFare;
}

//�e�[�u�������Ԍ��̉^����Ԃ����\�b�h
FareTable.prototype.findFareTicket = function(_killo) {
	var foundFare = 0;

	for (var i=0; i<this.fareRows.length; i++) {
		if ((this.fareRows[i].minK-1)<_killo && _killo<=this.fareRows[i].maxK) {
			foundFare = this.fareRows[i].getTicketFare(this.ICmode);
			break;
		}
	}

	return foundFare;
}

/***************************************/

//����^���̃e�[�u��

SpcFare = function(_fareIC, _fareTicket, _via) {
	//this.sta1 = _sta1;
	//this.sta2 = _sta2;
	this.fareIC = _fareIC;
	this.fareTicket = _fareTicket;
	this.via = _via;
}

/***************************************/

//�ϐ���`��(2)

var stationList = new StationList();
var lines = new Array();
var fareRule = new Array();	//�W���̉^���K��
var dataName = "";		//�f�[�^�̖��O(�S����Ж��Ȃ�)
var dataFileName = "";	//�f�[�^�t�@�C����
var specificFare = new Array();	//����^��
var userCalc ="";		//���[�U�[�w��X�N���v�g�̃t�@�C����

/***************************************/

//�k���A���o�^�N���X
//staGrp: ���݂ɓk���A���\�ȉw�ԍ�(array as integer)
//���R���X�g���N�^�ɂ�莩���ŐV�H�����o�^�����
WalkTransfer = function(_staGrp) {
	for (var i=0; i<_staGrp.length; i++)
	 for (var j=i+1; j<_staGrp.length; j++) {
		var walkRoute = new Line("�k���A��",ERR,true);
		var d = new Array(1);
		d[0]=0;
		walkRoute.setSta(new Array(_staGrp[i], _staGrp[j]), d);
		lines.push(walkRoute);
	}
}