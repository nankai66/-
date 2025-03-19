/*************************

Faredio 2.0 Program "core.js"
���̃t�@�C���́AFaredio 2.0�̃V�X�e�����\������K�{�t�@�C���ł��B
�ҏW���Ȃ��ł��������B
Copyright(C) tamantrain

*************************/

//�o�[�W�����ԍ�
var version = "2.0.24";

//var searchCnt = 0;	//search�֐������s���ꂽ��

//���ɒʂ����w�ł��邩�𔻒肷��֐�
//_sta: �w�ԍ�(idx)
//_pastRoute: ����܂ł̌o�H(array as integer)
function pastSta(_sta, _pastRoute) {
	var result = false;
	var staNumOnLineBuf = 0;
	var sta1=0, sta2=0, staBuf=0;

	for (var i=1; i<=(_pastRoute.length-1)/2; i++) {
		//�k���A���̏ꍇ�͏������������̏����ɐi��
		if (lines[_pastRoute[2*i-1]].walk) continue;

		staNumOnLineBuf = lines[_pastRoute[2*i-1]].exsist(_sta);
		//�w�����ׂ�H����ɂȂ��ꍇ�͑��s
		//if (staNumOnLineBuf == ERR) continue;

		sta1 = lines[_pastRoute[2*i-1]].exsist(_pastRoute[2*i-2]);
		sta2 = lines[_pastRoute[2*i-1]].exsist(_pastRoute[2*i]);

		//_pastRoute�̖����̉w��pastSta�Ɋ܂܂Ȃ�
		if (2*i==(_pastRoute.length-1)) {
			if (sta1 < sta2) --sta2;
			else if (sta1 > sta2) ++sta2;
		}

		if (sta1 > sta2) {
			staBuf = sta1;
			sta1 = sta2;
			sta2 = staBuf;
		}
		if (sta1<=staNumOnLineBuf && staNumOnLineBuf<=sta2) {
			result = true; break;
		}
	}

	return result;
}

//2�w�̊ԂɊ��ɒʂ����w�����݂��邩�𒲂ׂ�֐�
//_lineIdx: �H���ԍ�
//_sta1, _sta2: ���̘H���̏�ł̉w�ԍ�(idx)
//_pastRoute: ����܂ł̌o�H
function exsistPastSta(_lineIdx, _sta1, _sta2, _pastRoute) {
	var sta1=_sta1, sta2=_sta2, staBuf=0;
	var result = false;

	if (sta1>sta2) {
		staBuf = sta1;
		sta1 = sta2;
		sta2 = staBuf;
	}

	for (i=sta1; i<=sta2; i++) {
		if (pastSta(lines[_lineIdx].staNum[i], _pastRoute)) {
			result = true; break;
		}
	}

	return result;
}

//startSta: �����J�n�w(idx)
//goalSta: �����I���w(idx)
//startLine: ���p�J�n�H��(idx)
//pastRoute: ����܂ł̌o�H(array as integer)
//tree: ���K�w�ڂ̍ċA��(0: �ŏ��̌Ăяo��)
//�߂�l�͌��������o�H��\��integer�z��(�����Ԗڂ��ʂ����w�A��Ԗڂ���ԘH��)�S�Ă��W�߂��z��
function search(startSta, goalSta, startLine, _pastRoute, tree) {
	var pastRoute = _pastRoute;	//startSta�܂łɒʂ����o�H(buffer)
	//var pastRoute2;			//pastRoute�̑ޔ�p�o�b�t�@
	var foundRoutes = new Array(MAXFIND);	//���������o�H
	var foundCnt = 0;	//���������o�H�̌��𐔂���
	var newFoundRoutes = new Array();	//�V���Ɍ��������o�H(buffer)
	var failed = true;	//�������s�t���O
	var startStaOnLine = lines[startLine].exsist(startSta);
	var goalStaOnLine = lines[startLine].exsist(goalSta);	//�o���w�A�����w��startLine��ł̈ʒu
	var s1 = 0;	//�抷�w�̌����J�n�ʒu
	var s2 = lines[startLine].staNum.length - 1;	//�抷�w�̌����I���ʒu
	//var testStrings = "";	//�e�X�g�p�A���[�g
	var x1 = 0, x2 = 0;		//���̏抷�����w(x1: �X�^�[�g�w���ԍ��̏�������; x2: �X�^�[�g�w���ԍ��̑傫����)

	//startSta�ł͕ʘH���ւ̏�芷�����s�����Ƃ͂Ȃ�

	//�{�֐��ł͎��s�񐔂𐧌�
	//startLine���startSta���g�p�֎~�w�̂Ƃ��͌������s��Ȃ�
	if (_pastRoute.length <= 2*MAXLINE-1 && !lines[startLine].banUseSta(startStaOnLine)) {

	//foundRoutes�z���������
	for (var i=0; i<MAXFIND; i++) foundRoutes[i] = new Array();

	//startLine���goalSta������Ƃ�
	//���ɒʂ����w����ԓ��ɑ��݂���Ȃ炱�̑���̓X�L�b�v
	if (goalStaOnLine != ERR && !exsistPastSta(startLine, lines[startLine].exsist(startSta), lines[startLine].exsist(goalSta), _pastRoute)) {
		//��~�֎~�w�Ȃ珈�������Ȃ�
		if (!lines[startLine].banUseSta(goalStaOnLine)) {
			pastRoute.push(startLine);
			pastRoute.push(goalSta);
			//foundRoutes[foundCnt++] = pastRoute;	//���������o�H�ɓo�^
			//���������o�H�ɓo�^
			for (var i=0; i<pastRoute.length; i++) {
				foundRoutes[foundCnt][i] = pastRoute[i];
			}
			foundCnt++;
			//foundRoutes[0] = pastRoute;
			failed = false;	//��������

			//�o�b�t�@�����Z�b�g(2����s����K�v����)
			pastRoute.pop(); pastRoute.pop();
		}
	}

	//��芷���L��̌o�H����(����̉ߒ��Ōo�H�����������ꍇ�ł��s��)

	//�抷�w������
	
	//startLine���goalSta������Ƃ��́A�抷�w�̌����͈͂��i��
	if (goalStaOnLine != ERR) {
		if (startStaOnLine < goalStaOnLine) s2 = goalStaOnLine - 1;
		else s1 = goalStaOnLine + 1;
	}
	x1 = s1; x2 = s2;

	while(x1<=startStaOnLine && startStaOnLine<=x2) {
		var i = 0;	//�抷�����w
		//�����J�n�w��苗���̉����w���珇�Ɍ�������
		if ( lines[startLine].distanceOL(x1, startStaOnLine) >= lines[startLine].distanceOL(x2, startStaOnLine) ) {
			i = x1; x1++;
		} else {
			i = x2; x2--;
		}
		//lines[startLine].staNum[i]�������J�n�w�łȂ��ꍇ�̂ݏ�芷���𒲂ׂ�
		//�����������J�n�w�����[�U�[�ɂ��w�肳�ꂽ��ԉw�̎��ł�����tree=0���̂ݏ�芷����F�߂�
		//�抷�w�܂ł̓����ɉߋ��ɒʉ߂����w������ꍇ�͏�芷����F�߂Ȃ�
		if (!lines[startLine].banUseSta(lines[startLine].staNum[i]) && ((lines[startLine].staNum[i]!=startSta && !exsistPastSta(startLine, lines[startLine].exsist(startSta), i, _pastRoute)) || (tree==0 && lines[startLine].staNum[i]==startSta))) {
			for (var j=0; j<lines.length; j++) {
				if (j != startLine) {
					var changedBuf = false;	//�o�b�t�@�X�V�t���O
					//�H���ԍ�j�ɉwlines[startLine].staNum[i]�����݂���Ȃ�AstartSta��ύX���čČ���
					//��芷���֎~�Ȃ�X�L�b�v
					if (lines[j].exsist(lines[startLine].staNum[i]) != ERR && (!lines[startLine].banTransSta(i, j) || (tree==0 && lines[startLine].staNum[i]==startSta))) {
						//�o�b�t�@�����Z�b�g
						newFoundRoutes = new Array();

						//�o�b�t�@�̍X�V
						//�����[�U�[�w��̏�ԉw�ōŏ��ɏ�芷��(�H���ύX)���s�����ꍇ�̓o�b�t�@���X�V���Ȃ�
						if (lines[startLine].staNum[i] != startSta) {
							pastRoute.push(startLine);
							pastRoute.push(lines[startLine].staNum[i]);
							changedBuf = true;
						}
						//�o���w����芷����w�ɕύX���A�H�����ύX���čČ���
						newFoundRoutes = search(lines[startLine].staNum[i], goalSta, j, pastRoute, tree+1);

						//�o�b�t�@�����Z�b�g(2����s����K�v����)
						if (changedBuf) {
							pastRoute.pop(); pastRoute.pop();
						}
						//�Č����Ō��������o�H��ǉ�(��z��łȂ��ꍇ�̂�)
						for (var k=0; k<newFoundRoutes.length && foundCnt<MAXFIND; k++) {
							if (newFoundRoutes[k].length>0) {
								for (var m=0; m<newFoundRoutes[k].length; m++)
									foundRoutes[foundCnt][m] = newFoundRoutes[k][m];
								foundCnt++;
							}
						}
						//��������
						failed = false;
						}
					}
				}
			}
		}
	}

	//���ʂ�Ԃ��B�������s�̏ꍇ�͋�̔z��Ń��^�[��
	if (failed) foundRoutes = new Array();
	return foundRoutes;
}

//����^���̓K�p���\���𔻒肷��֐�
//�s�\�Ȃ��z��A�\�Ȃ炻�̓���^��([0]IC�^���A[1]��Ԍ��^��)��Ԃ�

function enableSpcFare(_via) {
	var result = new Array();

	for (var i=0; i<specificFare.length; i++) {
		var ableApply = true;

		for (var j=0; j<_via.length; j++)
			if (specificFare[i].via[j]==undefined || specificFare[i].via[j]!=_via[j]) {
				ableApply=false;	break;
			}

		if (!ableApply) {
		ableApply = true;
		for (var j=0; j<_via.length; j++)
			if (specificFare[i].via[j]==undefined || specificFare[i].via[_via.length-1-j]!=_via[j]) {
				ableApply=false;	break;
			}
		}

		if (ableApply) {
			result.push(specificFare[i].fareIC);
			result.push(specificFare[i].fareTicket);
			break;
		}
	}

	return result;
}

//���������o�H����^�����v�Z���ĕێ�����I�u�W�F�N�g
CalcFares = function(_route) {
	var sum_killo_Buf = 0.0;
	var ruleNumBuf = lines[_route[1]].fareRule;
	var sta1 = _route[0];
	var sta2 = 0;
	var viaBuf = new Array();

	this.killo = new Array();
	this.ICFare = new Array();
	this.TicketFare = new Array();

	//�ʎZ�L���E�^����������
	this.killo[0] = 0.0;
	this.ICFare[0] = 0;
	this.TicketFare[0] = 0;

	//�����ŏ��̌o�H���k���A���Ȃ�o�b�t�@��ύX
	if (lines[_route[1]].walk && _route.length>3) {
		ruleNumBuf = lines[_route[3]].fareRule;
		sta1 = _route[2];
	}

	viaBuf[0] = sta1;

	for (var i=1; i<_route.length; i+=2) {
		viaBuf.push(_route[i], _route[i+1]);
		//if (!lines[_route[i]].walk)
			sum_killo_Buf += lines[_route[i]].distance(_route[i-1], _route[i+1]);

		//���O����^���K�肪�ω������Ƃ�
		//else {
		if (i+2>=_route.length || (!lines[_route[i+2]].walk && lines[_route[i+2]].fareRule!=ruleNumBuf)) {
			var spcFareApld = enableSpcFare(viaBuf);
			if (spcFareApld.length>0) {
				//alert("specific Fare applied");
				//����^�����K�p�����ꍇ
				this.killo.push(ERR);	//����^���Ȃ�K��ԍ���ERR
				this.ICFare[0] += spcFareApld[0];
				this.ICFare.push(ERR);
				this.ICFare.push(spcFareApld[0]);
				this.TicketFare[0] += spcFareApld[1];
				this.TicketFare.push(ERR);
				this.TicketFare.push(spcFareApld[1]);
			} else {
				if (ruleNumBuf==ERR) {
					this.killo.push(0);
					this.ICFare.push(ruleNumBuf);
					this.ICFare.push(0);
					this.TicketFare.push(ruleNumBuf);
					this.TicketFare.push(0);
				} else {
					this.killo.push(ruleNumBuf);
					var fIC = fareRule[ruleNumBuf].findFareIC(sum_killo_Buf);
					var fTicket = fareRule[ruleNumBuf].findFareTicket(sum_killo_Buf);
					this.ICFare[0] += fIC;
					this.ICFare.push(ruleNumBuf);
					this.ICFare.push(fIC);
					this.TicketFare[0] += fTicket;
					this.TicketFare.push(ruleNumBuf);
					this.TicketFare.push(fTicket);
				}
			}
			this.killo[0] += sum_killo_Buf;
			this.killo.push(sum_killo_Buf);

			if (i+2<_route.length) {
				ruleNumBuf = lines[_route[i+2]].fareRule;
				sum_killo_Buf = 0.0;
				sta1 = _route[i+1];
				viaBuf = new Array();
				viaBuf[0] = sta1;
			}
		}
	}

	//���������_�덷��␳
	for (var i=0; i<this.killo.length; i++) {
		var buf = this.killo[i] * 10.0;
		this.killo[i] = Math.round(buf) / 10.0;
	}
}

/***�\�[�g�A���S���Y���̎���[�}�[�W�\�[�g,���ʂ�l�̏��������ɕԂ�]***/

SortItem = function(_idx, _data) {
	this.idx = _idx;
	this.data = _data;
}

//�\�[�g���ꂽ2�̔z����}�[�W
//�߂�l�̓}�[�W�����z��

function marge1(_array1, _array2) {
	var result = new Array();
	var j=0, k=0;

	while (j<_array1.length || k<_array2.length) {
		if (j<_array1.length && k<_array2.length) {
			if (_array1[j].data <= _array2[k].data) result.push(_array1[j++]);
			else result.push(_array2[k++]);
		}
		else if (j>=_array1.length && k<_array2.length)
			result.push(_array2[k++]);
		else
			result.push(_array1[j++]);
	}

	return result;
}

function marge2(_arrays) {
	var margedArrays = new Array();
	var i=0;
	var result = new Array();

	for (i=0; i<=_arrays.length-2; i+=2) {
		margedArrays.push(marge1(_arrays[i], _arrays[i+1]));
	}
	//�����ɂ܂��f�[�^���c���Ă���ꍇ
	if (i<_arrays.length) margedArrays.push(_arrays[i]);

	//�}�[�W���s�̏ꍇ
	if (margedArrays.length >= 2) result = marge2(margedArrays);
	//�}�[�W�I���̏ꍇ
	else result = margedArrays;

	return result;
}

//�C�ӂ̔z���l�̏��������Ƀ\�[�g����֐�(�}�[�W�\�[�g)
//�߂�l�̓\�[�g�����ꍇ�̔z��ԍ�
//_array={3,1,5,6,4,2,8}�Ȃ�߂�l��{1,5,0,4,2,3,6}
function margeSort(_array) {
	var margeItems = new Array(_array.length);
	var sortedDatas = new Array();
	var result = new Array;

	for (var i=0; i<_array.length; i++) {
		margeItems[i] = new Array();
		margeItems[i][0] = new SortItem(i, _array[i]);
	}

	sortedDatas = marge2(margeItems);

	for (var i=0; i<sortedDatas[0].length; i++) {
		result[i] = sortedDatas[0][i].idx;
	}

	return result;
}