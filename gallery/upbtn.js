const backToTopButton = document.querySelector("#backtotopbtn");
const videoButton = document.querySelector("#videobtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.scrollY > 300) {
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
        }
        backToTopButton.style.display = "block";
    } else {
        if (!backToTopButton.classList.contains("btnExit")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
        }
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}

// Video button functionality

document.addEventListener('DOMContentLoaded', function () {
    const videoOpenButton = document.querySelector("#videobtn");
    const videoCloseButton = document.querySelector(".close");
    const videoContainer = document.querySelector(".vid");
    const video = document.querySelector("video");

    videoOpenButton.addEventListener('click', () => {
        videoContainer.style.visibility = "visible";
        videoContainer.style.opacity = "1";
    });

    videoCloseButton.addEventListener('click', () => {
        videoContainer.style.visibility = "hidden";
        videoContainer.style.opacity = "0";

        video.pause();
        video.currentTime = 0;
    });
});