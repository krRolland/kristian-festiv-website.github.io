// POINTER TO KEY PAGE ELEMENTS 
imgElement = document.getElementById("profile-picture");
nameElement = document.getElementById("follow-me-name"); 
imdbElement = document.getElementById('imdb-link');
hoverPopup = document.getElementById("follow-me");
hoverPopup.style.display = "block";


// SOURCE SET & HOVER LOCATION QUEUE
queuedIMDB = "";
queuedName = "";
queuedSourceSet = ""; 
queuedHorizontalCoord = "";
queuedVerticalCoord = ""; 
// SELECTED SOURCE SET & HOVER VALUES
selectedIMDB = ""; 
selectedName = "";
selectedSourceSet = ""; 
selectedHorizontalCoord = ""; 
selectedVerticalCoord = ""; 

// POPUP READY 
popupReady = true; 

// Helper function that sets selected variables to what currently exists inside the queue.
function updateSourceSetAndHover() {
  // 1. Change Queued To Selected
  selectedIMDB = queuedIMDB; 
  selectedName = queuedName; 
  selectedSourceSet = queuedSourceSet;
  selectedHorizontalCoord = queuedHorizontalCoord;
  selectedVerticalCoord = queuedVerticalCoord; 

  // 2. Route Popup To Display What Is Selected
  imdbElement.href = selectedIMDB;
  nameElement.innerHTML = selectedName; 
  imgElement.srcset = selectedSourceSet; 
  hoverPopup.style.top = queuedVerticalCoord; 
  hoverPopup.style.left = queuedHorizontalCoord;

} 
// Mobile check helper function
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


function showPopup() {
  hoverPopup.style.zIndex = "4";
  hoverPopup.style.opacity = "1";
  popupReady = false; 
} 

function hidePopup() {
  hoverPopup.style.zIndex = "-4";
  hoverPopup.style.opacity = "0";
  setTimeout(function () {popupReady = true;}, 0); 
}

function enactPopupProtocol(elemPointer) {
  if (popupReady) {
    updateSourceSetAndHover(); 
    showPopup(); 
  } 
  else {
    setTimeout(function () {
      if(elemPointer.matches(':hover')){
        enactPopupProtocol(elemPointer);
      } 
      else {return;}
    } , 100);
  } 
} 


// HOVER AWAY WORKS FOR ALL STARS
function hoverAwayForEachStar() {
  // If you're not hovered over the selected text, or the popup, then hide the popup. Delay logic for a couple of milliseconds. 
  setTimeout(() => {if(this.matches(':hover') == false) {if(hoverPopup.matches(':hover') == false) {hidePopup();}}}, 200);
} 

hoverPopup.addEventListener('mouseleave', hoverAwayForEachStar);

// ******************** PEEBLER ONE ********************
// STEP 1: MAKE A SHOW POPUP FUNCTION FOR EACH STAR
function hoverOverPeeblerOne() {
  queuedIMDB = "https://www.imdb.com/name/nm0670194/";
  queuedSourceSet = "images/mike-peebler.png 500w, images/mike-peebler.png 800w, images/robmike-peebler.png 1080w, images/mike-peebler.png 1280w"; 
  queuedName = "MIKE PEEBLER";
  queuedVerticalCoord = (this.offsetTop + 25).toString() + "px";
  // Horizontal coordinate depends on mobile version
  if (window.mobileCheck()) {
    queuedHorizontalCoord = "15px";          	
  } 
  else {
    queuedHorizontalCoord = this.getBoundingClientRect().left - 100 + "px"; 
  } 
  enactPopupProtocol(this);
} 

// STEP 2: CREATE AN EVENT LISTENER TO TRIGGER EACH STAR'S FUNCTION
peeblerOneElem = document.getElementsByClassName("peebler-link-one")[0]; 
peeblerOneElem.addEventListener('mouseenter', hoverOverPeeblerOne);
peeblerOneElem.addEventListener('mouseleave', hoverAwayForEachStar);

// ******************** PEEBLER TWO ********************
// STEP 1: MAKE A SHOW POPUP FUNCTION FOR EACH STAR
function hoverOverPeeblerTwo() {
  queuedIMDB = "https://www.imdb.com/name/nm0670194/";
  queuedSourceSet = "images/mike-peebler.png 500w, images/mike-peebler.png 800w, images/robmike-peebler.png 1080w, images/mike-peebler.png 1280w"; 
  queuedName = "MIKE PEEBLER";
  queuedVerticalCoord = (this.offsetTop + 25).toString() + "px";
  // Horizontal coordinate depends on mobile version
  if (window.mobileCheck()) {
    queuedHorizontalCoord = "15px";          	
  } 
  else {
    queuedHorizontalCoord = this.getBoundingClientRect().left - 100 + "px"; 
  } 
  enactPopupProtocol(this);
} 
// STEP 2: CREATE AN EVENT LISTENER TO TRIGGER EACH STAR'S FUNCTION
peeblerTwoElem = document.getElementsByClassName("peebler-link-two")[0]; 
peeblerTwoElem.addEventListener('mouseenter', hoverOverPeeblerTwo);
peeblerTwoElem.addEventListener('mouseleave', hoverAwayForEachStar);


// ******************** GRAY ********************
// STEP 1: MAKE A SHOW POPUP FUNCTION FOR EACH STAR
function hoverOverGray() {
  queuedIMDB = "https://www.imdb.com/name/nm3863898/";
  queuedSourceSet = "images/Unknown-Photo.png 500w, images/Unknown-Photo.png 800w, images/Unknown-Photo.png 1080w, images/Unknown-Photo.png 1280w";
  queuedName = "TIFFANY GRAY";
  queuedVerticalCoord = (this.offsetTop + 25).toString() + "px";
  // Horizontal coordinate depends on mobile version
  if (window.mobileCheck()) {
    queuedHorizontalCoord = "15px";          	
  } 
  else {
    queuedHorizontalCoord = this.getBoundingClientRect().left - 100 + "px"; 
  } 
  enactPopupProtocol(this);
} 

// STEP 2: CREATE AN EVENT LISTENER TO TRIGGER EACH STAR'S FUNCTION
grayElem = document.getElementsByClassName("gray-link")[0]; 
grayElem.addEventListener('mouseenter', hoverOverGray);
grayElem.addEventListener('mouseleave', hoverAwayForEachStar);


// ******************** EREZ ONE ********************
// STEP 1: MAKE A SHOW POPUP FUNCTION FOR EACH STAR
function hoverOverErezOne() {
  queuedIMDB = "https://www.imdb.com/name/nm4692203/";
  queuedSourceSet = "images/Unknown-Photo.png 500w, images/Unknown-Photo.png 800w, images/Unknown-Photo.png 1080w, images/Unknown-Photo.png 1280w";
  queuedName = "MARC FELLNER-EREZ";
  queuedVerticalCoord = (this.offsetTop + 25).toString() + "px";
  // Horizontal coordinate depends on mobile version
  if (window.mobileCheck()) {
    queuedHorizontalCoord = "15px";          	
  } 
  else {
    queuedHorizontalCoord = this.getBoundingClientRect().left - 100 + "px"; 
  } 
  enactPopupProtocol(this);
} 

// STEP 2: CREATE AN EVENT LISTENER TO TRIGGER EACH STAR'S FUNCTION
erezOneElem = document.getElementsByClassName("erez-link-one")[0]; 
erezOneElem.addEventListener('mouseenter', hoverOverErezOne);
erezOneElem.addEventListener('mouseleave', hoverAwayForEachStar);

// ******************** EREZ TWO ********************
// STEP 1: MAKE A SHOW POPUP FUNCTION FOR EACH STAR
function hoverOverErezTwo() {
  queuedIMDB = "https://www.imdb.com/name/nm4692203/";
  queuedSourceSet = "images/Unknown-Photo.png 500w, images/Unknown-Photo.png 800w, images/Unknown-Photo.png 1080w, images/Unknown-Photo.png 1280w";
  queuedName = "MARC FELLNER-EREZ";
  queuedVerticalCoord = (this.offsetTop + 25).toString() + "px";
  // Horizontal coordinate depends on mobile version
  if (window.mobileCheck()) {
    queuedHorizontalCoord = "15px";          	
  } 
  else {
    queuedHorizontalCoord = this.getBoundingClientRect().left - 100 + "px"; 
  } 
  enactPopupProtocol(this);
} 

// STEP 2: CREATE AN EVENT LISTENER TO TRIGGER EACH STAR'S FUNCTION
erezTwoElem = document.getElementsByClassName("erez-link-two")[0]; 
erezTwoElem.addEventListener('mouseenter', hoverOverErezTwo);
erezTwoElem.addEventListener('mouseleave', hoverAwayForEachStar);

// ******************** WILSON ********************
// STEP 1: MAKE A SHOW POPUP FUNCTION FOR EACH STAR
function hoverOverWilson() {
  queuedIMDB = "https://www.imdb.com/name/nm8167955/";
  queuedSourceSet = "images/Unknown-Photo.png 500w, images/Unknown-Photo.png 800w, images/Unknown-Photo.png 1080w, images/Unknown-Photo.png 1280w";
  queuedName = "ERIN FAITH WILSON";
  queuedVerticalCoord = (this.offsetTop + 25).toString() + "px";
  // Horizontal coordinate depends on mobile version
  if (window.mobileCheck()) {
    queuedHorizontalCoord = "15px";          	
  } 
  else {
    queuedHorizontalCoord = this.getBoundingClientRect().left - 100 + "px"; 
  } 
  enactPopupProtocol(this);
} 

// STEP 2: CREATE AN EVENT LISTENER TO TRIGGER EACH STAR'S FUNCTION
wilsonElem = document.getElementsByClassName("wilson-link")[0]; 
wilsonElem.addEventListener('mouseenter', hoverOverWilson);
wilsonElem.addEventListener('mouseleave', hoverAwayForEachStar);


// ******************** SNELL ********************
// STEP 1: MAKE A SHOW POPUP FUNCTION FOR EACH STAR
function hoverOverSnell() {
  queuedIMDB = "https://www.imdb.com/name/nm0811027/";
  queuedSourceSet = "images/dave-snell.png 500w, images/dave-snell.png 800w, images/dave-snell.png 1080w, images/dave-snell.png 1280w";
  queuedName = "DAVE SNELL";
  queuedVerticalCoord = (this.offsetTop + 25).toString() + "px";
  // Horizontal coordinate depends on mobile version
  if (window.mobileCheck()) {
    queuedHorizontalCoord = "15px";          	
  } 
  else {
    queuedHorizontalCoord = this.getBoundingClientRect().left - 100 + "px"; 
  } 
  enactPopupProtocol(this);
} 

// STEP 2: CREATE AN EVENT LISTENER TO TRIGGER EACH STAR'S FUNCTION
snellElem = document.getElementsByClassName("snell-link")[0]; 
snellElem.addEventListener('mouseenter', hoverOverSnell);
snellElem.addEventListener('mouseleave', hoverAwayForEachStar);

// ******************** SAMP ********************
// STEP 1: MAKE A SHOW POPUP FUNCTION FOR EACH STAR
function hoverOverSamp() {
  queuedIMDB = "https://www.imdb.com/name/nm1817778/";
  queuedSourceSet = "images/buckley-sampson.png 500w, images/buckley-sampson.png 800w, images/buckley-sampson.png 1080w, images/buckley-sampson.png 1280w";
  queuedName = "BUCKLEY SAMPSON";
  queuedVerticalCoord = (this.offsetTop + 25).toString() + "px";
  // Horizontal coordinate depends on mobile version
  if (window.mobileCheck()) {
    queuedHorizontalCoord = "15px";          	
  } 
  else {
    queuedHorizontalCoord = this.getBoundingClientRect().left - 100 + "px"; 
  } 
  enactPopupProtocol(this);
} 

// STEP 2: CREATE AN EVENT LISTENER TO TRIGGER EACH STAR'S FUNCTION
sampElem = document.getElementsByClassName("samp-link")[0]; 
sampElem.addEventListener('mouseenter', hoverOverSamp);
sampElem.addEventListener('mouseleave', hoverAwayForEachStar);


// ******************** TOBIAS ********************
// STEP 1: MAKE A SHOW POPUP FUNCTION FOR EACH STAR
function hoverOverTobias() {
  queuedIMDB = "https://www.imdb.com/name/nm0864866/";
  queuedSourceSet = "images/elizabeth-tobais.png 500w, images/elizabeth-tobais.png 800w, images/elizabeth-tobais.png 1080w, images/elizabeth-tobais.png 1280w";
  queuedName = "ELIZABETH TOBIAS";
  queuedVerticalCoord = (this.offsetTop + 25).toString() + "px";
  // Horizontal coordinate depends on mobile version
  if (window.mobileCheck()) {
    queuedHorizontalCoord = "15px";          	
  } 
  else {
    queuedHorizontalCoord = this.getBoundingClientRect().left - 100 + "px"; 
  } 
  enactPopupProtocol(this);
} 

// STEP 2: CREATE AN EVENT LISTENER TO TRIGGER EACH STAR'S FUNCTION
tobiasElem = document.getElementsByClassName("tobias-link")[0]; 
tobiasElem.addEventListener('mouseenter', hoverOverTobias);
tobiasElem.addEventListener('mouseleave', hoverAwayForEachStar);