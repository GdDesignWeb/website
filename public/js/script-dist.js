"use strict";

var menuContent = document.getElementById("menuContent");

document.getElementById("btnToggle").addEventListener("click", function() {
    btnToggle.classList.toggle("is-active") ? (menuContent.style.display = "flex", menuContent.style.right = "0px") : menuContent.style.right = "-721px";
});