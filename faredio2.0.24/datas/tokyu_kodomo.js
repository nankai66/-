/**************************

Faredio 2.0 Usersetting script
Sample#���}�d�S(���ǂ��̍����̏�p�����v�Z)
Copyright(C) tamantrain

***************************/

//***���ǂ��̍����̉^���v�Z���s�����߁A���\�b�h���I�[�o�[���C�h***

FoundRoute.prototype.scFare = function() {
	//���c�|�t��E�c�ށE������E����������̗��p�ɑ΂�20�~����
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