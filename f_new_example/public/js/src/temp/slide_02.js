(function($){
  const viewBox2 =$('#viewBox_02');
  const indicator =viewBox2.find('.indicator');
  const indiLi = indicator.find('li');
  const indiLiLink =indiLi.children('a');

  const slideForm = viewBox2.find('.slide_02_form');
  const slideGuide= slideForm.children('.guide');
  const slideEach =slideGuide.children('.banner_area');

  let timed = 500;
  let myn = 0 ,maxn =slideEach.length;

  const viewBtn =viewBox2.find('.view_btn');
  const pause =viewBtn.find('.pause');
  const play =viewBtn.find('.play');
  

  //----------------------------------------------------
  //slideEach.eq(0).addClass('action');
  //indiLi.eq(0).children(indiLiLink).addClass('action');

  //----------------------------------------------------------------------------

  const MoveSlide =function(n, bool){
    indiLiLink.removeClass('action');
    indiLi.eq(n).children('a').addClass('action');

    slideGuide.animate({'marginLeft':(-100*n)+'%'}, function(){
    slideEach.removeClass('action');
     setTimeout(function(){
     slideEach.eq(n).addClass('action');

     },timed);
    });
    //play,stop 버튼 동작유무판단'
    if(!bool){
      play.show();
      pause.hide();
    }else{
      pause.show();
      play.hide();
    
    }
  };

  MoveSlide(0, true);
  //---------------------------
  //일정시간마다 광고배너 움직이게하기

let  go;
const Goslide =function(){
  go= setInterval/*일정한 시간마다 나타나는 함수*/(function(){
    myn++;
    if(myn >= maxn){myn = 0;}
    MoveSlide(myn, true);
  }, timed* 4);
};// Goslide();

const StopSlide =function(){
 clearInterval(go);
};
Goslide();


let playBanner = function(boll){
  if(boll){
    Goslide();
  }else{
    StopSlide();
  }
}// playbanner();

playBanner(true);

viewBox2.on('mouseenter',function(){
  playBanner(false);
});

viewBox2.on('mouseleave',function(){
  playBanner(true);
});


//viewBox2.on({'mouseenter':StopSlide,'mouseleave':Goslide});



pause.on('click', function(){
 playBanner(false);
});

play.on('click',function(){
 playBanner(true);
});
//-----------------------------------------------------------------------

//클릭시 배너 움직이게 만들기----------------------------------------------
  
  indiLiLink.on('click focus' , function(e){
    e.preventDefault();
    e.StopPropagation();
    StopSlide();
    let myThis = $(this);
    let myThisPar = myThis.parent('li');
    let i      = myThisPar.index();
    myn =i;

    MoveSlide(myn, true);
    playBanner(false)

     
  });



})(jQuery);


//setTimeout() : 일정시간 뒤에 수행
//setInterval() : 일정시간 마다 수행
//clearInterval(): setInterval의 기능을 취소/정지

/*let i =0,maxi = 4,timed =1000,go;
let Goslide =function(){
 go = setInterval(function(){
  i++; 
  if(i >=maxi){
    i=0;
  }
  console.log(i);
}, timed);
};//GOSlide

Goslide();  //최초의수행 */


/* setTimeout(function(){
  clearInterval(go);
},timed*15); */

/*$(document).on('mouseenter',function(){
  clearInterval(go);
});
$(document).on('mouseleave',function(){
  Goslide();
}); */


