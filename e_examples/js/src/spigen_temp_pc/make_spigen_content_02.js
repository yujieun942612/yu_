


(function($){
  const conBox2 = $('#conBox2');
  const conBoxLink= conBox2.find('ul>li>a'); 
  //console.log(conBox2.offset().top);

  //.action
  conBoxLink.on('mouseenter focus', function(){
        $(this).addClass('action');
  })

            .on('mouseleave blur', function(){
              $(this).removeClass('action');
            });

            let conBoxOffset = conBox2.offset().top;
            const topBtn =$('.top_move_btn');
            const win = $(window);
            //win.on('scroll' , function(){});
              win.on('scroll', () => {
               // console.log(e);
               let scrrollResult= $(this).scrollTop();
               //console.log(scrrollResult);
               if(scrrollResult>conBoxOffset){
                 topBtn.fadeIn();
               }
               else{
                topBtn.fadeOut();
               
               }
              });

              topBtn.on('click',(e) => {
                e.preventDefault();
                $('html,body')
                .stop()
                .animate({'scrollTop':0},100, 'easeInOutBounce', ()=>{
                  $('h1>a').focus();
                });
              });



})(jQuery);


/** 자주사용하는 이벤트1
 * mouseenter, mouseleave
 * click, focus, blur
 * keyup
 * ================================
 * 자주사용하는 메소드
 * 선택자(자식 부모 형제)
 * show/hide -보다는  slide 사용권장 , addclass/removeClass
 * attr, removeAttr
 * ====================================
 * 불러오거나 삽입하는 기능
 * text, appende, prepend
 * load 
 * =================================
 * 자주사용하는 문법
 * 연산자
 * if,switch
 * for
 * function(){};
 * var, const, let
 * parseInt()
 * ==============================
 * eq(), index()
 */


 /**스크롤바가 일정량 움직였을 경우에 .top_move_button 이 생성되게 만들기
  * 사용된 이벤트는 scroll 
  * scrollTop() : 스크롤바의 움직인 위치값을 파악
  * offset().top , offset().left : 찾아오시면되어요~
  * mousewheel, DOMMouseScroll  : 크로브라우징으로 만드는 법 찾아오세요~~ 징글징글해요오오오~~~~
  * BOM , DOM ?? 돔을 언제썼나요?? 
  * 상단 네비게이션 js기능으로 처리!!1!----> 과제
  */
  
 

    