function showMenu() {
    document.querySelector(".mobile-nav").style.transform = "translateX(0%)";
    document.querySelector(".mobile-nav-background").style.display = "block";

    document.querySelector("body").style.overflow = "hidden";
    document.querySelectorAll("header, section, footer").forEach(element => (element.classList.add("mobile-nav-blur")));
}

function hideMenu() {
    document.querySelector(".mobile-nav").style.transform = "translateX(-100%)";
    document.querySelector(".mobile-nav-background").style.display = "none";

    document.querySelector("body").style.overflow = "visible";
    document.querySelectorAll("header, section, footer").forEach(element => (element.classList.remove("mobile-nav-blur")));
}