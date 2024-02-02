const visitsDisplay = document.querySelector(".visits");

let totalVisits = Number(window.localStorage.getItem("totalVisit")) || 0;

if (totalVisits > 0) {
    visitsDisplay.textContent = `Visit Count: ${totalVisits}`;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

totalVisits++;
localStorage.setItem("totalVisit", totalVisits);