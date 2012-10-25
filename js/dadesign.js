$(function() {
 
    /* Wrapping div on all screen windows for hover tint effect */
    
    $('.tintedWindow').each(function() {
        $(this).wrap('<div class="tint"></div>');
    });
    
   /* For touch screens, keep the description always displayed */

    if (Modernizr.touch) {

        $('div.description').removeClass('hidden');
    
    } else {
    
    /* For all other screens, show description on hover */
    
        $('.tint').hover(
            function() {
                $(this).find('div.description').removeClass('hidden');
            },
            function() {
                $(this).find('div.description').addClass('hidden');
            }
        );
    
    }

    /* Adding Fancybox functionality */
    
    $(".fancybox").fancybox({
        prevEffect : 'none',
        nextEffect : 'none',
        helpers : {
            title: {
            type: 'inside'
            }
        }
    });

    $(".various").fancybox({
        maxWidth : 800,
        maxHeight : 600,
        fitToView : false,
        width : '70%',
        height : '70%',
        autoSize : false,
        closeClick : false,
        openEffect : 'none',
        closeEffect : 'none'
    });

});
