// script.js

// 1. Function to load HTML components
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(elementId).innerHTML = content;

            // Only run active link logic if we just loaded the navbar
            if (elementId === 'navbar-placeholder') {
                setActiveLink();
            }
        } else {
            console.error(`Error loading ${filePath}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error fetching ${filePath}:`, error);
    }
}

// 2. Function to Highlight the Current Page
function setActiveLink() {
    const currentPath = window.location.pathname; // e.g., "/events.html" or "/"

    // Get all nav links (Desktop & Mobile)
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        // Check if the link's href matches the current path
        // We use 'getAttribute' to get the raw value from HTML (e.g., "/about.html")
        const linkPath = link.getAttribute('href');

        // Handle the root "/" case explicitly
        if (currentPath === "/" || currentPath === "/index.html") {
            if (linkPath === "/") {
                link.classList.add('primary-maroon', 'font-bold');
            }
        }
        // Handle other pages
        else if (currentPath.includes(linkPath) && linkPath !== "/") {
            link.classList.add('primary-maroon', 'font-bold');
        }
    });
}

// 3. Execute immediately when page loads
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-placeholder", "nav.html");
    loadComponent("footer-placeholder", "footer.html");
});