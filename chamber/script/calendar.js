// Function to generate calendar
function generateCalendar(year, month) {

    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay());
    let endDate = new Date(lastDay);
    endDate.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

    let calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = '';

    let currentDate = startDate;
    while (currentDate <= endDate) {
        let row = document.createElement("tr");
        for (let i = 0; i < 7; i++) {
            let cell = document.createElement("td");
            cell.textContent = currentDate.getDate();
            if (currentDate.getMonth() !== month) {
                cell.classList.add("other-month");
            }
            row.appendChild(cell);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        calendarBody.appendChild(row);
    }
}

// Populate Calendar
document.addEventListener("DOMContentLoaded", function () {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    generateCalendar(currentYear, currentMonth);
});