$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    $(this).scrollTop()
    if ($(this).scrollTop() > 300) {
      $(".js-navbar").css({
        "margin-top": "-70px"
      });
    }
    else {
      $(".js-navbar").css({
        "margin-top": "0px"
      });
    }
  });
});
