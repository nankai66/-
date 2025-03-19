/**************************

Faredio 2.0 Usersetting script
Sample#東急電鉄(こどもの国線の乗継割引計算)
Copyright(C) tamantrain

***************************/

//***こどもの国線の運賃計算を行うため、メソッドをオーバーライド***

FoundRoute.prototype.scFare = function() {
	//恩田－青葉台・田奈・つくし野・すずかけ台の利用に対し20円引き
	if (
		((this.route[0]==90 && this.route[this.route.length-1]==51)
			|| (this.route[0]==51 && this.route[this.route.length-1]==90))
		|| ((this.route[0]==90 && this.route[this.route.length-1]==52)
			|| (this.route[0]==52 && this.route[this.route.length-1]==90))
		|| ((this.route[0]==90 && this.route[this.route.length-1]==54)
			|| (this.route[0]==54 && this.route[this.route.length-1]==90))
		|| ((this.route[0]==90 && this.route[this.route.length-1]==55)
			|| (this.route[0]==55 && this.route[this.route.length-1]==90))
	) {
		this.fare.ICFare[0] -= 20;
		this.fare.TicketFare[0] -= 20;
		if (this.route[0]==90) {
			this.fare.ICFare[4] -= 20;
			this.fare.TicketFare[4] -= 20;
		} else {
			this.fare.ICFare[2] -= 20;
			this.fare.TicketFare[2] -= 20;
		}
	}
}