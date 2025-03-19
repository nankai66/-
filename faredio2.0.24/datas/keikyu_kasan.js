/**************************

Faredio 2.0 Usersetting script
Sample#京急電鉄(加算運賃計算用)
Copyright(C) tamantrain

***************************/

//***加算運賃計算を行うため、メソッドをオーバーライド***

FoundRoute.prototype.scFare = function() {
	var airPortAdded = false;
	var appliedSpc = false;

	//特定運賃適用済みなら処理しない
	for (var i=1; i<this.fare.killo.length; i+=2) {
		if (this.fare.killo[i]==ERR) {
			appliedSpc = true; break;
		}
	}

	if (!appliedSpc) {
		//羽田空港国際線ターミナル・羽田空港国内線ターミナル発着なら170円加算
		//特定運賃適用区間と天空橋-羽田空港国内線ターミナル間利用なら除外
		if (
			((this.route[0]==62 || this.route[this.route.length-1]==62)
			|| (this.route[0]==63 || this.route[this.route.length-1]==63))
			&& !((this.route[0]==61 && this.route[this.route.length-1]==62)
			|| (this.route[0]==62 && this.route[this.route.length-1]==61))
			&& !((this.route[0]==61 && this.route[this.route.length-1]==63)
			|| (this.route[0]==63 && this.route[this.route.length-1]==61))
		) {
			this.fare.ICFare[0] += 170;
			this.fare.TicketFare[0] += 170;
			this.fare.ICFare[2] += 170;
			this.fare.TicketFare[2] += 170;
		}
	}
}