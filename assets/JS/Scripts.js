const btn1 =
    document.querySelector("#bars");
const listNav =
    document.querySelector(".mobile-list");
const btnC =
    document.querySelector("#xmark");

btn1.addEventListener("click", () => {
    listNav.classList.add("show")
});

btnC.addEventListener("click", () => {
    listNav.classList.remove("show")
});