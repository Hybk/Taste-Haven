







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



// carusel






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
