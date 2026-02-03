
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

    // -------- HOME PAGE --------
    // --- HERO SECTION ---
    setImage("hero-img", siteContent.home.hero.image);
    setText("hero-desc", siteContent.home.hero.description);
    setLink("hero-handbook-btn", siteContent.home.hero.handbook_pdf);

    // --- AFFILIATES ---
    const affiliateContainer = document.getElementById("affiliates-grid");
    if (affiliateContainer && siteContent.home.affiliates) {
        // Clear any existing content first
        affiliateContainer.innerHTML = "";

        siteContent.home.affiliates.forEach(partner => {
            // Create the container for one affiliate
            const wrapper = document.createElement("div");
            wrapper.className = "flex flex-col items-center gap-3 group min-w-[120px]";

            // Create the image
            const img = document.createElement("img");
            img.src = partner.image;
            img.alt = partner.name;
            // Style: Grayscale by default, color on hover (modern effect)
            img.className = "w-16 h-16 w-auto md:h-44 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0";

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

    // --- FEATURED EVENT ---
    setImage("event-img", siteContent.home.featuredEvent.image);
    setText("event-title", siteContent.home.featuredEvent.title);
    setText("event-desc", siteContent.home.featuredEvent.description);
    setText("event-reg-btn-text", siteContent.home.featuredEvent.button_text); // Set button text

    // Logic: If button says "Registration is Open", link to form. Otherwise, disable or link to events page.
    const eventBtn = document.getElementById("event-reg-btn");
    if (eventBtn) {
        if (siteContent.home.featuredEvent.button_text.toLowerCase().includes("open")) {
            eventBtn.href = siteContent.home.featuredEvent.registration_link;
        } else {
            eventBtn.href = "/events"; // Default fallback
        }
    }

    // --- NEWSLETTER ---
    setImage("news-img", siteContent.home.newsletter.image);
    setText("news-title", siteContent.home.newsletter.title);
    setText("news-desc", siteContent.home.newsletter.description);
    setLink("news-read-btn", siteContent.home.newsletter.pdf_link);

    // --- FAQ SECTION ---
    // We loop through the 3 FAQs in the array
    siteContent.home.faq.forEach((item, index) => {
        const num = index + 1; // 1, 2, 3
        setText(`faq-q${num}`, item.question);
        setText(`faq-a${num}`, item.answer);
    });

    // -------- ABOUT PAGE --------
    setText("about-mission-p1", siteContent.about.missionp1);
    setText("about-mission-p2", siteContent.about.missionp2);
    setText("about-representation", siteContent.about.representation);
    setText("about-development", siteContent.about.development);
    setText("about-welfare", siteContent.about.welfare);

    // --- COMMITTEE TREE LOGIC ---
    const hcContainer = document.getElementById("high-council-tree");
    const deptContainer = document.getElementById("dept-roster");

    if (hcContainer && siteContent.committee) {

        // --- 1. RENDER HIGH COUNCIL (The Pyramid) ---
        const hc = siteContent.committee.highCouncil;

        // Function to create a Member Card
        const createCard = (member, size = "normal") => {
            const card = document.createElement("div");

            // Size of the card container
            card.className = "flex flex-col items-center text-center group w-48 md:w-64";

            // Size of the circle
            const imgSize = size === "large"
                ? "w-40 h-40 md:w-52 md:h-52"
                : "w-32 h-32 md:w-40 md:h-40";

            card.innerHTML = `
                <div class="${imgSize} rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#88113b] transition-all duration-300 mb-4 shadow-lg p-1 bg-white">
                    
                    <img src="${member.image}" class="w-full h-full object-cover object-top rounded-full">
                    
                </div>
                <h4 class="font-bold text-lg leading-tight text-main">${member.name}</h4>
                <p class="text-xs font-bold text-[#88113b] uppercase tracking-widest mt-1">${member.role}</p>
            `;
            return card;
        };

        // Row 1: President (Index 0)
        const row1 = document.createElement("div");
        row1.className = "flex justify-center w-full relative";
        // Add a connector line below
        row1.innerHTML = `<div class="absolute -bottom-6 left-1/2 w-0.5 h-6 bg-gray-300"></div>`;
        if (hc[0]) row1.appendChild(createCard(hc[0], "large"));
        hcContainer.appendChild(row1);

        // Row 2: VPs (Index 1 & 2)
        const row2 = document.createElement("div");
        row2.className = "flex justify-center gap-12 md:gap-24 w-full relative pt-2";
        // Connector line logic
        row2.innerHTML = `<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-1/2 h-4 border-t-2 border-x-2 border-gray-300 rounded-t-xl"></div>`;
        if (hc[1]) row2.appendChild(createCard(hc[1]));
        if (hc[2]) row2.appendChild(createCard(hc[2]));
        hcContainer.appendChild(row2);

        // Row 3: Secs & Treasurer (Index 3, 4, 5)
        const row3 = document.createElement("div");
        row3.className = "flex flex-wrap justify-center gap-8 md:gap-16 w-full pt-6 border-t-2 border-gray-200 mt-4";
        if (hc[3]) row3.appendChild(createCard(hc[3]));
        if (hc[4]) row3.appendChild(createCard(hc[4]));
        if (hc[5]) row3.appendChild(createCard(hc[5]));
        hcContainer.appendChild(row3);


        // --- 2. RENDER DEPARTMENTS ---
        deptContainer.innerHTML = "";
        siteContent.committee.departments.forEach(dept => {
            const section = document.createElement("div");

            // Header
            let html = `
                <div class="flex items-center gap-4 mb-10 justify-center">
                    <div class="h-[2px] w-12 bg-gray-300"></div>
                    <h3 class="text-2xl font-black uppercase tracking-tight text-main">${dept.name}</h3>
                    <div class="h-[2px] w-12 bg-gray-300"></div>
                </div>
                
                <div class="flex flex-wrap justify-center gap-12 mb-12">`;

            // Add Directors (Updated to match Executive Size)
            dept.leaders.forEach(leader => {
                html += `
                    <div class="flex flex-col items-center text-center group w-48 md:w-64">
                        <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#88113b] transition-all duration-300 mb-4 shadow-lg p-1 bg-white">
                            <img src="${leader.image}" class="w-full h-full object-cover object-top rounded-full">
                        </div>
                        <h4 class="font-bold text-lg leading-tight text-main">${leader.name}</h4>
                        <p class="text-xs font-bold text-[#88113b] uppercase tracking-widest mt-1">${leader.role}</p>
                    </div>`;
            });

            html += `</div>`;

            // Add General Members (Updated to match Executive Size)
            if (dept.members && dept.members.length > 0) {
                html += `
                <div class="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-6xl mx-auto">`;

                dept.members.forEach(member => {
                    html += `
                    <div class="flex flex-col items-center text-center group w-48 md:w-64">
                        <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#88113b] transition-all duration-300 mb-4 shadow-lg p-1 bg-white">
                            <img src="${member.image}" class="w-full h-full object-cover object-top rounded-full">
                        </div>
                        <h4 class="font-bold text-lg leading-tight text-main">${member.name}</h4>
                        <p class="text-xs font-bold text-[#88113b] uppercase tracking-widest mt-1">${member.role}</p>
                    </div>`;
                });

                html += `</div>`;
            }

            section.innerHTML = html;
            deptContainer.appendChild(section);
        });

        // --- CORE STRUCTURE (Committee Page) ---
        if (siteContent.committee && siteContent.committee.coreStructure) {
            siteContent.committee.coreStructure.forEach(dept => {
                setImage(`${dept.id}-img`, dept.image);
                setText(`${dept.id}-title`, dept.title);
                setText(`${dept.id}-desc`, dept.description);
            });
        }
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