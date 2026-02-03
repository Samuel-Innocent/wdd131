// Get the current year for the copyright
const currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;

// Get the last modified date of the document
document.querySelector("#lastModified").textContent = "Last Modification: " + document.lastModified;