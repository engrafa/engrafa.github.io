document.querySelector(".dracula_theme").addEventListener("click", () => {
    document.body.className = "dracula";
    localStorage.setItem("theme", "dracula");
});

document.querySelector(".default").addEventListener("click", () => {
    document.body.className = "";
    localStorage.setItem("theme", "");
});
