(function($) {
    "use strict";
    $(window).on("load", function() {
        //Preloader
        $("#status").fadeOut();
        $("#preloader").delay(500).fadeOut("slow");
    });

    //Waypoints
    function onScrollInit(items, trigger) {
        items.each(function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay');

            osElement.css({
                '-webkit-animation-delay': osAnimationDelay,
                '-moz-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay
            });

            var osTrigger = (trigger) ? trigger : osElement;

            osTrigger.waypoint(function() {
                osElement.addClass('animated').addClass(osAnimationClass);
            }, {
                triggerOnce: true,
                offset: '90%'
            });
        });
    }

    onScrollInit($('.os-animation'));
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));

    $(function() {

        //Scroll JS
        smoothScroll.init({
            selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
            selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInOutCubic', // Easing pattern to use
            updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
            offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
            callback: function(toggle, anchor) {} // Function to run after scrolling
        });

        //Menu
        var bodyEl = document.body,
            content = document.querySelector('.content-wrap'),
            openbtn = document.getElementById('open-button'),
            closebtn = document.getElementById('close-button'),
            isOpen = false;

        function inits() {
            initEvents();
        }

        function initEvents() {
            openbtn.addEventListener('click', toggleMenu);
            if (closebtn) {
                closebtn.addEventListener('click', toggleMenu);
            }
            content.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleMenu();
                }
            });
        }

        function toggleMenu() {
            if (isOpen) {
                classie.remove(bodyEl, 'show-menu');
            } else {
                classie.add(bodyEl, 'show-menu');
            }
            isOpen = !isOpen;
        }

        inits();

        //Typed JS
        $(".typed").typed({
            strings: ["Electrical Engineering Graduate from Ryerson University", "Junior IT Analyst ", "Fullstack web Developer"],
            typeSpeed: 200,
            backDelay: 900,
            loop: true
        });

        //Popup Work
        $('.enlarge').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
		
		//Contact
        $('input').blur(function() {
            if ($(this).val()) $(this).addClass('used');
            else $(this).removeClass('used');
        });

        //Skill
        jQuery('.skillbar').each(function() {
            jQuery(this).appear(function() {
                jQuery(this).find('.count-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2000);
                var percent = jQuery(this).attr('data-percent');
                jQuery(this).find('.count').html('<span>' + percent + '</span>');
            });
        });
		
		//Testimonials
		$('.reviews').owlCarousel({
			dots: true,
			loop: true,
			items: 1,
			smartSpeed: 1000,
			fluidSpeed: true,
			autoplay: true,
			autoplayTimeout: 4000,
			autoplayHoverPause: true
		});
    });

    //Nav Active
    function onScroll(event) {
        var scrollPosition = $(document).scrollTop();
        $('.menu-list a').each(function() {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('.menu-list a').removeClass("active");
                currentLink.addClass("active");
            } else {
                currentLink.removeClass("active");
            }
        });
    }
})(jQuery);