const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Victor Vega | Last modified: " + lastModifiedDate.toDateString();