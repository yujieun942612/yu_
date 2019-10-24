// make_spigen_main_pc
(function($){
  // 1. #gnb영역내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여넣기
  // clone() 메서드를 사용


  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area');

  //=================================================
  // TODO: header 영역에 해당하는 애용을 만들기
  
  const gnbMenu =[{title:'about',titleLink:'title_link_0', //sub:['who we are','what we do','our locations']},
  sub:[{subName:'who we are',subLink:'sub_01_0'},{subName:'what we do',subLink:'sub_01_1'},{subName:'our locations',subLink:'sub_01_2'}

]},

  {title:'careers',titleLink:'title_link_01',
  sub:[{subName:'careers',subLink:'sub_02_0'},{subName:'HR blog',subLink:'sub_02_1'},{subName:'apply',subLink:'sub_02_2'}
]},

  {title:'media',titleLink:'title_link_02',
  sub:[{subName:'meda',subLink:'sub_03_0'}
]},


  {title:'IR',titleLink:'title_link_03',
  sub:[{subName:'investors',subLink:'sub_04_0'},{subName:'IR archive',subLink:'sub_04_1'},
  {subName:'IR meeting',subLink:'sub_04_2'}
]}
];
// console.log(gnbMenu);
 // gnbMenu[0].title
  //gnbMenu[0].sub[0]

  /* for(i<menu)문~=============================================

  for(var i=0; i < gnbMenu[0].sub.length; i++){
    console.log( gnbMenu[0].sub[i]);
  }

  for(let i =0; i < gnbMenu[1].sub.length; i++){
    console.log(gnbMenu[1].sub[i]);
  }

  for(let i =0; i < gnbMenu[2].sub.length; i++){
    console.log(gnbMenu[2].sub[i]);

  }
  
  for(let i =0; i < gnbMenu[3].sub.length; i++){
    console.log(gnbMenu[3].sub[i]);

  }



  for(let i=0; i<gnbMenu.length; i++){
    console.log(gnbMenu[i].title);

    //-------------------------
    for(let j=0; j < gnbMenu[0].sub.length; j++){
      console.log(gnbMenu[0].sub[j])

    }
    //---------------------------
  }
*/

  const menuLen = gnbMenu.length;
  gnb.append('<ul></ul>');
  const gnbUl = gnb.children('ul');

  for(let  i = 0; i < menuLen; i++ ){
    //console.log(gnbMenu[i]);
   // gnb.append(gnbMenu[i]);
    gnbUl.append('<li><dl><dt><a href=""></a></dt><dd></dd></dl></li>');
    let gnbLi =gnbUl.children('li').eq(i)
    let gnbMyLink= gnbLi.find('dt').children('a')
    gnbMyLink.attr({'href': gnbMenu[i] .titleLink});
    gnbMyLink.text(gnbMenu[i].title);
    
    let subLen= gnbMenu[i].sub.length;
    //console.log(subLen);
    for(let j=0;  j<subLen; j++){
      let gnbDd= gnbLi.find('dd');
      gnbDd.append('<a href=""></a>');
      let gnbMyLink = gnbDd.children('a').eq(j);
      gnbMyLink.text(gnbMenu[i].sub[j].subName);
      gnbMyLink.attr({'href': gnbMenu[i].sub[j].subLink});

    }
  }





  //========================================

  let gnbContents = gnb.contents().clone();
  // console.log(gnbContents);
  sideGnbArea.append(gnbContents);
// ---------------------------------------------
// 버튼클릭시 .side_gnb 나타나게 만들기/사라지게 만들기

  const openGnbBtn   = $('.gnb_btn > button');
  const closeGnbBtn  = $('.close_gnb_btn > button');
  const sideGnb      = $('.side_gnb');
  const gnbDl        = gnb.find('dl');
  const gnbDd        = gnb.find('dd');
  const gnbDt        = gnb.find('dt');
  const gnbTitleLink = gnbDt.children('a');
  const gnbListLink  = gnbDd.children('a');
  
  let time           = 600;

  openGnbBtn.on('click', function(e){
    e.preventDefault();
    sideGnb.stop().fadeIn(time/2, function(){
      $(this).on('keyup', function(e){
        // esc => 27
        console.log(e.key.toLowerCase() );

        // 영문글자를 강제로 대/소문자로 치환하는 함수
        // 대문자로 변환  toUpperCase()
        // 소문자로 변환  toLowerCase()

        if( e.keyCode  ==  27 ){ 
          sideGnb.fadeOut(time); 
          openGnbBtn.focus();
        }
      });
    });   
    closeGnbBtn.focus();
  });

  closeGnbBtn.on('click', function (e) {
    e.preventDefault();
    sideGnb.fadeOut(time);
    openGnbBtn.focus();
  });


// #gnb에 마우스 올렸을 경우 dd를 나오게 만들기

const addAction = function () {
  $(this).find(gnbTitleLink).addClass('action'); //주황색선!
  gnbDd.stop().slideDown();
}

const removeAction = function () {
  $(this).find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideUp();
}



  gnbDl.on({ 'mouseenter': addAction, 'mouseleave': removeAction});

// #gnb에 dt에 focus 처리되면 dd가 나타나게 만들기
// a, button, form(input, textarea, select)
  gnbTitleLink.on('focus', addAction);
  gnbListLink.on('blur', addAction);
  gnbListLink.eq(-1).on('blur', removeAction);

// .side_gnb_area 내부의 마지막 a요소에서 blur처리되면, 
// .close_gnb_btn위치로 다시 focus 처리되어라
// 단, 전체 페이지에서 추가로 focus 처리되는 항목이 있어야 가능

const sideLink = sideGnbArea.find('a');
const sideLastLink = sideLink.eq(-1);

  sideLastLink.on('blur', function () {
    closeGnbBtn.focus();
  }); 


// .side_gnb_area 에서 키보드  esc 키를 누르면, 빠져 나가고, 이전의 위치로 돌아가라
// -> .side_gnb_area가 보이는 곳에서 수행


})(jQuery);