// JavaScript Document

var T = "choiceT";
var CT = "choiceCT";
var moneyT, moneyCT;

// Scrolla till toppen
$(document).ready(function(){
	 $("html,body").animate({scrollTop: 0}, 1000);
});

// Öppna sidomenyn
$("#handle").click(function(){
	var widthOffset = "-" + $("nav").css("width"); // Anpassar sig efter css stilen

	if($("nav").css("left") == widthOffset){ // Om stängd
		$("nav").css("left", "0px");
	}
	else{
		$("nav").css("left", widthOffset);
	}
});

$("#funding").keyup(function(){
	var inputText = $("#funding").val();
	var money = parseInt(inputText);
	if(inputText != "" && !isNaN(money)){
		buy(money);
		$("#intro").css("display", "none");
		$("#alternatives").css("opacity", "1"); // Set Visible
	}else{
		$("#alternatives").css("opacity", "0");
		$("#intro").css("display", "block");
	}
});

// Updatera reslutat
$(".funding-alts input").change(function(){
	$("#funding").trigger("keyup");
});

function buy(money){
	clear();
	moneyT = money;
	moneyCT = money;
	var firstRound = $("#first").prop("checked");
	var winFirst = $("#round").prop("checked");
	var troll = $("#troll").prop("checked");
	var teamAWP = $("#awp").prop("checked");
	if(money >= 8000)
	{
		if(teamAWP){
			fullBuy();
		}
		else if(troll){
			moneyT = buyM249(moneyT, T);
			moneyCT = buyM249(moneyCT, CT);
			buyHelm();
			buyPistols();
		}
		else if(!troll){
			buyHelm();
			moneyT = buyAWP(moneyT, T);
			moneyT = buyP250(moneyT, T);
			buyGrenades(T);
			moneyCT = buyAWP(moneyCT, CT);
			moneyCT = buyP250(moneyCT, CT);
			moneyCT = buyDefuser(moneyCT, CT);
			moneyCT = buyIncen(moneyCT, CT);
			moneyCT = buyFlash(moneyCT, CT);
			moneyCT = buyHE(moneyCT, CT);
			moneyCT = buySmoke(moneyCT, CT);
		}
	}
	else if(money >= 5500){
		fullBuy();
	}
	else if(money >= 5100)
	{
		fullBuy();
		$("#CT .def").text("No");
		moneyCT += 400;
	}
	else if(money >= 3000){
		if(winFirst){
			buyHelm();
			moneyT = buyUMP45(moneyT, T);
			moneyCT = buyUMP45(moneyCT, CT);
		}
	}
	else if(firstRound){
		moneyT = buyVest(moneyT, T);
		moneyCT = buyVest(moneyCT, CT);
	}

	$("#" + T + " .mon").text("$" + moneyT);
	$("#" + CT + " .mon").text("$" + moneyCT);
}

function fullBuy(){
	moneyT = buyAK(moneyT, T);
	moneyCT = buyM4(moneyCT, CT);
	moneyCT = buyDefuser(moneyCT, CT);
	buyGrenades();
	buyHelm();
	buyPistols();
}

function buyPistols(){
	buyGlock(0, T);
	buyUSP(0, CT);
}

function buyHelm(){
	moneyT = buyHelmet(moneyT, T);
	moneyCT = buyHelmet(moneyCT, CT);
}

function buyGrenades(side){
	if(side == T){
		moneyT = buyFlashx2(moneyT, T);
		moneyT = buyHE(moneyT, T);
		moneyT = buySmoke(moneyT, T);
	}
	else if(side == CT){
		moneyCT = buyFlashx2(moneyCT, CT);
		moneyCT = buyHE(moneyCT, CT);
		moneyCT = buySmoke(moneyCT, CT);
	}
	else{
		moneyT = buyFlashx2(moneyT, T);
		moneyT = buyHE(moneyT, T);
		moneyT = buySmoke(moneyT, T);
		moneyCT = buyFlashx2(moneyCT, CT);
		moneyCT = buyHE(moneyCT, CT);
		moneyCT = buySmoke(moneyCT, CT);
	}
}

function clear(){
	$("#" + CT + " .prim").text("");
	buyUSP(0, CT);
	$("#" + CT + " .arm").text("");
	$("#" + CT + " .def").text("No");
	$("#" + CT + " .flash").text("0");
	$("#" + CT + " .he").text("0");
	$("#" + CT + " .smoke").text("0");
	$("#" + CT + " .incen").text("0");
	$("#" + CT + " .mon").text("$0");

	$("#" + T + " .prim").text("");
	buyGlock(0, T);
	$("#" + T + " .arm").text("");
	$("#" + T + " .flash").text("0");
	$("#" + T + " .he").text("0");
	$("#" + T + " .smoke").text("0");
	$("#" + T + " .molo").text("0");
	$("#" + T + " .mon").text("$0");
}
