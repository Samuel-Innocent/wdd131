const today = new Date();
const currentYear = today.getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;