$(document).ready(function() {
    const tabs = $('.my-list li');
    const markets = $('.market');

    tabs.on('click', function() {
        tabs.removeClass('active');
        $(this).addClass('active');

        const target = $(this).data('target');
        markets.removeClass('active');
        $(target).addClass('active');
    });

    tabs.first().click();
});
