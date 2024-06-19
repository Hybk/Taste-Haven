
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.my-list li');
    const marketContainer = document.querySelector('.global-market');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(tab => tab.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Calculate the new position
            const offset = index * -100;
            marketContainer.style.transform = `translateX(${offset}%)`;
        });
    });
});

