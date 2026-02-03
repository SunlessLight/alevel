// content.js
// Instructions: Edit the values inside the quotes (" ") to update the website.

const siteContent = {

    // 1. HOME PAGE
    home: {
        // --- HERO SECTION ---
        hero: {
            image: "images/home/alsco_group.JPG", // Ensure this image is in your main folder
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

    // 2. ABOUT PAGE
    about: {
        missionp1: "To enhance the student experience by providing essential services, fostering engagement, and ensuring a supportive environment. We serve as an active bridge between students and the college administration. ",
        missionp2: " Through strategic collaboration with various councils and societies, we create inclusive experiences that foster a strong sense of belonging and meaningful community engagement throughout the academic year.",
        representation: "Organizing intake orientations and activities to help students transition smoothly into college life and feel at home within the campus.",
        development: "Guiding students to meet eligibility criteria for the ALSTAR Certificate through active participation and holistic development opportunities.",
        welfare: "Serving as a vital link between the student body and college administration for all concerns, ensuring your voice is always heard clearly."
    },

    // 3. COMMITTEE PAGE
    committee: {
        // LEVEL 1: EXECUTIVE (Order matters for the layout!)
        highCouncil: [
            // Row 1: President
            { role: "President", name: "TAY HUI ER", image: "images/committee/high_council/president.png" },

            // Row 2: VPs
            { role: "Vice President of External Affairs", name: "NICHOLAS WONG JUN YEW", image: "images/committee/high_council/vpe.png" },
            { role: "Vice President of Internal Affairs", name: "DANIEL @ HTOO HTET ZAW", image: "images/committee/high_council/vpi.png" },

            // Row 3: Secs & Treasurer
            { role: "Secretary", name: "CHUA RYEE EN", image: "images/committee/high_council/sec1.png" },
            { role: "Secretary", name: "AUSTIN LAU HONG SHEN", image: "images/committee/high_council/sec2.png" },
            { role: "Treasurer", name: "EVAN YEOH JIN QUAN", image: "images/committee/high_council/treasurer.png" },
        ],

        // LEVEL 2: DEPARTMENTS
        departments: [
            {
                name: "Leadership Development",
                leaders: [
                    { role: "Director", name: "LAI ZHENG YI", image: "images/committee/leadership_dev/LDdirector.png" },
                    { role: "Deputy Director", name: "CHLOE LIM JING YAN", image: "images/committee/leadership_dev/LDduputyDirector.png" }
                ],
                // Just list names for general members to save space, or use objects if you have photos
                members: [
                    { role: "General Member", name: "ONG XI WEN", image: "images/committee/leadership_dev/member1.png" },
                    { role: "General Member", name: "EVAN YEOH JIN QUAN", image: "images/committee/leadership_dev/member2.png" },
                    { role: "General Member", name: "TAY HUI ER", image: "images/committee/leadership_dev/member3.png" },
                    { role: "General Member", name: "VINCENT KHOO WEI WEN", image: "images/committee/leadership_dev/member4.png" },
                ],
            },
            {
                name: "Community Service",
                leaders: [
                    { role: "Director", name: "EE JING XUAN", image: "images/committee/comserve/CSdirector.png" },
                    { role: "Deputy Director", name: "NYEIN YU SAN", image: "images/committee/comserve/CSdeputyDirector.png" }
                ],
                members: [
                    { role: "General Member", name: "DAKSSHI NATH PILLAY", image: "images/committee/comserve/member1.png" },
                    { role: "General Member", name: "NICHOLAS WONG JUN YEW", image: "images/committee/comserve/member2.png" },
                    { role: "General Member", name: "TEH SIN HUI", image: "images/committee/comserve/member3.png" },
                    { role: "General Member", name: "YAP QIN HUEY", image: "images/committee/comserve/member4.png" },
                ],
            },
            {
                name: "Public Relations",
                leaders: [
                    { role: "Director", name: "AYSHALYNN SALAHUDDIN", image: "images/committee/public_rel/PRdirector.png" },
                    { role: "Deputy Director", name: "CHONG HUI XIN", image: "images/committee/public_rel/PRdeputyDirector.png" }
                ],
                members: [
                    { role: "General Member", name: "AUSTIN LAU HONG SHEN", image: "images/committee/public_rel/member1.png" },
                    { role: "General Member", name: "EE CHAO JIAN", image: "images/committee/public_rel/member2.png" },
                    { role: "General Member", name: "KAY THARI MON", image: "images/committee/public_rel/member3.png" },
                    { role: "General Member", name: "SAN DAR WIN", image: "images/committee/public_rel/member4.png" },
                ],
            },
            {
                name: "Student Welfare",
                leaders: [
                    { role: "Director", name: "YAP CHERN XI", image: "images/committee/student_wel/SWdirector.png" },
                    { role: "Deputy Director", name: "SEW SUN LOONG", image: "images/committee/student_wel/SWdeputyDirector.png" }
                ],
                members: [
                    { role: "General Member", name: "LAW JIA HERNG", image: "images/committee/student_wel/member1.png" },
                    { role: "General Member", name: "JOSHUA LEE CHENG AN", image: "images/committee/student_wel/member2.png" },
                    { role: "General Member", name: "GOH JAY NING", image: "images/committee/student_wel/member3.png" },
                    { role: "General Member", name: "DANIEL WONG WENG SENG", image: "images/committee/student_wel/member4.png" },
                    { role: "General Member", name: "DANIEL @ HTOO HTET ZAW", image: "images/committee/student_wel/member5.png" },
                    { role: "General Member", name: "CHUE RYEE EN", image: "images/committee/student_wel/member6.png" },
                ],
            },
        ],

        coreStructure: [
            {
                id: "dept-ld",
                title: "Leadership Development",
                image: "images/committee/departmental/LD - FORMAL.JPG",
                description: "Leadership Development promotes soft skills and sports to foster interpersonal growth and ensure all A-Level students develop personally and professionally."
            },
            {
                id: "dept-cs",
                title: "Community Service",
                image: "images/committee/departmental/CS - FORMAL.JPG",
                description: "Community Service, or COMSERVE for short, organises events for our members that focus on charitable, environmental, or community-orientated work."
            },
            {
                id: "dept-sw",
                title: "Student Welfare",
                image: "images/committee/departmental/SW - FORMAL.png",
                description: "Student Welfare strives to foster a supportive and holistic environment within the community by curating initiatives that enhance students’ mental, social, and academic well-being."
            },
            {
                id: "dept-pr",
                title: "Public Relations",
                image: "images/committee/departmental/PR - FORMAL.png",
                description: "Public Relations focuses on creating creative and engaging content to communicate effectively and build a strong, connected A-Level community."
            }
        ]
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