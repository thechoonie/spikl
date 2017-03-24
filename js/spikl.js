
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1119143194877722',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
};


(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


//scroll animation
$.fn.isInViewport = function() {
  var i = 0;
  for(i = 0; i<$(this).length; i++){
    var id = $(this)[i].id;
    var element = $('#' + id);
    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    if (elementBottom > viewportTop && elementTop < viewportBottom){
      element.addClass('start');
    }
  }
}

$(window).on('resize scroll', function(){
  $('.aboutspikl').isInViewport();
  $('.aboutspiklImage1').isInViewport();
  $('.aboutspiklImage2').isInViewport();
  $('.aboutspiklImage3').isInViewport();
  $('.testimonials').isInViewport();
})

// Defining modals
var modalSignIn
var modalSignUp
var sideBar
// Get the modal
$(document).ready(function(){
  modalSignIn = document.getElementById('id01');
  modalSignUp = document.getElementById('id02');
  sideBar = document.getElementById('mySidenav');

  var mouseRDown = false;
  var mouseLDown = false;

  $('#left-button-bottom').on('mousedown', function() {
      mouseLDown= true;
      var interval = setInterval(function(){
        if(mouseLDown && content.scrollLeft >0){
          content.scrollLeft -=10;
        }
        else{
          clearInterval(interval);
        }
      }, 10);

  }).on('mouseup mouseleave', function() {
      mouseLDown = false;
  });

  $('#right-button-bottom').on('mousedown', function() {
      mouseRDown= true;
      var interval = setInterval(function(){
        if(mouseRDown && content.scrollLeft <1000){
          content.scrollLeft +=10;
        }
        else{
          clearInterval(interval);
        }
      }, 10);

  }).on('mouseup mouseleave', function() {
      mouseRDown = false;

  });

});


// When the user clicks anywhere outside of the modal, close it
$(window).on('click', function(event) {
    if (event.target == modalSignIn) {
        modalSignIn.style.display = "none";
    }
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }

    if (event.target != sideBar) {
      if(barOut && delayDone){
        closeNav2();
      }
      else{
        delayDone = true;
      }
    }
});

function getCookie(){
  var x = decodeURIComponent(document.cookie);
  var ca = x.split(';');
  var email = "email=";
  for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function signIn(){
    if ($('#email').val()=="nadc500@york.ac.uk" && $('#pw').val()=="Password1"){
      /*if ($('.rememberMe').is(':checked')){
          document.cookie = "email=" + $('#email').val() + "; pw=" + $('#pw').val() +";";
      }*/
      modalSignIn.style.display = "none";
      return true;
    }
    else {
      return false;
    }
}
var barOut = false;
var delayDone = false;
/* Set the width of the side navigation to 250px */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    barOut = true;
    delayDone = false;

}

/* Set the width of the side navigation to 0 */
function closeNav() {
  if(barOut){
    document.getElementById("mySidenav").style.width = "0";
    barOut = true;
    delayDone = true;
  }
}

function closeNav2(){
  if(barOut){
    document.getElementById("mySidenav").style.width = "0";
    barOut = false;
    delayDone = false;
  }
}

/*open notes*/
function openNotes() {
    document.getElementById('openNotes').style.display='block';
}

/*open languages*/
function openLanguage() {
    document.getElementById('openLanguage').style.display='block';
}

/*var eventsPosition = 0;

function goRight() {
   var width = ($('.thing').length -2) * $('.thing')[0].offsetWidth;
   event.preventDefault();
   if(eventsPosition < width){
     eventsPosition += 200;
     $('#content').animate({
       marginLeft: "-=200px"
     }, "fast");
 }
}

function goLeft() {
   event.preventDefault();
   if(eventsPosition > 0){
     eventsPosition -= 200;
     $('#content').animate({
       marginLeft: "+=200px"
     }, "fast");
 }
}*/

/*var eventsPosition = 0;

function scheduleGoRight() {
   var width = ($('.myEvent').length -2) * $('.myEvent')[0].offsetWidth;
   event.preventDefault();
   if(eventsPosition < width){
     eventsPosition += 200;
     $('#allMyEvents').animate({
       marginLeft: "-=200px"
     }, "fast");
 }
}

function scheduleGoLeft() {
   event.preventDefault();
   if(eventsPosition > 0){
     eventsPosition -= 200;
     $('#allMyEvents').animate({
       marginLeft: "+=200px"
     }, "fast");
 }
}*/

function scheduleGoRight(){
  event.preventDefault();
  var allMyEvents = document.getElementById('allMyEvents');
  allMyEvents.scrollLeft += 100;
  console.log('hey');
}

function scheduleGoLeft(){
  event.preventDefault();
  var allMyEvents = document.getElementById('allMyEvents');
  allMyEvents.scrollLeft -= 100;
  console.log('hey');
}

function goRight(){
  event.preventDefault();
  var content = document.getElementById('content');
  content.scrollLeft += 100;
  console.log('hey');
}

function goLeft(){
  event.preventDefault();
  var content = document.getElementById('content');
  content.scrollLeft -= 100;
}
