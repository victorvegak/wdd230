const baseURL = "https://victorvegak.github.io/wdd230/";
const linksURL = "https://victorvegak.github.io/wdd230/data/links.json";
const learningActivitiesSection = document.getElementById("cards");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Failed to fetch links');
        }
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links:', error.message);
    }
}

function displayLinks(weeks) {
    weeks.forEach((weekData) => {
        const card = document.createElement("section");
        const weekHeader = document.createElement("h3");
        weekHeader.textContent = weekData.week;
        card.appendChild(weekHeader);

        weekData.links.forEach((link) => {
            const activityLink = document.createElement("a");
            activityLink.textContent = link.title;
            activityLink.href = baseURL + link.url;
            activityLink.target = "_blank";
            card.appendChild(activityLink);
            card.appendChild(document.createElement("br")); // Line break between links
        });

        learningActivitiesSection.appendChild(card);
    });
}

getLinks();