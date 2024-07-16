$(document).ready(function() {
    const contactBtn = $('#contact-btn');
    const contactForm = $('#contact-form');
    const closeBtn = $('.close');


    contactBtn.on('click', function() {
        contactForm.show();
    });

    closeBtn.on('click', function() {
        contactForm.hide();
    });

  
    $(window).on('click', function(event) {
        if ($(event.target).is(contactForm)) {
            contactForm.hide();
        }
    });

    $('.service-item').hover(
        function() {
            const hoverIcon = $(this).data('hover-icon');
            const hoverText = $(this).data('hover-text');
            const target = $(this).data('target');
            const additionalText = "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque";


            if (hoverIcon || hoverText) {
                $(this).find('.service-img').css('opacity', 0.3); 

          
                let hoverHtml = '<div class="hover-content">';

             
                if (hoverIcon) {
                    hoverHtml += '<img src="' + hoverIcon + '" alt="Hover Icon" class="hover-icon">';
                }

               
                if (hoverText) {
                    hoverHtml += '<p>' + hoverText + '</p>';
                }

                
                hoverHtml += '<p style="text-align: center; font: normal normal normal 16px/30px Poppins; letter-spacing: 0px; color: #FFFFFF; opacity: 1;">' + additionalText + '</p>';

                hoverHtml += '<a href="https://fylehq.com" target="_blank" class="read-more-btn">Read More <img src="assets/images/arrow.png" class="arrow-icon" alt="Arrow"></a>';

                hoverHtml += '</div>';

                $(this).append(hoverHtml);
            } else {
               
                $(this).find('.service-img').css('opacity', 0.7);
            }

    
            $('.dot').removeClass('active');
            $('.dot img').attr('src', 'assets/images/inactive.png');
            $('.dot[data-target="' + target + '"]').addClass('active');
            $('.dot[data-target="' + target + '"] img').attr('src', 'assets/images/active.png'); 
        },
        function() {
            
            $(this).find('.service-img').css('opacity', 1);
            $(this).find('.hover-content').remove();
        }
    );


    $('.dot').on('click', function() {
        const target = $(this).data('target');

        
        $('.dot').removeClass('active');
        $('.dot img').attr('src', 'assets/images/inactive.png');

      
        $(this).addClass('active');
        $(this).find('img').attr('src', 'assets/images/active.png');

        $('.service-item[data-target="' + target + '"]').trigger('mouseenter');
    });


    var defaultImage = $('.project-item.active').data('image');
    $('#project-image').attr('src', defaultImage);

    $('.project-item').on('click', function() {
        const newImage = $(this).data('image');


        $('.project-item').removeClass('active');

        $(this).addClass('active');

        
        $('#project-image').fadeOut(300, function() {
            $(this).attr('src', newImage).fadeIn(300);
        });
    });
});
