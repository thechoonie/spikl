
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

// Get the modal
$(document).ready(function(){
  modalSignIn = document.getElementById('id01');
  modalSignUp = document.getElementById('id02');
});


// When the user clicks anywhere outside of the modal, close it
$(window).on('click', function(event) {
    if (event.target == modalSignIn) {
        modalSignIn.style.display = "none";
    }
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
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

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/*open notes*/
function openNotes() {
    document.getElementById('openNotes').style.display='block';
}

/*open languages*/
function openLanguage() {
    document.getElementById('openLanguage').style.display='block';
}

function getFbEvents(){
 	$.ajax({
              type: "GET",
              url: 'fb.php',
	      data : {"functionName": "getData"},
              success: function(response) {
			var fbResp = JSON.parse(response);
                    	var eventsArray = fbResp["data"];
			var eventId = eventsArray[0]["id"];
			$.ajax({
				type: "GET",
				url: 'fb.php',
				data: {"functionName" : "getPic", "picId" : eventId},
				success: function(response){
					var somin = JSON.parse(response);
					$('#notesPic')[0].src = somin["cover"]["source"];
					console.log(somin["cover"]);
				}
				});

              }
          });
}
