/**************************

Faredio 2.0 Usersetting script
Sample#���}�d�S(���Z�^���v�Z�p)
Copyright(C) tamantrain

***************************/

//***���Z�^���v�Z���s�����߁A���\�b�h���I�[�o�[���C�h***

FoundRoute.prototype.scFare = function() {
	var airPortAdded = false;
	var appliedSpc = false;

	//����^���K�p�ς݂Ȃ珈�����Ȃ�
	for (var i=1; i<this.fare.killo.length; i+=2) {
		if (this.fare.killo[i]==ERR) {
			appliedSpc = true; break;
		}
	}

	if (!appliedSpc) {
		//�H�c��`���ې��^�[�~�i���E�H�c��`�������^�[�~�i�������Ȃ�170�~���Z
		//����^���K�p��ԂƓV��-�H�c��`�������^�[�~�i���ԗ��p�Ȃ珜�O
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