// content.js
// Instructions: Edit the values inside the quotes (" ") to update the website.

const siteContent = {
    // 1. GLOBAL (Data used on every page, like Navbar, Footer, Contact Links)
    global: {
        navLogo: "images/logo.png", // The logo update we discussed
        instagram: "https://instagram.com/alevel.alsco/",
        tiktok: "https://tiktok.com/@alevel.alsco",
        email: "alevel.alsco@gmail.com",
        handbook_pdf: "https://link-to-handbook.pdf"
    },

    // 2. HOME PAGE
    home: {
        // --- HERO SECTION ---
        hero: {
            image: "images/alsco_group.JPG", // Ensure this image is in your main folder
            description: "We are the official student committee representing all A-Level students at Sunway College. We bridge the gap between students and administration while organizing events that make your college life memorable.",
            handbook_pdf: "https://1f728d2d-1495-4449-b1c1-3c3cb399d337.filesusr.com/ugd/df559c_8cf96a8d79ea4d09aaacbff7e0d199c5.pdf"
        },

        // --- FEATURED EVENT ---
        featuredEvent: {
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
            title: "Orientation 2026",
            description: "Join us for our biggest orientation yet! Meet your peers, explore the campus, and get ready for an exciting year ahead. Lunch and merchandise provided.",
            registration_link: "https://forms.google.com/your-event-form",
            button_text: "Registration is Open" // Change to "Registration Upcoming" or "Closed" when needed
        },

        // --- LATEST NEWSLETTER ---
        newsletter: {
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
            title: "January Recap: Fresh Beginnings",
            date: "January 2026", // Displayed implicitly or added to description
            description: "Read about our recent events, student achievements, and important upcoming dates for the semester.",
            pdf_link: "https://drive.google.com/your-newsletter-link"
        },

        // --- FAQ SECTION ---
        faq: [
            {
                question: "How do I join the ALSCO committee?",
                answer: "Recruitment drives are held at the beginning of every semester. Keep an eye on our Instagram page for announcement dates and interview schedules."
            },
            {
                question: "Where can I find the ALSTAR points tracker?",
                answer: "You can check your points on the ALSTAR page of this website. Just enter your Student ID to see your current participation status."
            },
            {
                question: "How do I submit a complaint or suggestion?",
                answer: "You can use the 'Get In Touch' form on our Contact page, or DM us directly on Instagram. We review all student feedback weekly."
            }
        ],

        affiliates: [
            { name: "Malaysian Bioscience Scholars", image: "images/mbios.png" }, // Replace with real logo path
            // To add more, just copy the line above:
            // { name: "New Partner", image: "images/partner_logo.png" }, 
        ],
    },

    // 3. ABOUT PAGE
    about: {
        mission: "To enhance the student experience...",
        vision: "To be the bridge between students and admin..."
    },

    // 4. EVENTS PAGE
    events: {
        headerTitle: "Upcoming & Past Events",
        // You can even store lists of events here if you want to get advanced later
    },

    // 5. CONTACT PAGE
    contact: {
        pageTitle: "Get In Touch",
        subTitle: "We'd love to hear from you."
    }

    // ... add 'departments', 'alstar', etc. as needed
};