var bg = document.getElementById("color-background");
var matcher = document.getElementById("color-matcher");

var redBorder = document.getElementById("red-border");
var greenBorder = document.getElementById("green-border");
var blueBorder = document.getElementById("blue-border");

var redBar = document.getElementById("red");
var greenBar = document.getElementById("green");
var blueBar = document.getElementById("blue");

var correctRed = document.getElementById("correct-red");
var correctGreen = document.getElementById("correct-green");
var correctBlue = document.getElementById("correct-blue");

var hexVal = document.getElementById("hex-val")

var red = 255;
var green = 255;
var blue = 255;

var targetRed;
var targetGreen;
var targetBlue;

var selected = 0;

function ChangeColor(type){
	if(type == "add"){
		if(selected == 0 && red != 255){
			red++;
		}
		else if(selected == 1 && green != 255){
			green++;
		}
		if(selected == 2 && blue != 255){
			blue++;
		}
	}
	if(type == "remove"){
		if(selected == 0 && red != 0){
			red--;
		}
		else if(selected == 1 && green != 0){
			green--;
		}
		if(selected == 2 && blue != 0){
			blue--;
		}
	}
	redBar.style.height = ((red / 255) * 100).toString() + "%";
	greenBar.style.height = ((green / 255) * 100).toString() + "%";
	blueBar.style.height = ((blue / 255) * 100).toString() + "%";

	matcher.style.background = GetRGBColor(red, green, blue);
	hexVal.innerHTML = "#"+("00000"+(red<<16|green<<8|blue).toString(16)).slice(-6);
}

function ChangeSelected(direction){
	if(direction == "left" && selected != 0){
		selected--;
	}
	else if(direction == "right" && selected != 2){
		selected++;
	}
	BlinkingSelected();
}

// Random int in range from 1 to 255.
function getRandomInt() {
    return Math.floor(Math.random() * (255 - 1 + 1)) + 1;
}

function GetRGBColor(r, g, b){
	return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}

function CorrectVisibility(state){
	correctRed.style.visibility = state;
	correctGreen.style.visibility = state;
	correctBlue.style.visibility = state;
}

// Game Logic:
function Check(){
	CorrectVisibility("visible");
}

function NewGame(){
	targetRed = getRandomInt();
	targetGreen = getRandomInt();
	targetBlue = getRandomInt();

	correctRed.style.height = ((targetRed / 255) * 100).toString() + "%";
	correctGreen.style.height = ((targetGreen / 255) * 100).toString() + "%";
	correctBlue.style.height = ((targetBlue / 255) * 100).toString() + "%";

	bg.style.background = GetRGBColor(targetRed, targetGreen, targetBlue);

	CorrectVisibility("hidden");
}

// Keyboard events
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) { // Left
        ChangeSelected("left");
    }
    else if(event.keyCode == 39) { // Right
        ChangeSelected("right");
    }
    if(event.keyCode == 38) { // Up
    	ChangeColor("add");
    }
    else if(event.keyCode == 40) { // Down
        ChangeColor("remove");
    }
});

function BlinkingSelected(){
	switch(selected){
		case 0:
			redBorder.style.animation = "blinker 2s linear infinite";
			greenBorder.style.animation = "none";
			blueBorder.style.animation = "none";
			break;
		case 1:
			redBorder.style.animation = "none";
			greenBorder.style.animation = "blinker 2s linear infinite";
			blueBorder.style.animation = "none";
			break;
		case 2:
			redBorder.style.animation = "none";
			greenBorder.style.animation = "none";
			blueBorder.style.animation = "blinker 2s linear infinite";
			break;
	}
}

