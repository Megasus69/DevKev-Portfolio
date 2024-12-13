const backToTopButton = document.querySelector("#backtotopbtn");

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