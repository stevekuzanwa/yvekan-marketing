


$(document).ready(function(){
    
    /*****************************************************************/
    /*********************** STICKY NAV MENU *************************/
    /*****************************************************************/

         $(".navigation").sticky(
              {topSpacing:0,
              zIndex:999
         });
    
    /*****************************************************************/
    /*********************** MOBILE NAV MENU *************************/
    /*****************************************************************/

    
        $(".js-nav-icon").click(function(){
           $(this).toggleClass("change");
           $(".js-main-nav").slideToggle(500);
        });
    
        $(".js-menu").click(function(){
               if($(window).width() < 801){
                   $(".js-main-nav").slideUp(500);
                   $(".js-nav-icon").toggleClass("change");
                }
        });
    
    
    /************************************************************************/
    /**************************** SMOOTH SCROLL *****************************/
    /************************************************************************/
    
        $('a').smoothScroll({
             offset: -40,
             excludeWithin: ['.js_services', '.js_caseStudies'],
             speed: 1000
         });
        


    /*****************************************************************/
    /************* ACTIVE NAV MENU ON SCROLL AND ON CLICK ************/
    /*****************************************************************/
  
         var sections = $('section'),
                nav = $('nav'),
                nav_height = nav.outerHeight();

          $(window).on('scroll', function () {
              var cur_pos = $(this).scrollTop();

              sections.each(function() {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                  nav.find('a').removeClass('active');
                  sections.removeClass('active');

                  $(this).addClass('active');
                  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
                }
              });
          });
  
              
    

    /*************************************************************************/
    /**************************** SCROLL TO TOP ******************************/
    /*************************************************************************/
    
           //Check to see if the window is top if not then display button
           $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.js-scroll-to-top').fadeIn();
                } else {
                    $('.js-scroll-to-top').fadeOut();
                }
            });
            //Click event to scroll to top
            $('.js-scroll-to-top').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });
    

    /*************************************************************************/
    /**************************** SLICK CAROUSEL *****************************/
    /*************************************************************************/
         
         $('.slides').on('init', function(event, slick, currentSlide){
             $('.slick-active h1').removeClass('js-hidden');
             $('.slick-active h1').addClass('animated fadeIn');
             $('.slick-active .js-details').removeClass('js-hidden');
             $('.slick-active .js-details').addClass('animated fadeIn');
             $('.slick-active .js-buttons').removeClass('js-hidden');
             $('.slick-active .js-buttons').addClass('animated fadeIn');
         });
    
         /** BackGround Slides **/
    
         $('.slides').slick({
             slidesToShow: 1,
             autoplay:true,
             pauseOnHover:true,
             autoplaySpeed: 3000,
             speed: 1000,
             arrows: true,
             dots: true
      
         });
     
    
         $('.slides').on('beforeChange', function(event, slick, currentSlide){
             $('.slick-active h1').removeClass('animated fadeIn');
             $('.slick-active h1').addClass('js-hidden');
         });

         $('.slides').on('afterChange', function(event, slick, currentSlide){
             $('.slick-active h1').removeClass('js-hidden');
             $('.slick-active h1').addClass('animated fadeIn');
         });


         $('.slides').on('beforeChange', function(event, slick, currentSlide){
             $('.slick-active .js-details').removeClass('animated fadeIn');
             $('.slick-active .js-details').addClass('js-hidden');
         }); 

         $('.slides').on('afterChange', function(event, slick, currentSlide){
             $('.slick-active .js-details').removeClass('js-hidden');
             $('.slick-active .js-details').addClass('animated fadeIn');
         });


         $('.slides').on('beforeChange', function(event, slick, currentSlide){
             $('.slick-active .js-buttons').removeClass('animated fadeIn');
             $('.slick-active .js-buttons').addClass('js-hidden');
         }); 

         $('.slides').on('afterChange', function(event, slick, currentSlide){
             $('.slick-active .js-buttons').removeClass('js-hidden');
             $('.slick-active .js-buttons').addClass('animated fadeIn');
         });
 
    
         /** Testimonials Slides **/
    
         $('.testimonialsSlides').slick({
             slidesToShow: 1,
             autoplay:true,
             pauseOnHover:true,
             autoplaySpeed: 5000,
             speed: 1000,
             arrows: false,
             dots: true
      
         });
    
    /***************************************************************************/
    /******************************* OPEN POPUP ********************************/
    /***************************************************************************/

        $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        callbacks: {
            beforeOpen: function() {
               this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
            
        });
    
    /***************************************************************************/
    /**************************** PORTFOLIO FILTER *****************************/
    /***************************************************************************/
         
         /** Portfolio Filter Active Menu **/
         $("a.categories").click(function(){
               $(this).addClass("active");
               $("a.categories").not(this).removeClass("active");
         });
    
    
          // init Isotope
         var $grid = $('.work-grid').isotope({
          // options
                // 0.8s in milliseconds
                transitionDuration: 800
         });
          // filter items on button click
         $('.categories-filter').on( 'click', 'a', function() {
           var filterValue = $(this).attr('data-filter');
           $grid.isotope({ filter: filterValue });
         });
    
    
    /*****************************************************************/
    /*********************** FORM VALIDATION *************************/
    /*****************************************************************/
      
         $("#commentForm").validate({
             rules:
                {
                     name: 
                     {
                        required: true,
                        minlength: 3
                     },
                     email: 
                     {
                         required: true,
                         email: true
                     },
                     message:
                     {
                         required: true,
                         minlength: 10
                     }
                },

               messages: 
                     {
                        name: 
                           {
                             required: "Please enter your name",
                           },

                        email: 
                           {
                              required: "Please enter your email address",
                              email: "Please enter a valid email address"
                            },
                         message:
                            {
                                required:"Please enter your message"
                            }
                    }
         });
    
    /*****************************************************************/
    /***************************** WOW *******************************/
    /*****************************************************************/
    
            new WOW().init();
    
       
    
});




