(function ($) {
  const menubox=$('#menubox');
  const ul=menubox.find('ul');
  const dd=menubox.find('dd');
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

