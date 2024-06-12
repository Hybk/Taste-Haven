







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
function toggleBlock() {
    const contentBlock = document.querySelector('.reveal-content');
    const icon = document.querySelector('icon');
    
    if (contentBlock.classList.contains('hidden')) {
        contentBlock.classList.remove('hidden');
        icon.classList.remove('fi-rr-add');
        icon.classList.add('fi-rr-cross-circle');
    } else {
        contentBlock.classList.add('hidden');
        icon.classList.remove('fi-rr-cross-circle');
        icon.classList.add('fi-rr-add');
    }
}

document.querySelectorAll('.toggleBtn, .icon').forEach(element => {
    element.addEventListener('click', toggleBlock);
});
