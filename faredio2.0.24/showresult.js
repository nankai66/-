/*************************

Faredio 2.0 Program "showresult.js"
Copyright(C) tamantrain
�����̃t�@�C���͕ҏW���������܂��B
  �{�t�@�C���̍X�V�𔺂��o�[�W�����A�b�v�ɂ����ӂ��������B

*************************/

var D = window.document;
var imgLevArv = faredioDirG + "lev_arv.gif";
var imgChange = faredioDirG + "chng.gif";

//���w�F���w������̂Ƃ�
if (levR == arvR) {
	D.writeln("<p>�o���w�Ɠ����w�͕ʂ̉w���w�肵�Ă��������B<\/p>");
} else if (levR>=0 && arvR>=0) {
	var foundRouteSet = new RouteSet(levR, arvR, strLineR, golLineR);
	var paretoIdx = new Array();

	//�������ʃ^�C�g��
	D.write("<h1 class=\"faredioResHeader\">�������ʁF�@");
	D.write(stationList.staList[levR].name + " �� " + stationList.staList[arvR].name + "<\/h1>");

	if (foundRouteSet.routeCnt<1)
		D.writeln("<p>�o�H��������܂���ł����B�w���w�肵�����Ă��������B<\/p>");
	else {
		var visibleRouteCnt = 0;
		for (var i=0; i<foundRouteSet.routeCnt; i++) {
			//����_�K�ؐ��̔���
			if (!foundRouteSet.foundRoutes[i].aprBranch) continue;
			
			//�o�H���p���[�g�I�ɗD�ʂȉ����ǂ����𔻒�(�p���[�g���̂ݕ\������)
			var paretoRoute = true;
			for (var j=0; j<paretoIdx.length; j++) {
				if (foundRouteSet.foundRoutes[paretoIdx[j]].fare.ICFare[0] <= foundRouteSet.foundRoutes[i].fare.ICFare[0]
					&& foundRouteSet.foundRoutes[paretoIdx[j]].route.length <= foundRouteSet.foundRoutes[i].route.length
					&& foundRouteSet.foundRoutes[paretoIdx[j]].fare.killo[0] <= foundRouteSet.foundRoutes[i].fare.killo[0])
				{
					paretoRoute = false;
					break;
				}
			}
			if (paretoRoute) paretoIdx.push(i);
			else continue;
			
			//�^���������ꍇ�͋������ŏ��̌o�H�̂݋���
			if (foundRouteSet.foundRoutes[i].fare.ICFare[0] > foundRouteSet.minFare)
				if (foundRouteSet.foundRoutes[i].fare.killo[0] > foundRouteSet.minKilloSum) continue;

			//�o�H�\��
			var p = 1;

			D.writeln("<table class=\"faredioRtHeader\"><tr>");
			D.writeln("<th class=\"faredioRtHeader\">�o�H" + (++visibleRouteCnt) + "<\/th>");
			D.writeln("<td class=\"faredioRtHeader\">");
			D.writeln("�^���v�Z�L���F" + foundRouteSet.foundRoutes[i].fare.killo[0] + "km<br>");
			D.writeln("IC�J�[�h(��l)�F<strong class=\"faredioRtHeader\">" + foundRouteSet.foundRoutes[i].fare.ICFare[0] + "�~<\/strong>");
			D.writeln("�@������(��l)�F<strong class=\"faredioRtHeader\">" + foundRouteSet.foundRoutes[i].fare.TicketFare[0] + "�~<\/strong>");
			D.writeln("<\/td><\/tr><\/table>");

			D.writeln("<table class=\"faredioRtBody\">");
			for (var j=0; j<foundRouteSet.foundRoutes[i].lineAndSta.length; j++) {
				D.write("<tr>");
				if (j%2) {
					//�H���\��
					D.write("<td class=\"faredioRtBodyLine\"><hr class=");
					if (lines[foundRouteSet.foundRoutes[i].route[j]].walk)
						D.write("\"faredioRtLineWlk\"");
					else {
						D.write("\"faredioRtLineClr\" ");
						D.write("style=\"border-color:" + lines[foundRouteSet.foundRoutes[i].route[j]].color + "\"");
					}
					D.write("><\/td>");
					D.write("<td class=\"faredioRtBodyLineTxt\">");
					D.write(foundRouteSet.foundRoutes[i].lineAndSta[j]);
					D.write("<\/td><td class=\"faredioRtBodyLineFC\">");
					if (j<foundRouteSet.foundRoutes[i].lineAndSta.length-2 &&
						lines[foundRouteSet.foundRoutes[i].route[j+2]].walk) {
						D.write("��");
					} else if (j<foundRouteSet.foundRoutes[i].lineAndSta.length-2 &&
						lines[foundRouteSet.foundRoutes[i].route[j+2]].fareRule==foundRouteSet.foundRoutes[i].fare.killo[p]) {
						D.write("��");
					} else {
						D.write(foundRouteSet.foundRoutes[i].fare.killo[p+1] + "km | ");
						D.write(foundRouteSet.foundRoutes[i].fare.ICFare[p+1] + "�~");
						p+=2;
					}
					D.write("<\/td>");
				} else {
					//�w�\��
					var imgURI = ""; var altText = "";
					if (j==0) { imgURI = imgLevArv; altText="���"; }
					else if (j==foundRouteSet.foundRoutes[i].lineAndSta.length-1) { imgURI = imgLevArv; altText="�~��"; }
					else { imgURI = imgChange; altText="�抷"; }

					D.write("<td class=\"faredioRtBodyImg\"><img src=\"" + imgURI + "\" width=\"18px\" height=\"18px\" alt=\"" + altText + "\"><\/td>");
					D.write("<td class=\"faredioRtBodySta\" colspan=\"2\">" + foundRouteSet.foundRoutes[i].lineAndSta[j] + "<\/td>");
				}
				D.write("<\/tr>");
			}
			D.writeln("<\/table>");
		}
	}
} else {
	D.writeln("<p>�w���w�肵�����Ă��������B<\/p>");
}

//�ȉ��̋L�q�͏����Ȃ��ŉ������B
D.writeln("<div class=\"faredioSign\">Powered by <a href=\"http://akukuanother.akazunoma.com/\">Faredio " + version + "<\/a><\/div>");