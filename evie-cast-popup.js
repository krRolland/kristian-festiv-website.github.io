
    // Card Pointers
    hoverPopup = document.getElementById("follow-me");
    imgToReplace = document.getElementById("profile-picture");
    followMeName = document.getElementById("follow-me-name"); 
    //IMDB pointer
    imdbLink = document.getElementById('imdb-link');
    // IMDB Links 
    peeblerIMDB = "https://www.imdb.com/name/nm0670194/";
    erezIMDB = "https://www.imdb.com/name/nm4692203/";
    suchanIMDB = "https://www.imdb.com/name/nm4685670/";
    turnipseedIMDB = "https://www.imdb.com/name/nm1926679/";
    durkinIMDB = "https://www.imdb.com/name/nm10123252/";
    stamileIMDB = "https://www.imdb.com/name/nm0821836/";
    peatIMDB = "https://www.imdb.com/name/nm1273830/";
    turbiakIMDB = "https://www.imdb.com/name/nm4795099/";
    huntIMDB = "https://www.imdb.com/name/nm0402669/";
    phillipsIMDB = "https://www.imdb.com/name/nm2129374/";

    // Souce Sets
    peeblerSourceSet = "images/mike-peebler.png 500w, images/mike-peebler.png 800w, images/robmike-peebler.png 1080w, images/mike-peebler.png 1280w";
    erezSourceSet = "images/Unknown-Photo.png 500w, images/Unknown-Photo.png 800w, images/Unknown-Photo.png 1080w, images/Unknown-Photo.png 1280w";
    suchanSourceSet = "images/marylynn-suchan.png 500w, images/marylynn-suchan.png 800w, images/marylynn-suchan.png 1080w, images/marylynn-suchan.png 1280w";
    turnipseedSourceSet = "images/Unknown-Photo.png 500w, images/Unknown-Photo.png 800w, images/Unknown-Photo.png 1080w, images/Unknown-Photo.png 1280w";
    durkinSourceSet = "images/caitlin-durkin.png 500w, images/caitlin-durkin.png 800w, images/caitlin-durkin.png 1080w, images/caitlin-durkin.png 1280w";
    stamileSourceSet = "images/lauren-stamile.png 500w, images/lauren-stamile.png 800w, images/lauren-stamile.png 1080w, images/lauren-stamile.png 1280w";
    peatSourceSet = "images/scott-peat.png 500w, images/scott-peat.png 800w, images/scott-peat.png 1080w, images/scott-peat.png 1280w";
    turbiakSourceSet = "images/paul-turbiak.png 500w, images/paul-turbiak.png 800w, images/paul-turbiak.png 1080w, images/paul-turbiak.png 1280w";
    huntSourceSet = "images/Unknown-Photo.png 500w, images/Unknown-Photo.png 800w, images/Unknown-Photo.png 1080w, images/Unknown-Photo.png 1280w";
    phillipsSourceSet = "images/earnestine-phillips.png 500w, images/earnestine-phillips.png 800w, images/earnestine-phillips.png 1080w, images/earnestine-phillips.png 1280w";

    // Pointers To Links
    peeblerElem = document.getElementsByClassName("peebler-link")[0]; 
    erezElem = document.getElementsByClassName("erez-link")[0]; 
    suchanElem = document.getElementsByClassName("suchan-link")[0];
    turnipseedElem = document.getElementsByClassName("turn-link")[0];
    durkinElem = document.getElementsByClassName("durkin-link")[0];
    stamileElem = document.getElementsByClassName("stamile-link")[0];
    peatElem = document.getElementsByClassName("peat-link")[0];
    turbiakElem = document.getElementsByClassName("turbiak-link")[0];
    huntElem = document.getElementsByClassName("hunt-link")[0];
    phillipsElem = document.getElementsByClassName("phil-link")[0];

    //Pointers to know what elements the mouse is hovered over
    hoverOverPeebler = false; 
    hoverOverErez = false; 
    hoverOverSuchan = false; 
    hoverOverTurnipseed = false; 
    hoverOverDurkin = false; 
    hoverOverStamile = false; 
    hoverOverPeat = false;
    hoverOverTurbiak = false; 
    hoverOverHunt = false; 
    hoverOverPhillips = false; 
    //Include this
    hoverOverPopup = false; 

    hoverArray = [hoverOverPeebler, hoverOverErez, hoverOverSuchan, hoverOverTurnipseed, hoverOverDurkin, hoverOverStamile, hoverOverPeat, hoverOverTurbiak, hoverOverHunt, hoverOverPhillips];
    
    // Do This For Each Element
    
    // PEEBLER 
    peeblerElem.addEventListener('mouseenter', function() {hoverOverPeebler = true;}); 
    peeblerElem.addEventListener('mouseleave', function() {
      hoverOverPeebler = false;
      // you can copy this if statement. is there a better way to do this? obviously. 
      setTimeout(function () {if(!hoverOverPeebler && !hoverOverErez && !hoverOverSuchan && !hoverOverTurnipseed && !hoverOverDurkin && !hoverOverStamile && !hoverOverPeat && !hoverOverTurbiak && !hoverOverHunt && hoverOverPhillips) {fadeOutHover();}} , 400);
      }); 
    // EREZ
    erezElem.addEventListener('mouseenter', function() {hoverOverErez = true;}); 
    erezElem.addEventListener('mouseleave', function() {
      hoverOverErez = false;
      setTimeout(function () {if(!hoverOverPeebler && !hoverOverErez && !hoverOverSuchan && !hoverOverTurnipseed && !hoverOverDurkin && !hoverOverStamile && !hoverOverPeat && !hoverOverTurbiak && !hoverOverHunt && hoverOverPhillips) {fadeOutHover();}} , 400);
      }); 
    
    // SUCHAN
    suchanElem.addEventListener('mouseenter', function() {hoverOverSuchan = true;}); 
    suchanElem.addEventListener('mouseleave', function() {
      hoverOverSuchan = false;
      setTimeout(function () {if(!hoverOverPeebler && !hoverOverErez && !hoverOverSuchan && !hoverOverTurnipseed && !hoverOverDurkin && !hoverOverStamile && !hoverOverPeat && !hoverOverTurbiak && !hoverOverHunt && hoverOverPhillips) {fadeOutHover();}} , 400);
      }); 
    // TURNIPSEED
    turnipseedElem.addEventListener('mouseenter', function() {hoverOverTurnipseed = true;}); 
    turnipseedElem.addEventListener('mouseleave', function() {
      hoverOverTurnipseed = false;
      setTimeout(function () {if(!hoverOverPeebler && !hoverOverErez && !hoverOverSuchan && !hoverOverTurnipseed && !hoverOverDurkin && !hoverOverStamile && !hoverOverPeat && !hoverOverTurbiak && !hoverOverHunt && hoverOverPhillips) {fadeOutHover();}} , 400);
      }); 
    // DURKIN
    durkinElem.addEventListener('mouseenter', function() {hoverOverDurkin = true;}); 
    durkinElem.addEventListener('mouseleave', function() {
      hoverOverDurkin = false;
      setTimeout(function () {if(!hoverOverPeebler && !hoverOverErez && !hoverOverSuchan && !hoverOverTurnipseed && !hoverOverDurkin && !hoverOverStamile && !hoverOverPeat && !hoverOverTurbiak && !hoverOverHunt && hoverOverPhillips) {fadeOutHover();}} , 400);
      }); 
    // STAMILE
    stamileElem.addEventListener('mouseenter', function() {hoverOverStamile = true;}); 
    stamileElem.addEventListener('mouseleave', function() {
      hoverOverStamile = false;
      setTimeout(function () {if(!hoverOverPeebler && !hoverOverErez && !hoverOverSuchan && !hoverOverTurnipseed && !hoverOverDurkin && !hoverOverStamile && !hoverOverPeat && !hoverOverTurbiak && !hoverOverHunt && hoverOverPhillips) {fadeOutHover();}} , 400);
      }); 
    // PEAT
    peatElem.addEventListener('mouseenter', function() {hoverOverPeat = true;}); 
    peatElem.addEventListener('mouseleave', function() {
      hoverOverPeat = false;
      setTimeout(function () {if(!hoverOverPeebler && !hoverOverErez && !hoverOverSuchan && !hoverOverTurnipseed && !hoverOverDurkin && !hoverOverStamile && !hoverOverPeat && !hoverOverTurbiak && !hoverOverHunt && hoverOverPhillips) {fadeOutHover();}} , 400);
      }); 
    // TURBIAK
    turbiakElem.addEventListener('mouseenter', function() {hoverOverTurbiak = true;}); 
    turbiakElem.addEventListener('mouseleave', function() {
      hoverOverTurbiak = false;
      setTimeout(function () {if(!hoverOverPeebler && !hoverOverErez && !hoverOverSuchan && !hoverOverTurnipseed && !hoverOverDurkin && !hoverOverStamile && !hoverOverPeat && !hoverOverTurbiak && !hoverOverHunt && hoverOverPhillips) {fadeOutHover();}} , 400);
      }); 
    // HUNT
    huntElem.addEventListener('mouseenter', function() {hoverOverHunt = true;}); 
    huntElem.addEventListener('mouseleave', function() {
      hoverOverHunt = false;
      setTimeout(function () {if(!hoverOverPeebler && !hoverOverErez && !hoverOverSuchan && !hoverOverTurnipseed && !hoverOverDurkin && !hoverOverStamile && !hoverOverPeat && !hoverOverTurbiak && !hoverOverHunt && hoverOverPhillips) {fadeOutHover();}} , 400);
      }); 
    // PHILLIPS
    phillipsElem.addEventListener('mouseenter', function() {hoverOverPhillips = true;}); 
    phillipsElem.addEventListener('mouseleave', function() {
      hoverOverPhillips = false;
      setTimeout(function () {if(!hoverOverPeebler && !hoverOverErez && !hoverOverSuchan && !hoverOverTurnipseed && !hoverOverDurkin && !hoverOverStamile && !hoverOverPeat && !hoverOverTurbiak && !hoverOverHunt && hoverOverPhillips) {fadeOutHover();}} , 400);
      }); 
    
    hoverPopup.addEventListener('mouseenter', function() {hoverOverPopup = true;});
    hoverPopup.addEventListener('mouseleave', function() {hoverOverPopup = false;});
  
    
    function fadeOutHover() {  
        hoverPopup.style.opacity = "0";
        hoverPopup.style.zIndex = "-4";
      }
    // Dictate How Long Have To Over Over Elem To Make It Accessable
    function triggerHover() {
      rect = this.getBoundingClientRect();

      // IF PEEBLER
      if (this.classList.contains("peebler-link")) {
        imgToReplace.srcset = peeblerSourceSet; 
        imdbLink.href = peeblerIMDB;
        followMeName.innerHTML = "MIKE PEEBLER";
        hoverPopup.style.top = (peeblerElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverPeebler && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      } 

      // IF EREZ
      if (this.classList.contains("erez-link")) {
        imgToReplace.srcset = erezSourceSet; 
        imdbLink.href = erezIMDB;
        followMeName.innerHTML = "MARC FELLNER-EREZ";
        hoverPopup.style.top = (erezElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverErez && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      } 

      // IF SUCHAN 
      if (this.classList.contains("suchan-link")) {
        imgToReplace.srcset = suchanSourceSet; 
        imdbLink.href = suchanIMDB;
        followMeName.innerHTML = "MARYLYNN SUCHAN";
        hoverPopup.style.top = (suchanElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverSuchan && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      } 

      // IF TURNIPSEED
      if (this.classList.contains("turn-link")) {
        imgToReplace.srcset = turnipseedSourceSet; 
        imdbLink.href = turnipseedIMDB;
        followMeName.innerHTML = "KATE TURNIPSEED";
        hoverPopup.style.top = (turnipseedElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverTurnipseed && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      }

      // IF DURKIN
      if (this.classList.contains("durkin-link")) {
        imgToReplace.srcset = durkinSourceSet; 
        imdbLink.href = durkinIMDB;
        followMeName.innerHTML = "CAITLIN DURKIN";
        hoverPopup.style.top = (durkinElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverDurkin && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      }

      // IF STAMILE
      if (this.classList.contains("stamile-link")) {
        imgToReplace.srcset = stamileSourceSet; 
        imdbLink.href = stamileIMDB;
        followMeName.innerHTML = "LAUREN STAMILE";
        hoverPopup.style.top = (stamileElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverStamile && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      }
      // IF PEAT
      if (this.classList.contains("peat-link")) {
        imgToReplace.srcset = peatSourceSet; 
        imdbLink.href = peatIMDB;
        followMeName.innerHTML = "SCOTT PEAT";
        hoverPopup.style.top = (peatElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverPeat && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      }
      // IF TURBIAK
      if (this.classList.contains("turbiak-link")) {
        imgToReplace.srcset = turbiakSourceSet; 
        imdbLink.href = turbiakIMDB;
        followMeName.innerHTML = "PAUL TURBIAK";
        hoverPopup.style.top = (turbiakElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverTurbiak && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      }
      // IF HUNT
      if (this.classList.contains("hunt-link")) {
        imgToReplace.srcset = huntSourceSet; 
        imdbLink.href = huntIMDB;
        followMeName.innerHTML = "WILLIAM HUNT";
        hoverPopup.style.top = (huntElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverHunt && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      }

      // IF PHILLIPS
      if (this.classList.contains("phil-link")) {
        imgToReplace.srcset = phillipsSourceSet; 
        imdbLink.href = phillipsIMDB;
        followMeName.innerHTML = "EARNESTINE PHILLIPS";
        hoverPopup.style.top = (phillipsElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverPhillips && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      }

      hoverPopup.style.display = "block";
      // MODIFY
      
      window.mobileCheck = function() {
                  let check = false;
              (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
              return check;
                };
      if (window.mobileCheck()) {
                    hoverPopup.style.left = "15px";          	
      } 
      else {
          hoverPopup.style.left = rect.left - 100 + "px"; 
      } 
      hoverPopup.style.opacity = "1";
      hoverPopup.style.zIndex = "4";
      hoverPopup.style.position = "absolute";
    } 
    peeblerElem.addEventListener('mouseenter', triggerHover);
    erezElem.addEventListener('mouseenter', triggerHover);
    suchanElem.addEventListener('mouseenter', triggerHover);
    turnipseedElem.addEventListener('mouseenter', triggerHover);
    durkinElem.addEventListener('mouseenter', triggerHover);
    stamileElem.addEventListener('mouseenter', triggerHover);
    peatElem.addEventListener('mouseenter', triggerHover);
    turbiakElem.addEventListener('mouseenter', triggerHover);
    huntElem.addEventListener('mouseenter', triggerHover);
    phillipsElem.addEventListener('mouseenter', triggerHover);
    hoverPopup.addEventListener('mouseleave', fadeOutHover); 
