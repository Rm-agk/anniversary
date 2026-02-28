let slides = [
    { src: "images/1.jpg", text: "Blessed Year" },
    { src: "images/2.jpg", text: "Another Moment" },
    { src: "images/3.jpg", text: "Another Moment" },
    { src: "images/4.jpg", text: "Another Moment" },
    { src: "images/5.jpg", text: "Another Moment" },
    { src: "images/6.jpg", text: "Another Moment" },
    { src: "images/7.jpg", text: "Another Moment" },
    { src: "images/8.jpg", text: "Another Moment" },
    { src: "images/9.jpg", text: "Another Moment" },
    { src: "images/10.jpg", text: "Another Moment" },
    { src: "images/11.jpg", text: "Another Moment" },
    { src: "images/12.jpg", text: "Another Moment" },
    { src: "images/13.jpg", text: "Another Moment" },
    { src: "images/14.jpg", text: "Another Moment" },
    { src: "images/15.PNG", text: "Another Moment" },
    { src: "images/16.jpg", text: "Another Moment" },
    { src: "images/17.jpg", text: "Another Moment" },
    { src: "images/18.jpg", text: "Another Moment" },
    { src: "images/19.jpg", text: "Another Moment" },
    { src: "images/20.jpg", text: "Another Moment" },
    { src: "images/21.jpg", text: "Another Moment" },
    { src: "images/22.jpg", text: "Another Moment" },
    { src: "images/23.jpg", text: "Another Moment" },
    { src: "images/24.jpg", text: "Another Moment" },
    { src: "images/25.jpg", text: "Another Moment" },
    { src: "images/26.jpg", text: "Another Moment" },
    { src: "images/27.jpg", text: "Another Moment" },
    { src: "images/28.jpg", text: "Another Moment" },
    { src: "images/29.jpg", text: "Another Moment" },
    { src: "images/30.jpg", text: "Another Moment" },
    { src: "images/31.jpg", text: "Another Moment" },
    { src: "images/32.jpg", text: "Another Moment" },
    { src: "images/33.jpg", text: "Another Moment" },
    { src: "images/34.jpg", text: "Another Moment" },
    { src: "images/35.jpg", text: "Another Moment" },
    { src: "images/36.jpg", text: "Another Moment" },
    { src: "images/37.jpg", text: "Another Moment" },
    { src: "images/38.jpg", text: "Another Moment" },
    { src: "images/39.jpg", text: "Another Moment" },
    { src: "images/40.jpg", text: "Another Moment" },
    { src: "images/41.jpg", text: "Another Moment" },
    { src: "images/42.jpg", text: "Another Moment" },
    { src: "images/43.jpg", text: "Another Moment" },
    { src: "images/44.jpg", text: "Another Moment" },
    { src: "images/35.jpg", text: "Final Moment" }
];

let current = 0;
let slide = document.getElementById("slide");
let caption = document.getElementById("caption");
let progress = document.querySelector(".progress-bar");
let music = document.getElementById("bg-music");
let anniversaryTitle = document.querySelector(".anniversary-title");

let interval = null;
let duration = 5000;

function showSlide(index) {
    slide.style.opacity = 0;

    setTimeout(() => {
        slide.src = slides[index].src;
        caption.textContent = slides[index].text;
        slide.style.opacity = 1;
        resetProgress();
    }, 800);
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function startSlideshow() {
    interval = setInterval(nextSlide, duration);
    animateProgress();
}

function animateProgress() {
    progress.style.transition = "none";
    progress.style.width = "0%";

    setTimeout(() => {
        progress.style.transition = duration + "ms linear";
        progress.style.width = "100%";
    }, 50);
}

function resetProgress() {
    animateProgress();
}

/* Intro Logic */

const introScreen = document.getElementById("intro-screen");

function startExperience() {

    introScreen.style.opacity = "0";

    setTimeout(() => {
        introScreen.style.display = "none";
    }, 1500);

    showSlide(current);
    startSlideshow();

    setTimeout(() => {
        anniversaryTitle.classList.add("show");
    }, 1000);

    music.volume = 0;
    music.play();

    let fade = setInterval(() => {
        if (music.volume < 1) {
            music.volume += 0.05;
        } else {
            clearInterval(fade);
        }
    }, 200);

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });
}

introScreen.addEventListener("click", startExperience);
introScreen.addEventListener("touchstart", startExperience);

/* Swipe Support */

let startX = 0;

document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) nextSlide();
});
