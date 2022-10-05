$(function(){
  $('#back a').on('click',(event){
    $('body,html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

$(function(){
  $('.menu-trigger').on('click',function(event){
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});