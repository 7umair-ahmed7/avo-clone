let navbarOptions = document.querySelector(".navbar").getElementsByTagName("a")
let navBar = document.querySelector(".nav-2");
let logoSite = document.querySelector(".logo-nav")


document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        console.log(window.scrollX)
        let Xscroll = window.scrollX;
        let Yscroll = window.scrollY;
        if (Yscroll >= 550) {
            console.log("Limit reached")
            navBar.style.display = "flex";
        }
        if (Yscroll < 550) {
            navBar.style.display = "none";

        }
    })
})

function removeActiveClass() {
    Array.from(navbarOptions).forEach(el => {
        console.log(el.className)
        if (el.className == "active-page") {
            el.className = "";

        }
    })
}
function detectActiveFunction() {
    if (window.location.href.includes("index.html")) {
        removeActiveClass()
        navbarOptions[0].classList.add("active-page");
    } else if (window.location.href.includes("about.html")) {
        removeActiveClass()
        navbarOptions[1].classList.add("active-page");

    } else if (window.location.href.includes("work.html")) {
        removeActiveClass()
        navbarOptions[2].classList.add("active-page");

    } else if (window.location.href.includes("blog.html")) {
        removeActiveClass()
        navbarOptions[3].classList.add("active-page");

    } else if (window.location.href.includes("contact.html")) {
        removeActiveClass()
        navbarOptions[4].classList.add("active-page");

    }

}
detectActiveFunction()
Array.from(navbarOptions).forEach(e => {
    e.addEventListener("click", () => {
        detectActiveFunction();
    })
})