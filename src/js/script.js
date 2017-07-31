let menuContent = document.getElementById('menuContent');

document.getElementById('btnToggle').addEventListener('click', () => {
    // btnToggle.classList.toggle('is-active') 
    // ? menuContent.style.display = "flex"
    // : menuContent.style.display = "none";
    if (btnToggle.classList.toggle('is-active')) {
        menuContent.style.display = "flex";
        menuContent.style.right = `${0}px`;
    } else {
        // menuContent.style.display = "none";
        menuContent.style.right = `${-721}px`;
    }
});