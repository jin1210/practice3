$(function(){
  $('#back a').on('click',(event){
    $('body,html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});