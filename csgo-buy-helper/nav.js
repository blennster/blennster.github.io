// JavaScript Document
$(document).ready(function(e) {
    $("nav").html(`
		<div id="wrapper">
        	<div id="handle">
           		<img src="images/csgo-logo.png" alt="CSGO Logo">
            </div>
            <ul>
            	<li><a href="rifles.html">Rifles</a></li>
                <li><a href="">SMGs</a></li>
                <li><a href="">Heavy</a></li>
                <li><a href="">Pistols</a></li>
                <li><a href="">Grenades</a></li>
                <li><a href="">Misc</a></li>
            </ul>
        </div>
        <figure>
        	<a href="index.html">
           		<img src="images/Counter-Strike_Global_Offensive.png" alt="CSGO">
        	</a>
        </figure>`);
		
	$("#handle").click(function(){
		var widthOffset = "-" + $("nav").css("width"); // Anpassar sig efter css stilen
			if($("nav").css("left") == widthOffset){ // Om stängd
				$("nav").css("left", "0px");
			}
			else{
				$("nav").css("left", widthOffset);
			}
	});
});