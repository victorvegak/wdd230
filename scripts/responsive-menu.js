const hamburgerBtn = document.getElementById('hamburger-btn');
const navList = document.querySelector('nav ul');

hamburgerBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');

});


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});
