// JavaScript Document

// Non side specific

// Primary
// Rifle
function buyAWP(money, choice){
	$("#" + choice + " #prim").text("AWP");
	$("#" + choice + " #prim").attr("href", "weapons/awp.html");
	return 	money - 4750;
}

function buyScout(money, choice){
	$("#" + choice + " #prim").text("SSG 08");
	$("#" + choice + " #prim").attr("href", "weapons/scout.html");
	return 	money - 3100;
}

//Pistol
function buyP250(money, choice){
	$("#" + choice + " #prim").text("P250");
	$("#" + choice + " #prim").attr("href", "weapons/p250.html");
	return 	money - 300;
}

// Terrorist Weapons

// Primary
//Rifle
function buyAK(money, choice){
	$("#" + choice + " #prim").text("AK47");
	$("#" + choice + " #prim").attr("href", "weapons/ak47.html");
	return 	money - 2700;
}

function buyGalil(money, choice){
	$("#" + choice + " #prim").text("Galil");
	$("#" + choice + " #prim").attr("href", "weapons/galil.html");
	return 	money - 2000;
}

function buySG553(money, choice){
	$("#" + choice + " #prim").text("SG553");
	$("#" + choice + " #prim").attr("href", "weapons/sg553.html");
	return 	money - 3000;
}

function buyG3SG1(money, choice){
	$("#" + choice + " #prim").text("G3SG1");
	$("#" + choice + " #prim").attr("href", "weapons/g3sg1.html");
	return 	money - 5000;
}

// Counter Terrorist weapons

// Primary
// Rifle
function buyM4(money, choice){
	$("#" + choice + " #prim").text("M4A4");
	$("#" + choice + " #prim").attr("href", "weapons/m4.html");
	return 	money - 3100;
}

function buyFamas(money, choice){
	$("#" + choice + " #prim").text("Famas");
	$("#" + choice + " #prim").attr("href", "weapons/famas.html");
	return 	money - 2250;
}

function buyAUG(money, choice){
	$("#" + choice + " #prim").text("Aug");
	$("#" + choice + " #prim").attr("href", "weapons/aug.html");
	return 	money - 3500;
}

function buySCAR20(money, choice){
	$("#" + choice + " #prim").text("M4A4");
	$("#" + choice + " #prim").attr("href", "weapons/m4.html");
	return 	money - 3100;
}
