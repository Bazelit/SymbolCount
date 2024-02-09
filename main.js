const searchBody = document.querySelector(".search");
const searchButton = document.querySelector(".search__button");
const searchInput = document.querySelector(".search__input");
const closeButton = document.querySelector(".close__button");
const symbolCount = document.querySelector(".symbol__count strong");
const themeLink = document.querySelector(".theme");
const wrapper = document.querySelector(".wrapper");

themeLink.addEventListener("click", function () {
    wrapper.classList.toggle("dark-theme");
    if (wrapper.classList.contains("dark-theme")) {
        themeLink.querySelector("img").src = "img/dark-mode.svg";
    }
    if (!wrapper.classList.contains("dark-theme")) {
        themeLink.querySelector("img").src = "img/light-mode.svg";
    }
});

searchButton.addEventListener("click", () => {
    searchButton.classList.toggle("active");
    searchInput.classList.toggle("active");
    closeButton.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
    searchButton.classList.remove("active");
    searchInput.classList.remove("active");
    closeButton.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".search")) {
        searchButton.classList.remove("active");
        searchInput.classList.remove("active");
        closeButton.classList.remove("active");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.code == "Escape") {
        searchButton.classList.remove("active");
        searchInput.classList.remove("active");
        closeButton.classList.remove("active");
    }
});

// searchInput.addEventListener("keydown", (event) => {
//     symbolCount.innerHTML = searchInput.value.length;
// });

function updateCharCount() {
    symbolCount.innerHTML = searchInput.value.length;
}
