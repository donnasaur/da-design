$(function() {

    $('.tintedWindow').each(function() {
        $(this).wrap('<div class="tint"></div>');
    });
   
    $('.tint').hover(
        function() {
            $(this).find('div.description').removeClass('hidden');
        },
        function() {
            $(this).find('div.description').addClass('hidden');
        }
   );
  
   $(".fancybox").fancybox({
       prevEffect : 'none',
       nextEffect : 'none',
       helpers : {
            title: {
                type: 'inside'
            }
        }
   });

});
