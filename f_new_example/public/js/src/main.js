// main.js

(function(){
  const body=$('body'); //body
const wrap=$('#wrap');  // #wrap
wrap.append('<section id="viewBox"></section>'); //view생성
const viewBox = $('#viewBox');
//script 내용 간편작성 함수 생성
const JsLink = function(temp){
  body.append(`<script src ="../js/src/temp/${temp}"></script>`);
};

viewBox.load('./temp/slide_01.html', function(){
  JsLink('slide_01.js');
  

});


})(jQuery);