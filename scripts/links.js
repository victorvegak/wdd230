const baseURL = "https://victorvegak.github.io/wdd230/";
const linksURL = "https://victorvegak.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data)
    //console.log(data);
}
getLinks();

const displayLinks = (weeks) => {

    weeks.forEach((week) => {
        const weekHeading = document.createElement('h2');
        weekHeading.textContent = week.week;
        week.links.forEach((link) => {
            const linksList = document.createElement('ul');
            const listItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.textContent = link.title;
            linkElement.setAttribute('href', baseURL + link.url);
            listItem.appendChild(linkElement);
            linksList.appendChild(listItem);
        });

    });
}