$(function(){
  $('.box1').css({
    'background-color': '#0000FF',
    'height' : '100px'
  });
});

$('セレクタ').css('backfround-color', '#0000FF');

複数個ある場合
$('セレクタ').css({
  'プロパティ1':'値1',
  'プロパティ2':'値2',
  :
  :

})

$(function(){
  $('.box1').slideDown();
});

$(function(){
  $('.box1').slideUp();
}

$(function(){
  $('.box1').show();
  $('.box1').css({'background-color' : '#0000FF'});
}

$(function(){
  $('.box1').hede();
});

$(function(){
  $('.box2').slideDown(function(){
  $('.box2').css({
    'background-color' : '#0000FF',
    'width' : '200px',
    'height' : '100px',
  }).slideUp();
  });
});

$(function(){
  $('.box3').mouseover(function(){
    $('.box3').css({'background-color' : '#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color':'#FF0000'});
  });
});

$('.セレクタ名').イベント名(function(){
  イベント発生時に行われる処理
});

$(function(){
  $('.box3').mouseover(function(){
    $('.box3').addClass('box1-ext');
  });
  $('.box3').mouseout(function(){
    $('.box3').removeClass('box1-ext');
  });
});

$('.セレクタ名').on('click',function(){
  イベント発生時に行われる処理
});

$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  $('box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
})

$(function(){
  $('.bg1').on('click', function(){
    $('.bg1').slideUp();
  });
  $('.bg2').on('click', function(){
    $('.bg2').slideUp();
  });
  $('.bg3').on('click',function(){
    $('.bg3').slideUp();
  });
  $('.bg').on('click', function(){
    $('.bg4').slideUp();
  });
});

$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});