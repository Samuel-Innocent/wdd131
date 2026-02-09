document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Footer Year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Project Data
    const projects = [
        {
            name: "Weather Data Analysis",
            type: "data",
            description: "Interactive dashboard visualizing historical weather patterns using Python and Streamlit.",
            image: "images/weather-thumb.jpg", 
            streamlitLink: "https://project1energyanalysis-hpe6kzynz9icmvflozsyly.streamlit.app/",
            githubLink: "https://github.com/Samuel-Innocent/project1_energy_analysis"
        },
        {
            name: "Telco Customer Churn",
            type: "data",
            description: "A machine learning application that predicts customer attrition likelihood based on service usage.",
            image: "images/churn-thumb.jpg", 
            streamlitLink: "https://project2-churn-prediction-ps9y2knne9qtwtcwgzhy57.streamlit.app/",
            githubLink: "https://github.com/Samuel-Innocent/project2-churn-prediction"
        },
        {
            name: "Product Review Form",
            type: "web",
            description: "A responsive, accessible HTML form implementing local storage for submission tracking.",
            image: "images/form-thumb.jpg",
            siteLink: "contact.html" 
        }
    ];

    // 3. Render Projects (Only runs if container exists)
    const projectContainer = document.getElementById("project-container");

    if (projectContainer) {
        const renderProjects = (filter = "all") => {
            projectContainer.innerHTML = "";
            
            const filteredProjects = projects.filter(project => {
                if (filter === "all") return true;
                return project.type === filter;
            });

            filteredProjects.forEach(project => {
                let linksHTML = '';
                if (project.type === "data") {
                    linksHTML = `
                        <div class="project-links">
                            <a href="${project.streamlitLink}" target="_blank" class="btn btn-primary">Live App</a>
                            <a href="${project.githubLink}" target="_blank" class="btn btn-secondary">GitHub</a>
                        </div>`;
                } else {
                    linksHTML = `
                        <div class="project-links">
                            <a href="${project.siteLink}" class="btn btn-primary" style="flex-grow:1;">View Project</a>
                        </div>`;
                }

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
                projectContainer.innerHTML += cardHTML;
            });
        };

        // Initial Render
        renderProjects();

        // Attach Filter Click Events
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // UI: Remove active from all, add to clicked
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Logic: Get filter type from data-attribute
                const category = btn.getAttribute('data-filter');
                renderProjects(category);
            });
        });
    }

    // 4. Theme Toggle
    const themeButton = document.getElementById("theme-toggle");
    const body = document.body;

    if (themeButton) {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
            body.classList.add("dark-mode");
            themeButton.textContent = "☀️";
        }

        themeButton.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                themeButton.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                themeButton.textContent = "🌓";
            }
        });
    }
});