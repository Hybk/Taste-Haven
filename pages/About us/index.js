    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        let isValid = true;
        const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ccc';
            }
        });

    });


    // menubar


$(document).ready(function() {
    $('.menu-toggle, .menu-toggle1').click(function() {
        const navList = $('nav .nav-list');
        const menuToggle = $('.menu-toggle');
        const menuToggle1 = $('.menu-toggle1');

        navList.toggleClass('active');

        if (navList.hasClass('active')) {
            menuToggle.hide();
            menuToggle1.show();
        } else {
            menuToggle.show();
            menuToggle1.hide();
        }
    });

    $('.nav-list li a').click(function() {
        const navList = $(this).closest('nav').find('.nav-list');
        const menuToggle = $('.menu-toggle');
        const menuToggle1 = $('.menu-toggle1');

        navList.removeClass('active');

        menuToggle.show();
        menuToggle1.hide();
    });
});