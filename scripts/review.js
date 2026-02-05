document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the current count from localStorage
    let reviewCount = localStorage.getItem("reviewCount");

    // 2. Check if it exists. If not, initialize to 0.
    if (!reviewCount) {
        reviewCount = 0;
    }

    // 3. Increment the count
    reviewCount++;

    // 4. Save the new count back to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // 5. Display the count on the page
    document.getElementById("reviewCount").textContent = reviewCount;
});