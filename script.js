







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

const images = document.querySelectorAll('.container-img img');
let currentIndex = 0;

setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}, 3000);


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




$(document).ready(function() {
    $('.menu-toggle').click(function(){
        const navList = $(this).siblings('nav').find('.nav-list');
        navList.toggleClass('active');
        $('body').toggleClass('blur'); // Blur the body when the menu is active
    });

    $('.nav-list li a').click(function(){
        $('.nav-list').removeClass('active');
        $('body').removeClass('blur');
    });
    
});