/*************************

Faredio 2.0 Program "getParam.js"
���̃t�@�C���́AFaredio 2.0�̃V�X�e�����\������K�{�t�@�C���ł��B
�ҏW���Ȃ��ł��������B
Copyright(C) tamantrain

*************************/

/*�󂯎�������𐮗�*/
var paramFull = location.search.substring(1, location.search.length);
var paramSep = paramFull.split("&");
var keys = new Object();
var nameBuf = "", cntBuf = "";
var paramBuf = new Array();

for (var i = 0; i < paramSep.length; i++)
{
	paramBuf = paramSep[i].split("=");
	nameBuf = paramBuf[0];
	cntBuf = paramBuf[1];
	keys[nameBuf] = cntBuf;
}

//�������������i�[]
var faredioDirG = decodeURI(keys["dir"]).replace(/%2F/g, "\/");
var fileName = decodeURI(keys["fn"]);
var strLineR = parseInt(keys["vl"]), golLineR = parseInt(keys["gl"]), levR = parseInt(keys["lev"]), arvR = parseInt(keys["arv"]);

//JavaScript ��ǂݍ���
window.document.write('<script type="text/javascript" src="' + (faredioDirG + 'datas\/' + fileName) + '"><\/script>');