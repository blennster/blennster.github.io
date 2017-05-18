// JavaScript Document

// Only weapons that are used

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

// SMG 
function buyUMP45(money, choice){
	$("#" + choice + " #prim").text("UMP45");
	$("#" + choice + " #prim").attr("href", "weapons/UMP45.html");
	return 	money - 1200;
}

//Pistol
function buyP250(money, choice){
	$("#" + choice + " #sec").text("P250");
	$("#" + choice + " #sec").attr("href", "weapons/p250.html");
	return 	money - 300;
}

function buyDual(money, choice){
	$("#" + choice + " #sec").text("Dual Berettas");
	$("#" + choice + " #sec").attr("href", "weapons/dual.html");
	return 	money - 500;
}

function buyDeagle(money, choice){
	$("#" + choice + " #sec").text("Desert Eagle");
	$("#" + choice + " #sec").attr("href", "weapons/deagle.html");
	return 	money - 700;
}

//Heavy
function buyM249(money, choice){
	$("#" + choice + " #prim").text("M249");
	$("#" + choice + " #prim").attr("href", "weapons/m249.html");
	return 	money - 5200;
}

//Items
function buyHelmet(money, choice){
	$("#" + choice + " #arm").text("Helmet");
	$("#" + choice + " #arms").attr("href", "weapons/armor.html");
	return 	money - 1000;
}
function buyVest(money, choice){
	$("#" + choice + " #arm").text("Vest");
	$("#" + choice + " #arms").attr("href", "weapons/armor.html");
	return 	money - 650;
}
function buyDefuser(money, choice){
	$("#" + choice + " #def").text("Yes");
	$("#" + choice + " #def").attr("href", "items/defuser.html");
	return 	money - 400;
}

// Grenades
function buyHE(money, choice){
	$("#" + choice + " #he").text("1");
	return 	money - 300;
}
function buyFlash(money, choice){
	$("#" + choice + " #flash").text("1");
	return 	money - 200;
}
function buyFlashx2(money, choice){
	$("#" + choice + " #flash").text("2");
	return 	money - 400;
}
function buySmoke(money, choice){
	$("#" + choice + " #smoke").text("1");
	return 	money - 300;
}
function buyMolo(money, choice){
	$("#" + choice + " #molo").text("1");
	return 	money - 400;
}
function buyIncen(money, choice){
	$("#" + choice + " #incen").text("1");
	return 	money - 600;
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

//Pistol
function buyTec9(money, choice){
	$("#" + choice + " #sec").text("Tec-9");
	$("#" + choice + " #sec").attr("href", "weapons/tec9.html");
	return 	money - 500;
}

function buyGlock(money, choice){
	$("#" + choice + " #sec").text("Glock");
	$("#" + choice + " #sec").attr("href", "weapons/glock.html");
	return 	money - 500;
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
	$("#" + choice + " #prim").text("SCAR20");
	$("#" + choice + " #prim").attr("href", "weapons/scar20.html");
	return 	money - 3100;
}

//Pistol
function buyFiveSeven(money, choice){
	$("#" + choice + " #sec").text("Five SeveN");
	$("#" + choice + " #sec").attr("href", "weapons/fiveseven.html");
	return 	money - 500;
}

function buyUSP(money, choice){
	$("#" + choice + " #sec").text("USP");
	$("#" + choice + " #sec").attr("href", "weapons/usp.html");
	return 	money;
}
