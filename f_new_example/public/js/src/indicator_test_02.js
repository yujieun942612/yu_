(function($) {
 const slide_temp=$('#slide_temp');
 const indicator=slide_temp.find('.indicator');
 const indiLi=indicator.find('li');
 const india=indiLi.find('a')


 const productUl=slide_temp.find('.product').children('ul');
 const productLi=productUl.children('li');

 let i = 0;
 india.on('focus click', function(e){
    e.preventDefault();
    i = $(this).parent().index();
    productUl.animate({marginLeft: (-100 * i) + '%' });

  
 });

 


})(jQuery);