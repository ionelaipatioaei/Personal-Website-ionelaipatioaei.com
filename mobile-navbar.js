function showMenu() {
    document.querySelector(".mobile-nav").classList.add("mobile-nav-show");
    document.querySelector(".mobile-nav-background").style.display = "block";

    document.querySelector("body").style.overflow = "hidden";
    document.querySelectorAll("header, section, footer").forEach(element => (element.classList.add("mobile-nav-blur")));
}

function hideMenu() {
    document.querySelector(".mobile-nav").classList.remove("mobile-nav-show");
    document.querySelector(".mobile-nav-background").style.display = "none";

    document.querySelector("body").style.overflow = "visible";
    document.querySelectorAll("header, section, footer").forEach(element => (element.classList.remove("mobile-nav-blur")));
}