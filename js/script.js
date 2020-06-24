(function($){

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img:not(a img)').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Mobile nav
  $('#main-nav-toggle').click(function () {
    $('#header').toggleClass('mobile-on');
  });
})(jQuery);
