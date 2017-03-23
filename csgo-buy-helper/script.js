// JavaScript Document

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
	if(inputText != ""){
		$("#alternatives").css("opacity", "1");	
	}else{
		$("#alternatives").css("opacity", "0");	
	}
});