/* (function ($) {
  const headBox=$('#headBox');
  const ul=headBox.find('ul');
  const li=headBox.find('li');
  const dd=headBox.find('dd');
  const ulLink = ul.find('a');


  li.on('mouseenter',function () {
    dd.stop().slideDown();
    
  });

  li.on('mouseleave',function () {
    dd.stop().slideUp();
    
  });

  ulLink.on('focus',function () {
    dd.stop().slideDown();
    
  });

  ulLink.eq(-1).on('blur',function () {
    dd.stop().slideUp();
  });

})(jQuery); */



(function ($) {
  const headBox=$('#headBox');
  const ul=headBox.find('ul');
  const li=headBox.find('li');
  const dt=headBox.find('dt');
  const dd=headBox.find('dd');
  
  

  li.on('mouseenter',function() {
  dd.stop().fadeIn();
  });

  li.on('mouseleave',function() {
    dd.stop().fadeOut();
    });

  

})(jQuery); 