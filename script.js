var currentVisible = 0;
function moveSlider(step) {
    document.getElementsByClassName("response-block")[currentVisible].classList.remove("response-visible");
    currentVisible = currentVisible + step;
    if (currentVisible > 2) {
        currentVisible = 0;
    }
    if (currentVisible < 0) {
        currentVisible = 2;
    }
    document.getElementsByClassName("response-block")[currentVisible].classList.add("response-visible");
}