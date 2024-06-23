
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.my-list li');
    const marketContainer = document.querySelector('.global-market');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {

            tabs.forEach(tab => tab.classList.remove('active'));

            tab.classList.add('active');
            
            const offset = index * -100;
            marketContainer.style.transform = `translateX(${offset}%)`;
        });
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


//arrow
$(document).ready(function () {
    const $list = $('.my-list');
    const $listItems = $('.my-list li');
    const $rightArrow = $('#right-arrow');
    const $leftArrow = $('#left-arrow');

    let currentIndex = 0;

    $leftArrow.on('click', function () {
        if (currentIndex < $listItems.length - 1) {
            currentIndex++;
            $listItems.eq(currentIndex)[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    });

    $rightArrow.on('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            $listItems.eq(currentIndex)[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    });
});



