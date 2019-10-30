(function ($) {
  const headBox=$('#headBox');
  const ul=headBox.find('ul');
  const dd=headBox.find('dd');
  const ulLink = ul.find('a');


  ul.on('mouseenter',function () {
    dd.stop().slideDown();
    
  });

  ul.on('mouseleave',function () {
    dd.stop().slideUp();
    
  });

  ulLink.on('focus',function () {
    dd.stop().slideDown();
    
  });

  ulLink.eq(-1).on('blur',function () {
    dd.stop().slideUp();
  });

})(jQuery);
