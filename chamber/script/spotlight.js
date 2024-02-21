const requestURL = 'data/members.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
        chooseHighlights(companies);
    });


function chooseHighlights(companies) {

    const filteredMembership = companies.filter(function (companies) {
        return companies.membership == "gold" ||
            companies.membership == "silver";
    });

    const shuffledMembership = filteredMembership.sort(() => 0.5 - Math.random());

    displayHighlight(shuffledMembership[0], "#spotlight1");
    displayHighlight(shuffledMembership[1], "#spotlight2");
    displayHighlight(shuffledMembership[2], "#spotlight3");
}

function displayHighlight(companies, elementID) {

    let pName = document.createElement('p');
    let logoImg = document.createElement('img');
    let pSlogan = document.createElement('p');
    let hr = document.createElement('hr');
    let pSpotinfo = document.createElement('p');
    let a = document.createElement('a');

    pName.innerHTML = `${companies.name}`;
    pName.setAttribute('class', 'large');

    logoImg.setAttribute('src', companies.imageurl);
    logoImg.setAttribute('class', 'spotlightImg');
    logoImg.setAttribute('alt', `Logo image for ${companies.name}`);
    logoImg.setAttribute('loading', 'lazy');

    pSlogan.textContent = `"${companies.slogan}"`;
    pSlogan.setAttribute('class', 'small bold italic');

    pSpotinfo.innerHTML += companies.phone + " | " + companies.membership + " | ";
    pSpotinfo.classList.add('spotinfo');

    a.textContent = "website";
    a.setAttribute('href', companies.website);

    pSpotinfo.appendChild(a);

    const spotlight = document.querySelector(elementID);

    spotlight.innerHTML = ''; // Clear previous content
    spotlight.appendChild(pName);
    spotlight.appendChild(pSlogan);
    spotlight.appendChild(pSpotinfo);
    spotlight.appendChild(logoImg);
    spotlight.appendChild(hr);
}