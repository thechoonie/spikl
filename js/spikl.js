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
  console.log(ca);
}

function signIn(){
    if ($('#email').val()=="nadc500@york.ac.uk" && $('#pw').val()=="Password1"){
      if ($('.rememberMe').is(':checked')){
          document.cookie = "username=John Doe";
      }
      modalSignIn.style.display = "none";
      return true;
    }
    else {
      return false;
    }
}
