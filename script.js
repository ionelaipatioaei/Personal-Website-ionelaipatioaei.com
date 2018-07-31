function showMenu() {
    document.querySelector(".mobile-nav").style.transform = "translateX(0%)";
    document.querySelector(".mobile-nav-background").style.display = "block";
}

function hideMenu() {
    document.querySelector(".mobile-nav").style.transform = "translateX(-100%)";
    document.querySelector(".mobile-nav-background").style.display = "none";
}