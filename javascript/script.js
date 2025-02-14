let sliderBackground = document.querySelector(".upper-portion");
let sliderDots = document.getElementsByClassName("dot");
let sliderDotsArray = Array.from(sliderDots);
let navbarOptions = document.querySelector(".navbar").getElementsByTagName("a")
let navBar = document.querySelector(".nav-2");
let logoSite = document.querySelector(".logo-nav")


document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        console.log(window.scrollX)
        let Xscroll = window.scrollX;
        let Yscroll = window.scrollY;
        console.log(Yscroll)
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

if (window.getComputedStyle(sliderBackground).backgroundImage == `url("http://127.0.0.1:3000/assets/bg_1.jpg.webp")` || window.getComputedStyle(sliderBackground).backgroundImage == `url("/assets/bg_1.jpg.webp")`) {
    sliderDotsArray[0].classList.add("active-dot")
    sliderDotsArray[1].classList.remove("active-dot")
} else {
    sliderDotsArray[1].classList.add("active-dot")
    sliderDotsArray[0].classList.remove("active-dot")
}

sliderDotsArray.forEach((e, i) => {
    e.addEventListener("click", (el, ind) => {
        if (window.getComputedStyle(sliderBackground).backgroundImage == `url("http://127.0.0.1:3000/assets/bg_1.jpg.webp")` || window.getComputedStyle(sliderBackground).backgroundImage == `url("/assets/bg_1.jpg.webp")`) {
            if (i == 1) {
                sliderBackground.style.backgroundImage = `url("/assets/bg_2.jpg.webp")`;
                sliderDotsArray[1].classList.add("active-dot")
                sliderDotsArray[0].classList.remove("active-dot")

            }

        }
        else {
            if (i == 0) {
                sliderBackground.style.backgroundImage = `url("/assets/bg_1.jpg.webp")`;
                sliderDotsArray[0].classList.add("active-dot")
                sliderDotsArray[1].classList.remove("active-dot")
            }

        }

    })
})
setInterval(() => {


    if (window.getComputedStyle(sliderBackground).backgroundImage == `url("http://127.0.0.1:3000/assets/bg_1.jpg.webp")` || window.getComputedStyle(sliderBackground).backgroundImage == `url("/assets/bg_1.jpg.webp")`) {
        sliderBackground.style.backgroundImage = `url("/assets/bg_2.jpg.webp")`;
        sliderDotsArray[1].classList.add("active-dot")
        sliderDotsArray[0].classList.remove("active-dot")

    }
    else {
        sliderBackground.style.backgroundImage = `url("/assets/bg_1.jpg.webp")`;
        sliderDotsArray[0].classList.add("active-dot")
        sliderDotsArray[1].classList.remove("active-dot")


    }

}, 4000)