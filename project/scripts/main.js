document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
    {
        name: "Weather Data Analysis",
        type: "data",
        description: "An interactive dashboard visualizing historical weather trends, temperature anomalies, and precipitation patterns using Python and Streamlit.",
        image: "images/weather-thumb.jpg", 
        streamlitLink: "https://project1energyanalysis-hpe6kzynz9icmvflozsyly.streamlit.app/",
        githubLink: "https://github.com/Samuel-Innocent/project1_energy_analysis"
    },
    {
        name: "Telco Customer Churn",
        type: "data",
        description: "A machine learning application that predicts customer attrition likelihood based on service usage and demographic data.",
        image: "images/churn-thumb.jpg", 
        streamlitLink: "https://project2-churn-prediction-ps9y2knne9qtwtcwgzhy57.streamlit.app/",
        githubLink: "https://github.com/Samuel-Innocent/project2-churn-prediction"
    },
    {
        name: "Product Review Form",
        type: "web",
        description: "A responsive, accessible HTML form implementing local storage for submission tracking and validation.",
        image: "images/form-thumb.jpg",
        siteLink: "contact.html" 
    }
];

const projectContainer = document.getElementById("project-container");

// FUNCTION: Render projects based on filter
function renderProjects(filter = "all") {
    // Safety check: only run on projects page
    if (!projectContainer) return;

    // Clear existing content
    projectContainer.innerHTML = "";

    // ARRAY METHOD: Filter the projects array
    const filteredProjects = projects.filter(project => {
        if (filter === "all") return true;
        return project.type === filter;
    });

    // Generate HTML for each project
    filteredProjects.forEach(project => {
        let linksHTML = '';

        // CONDITIONAL BRANCHING: Determine which buttons to show based on type
        if (project.type === "data") {
            // Data projects get Streamlit + GitHub buttons
            linksHTML = `
                <div class="project-links">
                    <a href="${project.streamlitLink}" target="_blank" class="btn btn-primary">Live App</a>
                    <a href="${project.githubLink}" target="_blank" class="btn btn-secondary">GitHub</a>
                </div>`;
        } else {
            // Web projects get a single View Project button
            linksHTML = `
                <div class="project-links">
                    <a href="${project.siteLink}" class="btn btn-primary" style="flex-grow:1;">View Project</a>
                </div>`;
        }

        // TEMPLATE LITERAL: Create the project card structure
        const cardHTML = `
            <article class="project-card">
                <img src="${project.image}" alt="Screenshot of ${project.name}" loading="lazy">
                <div class="card-content">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    ${linksHTML}
                </div>
            </article>
        `;
        // DOM MANIPULATION: Inject HTML
        projectContainer.innerHTML += cardHTML;
    });
}

// RENDER on page load
renderProjects();

// FUNCTION: Handle filter button clicks
function filterProjects(category, clickedBtn) {
    // 1. Update UI active state
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
    
    // 2. Re-render projects
    renderProjects(category);
}


// =========================================
// THEME TOGGLE (LocalStorage Requirement)
// =========================================
const themeButton = document.getElementById("theme-toggle");
const body = document.body;

// 1. Check Local Storage on load
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    themeButton.textContent = "☀️";
}

// 2. Event Listener for toggle click
themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // 3. Save preference to Local Storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌓";
    }
});