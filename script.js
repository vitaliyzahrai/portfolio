$(document).ready(function(){
  $('.header_burger').click(function(event) {
    $('.header_burger,.header_menu_ul').toggleClass('active');
    $('body').toggleClass('lock');
  });
});