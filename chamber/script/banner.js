function closeBanner() {
    document.getElementById('banner').style.display = 'none';
}

// Function to check if the current day is Monday, Tuesday, or Wednesday
function isBannerVisible() {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    return today >= 1 && today <= 3; // Monday = 1, Tuesday = 2, Wednesday = 3
}

// Show the banner if it's Monday, Tuesday, or Wednesday
if (isBannerVisible()) {
    const bannerDiv = document.getElementById('banner');
    bannerDiv.innerHTML = '<p>Join us for the Managua City Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.! <button onclick="closeBanner()">❌</button></p>';
    bannerDiv.style.display = 'block';
}