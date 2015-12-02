/* driver function to initiate all necessary functions. */
function insertHouse() {
	drawSky();
	drawHouse();
	drawSmoke1();
	drawSmoke2();
	drawSmoke3();
	drawSmoke4();
	drawSmoke5();
	drawSmoke6();
	drawSmoke7();
	drawSmoke8();
	drawSmoke9();
	drawSmoke10();
	drawSmoke11();
	drawSmoke12();
	drawSmoke13();
	drawSmoke14();
	windGenerator();
	$('#houseController').append('hello');
}

// Function to draw sky as backdrop
function drawSky() {
	var sky = document.getElementById("mySky");
	var mySky = sky.getContext("2d");
	
	var skyGrd=mySky.createLinearGradient(600,50,0,250);
	skyGrd.addColorStop(0,"#ec643e");
	skyGrd.addColorStop(1,"#498497");
	
	// sky
	mySky.beginPath();
	mySky.moveTo(0,0);
	mySky.lineTo(0,300);
	mySky.lineTo(300,300);
	mySky.lineTo(300,0);
	mySky.closePath();
	mySky.fillStyle= skyGrd;
	mySky.fill();
}

// Draws house and landscape as topmost layer
function drawHouse() {
	var house = document.getElementById("myHouse");
	var myHouse = house.getContext("2d");
	var x = 100;
	var y = 100;
	var radius = 20;
	// Under house filler
	myHouse.beginPath();
	myHouse.moveTo(259,241);
	myHouse.lineTo(195,239);
	myHouse.lineTo(152,238);
	myHouse.lineTo(152,188);
	myHouse.lineTo(149,187);
	myHouse.lineTo(182,154);
	myHouse.lineTo(229,149);
	myHouse.lineTo(261,182);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(15,6,0)";
	myHouse.fill();

	// Background hills color gradient
	var bkgHillsGrd1=myHouse.createLinearGradient(150,230,150,275);
	bkgHillsGrd1.addColorStop(0,"#003B00");
	bkgHillsGrd1.addColorStop(1,"#001A00");

	//Background hills
	myHouse.beginPath();
	myHouse.moveTo(243,262);
	myHouse.lineTo(203,246);
	myHouse.lineTo(169,236);
	myHouse.lineTo(150,233);
	myHouse.lineTo(135,233);
	myHouse.lineTo(118,233);
	myHouse.lineTo(103,234);
	myHouse.lineTo(87,235);
	myHouse.lineTo(69,238);
	myHouse.lineTo(47,241);
	myHouse.lineTo(32,241);
	myHouse.lineTo(19,239);
	myHouse.lineTo(4,240);
	myHouse.lineTo(0,242);
	myHouse.lineTo(0,293);
	myHouse.lineTo(254,288);
	myHouse.closePath();
	myHouse.fillStyle= bkgHillsGrd1;
	myHouse.fill();
	
	//Fence post 1
	myHouse.beginPath();
	myHouse.moveTo(100,252);
	myHouse.lineTo(100,243);
	myHouse.lineTo(99,235);
	myHouse.lineTo(98,229);
	myHouse.lineTo(98,227);
	myHouse.lineTo(100,228);
	myHouse.lineTo(101,236);
	myHouse.lineTo(102,245);
	myHouse.lineTo(103,253);
	myHouse.closePath();
	myHouse.fillStyle= "#442200";
	myHouse.fill();
	
	//fence post 2
	myHouse.beginPath();
	myHouse.moveTo(58,258);
	myHouse.lineTo(56,249);
	myHouse.lineTo(55,242);
	myHouse.lineTo(55,235);
	myHouse.lineTo(55,234);
	myHouse.lineTo(52,234);
	myHouse.lineTo(53,238);
	myHouse.lineTo(53,247);
	myHouse.lineTo(54,250);
	myHouse.closePath();
	myHouse.fillStyle= "#442200";
	myHouse.fill();
	
	// fence post 3
	myHouse.beginPath();
	myHouse.moveTo(70,251);
	myHouse.lineTo(68,244);
	myHouse.lineTo(68,238);
	myHouse.lineTo(68,233);
	myHouse.lineTo(66,233);
	myHouse.lineTo(66,238);
	myHouse.lineTo(66,245);
	myHouse.lineTo(66,251);
	myHouse.lineTo(66,251);
	myHouse.closePath();
	myHouse.fillStyle= "#442200";
	myHouse.fill();
	// Color gradient for front of house to give "log cabin" appearance
	var frontHousePanelGrd1=myHouse.createLinearGradient(150,150,150,255);
	frontHousePanelGrd1.addColorStop(0,"#904800");
	frontHousePanelGrd1.addColorStop(0.033,"#331A00");
	frontHousePanelGrd1.addColorStop(0.066,"#904800");
	frontHousePanelGrd1.addColorStop(0.1,"#331A00");
	frontHousePanelGrd1.addColorStop(0.133,"#904800");
	frontHousePanelGrd1.addColorStop(0.166,"#331A00");
	frontHousePanelGrd1.addColorStop(0.2,"#904800");
	frontHousePanelGrd1.addColorStop(0.233,"#331A00");
	frontHousePanelGrd1.addColorStop(0.266,"#904800");
	frontHousePanelGrd1.addColorStop(0.3,"#331A00");
	frontHousePanelGrd1.addColorStop(0.333,"#904800");
	frontHousePanelGrd1.addColorStop(0.366,"#331A00");
	frontHousePanelGrd1.addColorStop(0.4,"#904800");
	frontHousePanelGrd1.addColorStop(0.433,"#331A00");
	frontHousePanelGrd1.addColorStop(0.466,"#904800");
	frontHousePanelGrd1.addColorStop(0.5,"#331A00");
	frontHousePanelGrd1.addColorStop(0.533,"#904800");
	frontHousePanelGrd1.addColorStop(0.566,"#331A00");
	frontHousePanelGrd1.addColorStop(0.6,"#904800");
	frontHousePanelGrd1.addColorStop(0.633,"#331A00");
	frontHousePanelGrd1.addColorStop(0.666,"#904800");
	frontHousePanelGrd1.addColorStop(0.7,"#331A00");
	frontHousePanelGrd1.addColorStop(0.733,"#904800");
	frontHousePanelGrd1.addColorStop(0.766,"#331A00");
	frontHousePanelGrd1.addColorStop(0.8,"#904800");
	frontHousePanelGrd1.addColorStop(0.833,"#331A00");
	frontHousePanelGrd1.addColorStop(0.866,"#904800");
	frontHousePanelGrd1.addColorStop(0.9,"#331A00");
	frontHousePanelGrd1.addColorStop(0.933,"#904800");
	frontHousePanelGrd1.addColorStop(0.966,"#331A00");
	frontHousePanelGrd1.addColorStop(1,"#904800");
		
	// Front panel of house
	myHouse.beginPath();
	myHouse.moveTo(193,241);
	myHouse.lineTo(261,241);
	myHouse.lineTo(262,186);
	myHouse.lineTo(258,187);
	myHouse.lineTo(224,154);
	myHouse.lineTo(193,184);
	myHouse.closePath();
	myHouse.fillStyle= frontHousePanelGrd1;
	myHouse.fill();
	// Color gradient for side of house to give shaded "log cabin" appearance
	var leftHousePanelGrd1=myHouse.createLinearGradient(148,150,152,255);
	leftHousePanelGrd1.addColorStop(0,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.033,"#120300");
	leftHousePanelGrd1.addColorStop(0.066,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.1,"#120300");
	leftHousePanelGrd1.addColorStop(0.133,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.166,"#120300");
	leftHousePanelGrd1.addColorStop(0.2,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.233,"#120300");
	leftHousePanelGrd1.addColorStop(0.266,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.3,"#120300");
	leftHousePanelGrd1.addColorStop(0.333,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.366,"#120300");
	leftHousePanelGrd1.addColorStop(0.4,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.433,"#120300");
	leftHousePanelGrd1.addColorStop(0.466,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.5,"#120300");
	leftHousePanelGrd1.addColorStop(0.533,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.566,"#120300");
	leftHousePanelGrd1.addColorStop(0.6,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.633,"#120300");
	leftHousePanelGrd1.addColorStop(0.666,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.7,"#120300");
	leftHousePanelGrd1.addColorStop(0.733,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.766,"#120300");
	leftHousePanelGrd1.addColorStop(0.8,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.833,"#120300");
	leftHousePanelGrd1.addColorStop(0.866,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.9,"#120300");
	leftHousePanelGrd1.addColorStop(0.933,"#4D2600");
	leftHousePanelGrd1.addColorStop(0.966,"#120300");
	leftHousePanelGrd1.addColorStop(1,"#4D2600");
		
	// house panel left
	myHouse.beginPath();
	myHouse.moveTo(193,243);
	myHouse.lineTo(151,244);
	myHouse.lineTo(152,242);
	myHouse.lineTo(152,188);
	myHouse.lineTo(188,185);
	myHouse.lineTo(192,185);
	myHouse.closePath();
	myHouse.fillStyle= leftHousePanelGrd1;
	myHouse.fill();
		
	// House front left corner post
	myHouse.beginPath();
	myHouse.moveTo(194,245);
	myHouse.lineTo(193,183);
	myHouse.lineTo(191,183);
	myHouse.lineTo(191,244);
	myHouse.closePath();
	myHouse.fillStyle= "#1A0D00";
	myHouse.fill();
	
	// front right corner post
	myHouse.beginPath();
	myHouse.moveTo(262,247);
	myHouse.lineTo(262,243);
	myHouse.lineTo(262,182);
	myHouse.lineTo(261,182);
	myHouse.lineTo(261,245);
	myHouse.closePath();
	myHouse.fillStyle= "#1A0D00";
	myHouse.fill();
	
	// back corner post
	myHouse.beginPath();
	myHouse.moveTo(152,249);
	myHouse.lineTo(152,242);
	myHouse.lineTo(152,186);
	myHouse.lineTo(151,186);
	myHouse.lineTo(150,186);
	myHouse.lineTo(150,246);
	myHouse.closePath();
	myHouse.fillStyle= "#1A0D00";
	myHouse.fill();

	
	// chimeny right
	myHouse.beginPath();
	myHouse.moveTo(210,155);
	myHouse.lineTo(210,151);
	myHouse.lineTo(210,149);
	myHouse.lineTo(210,141);
	myHouse.lineTo(207,140);
	myHouse.lineTo(206,139);
	myHouse.lineTo(206,154);
	myHouse.closePath();
	myHouse.fillStyle= roofPanelGrd1;
	myHouse.fill();
	
	// chimeny left
	myHouse.beginPath();
	myHouse.moveTo(206,160);
	myHouse.lineTo(206,153);
	myHouse.lineTo(206,139);
	myHouse.lineTo(204,141);
	myHouse.lineTo(204,154);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(15,5,0)";
	myHouse.fill();
	
	//Roof color gradient;
	var roofPanelGrd1=myHouse.createLinearGradient(209,149,166,191);
	roofPanelGrd1.addColorStop(0,"rgb(27,10,0)");
	roofPanelGrd1.addColorStop(1,"rgb(18,8,0)");
		
	// roof panel
	myHouse.beginPath();
	//myHouse.moveTo(239,145);
	myHouse.lineTo(229,148);
	myHouse.lineTo(197,177);
	myHouse.lineTo(192,182);
	myHouse.lineTo(191,183);
	myHouse.lineTo(187,184);
	myHouse.lineTo(182,184);
	myHouse.lineTo(169,185);
	myHouse.lineTo(153,186);
	myHouse.lineTo(149,186);
	myHouse.lineTo(148,187);
	myHouse.lineTo(146,188);
	myHouse.lineTo(145,187);
	myHouse.lineTo(145,186);
	myHouse.lineTo(148,185);
	myHouse.lineTo(182,154);
	myHouse.lineTo(182,152);
	myHouse.lineTo(183,152);
	myHouse.lineTo(183,153);
	myHouse.lineTo(227,149);
	myHouse.closePath();
	myHouse.fillStyle= roofPanelGrd1;
	myHouse.fill();
	
	
	
	// right roof front face
	myHouse.beginPath();
	myHouse.moveTo(191,183);
	myHouse.lineTo(148,186);
	myHouse.lineTo(147,187);
	myHouse.lineTo(148,188);
	myHouse.lineTo(191,186);
	myHouse.lineTo(193,186);
	myHouse.lineTo(193,184);
	myHouse.lineTo(193,183);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(15,6,0)";
	myHouse.fill();
	// gradient to create shaded log cabin texture
	var underRoofShadowGrd1=myHouse.createLinearGradient(150,150,150,255);
	underRoofShadowGrd1.addColorStop(0,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.033,"#120300");
	underRoofShadowGrd1.addColorStop(0.066,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.1,"#120300");
	underRoofShadowGrd1.addColorStop(0.133,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.166,"#120300");
	underRoofShadowGrd1.addColorStop(0.2,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.233,"#120300");
	underRoofShadowGrd1.addColorStop(0.266,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.3,"#120300");
	underRoofShadowGrd1.addColorStop(0.333,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.366,"#120300");
	underRoofShadowGrd1.addColorStop(0.4,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.433,"#120300");
	underRoofShadowGrd1.addColorStop(0.466,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.5,"#120300");
	underRoofShadowGrd1.addColorStop(0.533,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.566,"#120300");
	underRoofShadowGrd1.addColorStop(0.6,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.633,"#120300");
	underRoofShadowGrd1.addColorStop(0.666,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.7,"#120300");
	underRoofShadowGrd1.addColorStop(0.733,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.766,"#120300");
	underRoofShadowGrd1.addColorStop(0.8,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.833,"#120300");
	underRoofShadowGrd1.addColorStop(0.866,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.9,"#120300");
	underRoofShadowGrd1.addColorStop(0.933,"#4D2600");
	underRoofShadowGrd1.addColorStop(0.966,"#120300");
	underRoofShadowGrd1.addColorStop(1,"#4D2600");
	
	// roof shadow front panel
	myHouse.beginPath();
	myHouse.moveTo(258,188);
	myHouse.lineTo(263,186);
	myHouse.lineTo(228,152);
	myHouse.lineTo(224,155);
	myHouse.closePath();
	myHouse.fillStyle= underRoofShadowGrd1;
	myHouse.fill();
	
	// under roof right front
	myHouse.beginPath();
	myHouse.moveTo(266,184);
	myHouse.lineTo(267,185);
	myHouse.lineTo(265,186);
	myHouse.lineTo(262,185);
	myHouse.lineTo(259,183);
	myHouse.lineTo(227,152);
	myHouse.lineTo(230,150);
	myHouse.lineTo(261,180);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(15,6,0)";
	myHouse.fill();
	
	// right roof front
	myHouse.beginPath();
	myHouse.moveTo(266,184);
	myHouse.lineTo(267,186);
	myHouse.lineTo(265,186);
	myHouse.lineTo(264,185);
	myHouse.lineTo(229,150);
	myHouse.lineTo(229,147);
	myHouse.lineTo(230,147);
	myHouse.lineTo(231,149);
	myHouse.lineTo(267,184);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(20,9,0)";
	myHouse.fill();
	
	// roof front left
	myHouse.beginPath();
	myHouse.moveTo(230,150);
	myHouse.lineTo(191,186);
	myHouse.lineTo(191,183);
	myHouse.lineTo(229,147);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(15,6,0)";
	myHouse.fill();
	
	
	// window panel 1
	myHouse.beginPath();
	myHouse.moveTo(215,231);
	myHouse.lineTo(200,232);
	myHouse.lineTo(199,210);
	myHouse.lineTo(215,210);
	myHouse.lineTo(215,231);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(20,9,0)";
	myHouse.fill();
	
	// window panel 2
	myHouse.beginPath();
	myHouse.moveTo(204,184);
	myHouse.lineTo(215,184);
	myHouse.lineTo(215,201);
	myHouse.lineTo(204,201);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(20,9,0)";
	myHouse.fill();
	
	// window panel 3
	myHouse.beginPath();
	myHouse.moveTo(244,184);
	myHouse.lineTo(232,184);
	myHouse.lineTo(233,201);
	myHouse.lineTo(244,202);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(20,9,0)";
	myHouse.fill();
	
	// window panel 4
	myHouse.beginPath();
	myHouse.moveTo(245,210);
	myHouse.lineTo(233,210);
	myHouse.lineTo(234,232);
	myHouse.lineTo(245,233);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(20,9,0)";
	myHouse.fill();
	
	/*Function to change the brightness of the house lighting when
	the smoke slider is changed which alters the global variable
	smokeAmount*/
	function changeHouseLighting() {
	var alphaValue = (smokeAmount/14);
	var colorString1 = "rgba(229,230,0," + alphaValue + ")";
	var colorString2 = "rgba(255,153,0," + alphaValue + ")";
	var houseLightingGrd1=myHouse.createLinearGradient(200,153,272,226);
	houseLightingGrd1.addColorStop(0,colorString2);
	houseLightingGrd1.addColorStop(1,colorString1);
	return houseLightingGrd1;
	}

	
	// window 1
	myHouse.beginPath();
	myHouse.moveTo(202,213);
	myHouse.lineTo(202,229);
	myHouse.lineTo(212,229);
	myHouse.lineTo(212,213);
	myHouse.closePath();
	myHouse.fillStyle= changeHouseLighting();
	myHouse.fill();
	
	// window 2
	myHouse.beginPath();
	myHouse.moveTo(213,199);
	myHouse.lineTo(206,199);
	myHouse.lineTo(206,186);
	myHouse.lineTo(213,186);
	myHouse.closePath();
	myHouse.fillStyle= changeHouseLighting();
	myHouse.fill();
	
	// window 3
	myHouse.beginPath();
	myHouse.moveTo(235,186);
	myHouse.lineTo(235,200);
	myHouse.lineTo(242,200);
	myHouse.lineTo(242,186);
	myHouse.closePath();
	myHouse.fillStyle= changeHouseLighting();
	myHouse.fill();
	
	// window 4
	myHouse.beginPath();
	myHouse.moveTo(242,230);
	myHouse.lineTo(236,230);
	myHouse.lineTo(236,213);
	myHouse.lineTo(242,213);
	myHouse.closePath();
	myHouse.fillStyle= changeHouseLighting();
	myHouse.fill();
	
	// door hole
	myHouse.beginPath();
	myHouse.moveTo(229,238);
	myHouse.lineTo(219,238);
	myHouse.lineTo(220,213);
	myHouse.lineTo(229,213);
	myHouse.closePath();
	myHouse.fillStyle= "rgb(40,25,0)";
	myHouse.fill();
	
	//Gradient of grassy hills
	var groundGrd1=myHouse.createLinearGradient(150,250,150,300);
	groundGrd1.addColorStop(0,"#005500");
	groundGrd1.addColorStop(1,"#002A00");

	//Ground under house
	myHouse.beginPath();
	myHouse.moveTo(300,241);
	myHouse.lineTo(258,239);
	myHouse.lineTo(236,235);
	myHouse.lineTo(206,238);
	myHouse.lineTo(190,237);
	myHouse.lineTo(162,241);
	myHouse.lineTo(137,243);
	myHouse.lineTo(114,243);
	myHouse.lineTo(90,246);
	myHouse.lineTo(61,248);
	myHouse.lineTo(33,248);
	myHouse.lineTo(10,250);
	myHouse.lineTo(0,253);
	myHouse.lineTo(0,300);
	myHouse.lineTo(300,300);
	myHouse.closePath();
	myHouse.fillStyle = groundGrd1;
	myHouse.fill();
	}
	
// Randomly generated wind factor global variable
var windFactor = ((Math.random()*1.5)-1);
var smokeAmount = 14;
//Function to periodically change the wind factor and display the value on the page.
function windGenerator() {
document.getElementById("theWind").innerHTML = "" + Number(windFactor*10).toFixed(2);
setInterval(function() { windFactor = ((Math.random()*1.5)-1);
document.getElementById("theWind").innerHTML = "" + Number(windFactor*10).toFixed(2);
}, 5000);
}
/*function that changes global variable smokeAmount when slider is moved by user*/
function setSmokeAmount(sliderValue) {
	smokeAmount = sliderValue;
	document.getElementById("smokeAmount").innerHTML = "" + smokeAmount;
}
// Global variable for smoke color, default is white
var smokeColor = "white";
// function to toggle smokeColor var when user pushes button
function toggleSmoke() {
	switch (smokeColor) {
		case "white":
			smokeColor = "black";
			break;
		case "black":
			smokeColor = "rainbow";
			break;
		case "rainbow":
			smokeColor = "white";
			break;
		default:
			smokeColor = "white";
			break;
	}
}
/*Function that returns String gradientBuilder that is used by the drawSmoke
function to change smoke color */
function smokeGradientMaker(smokeInstanceID) {
	var gradientBuilder;
	//switch to control smoke color based on global variable smokeColor
	switch (smokeColor) {
		case "white":
			gradientBuilder = "rgba(255,255,255,";
			break;
		case "black":
			gradientBuilder = "rgba(0,0,0,";
			break;
		case "rainbow":
				//Makes it so there are only 7 possible values for subswitch below.
				if (smokeInstanceID > 7) {
				smokeInstanceID -= 7;
				}
			/*subswitch to change smoke color to 1 of the 7 rainbow colors depending
			on which drawSmokex() called this function. */
			switch (smokeInstanceID) {
				case 1:
					gradientBuilder = "rgba(255,0,0,";
					break;
				case 2:
					gradientBuilder = "rgba(255,165,0,";
					break;
				case 3:
					gradientBuilder = "rgba(255,255,0,";
					break;
				case 4:
					gradientBuilder = "rgba(0,128,0,";
					break;
				case 5:
					gradientBuilder = "rgba(0,0,255,";
					break;
				case 6:
					gradientBuilder = "rgba(75,0,130,";
					break;
				case 7:
					gradientBuilder = "rgba(238,130,238,";
					break;
				default:
					gradientBuilder = "rgba(0,0,0,";
					break;
			}
			break;
		default:
			gradientBuilder = "rgba(255,255,255,";
			break;
	}
	return gradientBuilder;
}
/* Generic draw smoke function that is called by all the drawSmoke layers.
Arguments: 
smokeInstanceID
Is used the determine which canvas layer called the function. This is used to 
color the smoke rainbow when rainbow is toggled.
canvasVar
Used to tell the function which canvas to draw to.
 */
function drawSmoke(smokeInstanceID, canvasVar) {
	function newSmokeParticle() {
		// random wandering factor for x motion of smoke particle
		var randomFactor = ((Math.random()*0.5) - 0.25)*0.75;
		var x = 207;
		var y = 138;
		var radius = 3;
		var gradient1 = 1;
		var gradient2 = 0.4;
		var yDecrementFactor = 0.5;
		var gradientBuilder = "rgba(255,255,255,";
		var prt = setInterval(function () {
			if (y > -25) {
				/*Calls smokeGradientMaker function to set the gradientBuilder String for appropriate
				smoke colour*/
				gradientBuilder = smokeGradientMaker(smokeInstanceID);
				//clears old smoke particle
				canvasVar.clearRect(x-radius,y-radius,2*radius,2*radius);
				/* causes each smoke particle to wander in x direction based on randomFactor
				and the current windFactor*/
				x += ((randomFactor) + windFactor);
				y -= yDecrementFactor;
				//Smoke particle gradient that slowly fades with time
				var smokeGrd = canvasVar.createRadialGradient(x,y,0,x,y,radius);
				var gradient = gradientBuilder + gradient1 + ")"
				smokeGrd.addColorStop(0,gradient);
				smokeGrd.addColorStop(0.5,gradient);
				gradient1 -= 0.004;
				gradient = gradientBuilder + gradient2 + ")"
				gradient2 -= 0.004;
				smokeGrd.addColorStop(0.8, gradient);
				gradient = gradientBuilder + "0)"
				smokeGrd.addColorStop(1, gradient);
				//Smoke particle
				canvasVar.beginPath();
				canvasVar.arc(x, y, radius, 0, Math.PI*2, true); 
				canvasVar.closePath();
				canvasVar.fillStyle = smokeGrd;
				canvasVar.fill();
				//causes size of smoke particle to grow with time
				radius += .06;
			// stops the smoke after y = -25 and clears out-of-frame smoke to save cpu work;
			} else {
				canvasVar.clearRect(x-radius-windFactor,y-radius,3*radius,2.3*radius);
				clearInterval(prt);
			}
		}, 25); }
	// Creates a new smoke particle at a random interval only if smokeAmount variable is large enough
	setInterval(function() {
		if (smokeInstanceID <= smokeAmount) {
		newSmokeParticle();
		}
	}
	, 1450+(Math.sqrt(smokeInstanceID)*300));
	}
/*drawSmokex functions that attached a variable to a canvas and run the drawSmoke
function*/
function drawSmoke1() {
	var smoke = document.getElementById("mySmoke1");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(1, mySmoke);
}
function drawSmoke2() {
	var smoke = document.getElementById("mySmoke2");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(2, mySmoke);
}
function drawSmoke3() {
	var smoke = document.getElementById("mySmoke3");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(3, mySmoke);
}
function drawSmoke4() {
	var smoke = document.getElementById("mySmoke4");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(4, mySmoke);
}
function drawSmoke5() {
	var smoke = document.getElementById("mySmoke5");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(5, mySmoke);
}
function drawSmoke6() {
	var smoke = document.getElementById("mySmoke6");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(6, mySmoke);
}
function drawSmoke7() {
	var smoke = document.getElementById("mySmoke7");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(7, mySmoke);
}
function drawSmoke8() {
	var smoke = document.getElementById("mySmoke8");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(8, mySmoke);
}
function drawSmoke9() {
	var smoke = document.getElementById("mySmoke9");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(9, mySmoke);
}
function drawSmoke10() {
	var smoke = document.getElementById("mySmoke10");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(10, mySmoke);
}
function drawSmoke11() {
	var smoke = document.getElementById("mySmoke11");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(11, mySmoke);
}
function drawSmoke12() {
	var smoke = document.getElementById("mySmoke12");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(12, mySmoke);
}
function drawSmoke13() {
	var smoke = document.getElementById("mySmoke13");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(13, mySmoke);
}
function drawSmoke14() {
	var smoke = document.getElementById("mySmoke14");
	var mySmoke = smoke.getContext("2d");
	drawSmoke(14, mySmoke);
}