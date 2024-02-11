const visitsDisplay = document.querySelector(".visits");

let totalVisits = Number(window.localStorage.getItem("totalVisit")) || 0;

if (totalVisits > 0) {
    visitsDisplay.textContent = `Back so soon! Awesome! \n visit: ${totalVisits}`;
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

totalVisits++;
localStorage.setItem("totalVisit", totalVisits);