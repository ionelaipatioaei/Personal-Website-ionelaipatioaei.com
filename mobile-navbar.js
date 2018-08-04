function showMenu() {
    document.querySelector(".mobile-nav").style.transform = "translateX(0%)";
    document.querySelector(".mobile-nav-background").style.display = "block";

    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("header").classList.add("mobile-nav-blur");
    document.querySelectorAll("section").forEach(element => {
        element.classList.add("mobile-nav-blur");
    });
    document.querySelector("footer").classList.add("mobile-nav-blur");
}

function hideMenu() {
    document.querySelector(".mobile-nav").style.transform = "translateX(-100%)";
    document.querySelector(".mobile-nav-background").style.display = "none";

    document.querySelector("body").style.overflow = "visible";
    document.querySelector("header").classList.remove("mobile-nav-blur");
    document.querySelectorAll("section").forEach(element => {
        element.classList.remove("mobile-nav-blur");
    });
    document.querySelector("footer").classList.remove("mobile-nav-blur");
}