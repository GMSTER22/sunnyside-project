let button = document.querySelector(".hamburger");
let navUl = document.querySelector(".navigation_list");

button.addEventListener("click", () => {
    navUl.classList.toggle("show");
})