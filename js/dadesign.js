$(function() {

    $('.tintedWindowMain').each(function() {
        $(this).wrap('<div class="tintMain"></div>');
    });

    $('.tintedWindowSide').each(function(n) {
        n += 1;
        $(this).wrap('<div class="tintSide t' + n + '"></div>');
    });

    $('.tintedBar').each(function() {
        $(this).wrap('<div class="tintBar"></div>');
    });

    $('div.tintBar').click(function() {
        $(this).children().toggleClass('greenBg');
        console.log('I was clicked');
    });
});
