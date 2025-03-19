/*************************

Faredio 2.0 Program "createForm.js"
���̃t�@�C���́AFaredio 2.0�̃V�X�e�����\������d�v�ȃt�@�C���ł��B
�ҏW���Ȃ��ł��������B
Copyright(C) tamantrain

*************************/

var staLinks1 = new Array(lines.length);
var staLinks2 = new Array(lines.length);


document.writeln("<div class=\"faredioFormSec\">");
document.writeln("<form action=\""+ resultScr +"\">");

document.writeln("<div class=\"faredioFormBox\">");
document.writeln("<div class=\"faredioFormTitle\">");
document.writeln(" <span class=\"faredioFormTitle\">�o���w<\/span>");
document.writeln(" <input name=\"lev\" id=\"lev\" type=\"hidden\" value=\"\" \/>");
document.writeln(" <input name=\"vl\" id=\"vl\" type=\"hidden\" value=\"\" \/>");
document.writeln(" <input name=\"dir\" type=\"hidden\" value=\""+ faredioDir +"\" \/>");
document.writeln(" <input name=\"fn\" type=\"hidden\" value=\""+ dataFileName +"\" \/>");
document.writeln("<\/div>");
document.writeln("<div class=\"faredioFormSelect\">");
document.writeln("<div class=\"faredioFormSelTop\"><input name=\"staName1\" id=\"staName1\" value=\"�w�̑I��\" readonly=\"readonly\" class=\"faredioFormStaName\" \/><\/div>");
document.writeln("<div class=\"faredioFormPulldown\" id=\"staName1Box\">");
/***�w���ꗗ1�̍쐬***/
for (var i=0; i<lines.length; i++) {
	//�k���A���łȂ��ꍇ�̂ݐ���
	if (!lines[i].walk) {
		document.write("<h2 class=\"faredioFormLineName\" style=\"border-color:"+ lines[i].color +";\">");
		document.write(lines[i].name);
		document.writeln("<\/h2><div class=\"faredioFormStaList\">");
		for (var j=0; j<lines[i].staNum.length; j++) {
			//��~�֎~���ǂ������f
			if (!(lines[i].banUseSta(lines[i].staNum[j]) || stationList.staList[lines[i].staNum[j]].name.indexOf("BRH_")==0)) {
				document.write("<a href=\"#faredioFTop\" class=\"faredioFormListItem\" onClick=\"javascript:setSta("+ lines[i].staNum[j] +","+ i +",true);\">");
				document.write(stationList.staList[lines[i].staNum[j]].name);
				document.writeln("<\/a>");
			}
		}
		document.writeln("<\/div>");
	}
}
/********************/
document.writeln("<div class=\"faredioFormClose\"><a href=\"#faredioFTop\" id=\"closeBtn1\">[����]<\/a><\/div>");
document.writeln("<\/div><\/div><\/div>");


document.writeln("<div class=\"faredioFormBox\">");
document.writeln("<div class=\"faredioFormTitle\">");
document.writeln(" <span class=\"faredioFormTitle\">�����w<\/span>");
document.writeln(" <input name=\"arv\" id=\"arv\" type=\"hidden\" value=\"\" \/>");
document.writeln(" <input name=\"gl\" id=\"gl\" type=\"hidden\" value=\"\" \/>");
document.writeln("<\/div>");
document.writeln("<div class=\"faredioFormSelect\">");
document.writeln("<div class=\"faredioFormSelTop\"><input name=\"staName2\" id=\"staName2\" value=\"�w�̑I��\" readonly=\"readonly\" class=\"faredioFormStaName\" \/><\/div>");
document.writeln("<div class=\"faredioFormPulldown\" id=\"staName2Box\">");
/***�w���ꗗ2�̍쐬***/
for (var i=0; i<lines.length; i++) {
	//�k���A���łȂ��ꍇ�̂ݐ���
	if (!lines[i].walk) {
		document.write("<h2 class=\"faredioFormLineName\" style=\"border-color:"+ lines[i].color +";\">");
		document.write(lines[i].name);
		document.writeln("<\/h2><div class=\"faredioFormStaList\">");
		for (var j=0; j<lines[i].staNum.length; j++) {
			//��~�֎~���ǂ������f
			if (!(lines[i].banUseSta(lines[i].staNum[j]) || stationList.staList[lines[i].staNum[j]].name.indexOf("BRH_")==0)) {
				document.write("<a href=\"#faredioFTop\" class=\"faredioFormListItem\" onClick=\"javascript:setSta("+ lines[i].staNum[j] +","+ i +",false);\">");
				document.write(stationList.staList[lines[i].staNum[j]].name);
				document.writeln("<\/a>");
			}
		}
		document.writeln("<\/div>");
	}
}
/********************/
document.writeln("<div class=\"faredioFormClose\"><a href=\"#faredioFTop\" id=\"closeBtn2\">[����]<\/a><\/div>");
document.writeln("<\/div><\/div><\/div>");

document.writeln("<div class=\"faredioFormSubmit\">");
document.writeln("<input type=\"submit\" value=\"����\" class=\"faredioFormSubmit\" \/>");
document.writeln("<\/div><\/form><\/div>");



//***�C�x���g�n���h���̐ݒ�***

var staName1 = document.getElementById("staName1");
var lev = document.getElementById("lev");
var staName2 = document.getElementById("staName2");
var arv = document.getElementById("arv");
var staName1Box = document.getElementById("staName1Box");
var staName2Box = document.getElementById("staName2Box");
var vl = document.getElementById("vl");
var gl = document.getElementById("gl");

//staIdx �w�ԍ�
//lineIdx �H���ԍ�
//setLev �o���w�w��Ȃ�true, �����w�w��Ȃ�false
function setSta(staIdx, lineIdx, setLev) {
	if (setLev) {
		staName1.value = stationList.staList[staIdx].name;
		lev.value = staIdx;
		vl.value = lineIdx;
		staName1Box.style.display = "none";
	} else {
		staName2.value = stationList.staList[staIdx].name;
		arv.value = staIdx;
		gl.value = lineIdx;
		staName2Box.style.display = "none";
	}
}

staName1.addEventListener("focus", function(){ staName1Box.style.display = "block"; staName2Box.style.display = "none"; }, false);
staName2.addEventListener("focus", function(){ staName2Box.style.display = "block"; staName1Box.style.display = "none"; }, false);
document.getElementById("closeBtn1").addEventListener("click", function(){ staName1Box.style.display = "none"; }, false);
document.getElementById("closeBtn2").addEventListener("click", function(){ staName2Box.style.display = "none"; }, false);

//hidden�t�H�[���̓��e�𓯊�
if (staName1.value!="�w�̑I��" && lev.value=="") {
	var sIdxBuf = stationList.searchFromName(staName1.value);
	lev.value = sIdxBuf;
	for (var i=0; i<lines.length; i++) if (lines[i].exsist(sIdxBuf)>0) vl.value = i;
}
if (staName2.value!="�w�̑I��" && arv.value=="") {
	var sIdxBuf = stationList.searchFromName(staName2.value);
	arv.value = sIdxBuf;
	for (var i=0; i<lines.length; i++) if (lines[i].exsist(sIdxBuf)>0) gl.value = i;
}