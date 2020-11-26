
    // Card Pointers
    hoverPopup = document.getElementById("follow-me");
    imgToReplace = document.getElementById("profile-picture");
    followMeName = document.getElementById("follow-me-name"); 
    //IMDB pointer
    imdbLink = document.getElementById('imdb-link');
    // IMDB Links 
    peeblerIMDB = "https://www.imdb.com/name/nm0670194/";
    erezIMDB = "https://www.imdb.com/name/nm4692203/";
    cooperIMDB = "https://www.imdb.com/name/nm8964192/"; 
    cotterIMDB = "https://www.imdb.com/name/nm1443310/";
    clarkIMDB = "https://www.imdb.com/name/nm3760636/"; 

    // Souce Sets
    peeblerSourceSet = "images/mike-peebler.png 500w, images/mike-peebler.png 800w, images/robmike-peebler.png 1080w, images/mike-peebler.png 1280w";
    erezSourceSet = "images/Unknown-Photo.png 500w, images/Unknown-Photo.png 800w, images/Unknown-Photo.png 1080w, images/Unknown-Photo.png 1280w";
    cooperSourceSet = "images/Unknown-Photo.png 500w, images/Unknown-Photo.png 800w, images/Unknown-Photo.png 1080w, images/Unknown-Photo.png 1280w";
    cotterSourceSet = "images/michael-cotter.png 500w, images/michael-cotter.png 800w, images/michael-cotter.png 1080w, images/michael-cotter.png 1280w";
    clarkSourceSet = "images/ronnie-clark.png 500w, images/ronnie-clark.png 800w, images/ronnie-clark.png 1080w, images/ronnie-clark.png 1280w";

    // Pointers To Links
    peeblerOneElem = document.getElementsByClassName("peebler-link-one")[0]; 
    peeblerTwoElem = document.getElementsByClassName("peebler-link-two")[0]; 
    erezElem = document.getElementsByClassName("erez-link")[0]; 
    cooperOneElem = document.getElementsByClassName("cooper-link-one")[0]; 
    cooperTwoElem = document.getElementsByClassName("cooper-link-two")[0]; 
    cotterElem = document.getElementsByClassName("cotter-link")[0]; 
    clarkElem = document.getElementsByClassName("clark-link")[0]; 

    //Pointers to know what elements the mouse is hovered over
    hoverOverPeeblerOne = false; 
    hoverOverPeeblerTwo =  false; 
    hoverOverErez = false; 
    hoverOverCooperOne = false; 
    hoverOverCooperTwo = false;
    hoverOverCotter = false; 
    hoverOverClark = false;
    
    //Include this
    hoverOverPopup = false; 

    hoverArray = [hoverOverPeeblerOne, hoverOverPeeblerTwo, hoverOverErez, hoverOverCooperOne, hoverOverCooperTwo, hoverOverCotter, hoverOverClark];
    
    // Do This For Each Element
    
    // PEEBLER ONE
    peeblerOneElem.addEventListener('mouseenter', function() {hoverOverPeeblerOne = true;}); 
    peeblerOneElem.addEventListener('mouseleave', function() {
      hoverOverPeeblerOne = false;
      // you can copy this if statement. is there a better way to do this? obviously. 
      setTimeout(function () {if(!hoverOverPeeblerOne && !hoverOverPeeblerTwo && !hoverOverErez && !hoverOverCooperOne && !hoverOverCooperTwo && !hoverOverClark && !hoverOverCotter) {fadeOutHover();}} , 400);
      }); 

    // PEEBLER Two
    peeblerTwoElem.addEventListener('mouseenter', function() {hoverOverPeeblerTwo = true;}); 
    peeblerTwoElem.addEventListener('mouseleave', function() {
      hoverOverPeeblerTwo = false;
      // you can copy this if statement. is there a better way to do this? obviously. 
      setTimeout(function () {if(!hoverOverPeeblerOne && !hoverOverPeeblerTwo && !hoverOverErez && !hoverOverCooperOne && !hoverOverCooperTwo && !hoverOverClark && !hoverOverCotter) {fadeOutHover();}} , 400);
      }); 

    // EREZ
    erezElem.addEventListener('mouseenter', function() {hoverOverErez = true;}); 
    erezElem.addEventListener('mouseleave', function() {
      hoverOverErez = false;
      setTimeout(function () {if(!hoverOverPeeblerOne && !hoverOverPeeblerTwo && !hoverOverErez && !hoverOverCooperOne && !hoverOverCooperTwo && !hoverOverClark && !hoverOverCotter) {fadeOutHover();}} , 400);
      }); 

    // COOPER ONE
    cooperOneElem.addEventListener('mouseenter', function() {hoverOverCooperOne = true;}); 
    cooperOneElem.addEventListener('mouseleave', function() {
      hoverOverCooperOne = false;
      setTimeout(function () {if(!hoverOverPeeblerOne && !hoverOverPeeblerTwo && !hoverOverErez && !hoverOverCooperOne && !hoverOverCooperTwo && !hoverOverClark && !hoverOverCotter) {fadeOutHover();}} , 400);
      }); 

    // COOPER TWO
    cooperTwoElem.addEventListener('mouseenter', function() {hoverOverCooperTwo = true;}); 
    cooperTwoElem.addEventListener('mouseleave', function() {
      hoverOverCooperTwo = false;
      setTimeout(function () {if(!hoverOverPeeblerOne && !hoverOverPeeblerTwo && !hoverOverErez && !hoverOverCooperOne && !hoverOverCooperTwo && !hoverOverClark && !hoverOverCotter) {fadeOutHover();}} , 400);
      }); 

    
    // COTTER
    cotterElem.addEventListener('mouseenter', function() {hoverOverCotter = true;}); 
    cotterElem.addEventListener('mouseleave', function() {
      hoverOverCotter = false;
      setTimeout(function () {if(!hoverOverPeeblerOne && !hoverOverPeeblerTwo && !hoverOverErez && !hoverOverCooperOne && !hoverOverCooperTwo && !hoverOverClark && !hoverOverCotter) {fadeOutHover();}} , 400);
      }); 

    // CLARK
    clarkElem.addEventListener('mouseenter', function() {hoverOverClark = true;}); 
    clarkElem.addEventListener('mouseleave', function() {
      hoverOverClark = false;
      setTimeout(function () {if(!hoverOverPeeblerOne && !hoverOverPeeblerTwo && !hoverOverErez && !hoverOverCooperOne && !hoverOverCooperTwo && !hoverOverClark && !hoverOverCotter) {fadeOutHover();}} , 400);
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

      // IF PEEBLER ONE
      if (this.classList.contains("peebler-link-one")) {
        imgToReplace.srcset = peeblerSourceSet; 
        imdbLink.href = peeblerIMDB;
        followMeName.innerHTML = "MIKE PEEBLER";
        hoverPopup.style.top = (peeblerOneElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverPeeblerOne && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      } 

      // IF PEEBLER TWO
      if (this.classList.contains("peebler-link-two")) {
        imgToReplace.srcset = peeblerSourceSet; 
        imdbLink.href = peeblerIMDB;
        followMeName.innerHTML = "MIKE PEEBLER";
        hoverPopup.style.top = (peeblerTwoElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverPeeblerTwo && !hoverOverPopup) {fadeOutHover();}
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

      // IF COOPER ONE 
      if (this.classList.contains("cooper-link-one")) {
        imgToReplace.srcset = cooperSourceSet; 
        imdbLink.href = cooperIMDB;
        followMeName.innerHTML = "JAMES COOPER";
        hoverPopup.style.top = (cooperOneElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverCooperOne && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      } 

      // IF COOPER TWO
      if (this.classList.contains("cooper-link-two")) {
        imgToReplace.srcset = cooperSourceSet; 
        imdbLink.href = cooperIMDB;
        followMeName.innerHTML = "JAMES COOPER";
        hoverPopup.style.top = (cooperTwoElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverCooperTwo && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      } 

      // COTTER
      if (this.classList.contains("cotter-link")) {
        imgToReplace.srcset = cotterSourceSet; 
        imdbLink.href = cotterIMDB;
        followMeName.innerHTML = "MICHAEL COTTER";
        hoverPopup.style.top = (cotterElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverCotter && !hoverOverPopup) {fadeOutHover();}
        }, 500);
      } 

      // IF CLARK
      if (this.classList.contains("clark-link")) {
        imgToReplace.srcset = clarkSourceSet; 
        imdbLink.href = clarkIMDB;
        followMeName.innerHTML = "RONNIE CLARK";
        hoverPopup.style.top = (clarkElem.offsetTop + 25).toString() + "px";
        setTimeout(function() {
          if(!hoverOverClark && !hoverOverPopup) {fadeOutHover();}
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
    peeblerOneElem.addEventListener('mouseenter', triggerHover);
    peeblerTwoElem.addEventListener('mouseenter', triggerHover);
    erezElem.addEventListener('mouseenter', triggerHover);

    cooperOneElem.addEventListener('mouseenter', triggerHover);
    cooperTwoElem.addEventListener('mouseenter', triggerHover);
    
    cotterElem.addEventListener('mouseenter', triggerHover);
    clarkElem.addEventListener('mouseenter', triggerHover);
    hoverPopup.addEventListener('mouseleave', fadeOutHover); 
