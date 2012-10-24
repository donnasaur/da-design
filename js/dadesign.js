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

    /* Resize for smaller browser windows: 320px, 480px, 600px, 768px */

    if (Modernizr.mq('only screen and (max-width: 480px)')) {

        $('div.wrapper').css({'width':'313px','margin':'0 auto'});
        $('div.contactInfo').css({'float': 'left', 'text-align':'left'});
        $('div.tintedWindow').addClass('lastItem clearFix');
        $('div.aboutMe').css('float','left');
        console.log("make me one row!");
    } else if (Modernizr.mq('only screen and (max-width: 768px)')) {

        $('div.wrapper').css({'width':'530px','margin':'0 auto'});
        $('div.contactInfo').css({'float':'left', 'text-align':'left'});
        $('div#s3').removeClass('lastItem clearFix');
        $('div#s2').addClass('lastItem clearFix');
        $('div#s4').addClass('lastItem clearFix');
        $('div#s6').addClass('lastItem clearFix'); 
        $('div.aboutMe').css('float','left');
        console.log("make me two rows!");
    } else {

        console.log("you're fine!");
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
