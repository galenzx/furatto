// Generated by CoffeeScript 1.6.3
jQuery(function() {
  $(".pagination a").click(function(e) {
    e.preventDefault();
    if (!$(this).parent().hasClass("previous") && !$(this).parent().hasClass("next")) {
      $(this).parent().siblings("li").removeClass("active");
      return $(this).parent().addClass("active");
    }
  });
  $('.close').each(function() {
    return $(this).click(function(e) {
      e.preventDefault();
      return $(this).parent().fadeOut();
    });
  });
  $("[data-toggle=tooltip]").tooltip();
  $("[data-tags]").tagsInput();
  $("[data-datepicker]").each(function() {
    var input;
    input = $(this);
    return input.pickadate({
      selectYears: input.data('select-years') || false,
      selectMonths: input.data('select-months') || false
    });
  });
  $(".rslides").responsiveSlides({
    auto: true,
    pager: true,
    nav: true,
    speed: 500,
    namespace: "centered-btns"
  });
  $('#js-show-left-navbar').click(function(e) {
    $('.vrt-navbar').toggleClass('hide');
    $('.navbar:first').toggleClass('hide');
    return false;
  });
  return $('.navbar [data-furatto="search"]').each(function() {
    var current_width;
    current_width = $(this).width();
    $(this).focus(function() {
      return $(this).animate({
        width: current_width + 20
      }, 'slow');
    });
    return $(this).blur(function() {
      return $(this).animate({
        width: current_width
      }, 'slow');
    });
  });
});
