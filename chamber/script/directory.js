const url = 'data/members.json';

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    //  console.table(data.companies); // temporary testing of data retrieval //
    displayMembers(data.companies); // note that we reference the prophets array of the JSON data object, not just the object
}

function displayMembers(companies) {
    display.innerHTML = '';
    companies.forEach(company => {
        const section = document.createElement('section');
        section.innerHTML = `
        <h3>${company.name}</h3>
        <p>Address: ${company.address}</p>
        <p>Phone: ${company.phone}</p>
        <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
        <img src="${company.imageurl}" alt="${company.name}">
        <p>Membership: ${company.membership}</p>
        <p> ${company.slogan}</p>
        `;
        display.appendChild(section);
    });

}

getMembersData();

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
