//Blocks special keys
document.onkeydown = function(){
	var key = event.keyCode;
	if (((key == 78)||(key == 79) || (key == 83) || (key == 85)) && (event.ctrlKey) || (key > 111 && key<124) ){
		event.cancelBubble = true;
		event.returnValue = false;
		event.keyCode = false;
		return false;
	}
}
//Opens sidebar
function onOpen() {
    document.getElementById("sideNavBar").style.display = "block";
    document.getElementById("sideNavOverlay").style.display = "block";
}

//Closes sidebar
function onClose() {
    document.getElementById("sideNavBar").style.display = "none";
    document.getElementById("sideNavOverlay").style.display = "none";
}

//Displays clicked image on modal window
function onClick(element) {
	var srcTokens = element.src.split("/");
	var imgName = srcTokens[srcTokens.length-1];
	var fullSizeImgName = imgName.replace(".", "Org.");
	var clickedImageSrc = element.src.replace(imgName, fullSizeImgName);
	var modalImages = document.getElementsByClassName("modalImages");
	for (i = 0; i < modalImages.length; i++) {
	   if(clickedImageSrc === modalImages[i].src){
		   modalImages[i].removeAttribute("hidden");
		   document.getElementById("modalWindow").style.display = "block";  
		   document.getElementById("caption").innerHTML = element.alt;
		   break;
	   }
    }
}

//Closes modal window and hides displayed image
function onModalClose(element){
	var modalImages = document.getElementsByClassName("modalImages");
	for (i = 0; i < modalImages.length; i++) {
	   if(null === modalImages[i].getAttribute("hidden")){
		   modalImages[i].setAttribute("hidden", "true");
		   break;
	   }
    }
	element.style.display="none";
}

//Locking System Animation
var lockingSysIndex = 0;
carouselLockingSys();

function carouselLockingSys() {
    var i;
    var slides = document.getElementsByClassName("lockingSysSlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    lockingSysIndex++;
    if (lockingSysIndex > slides.length) {lockingSysIndex = 1}    
    slides[lockingSysIndex-1].style.display = "block";  
    setTimeout(carouselLockingSys, 2000);
}

//Switching System Animation
var switchingSysIndex = 0;
carouselSwitchingSys();

function carouselSwitchingSys() {
    var i;
    var slides = document.getElementsByClassName("switchingSys");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    switchingSysIndex++;
    if (switchingSysIndex > slides.length) {switchingSysIndex = 1}    
    slides[switchingSysIndex-1].style.display = "block";  
    setTimeout(carouselSwitchingSys, 2000);
}

//Environment Monitoring System Animation
var envSysIndex = 0;
carouselEnvSys();

function carouselEnvSys() {
    var i;
    var slides = document.getElementsByClassName("envSys");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    envSysIndex++;
    if (envSysIndex > slides.length) {envSysIndex = 1}    
    slides[envSysIndex-1].style.display = "block";  
    setTimeout(carouselEnvSys, 2000);
}

//Health Assistant System Animation
var hlthAsstSysIndex = 0;
carouselHlthAsstSys();

function carouselHlthAsstSys() {
    var i;
    var slides = document.getElementsByClassName("hlthAsstSys");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    hlthAsstSysIndex++;
    if (hlthAsstSysIndex > slides.length) {hlthAsstSysIndex = 1}    
    slides[hlthAsstSysIndex-1].style.display = "block";  
    setTimeout(carouselHlthAsstSys, 2000);
}

//RTC Animation
var rtcIndex = 0;
carouselRTC();

function carouselRTC() {
    var i;
    var slides = document.getElementsByClassName("rtcSlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    rtcIndex++;
    if (rtcIndex > slides.length) {rtcIndex = 1}    
    slides[rtcIndex-1].style.display = "block";  
    setTimeout(carouselRTC, 2000);
}

//Development Board Animation
var devBoardIndex = 0;
carouselDevBoard();

function carouselDevBoard() {
    var i;
    var slides = document.getElementsByClassName("devBoard");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    devBoardIndex++;
    if (devBoardIndex > slides.length) {devBoardIndex = 1}    
    slides[devBoardIndex-1].style.display = "block";  
    setTimeout(carouselDevBoard, 2000);
}