(function ($){
  const wrap=$('#wrap');
  const myForm=wrap.find('.mouse_form');
  const myLocation=wrap.find('.mouse_location');

  let url='../../img/gear/';
  //myForm.css({backgroundImage:`url(${url}gear_001.png)`});
  let j=0;
  for(let i=0; i<100; i++){

    if(i<9){
     j= '00'+(i+1);
    }else if(i<99){
      j='0'+(i+1);
    }else{
      j =(i+1);
    }
  myForm.append(`<img src="${url}gear_${j}.png" alt="이미지삽입">`);
  }

  const myImg =myForm.find('img');
  myImg.parent().css({position:'relative',overflow:'hieeden'});
  myImg.css({position:'absolute',top:0,left:0});
  myImg.eq(0).siblings().hide();

  myLocation.on('mousemove',function(e){
  let mv =  e.originalEvent.offsetX;
  let thisWidth= $(this).outerWidth();
  let myi= Math.floor(mv/thisWidth*100);
  myImg.eq(myi).siblings('img').hide();
  myImg.eq(myi).show();
  
  });


  //vw단위


})(jQuery);