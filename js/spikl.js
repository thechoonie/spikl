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
