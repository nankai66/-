/**************************

Faredio 2.0 Usersetting script
Sample#京王電鉄(加算運賃計算用)
Copyright(C) tamantrain

***************************/

//***加算運賃計算を行うため、メソッドをオーバーライド***

FoundRoute.prototype.scFare = function() {
	var addFare = new FareTable(1);
	//加算運賃の設定を入力
	addFare.addFareTable(1, 8, 10);
	addFare.addFareTable(9, 13,20);
	addFare.addFareTable(14,16,40);
	addFare.addFareTable(17,19,60);
	addFare.addFareTable(20,22,80);

	for (var i=1; i<this.route.length; i+=2) {
		if (this.route[i]==2) {
			if (this.route[i-1]==34) {
				this.fare.ICFare[0] += addFare.findFareIC(lines[2].distance(35, this.route[i+1]));
				this.fare.TicketFare[0] += addFare.findFareTicket(lines[2].distance(35, this.route[i+1]));
				this.fare.ICFare[2] += addFare.findFareIC(lines[2].distance(35, this.route[i+1]));
				this.fare.TicketFare[2] += addFare.findFareTicket(lines[2].distance(35, this.route[i+1]));
			} else if (this.route[i+1]==34) {
				this.fare.ICFare[0] += addFare.findFareIC(lines[2].distance(35, this.route[i-1]));
				this.fare.TicketFare[0] += addFare.findFareTicket(lines[2].distance(35, this.route[i-1]));
				this.fare.ICFare[2] += addFare.findFareIC(lines[2].distance(35, this.route[i-1]));
				this.fare.TicketFare[2] += addFare.findFareTicket(lines[2].distance(35, this.route[i-1]));
			} else {
				this.fare.ICFare[0] += addFare.findFareIC(lines[2].distance(this.route[i-1], this.route[i+1]));
				this.fare.TicketFare[0] += addFare.findFareTicket(lines[2].distance(this.route[i-1], this.route[i+1]));
				this.fare.ICFare[2] += addFare.findFareIC(lines[2].distance(this.route[i-1], this.route[i+1]));
				this.fare.TicketFare[2] += addFare.findFareTicket(lines[2].distance(this.route[i-1], this.route[i+1]));
			}
		}
	}
}