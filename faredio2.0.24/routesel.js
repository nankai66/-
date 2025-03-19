/*************************

Faredio 2.0 Program "routesel.js"
���̃t�@�C���́AFaredio 2.0�̃V�X�e�����\������K�{�t�@�C���ł��B
�ҏW���Ȃ��ł��������B
Copyright(C) tamantrain

*************************/

/****************************************/
//FoundRoute class

//_route: �o�H�f�[�^
//_inv: �t�o�H=true
FoundRoute = function(_route, _inv) {
	this.route = new Array();
	this.fare = new CalcFares(_route);
	this.lineAndSta = new Array();	//�ʂ����w��,�H���ԍ��𖼏̂ɕϊ����Ċi�[(�z�񒷂���route�Ɠ���)
	this.aprBranch = true;	//����_��ʂ�Ȃ����A�ʂ邪�o�H�Ƃ��ēK�؂ȏꍇtrue

	//�t�o�H�̏ꍇ���]
	if (_inv) {
		for (var i=0; i<_route.length; i++) {
			this.route[i] = _route[_route.length-1-i];
		}
	} else {
		this.route = _route;
	}

	//lineAndSta �z��̐ݒ�
	for (var i=0; i<this.route.length; i++) {
		//��ԖڂȂ�H�����ɕϊ�
		if (i%2) {
			if (lines[this.route[i]].walk)
				this.lineAndSta[i] = "�k��";
			else
				this.lineAndSta[i] = lines[this.route[i]].name;
		}
		//�����ԖڂȂ�w���ɕϊ�
		else {
			//����_�̐ݒ�
			if (stationList.staList[this.route[i]].name.indexOf("BRH_")==0) {
				this.lineAndSta[i] = stationList.staList[this.route[i]].name.substr(4);
				//�o�H�K�ؐ��̔���(����_�̊�w��ʂ�ꍇ�͕s�K�؂Ɣ��f)
				if (this.aprBranch) {
					var brhSta = stationList.searchFromNumberling(stationList.staList[this.route[i]].numberling.substr(4));
					if (pastSta(brhSta, this.route)) this.aprBranch = false;
				}
			}
			else	this.lineAndSta[i] = stationList.staList[this.route[i]].name;
		}
	}
	
	//�S���ɌŗL�ȓ���ȉ^���̌n��K�p
	this.scFare();
}

FoundRoute.prototype.scFare = function() {}

/****************************************/
//RouteSet class

RouteSet = function(_startSta, _goalSta, _startLine, _goalLine) {
	var sortData = new Array();
	var allRoutes = new Array();
	var allRoutesInv = new Array();
	var sortIdxBuf = new Array();
	var sortedDataBuf = new Array();

	//����
	allRoutes = search(_startSta, _goalSta, _startLine, [_startSta], 0);
	//�t���[�g����
	allRoutesInv = search(_goalSta, _startSta, _goalLine, [_goalSta], 0);

	this.foundRoutes = new Array();	//���������o�H
	this.routeCnt = 0;	//���������o�H��

	for (var i=0; i<MAXFIND; i++) {
		if (allRoutes[i]!=undefined && allRoutes[i].length > 0) {
			this.foundRoutes.push(new FoundRoute(allRoutes[i], false));
			this.routeCnt++;
		}
		if (allRoutesInv[i]!=undefined && allRoutesInv[i].length > 0) {
			this.foundRoutes.push(new FoundRoute(allRoutesInv[i], true));
			this.routeCnt++;
		}
	}

	if (this.routeCnt) {
		/**�������ꂽ�f�[�^���^�����Ƀ\�[�g**/
		for (var i=0; i<this.foundRoutes.length; i++) {
			sortData[i] = this.foundRoutes[i].fare.ICFare[0];
		}
		sortIdxBuf = margeSort(sortData);
		for (var i=0; i<sortIdxBuf.length; i++) {
			sortedDataBuf[i] = this.foundRoutes[sortIdxBuf[i]];
		}
		for (var i=0; i<sortedDataBuf.length; i++) {
			this.foundRoutes[i] = sortedDataBuf[i];
		}
		//�ŏ��^��
		this.minFare = this.foundRoutes[0].fare.ICFare[0];

		/**�������ꂽ�f�[�^���o�H�����Ƀ\�[�g**/
		for (var i=0; i<this.foundRoutes.length; i++) {
			sortData[i] = this.foundRoutes[i].route.length;
		}
		sortIdxBuf = margeSort(sortData);
		for (var i=0; i<sortIdxBuf.length; i++) {
			sortedDataBuf[i] = this.foundRoutes[sortIdxBuf[i]];
		}
		for (var i=0; i<sortedDataBuf.length; i++) {
			this.foundRoutes[i] = sortedDataBuf[i];
		}
		//�ŏ��o�H��
		this.minLine = this.foundRoutes[0].route.length;

		/**�������ꂽ�f�[�^��ʎZ�L�������Ƀ\�[�g**/
		for (var i=0; i<this.foundRoutes.length; i++) {
			sortData[i] = this.foundRoutes[i].fare.killo[0];
		}
		sortIdxBuf = margeSort(sortData);
		for (var i=0; i<sortIdxBuf.length; i++) {
			sortedDataBuf[i] = this.foundRoutes[sortIdxBuf[i]];
		}
		for (var i=0; i<sortedDataBuf.length; i++) {
			this.foundRoutes[i] = sortedDataBuf[i];
		}
		//�ŏ��ʎZ�L��
		this.minKilloSum = this.foundRoutes[0].fare.killo[0];

		//�ȏ�̉ߒ��ŃL�������Ƀ\�[�g�����(�L�����A�^���A�o�H���̏��ɗD�悳���)
	}
}