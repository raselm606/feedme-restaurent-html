
jQuery(document).ready(function($){
//scroll spy
/*
$('body').scrollspy({ target: '#examplee' });

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});*/

//carusole slider
$('.client_slide').owlCarousel({
    animateIn: 'fadeInRight',
    autoplay:true,
    autoplayHoverPause:true,
    loop:true,
    items:1,
    margin:30,
    stagePadding:30,
    autoplayTimeout:2100,
   
});

// wow animation js
wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();

//sticky js

$(".top_area").sticky({topSpacing:0});
  
// jQuery smooth scroll
//get the header height
var headerHeight = $('#restaurent_raselm ul li a').outerHeight();
$('#restaurent_raselm ul li a').click(function(e) {
    var linkHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headerHeight
    }, 1800, 'easeInOutExpo');

    e.preventDefault();
});


//scrolly parallax
/*
$('.ingredients-area parallax').scrolly({bgParallax: true});
*/

//reservation slider
var owl = $('.reservation_img');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})





 /*=======================================================================
     [05] STICKY HEADER
     =========================================================================*/
$(window).on('scroll', function(){
        if($(window).scrollTop() > 300)
        {
            $(".isSticky").addClass('fixedHeader');
        }else
        {
            $(".isSticky").removeClass('fixedHeader');
        }

        /*====== Menu Active on Scroll ======*/
        Scroll();
    });
    $('.collapse.navbar-collapse ul li.scroll > a').on('click', function(){
        if($(this).parent().hasClass('has-child'))
        {
            $(this).parent().children('ul').slideToggle('slow');
        }
        $('html, body').animate({scrollTop : $(this.hash).offset().top - 68}, 1000);
        return false;
    });

    function Scroll(){

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.collapse.navbar-collapse').find('.scroll > a').each(function(){
            var atr = $(this).attr('href');
            if($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function(i){
            if(winTop > contentTop[i] - rangeTop){
                $('.collapse.navbar-collapse li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }

});