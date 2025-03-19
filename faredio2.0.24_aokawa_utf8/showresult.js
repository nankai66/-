/*************************

Faredio 2.0 Program "showresult.js"
Copyright(C) tamantrain
※このファイルは編集いただけます。
  本ファイルの更新を伴うバージョンアップにご注意ください。

*************************/

var D = window.document;
var imgLevArv = faredioDirG + "lev_arv.gif";
var imgChange = faredioDirG + "chng.gif";

//発駅：着駅が同一のとき
if (levR == arvR) {
	D.writeln("<p>出発駅と到着駅は別の駅を指定してください。<\/p>");
} else if (levR>=0 && arvR>=0) {
	var foundRouteSet = new RouteSet(levR, arvR, strLineR, golLineR);
	var paretoIdx = new Array();

	//検索結果タイトル
	D.write("<h1 class=\"faredioResHeader\">検索結果：　");
	D.write(stationList.staList[levR].name + " → " + stationList.staList[arvR].name + "<\/h1>");

	if (foundRouteSet.routeCnt<1)
		D.writeln("<p>経路が見つかりませんでした。駅を指定し直してください。<\/p>");
	else {
		var visibleRouteCnt = 0;
		for (var i=0; i<foundRouteSet.routeCnt; i++) {
			//分岐点適切性の判定
			if (!foundRouteSet.foundRoutes[i].aprBranch) continue;
			
			//経路がパレート的に優位な解かどうかを判定(パレート解のみ表示する)
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
			
			//運賃が高い場合は距離が最小の経路のみ許可
			if (foundRouteSet.foundRoutes[i].fare.ICFare[0] > foundRouteSet.minFare)
				if (foundRouteSet.foundRoutes[i].fare.killo[0] > foundRouteSet.minKilloSum) continue;

			//経路表示
			var p = 1;

			D.writeln("<table class=\"faredioRtHeader\"><tr>");
			D.writeln("<th class=\"faredioRtHeader\">経路" + (++visibleRouteCnt) + "<\/th>");
			D.writeln("<td class=\"faredioRtHeader\">");
			D.writeln("運賃計算キロ：" + foundRouteSet.foundRoutes[i].fare.killo[0] + "km<br>");
			D.writeln("ICカード(大人)：<strong class=\"faredioRtHeader\">" + foundRouteSet.foundRoutes[i].fare.ICFare[0] + "円<\/strong>");
			D.writeln("　きっぷ(大人)：<strong class=\"faredioRtHeader\">" + foundRouteSet.foundRoutes[i].fare.TicketFare[0] + "円<\/strong>");
			D.writeln("<\/td><\/tr><\/table>");

			D.writeln("<table class=\"faredioRtBody\">");
			for (var j=0; j<foundRouteSet.foundRoutes[i].lineAndSta.length; j++) {
				D.write("<tr>");
				if (j%2) {
					//路線表示
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
						D.write("↓");
					} else if (j<foundRouteSet.foundRoutes[i].lineAndSta.length-2 &&
						lines[foundRouteSet.foundRoutes[i].route[j+2]].fareRule==foundRouteSet.foundRoutes[i].fare.killo[p]) {
						D.write("↓");
					} else {
						D.write(foundRouteSet.foundRoutes[i].fare.killo[p+1] + "km | ");
						D.write(foundRouteSet.foundRoutes[i].fare.ICFare[p+1] + "円");
						p+=2;
					}
					D.write("<\/td>");
				} else {
					//駅表示
					var imgURI = ""; var altText = "";
					if (j==0) { imgURI = imgLevArv; altText="乗車"; }
					else if (j==foundRouteSet.foundRoutes[i].lineAndSta.length-1) { imgURI = imgLevArv; altText="降車"; }
					else { imgURI = imgChange; altText="乗換"; }

					D.write("<td class=\"faredioRtBodyImg\"><img src=\"" + imgURI + "\" width=\"18px\" height=\"18px\" alt=\"" + altText + "\"><\/td>");
					D.write("<td class=\"faredioRtBodySta\" colspan=\"2\">" + foundRouteSet.foundRoutes[i].lineAndSta[j] + "<\/td>");
				}
				D.write("<\/tr>");
			}
			D.writeln("<\/table>");
		}
	}
} else {
	D.writeln("<p>駅を指定し直してください。<\/p>");
}

//以下の記述は消さないで下さい。
D.writeln("<div class=\"faredioSign\">Powered by <a href=\"http://akukuanother.akazunoma.com/\">Faredio " + version + "<\/a><\/div>");