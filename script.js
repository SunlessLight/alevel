
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

// 3. NEW: Function to Update Content from content.js
function updateSiteContent() {
    // Helper to set text content
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };
    // Helper to set image source
    const setImage = (id, src) => {
        const el = document.getElementById(id);
        if (el) el.src = src;
    };
    // Helper to set link href
    const setLink = (id, url) => {
        const el = document.getElementById(id);
        if (el) el.href = url;
    };

    // --- HERO SECTION ---
    setImage("hero-img", siteContent.hero.image);
    setText("hero-desc", siteContent.hero.description);
    setLink("hero-handbook-btn", siteContent.hero.handbook_pdf);

    // --- FEATURED EVENT ---
    setImage("event-img", siteContent.featuredEvent.image);
    setText("event-title", siteContent.featuredEvent.title);
    setText("event-desc", siteContent.featuredEvent.description);
    setText("event-reg-btn-text", siteContent.featuredEvent.button_text); // Set button text

    // Logic: If button says "Registration is Open", link to form. Otherwise, disable or link to events page.
    const eventBtn = document.getElementById("event-reg-btn");
    if (eventBtn) {
        if (siteContent.featuredEvent.button_text.toLowerCase().includes("open")) {
            eventBtn.href = siteContent.featuredEvent.registration_link;
        } else {
            eventBtn.href = "/events"; // Default fallback
        }
    }

    // --- NEWSLETTER ---
    setImage("news-img", siteContent.newsletter.image);
    setText("news-title", siteContent.newsletter.title);
    setText("news-desc", siteContent.newsletter.description);
    setLink("news-read-btn", siteContent.newsletter.pdf_link);

    // --- FAQ SECTION ---
    // We loop through the 3 FAQs in the array
    siteContent.faq.forEach((item, index) => {
        const num = index + 1; // 1, 2, 3
        setText(`faq-q${num}`, item.question);
        setText(`faq-a${num}`, item.answer);
    });

    const affiliateContainer = document.getElementById("affiliates-grid");
    if (affiliateContainer && siteContent.affiliates) {
        // Clear any existing content first
        affiliateContainer.innerHTML = "";

        siteContent.affiliates.forEach(partner => {
            // Create the container for one affiliate
            const wrapper = document.createElement("div");
            wrapper.className = "flex flex-col items-center gap-3 group min-w-[120px]";

            // Create the image
            const img = document.createElement("img");
            img.src = partner.image;
            img.alt = partner.name;
            // Style: Grayscale by default, color on hover (modern effect)
            img.className = "w-16 h-16 md:w-20 md:h-20 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0";

            // Create the name text
            const name = document.createElement("span");
            name.textContent = partner.name;
            name.className = "text-xs md:text-sm font-bold text-gray-500 group-hover:primary-maroon transition-colors uppercase tracking-wider text-center";

            // Append them
            wrapper.appendChild(img);
            wrapper.appendChild(name);
            affiliateContainer.appendChild(wrapper);
        });
    }

}

// 4. Initialize everything
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-placeholder", "nav.html");
    loadComponent("footer-placeholder", "footer.html");

    // Run content update ONLY if siteContent is loaded
    if (typeof siteContent !== 'undefined') {
        updateSiteContent();
    } else {
        console.error("content.js not loaded!");
    }
});