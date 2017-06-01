// JavaScript Document

// Enbart vapen som används av spelare
// Onropa en av dessa metoder korrekt så kommer den ändra href attributen och texten till lämpliga värden och subtrahera från pengarna

// Non side specific

//Items
function buyHelmet(money, choice){
	$("#" + choice + " .arm").text("Helmet");
	return 	money - 1000;
}
function buyVest(money, choice){
	$("#" + choice + " .arm").text("Vest");
	return 	money - 650;
}
function buyDefuser(money, choice){
	$("#" + choice + " .def").text("Yes")
	return 	money - 400;
}

// Grenades
function buyHE(money, choice){
	$("#" + choice + " .he").text("1");
	return 	money - 300;
}
function buyFlash(money, choice){
	$("#" + choice + " .flash").text("1");
	return 	money - 200;
}
function buyFlashx2(money, choice){
	$("#" + choice + " .flash").text("2");
	return 	money - 400;
}
function buySmoke(money, choice){
	$("#" + choice + " .smoke").text("1");
	return 	money - 300;
}
function buyMolo(money, choice){
	$("#" + choice + " .molo").text("1");
	return 	money - 400;
}
function buyIncen(money, choice){
	$("#" + choice + " .incen").text("1");
	return 	money - 600;
}

// Primary
// Rifle
function buyAWP(money, choice){
	$("#" + choice + " .prim").text("AWP");
	$("#" + choice + " .prim").attr("href", "rifles/awp.html");
	return 	money - 4750;
}

// SMG
function buyUMP45(money, choice){
	$("#" + choice + " .prim").text("UMP45");
	$("#" + choice + " .prim").attr("href", "smgs/UMP45.html");
	return 	money - 1200;
}

//Pistol
function buyP250(money, choice){
	$("#" + choice + " .sec").text("P250");
	$("#" + choice + " .sec").attr("href", "pistols/p250.html");
	return 	money - 300;
}

//Heavy
function buyM249(money, choice){
	$("#" + choice + " .prim").text("M249");
	$("#" + choice + " .prim").attr("href", "heavy/m249.html");
	return 	money - 5200;
}

// Terrorist Weapons

// Primary
//Rifle
function buyAK(money, choice){
	$("#" + choice + " .prim").text("AK47");
	$("#" + choice + " .prim").attr("href", "rifles/ak47.html");
	return 	money - 2700;
}

//Pistol
function buyGlock(money, choice){
	$("#" + choice + " .sec").text("Glock");
	$("#" + choice + " .sec").attr("href", "pistols/glock.html");
	return 	money - 500;
}


// Counter Terrorist weapons

// Primary
// Rifle
function buyM4(money, choice){
	$("#" + choice + " .prim").text("M4");
	$("#" + choice + " .prim").attr("href", "rifles/m4.html");
	return 	money - 3100;
}

//Pistol
function buyUSP(money, choice){
	$("#" + choice + " .sec").text("USP");
	$("#" + choice + " .sec").attr("href", "pistols/usp.html");
	return 	money;
}
