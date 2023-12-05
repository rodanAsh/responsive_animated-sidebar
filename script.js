const btnMenu = document.querySelector(".btn-menu");
const sideBar  = document.querySelector(".sidebar");

btnMenu.addEventListener("click", function () {
sideBar.classList.toggle("expand");
changeBtn();
});

function changeBtn() {
    if (sideBar.classList.contains("expand")) {
        btnMenu.classList.replace("bx-menu", "bx-menu-alt-right");
    }
    else{
        btnMenu.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}