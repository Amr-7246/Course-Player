// & CourseDeets Fake Data
    export const courses = [
        {
            id: 1,
            language: 'English',
            duration: '10 weeks',
            lessons: 20,
            enrolled: 150,
        },
    ];
// & CourseDeets Fake Data
// & CourseTopics Fake Data
    export const topics = [
        {
        week: "Week 1-4",
        description: "Overview of fundamentals and introduction to the course structure.",
        details: [
            { title: "Introduction", icon: "FaPlayCircle" },
            { title: "Course Overview", name: "PDF", icon: "FaBook" },
            { title: "Exercises", icon: "FaTasks" },
            { title: "Reference Files", icon: "FaFileCode" },
            { title: "Exam on Embedding Php in HTML", name: "Exam", icon: "FaFileCode" },
        ],
        },
        {
        week: "Week 5-8",
        description: "Deep dive into advanced concepts and practical applications.",
        details: [
            { title: "Advanced Concepts", icon: "FaPlayCircle" },
            { title: "Project Setup", icon: "FaBook" },
            { title: "Hands-on Practice", icon: "FaTasks" },
            { title: "Code Editor Setup", icon: "FaFileCode" },
        ],
        },
        {
        week: "Week 8-9",
        description: "Final review, exam preparation, and submission guidelines.",
        details: [
            { title: "Final Review", icon: "FaPlayCircle" },
            { title: "Exam Preparation", icon: "FaBook" },
            { title: "Submission Guidelines", icon: "FaTasks" },
            { title: "Final Project Files", icon: "FaFileCode" },
        ],
        },
    ];
// & CourseTopics Fake Data
// & Commentes Fake Data
    export const FakeComments = [
        {
            id: 1,
            name: 'John Doe',
            comment: 'This is an amazing post! Really enjoyed it.',
            date: '2025-03-01',
            isAdmin: false,
            rating: 5,
            image: 'https://randomuser.me/api/portraits/men/4.jpg'
        },
        {
            id: 2,
            name: 'Jane Smith',
            comment: 'Great insights! Looking forward to more content.',
            date: '2025-02-28',
            isAdmin: true,
            rating: 4,
            image: 'https://randomuser.me/api/portraits/men/14.jpg'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            comment: 'I have a different perspective on this topic.',
            date: '2025-02-27',
            isAdmin: false,
            rating: 3,
            image: 'https://randomuser.me/api/portraits/men/16.jpg'
        }
    ];
// & Commentes Fake Data
// & Exam Fake Data
    export const questions = [
            {
            id: 1,
            category: "PHP",
            question: "What does PHP stand for?",
            choices: [
            "Personal Home Page",
            "PHP: Hypertext Preprocessor",
            "Preprocessed Hypertext Page",
            "Private Hosting Protocol",
            ],
            answer: "PHP: Hypertext Preprocessor",
        },
        {
            id: 2,
            category: "JavaScript",
            question: "What is the difference between == and ===?",
            choices: [
            "== checks value, === checks value and type",
            "Both check value and type",
            "== checks type, === checks value",
            "No difference",
            ],
            answer: "== checks value, === checks value and type",
        },
        {
            id: 3,
            category: "React",
            question: "What is the purpose of useState in React?",
            choices: [
            "To manage component state",
            "To handle API requests",
            "To create new components",
            "To define routes",
        ],
            answer: "To manage component state",
        },
        {
            id: 4,
            category: "CSS",
            question: "Which CSS property is used to make a text bold?",
            choices: ["font-style", "font-weight", "text-decoration", "text-transform"],
            answer: "font-weight",
        },
        {
            id: 5,
            category: "MySQL",
            question: "Which SQL statement is used to fetch data from a database?",
            choices: ["FETCH", "SELECT", "GET", "QUERY"],
            answer: "SELECT",
        },
    ];
// & Exam Fake Data
// & Ledear Fake Data
    export const players = [
        { name: "Player 1", points: 1000, rank: "🥇" },
        { name: "Player 2", points: 900, rank: "🥈" },
        { name: "Player 3", points: 850, rank: "🥉" },
        { name: "Player 4", points: 780, rank: "4️⃣" },
        { name: "Player 5", points: 720, rank: "5️⃣" },
    ];
// & Ledear Fake Data

