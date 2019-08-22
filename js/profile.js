$(document).ready(function() {
    let scrollTime = 25;
    let navHeight = $('nav').height();

    $('.navbar-nav li').click(function() {
        let sectionId = $(this).find('a').attr("href").toLowerCase();
        let subtractExtraHeight = 16;
        if ($(window).width() < 576) {
            subtractExtraHeight = 296;
        }
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top - (navHeight) - subtractExtraHeight
        }, scrollTime);
        let $mobileNavMenu = $(this).parents('div');
        if ($mobileNavMenu.hasClass('show')) {
            $mobileNavMenu.removeClass('show');
        }
    });

    $(document).scroll(function() {
        let fromTop = window.scrollY + 350;
        $('nav a').each(function() {
            let $section = $($(this).attr('href'));
            if (
                $section.offset().top <= fromTop &&
                $section.offset().top + $section.outerHeight() > fromTop
            ) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    });
});