document.addEventListener("DOMContentLoaded", () => {
    
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

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
            description: "Machine learning application predicting customer attrition.",
            image: "images/churn-thumb.jpg", 
            streamlitLink: "https://project2-churn-prediction-ps9y2knne9qtwtcwgzhy57.streamlit.app/",
            githubLink: "https://github.com/Samuel-Innocent/project2-churn-prediction"
        },
        {
            name: "Product Review Form",
            type: "web",
            description: "Responsive HTML form implementing local storage.",
            image: "images/form-thumb.jpg",
            siteLink: "contact.html" 
        }
    ];

    const projectContainer = document.getElementById("project-container");

    if (projectContainer) {
        const renderProjects = (filter = "all") => {
            projectContainer.innerHTML = "";
            const filteredProjects = projects.filter(project => filter === "all" || project.type === filter);

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
                            <a href="${project.siteLink}" class="btn btn-primary" style="width: 100%;">View Project</a>
                        </div>`;
                }

                projectContainer.innerHTML += `
                    <article class="project-item card portfolio-card">
                        <img src="${project.image}" alt="${project.name}" loading="lazy">
                        <div class="card-content">
                            <h3>${project.name}</h3>
                            <p>${project.description}</p>
                            ${linksHTML}
                        </div>
                    </article>
                `;
            });
        };

        renderProjects();

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(btn.getAttribute('data-filter'));
            });
        });
    }

    const themeButton = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        if(themeButton) themeButton.textContent = "☀️";
    }

    if (themeButton) {
        themeButton.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            const isDark = body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            themeButton.textContent = isDark ? "☀️" : "🌓";
        });
    }
});