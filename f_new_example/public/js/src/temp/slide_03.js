//slide_03.js

(function($){
  const slideForm=$('.slide_03_form');
  const slideGuide = slideForm.children('ul');
  let slideLi =slideGuide.find('li'); // 5
  //slideForm.css('overflow', 'hidden');

  //----------------------------------------
  //li에 이름을 부여(.slide_03_con_0$)
  for(let i =0; i < slideLi.length; i++){
    let classname='slide_03_con_'+(i+1);
    slideLi.eq(i).addClass(classname);
  }
  let cloneLi =slideLi.eq(-1).clone(true); 
  //clone()사용시 true 이면 기능까지 복제

  //slideGuide.prepend(slideLi.eq(-1));

  cloneLi.prependTo(slideGuide);


//prepend, prependTo의 역할을 정확하게 구분
/*감싸는 영역. prepend(담는내용);
  담는내용.prependTo(감싸는영역);*/

//2. 마지막영역을 복제(clone)후에 앞에 담아라!)
//3.css작업시nth-child()를 이용하여 이미지/기능을 담으면
    //순서값에 의해 원하는 결과물이 나오지 않으므로, 각각 class 이름을 부여하여
    //이미지/기능을 처리해라!(복제전에 이름을 부여)

//4.또한, 그 부모인 영역의 넓이는 기존갯수 + 1 만큼의 크기값으로 재설정

//----------------------------------------------------------------
slideLi =slideGuide.find('li'); // li 가 새로 갱신된 내용으로처리 (6개)
const slide03Btn=$('.slide_03_btn')
const nextBtn = slide03Btn.children('.next');
const prevBtn =slide03Btn.children('.prev');

let myn =0;
const bannerLen = slideLi.length; //6

nextBtn.on('click',function(e){
  e.preventDefault();
  myn++;//5
  if(myn >=bannerLen-1){
    slideGuide.stop().css({'left':'100%'});
    myn=0;}
  let per =-100*myn+'%';
  slideGuide.stop().animate({'left':per},1000);

  
});

prevBtn.on('click',function(e){
  e.preventDefault();
  myn--;
  let per =-100*myn+'%';
  slideGuide.stop().animate({'left':per},1000,function(){
    if(myn<=-1){myn=bannerLen-2;}
      per =-100*myn + '%';
      slideGuide.stop().css({'left':per});
    });
  

});


})(jQuery);