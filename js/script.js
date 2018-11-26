$(function() {
  $('#neak').click(function(e) {
    if($('#menu__2:visible').length) {
      $('#menu__2').hide();
    } else {
      $('#menu__2').show();
    }
  });
});