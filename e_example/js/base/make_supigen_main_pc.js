


(function($){
  //1.#gnb 영역내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여넣기
  //clone() 메서드를 사용

  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area');

  let gnbContents = gnb.contents().clone();
  // console.log(gnbContents);

  sideGnbArea.append(gnbContents);

  //-------------------------------------------
  //버튼ㄴ글릭시 .side_gnb 나타나게 만들기
  const openGnbBtn=$('gnb_btn > button');
  const closeGnbBtn=$('.close_gnb_btn');
  cost sideGnb=$('.side_gnb');

  openGnbBtn.on('click', function(){
    sideGnb.css({'display':'block'});
    sideGnb.show();

    openGnbBtn.on('click', function(){
      sideGnb.css({'display':'none'});
      sideGnb.hide();
      

  })


})(jQuery);