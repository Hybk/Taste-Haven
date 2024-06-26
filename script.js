
// Timer section
let hours = 0;
let minutes = 0;
let seconds = 0;

setInterval(() => {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("hours").innerHTML = pad(hours);
    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerHTML = pad(seconds);
}, 1000);

function pad(number) {
    return (number < 10 ? "0" : "") + number;
}

// reveal

$(document).ready(function() {
    $('.toggleBtn, .icon').click(function() {
        const contentBlock = $(this).closest('.bos-inner-one').find('.reveal-content');
        const icon = $(this).closest('.bos-inner-one').find('.icon');

        $('.reveal-content').not(contentBlock).addClass('hidden');
        $('.icon').not(icon).removeClass('fi-rr-cross-circle').addClass('fi-rr-add');

        contentBlock.toggleClass('hidden');

        if (contentBlock.hasClass('hidden')) {
            icon.removeClass('fi-rr-cross-circle').addClass('fi-rr-add');
        } else {
            icon.removeClass('fi-rr-add').addClass('fi-rr-cross-circle');
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
