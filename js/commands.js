// URL constants for social media profiles and email
const TWITTER = "https://x.com/burnt_snow"; // Twitter profile link
const LINKEDIN = "https://www.linkedin.com/in/konseptt/"; // LinkedIn profile link
const LEETCODE = "https://leetcode.com/u/konssept/"; // LeetCode profile link
const GITHUB = "https://github.com/Konseptt"; // GitHub profile link
const EMAIL = "hello@ranjansharma.info.np"; // Email address
const USERNAME = "Konsept"; // Username for the profiles

// About information array displayed in the terminal
const ABOUT = [
  "<br>",
  "Hello there!👋", // Greeting message
  "              ",
  "I'm Ranjan, a Software Engineer", // Introduction
  "with a passion for technology",
  "and innovation! 🧑‍💻", // Professional tagline
  "                            ",
  "                            ",
  "My journey with technology began", // Brief history
  "through exciting projects like",
  "autonomous vehicle simulations",
  "and secure web applications.",
  "                             ",
  "                             ",
  "I thrive on solving complex", // Skills and expertise
  "problems using Rust, Python,",
  "and TypeScript. My expertise",
  "spans web development, AI,",
  "and cybersecurity.",
  "                                     ",
  "As I progress in my career,", // Career goals
  "I'm eager to explore innovative",
  "technologies and contribute to",
  "impactful projects that drive",
  "positive change. 🚀", // Enthusiasm for innovation
  "<br>",
];

// Social links array displayed in the terminal
SOCIAL = [
  "<br>",
  'twitter        <a href="' +
    TWITTER +
    '" target="_blank">twitter/' +
    USERNAME +
    "</a>", // Twitter link with username
  'linkedin       <a href="' +
    LINKEDIN +
    '" target="_blank">linkedin/' +
    USERNAME +
    "</a>", // LinkedIn link with username
  'LEETCODE      <a href="' +
    LEETCODE +
    '" target="_blank">LEETCODE/' +
    USERNAME +
    "</a>", // LeetCode link with username
  'github         <a href="' +
    GITHUB +
    '" target="_blank">github/' +
    USERNAME +
    "</a>", // GitHub link with username
  "<br>",
];

// Array for displaying a list of projects in the terminal
PROJECTS = [
  "<br>",
  "Here are some of my projects:", // Project introduction
  "<br>",
  "<strong> - Rust-Ai-Car_Driving </strong>", // Project 1
  "Rust-Ai-Car_Driving is an exhilarating project set in a road-fighter inspired virtual world.",
  "This interactive experience explores the fusion of artificial intelligence and gaming,",
  "as cars navigate the digital terrain using neural networks powered by a genetic algorithm.",
  "<a href='https://youtu.be/BzCkSsQmezE?si=9nDR2ga73ZizcMFH' target='_blank' rel='noopener noreferrer'>Video Link</a>", // Video demo link
  "Tech stack: Rust, Bevy Game Engine, Neural Networks, Genetic Algorithms", // Tech stack details
  "<br>",
  "<strong> - Visualize-code </strong>", // Project 2
  "Code to Image is an innovative web application that allows users to",
  "convert their code snippets into beautiful images.",
  "This tool is perfect for developers who want to share their code on social media,",
  "blogs, or presentations with a visually appealing format.",
  "<a href='https://codetoimage.ranjansharma.info.np/' target='_blank' rel='noopener noreferrer'>Deployed Link</a>", // Deployed project link
  "Tech stack: React, HTML, CSS, JavaScript", // Tech stack details
  "<br>",
  "<strong> - Hashpass </strong>", // Project 3
  "HashPass is a cutting-edge web application designed to enhance cybersecurity",
  "measures by providing robust password hashing services.",
  "This tool is tailored for both individuals and organizations who prioritize the",
  "security of their digital accounts.",
  "<a href='https://hashpass.ranjansharma.info.np/' target='_blank' rel='noopener noreferrer'>Deployed Link</a>", // Deployed project link
  "Tech stack: Rust, HTML, CSS, JS, TypeScript", // Tech stack details
  "<br>",
  "<strong>Check out some of my other projects", // Link to GitHub for more projects
  "<strong> in my </strong> <a href='https://github.com/Konseptt' class='command' target='_blank' rel='noopener noreferrer'>GitHub profile</a> <strong>",
  "<br>",
];

// List of available commands for the terminal interface
COMMAND_LIST = [
  "<br>",
  '<span class="command">about</span>          Learn more about me', // about command
  '<span class="command">social</span>         Display social networks', // social command
  '<span class="command">education</span>      Show my education', // education command
  '<span class="command">curriculum</span>     Open my web curriculum', // curriculum command
  '<span class="command">projects</span>       View some of my projects', // projects command
  '<span class="command">history</span>        Show command history', // history command
  '<span class="command">email</span>          Feel free to reach out', // email command
  '<span class="command">banner</span>         Display the header', // banner command
  '<span class="command">clear</span>          Clear terminal', // clear command
  '<span class="command">echo</span>           Print any given string', // echo command
  '<span class="command">ls</span>             List directory content', // ls command
  '<span class="command">cd &lt;directory&gt</span> Change directory', // cd command
  '<span class="command">help</span>           Display all commands', // help command
  "<br>",
];

// ASCII art banner for the terminal header
const BANNER = [
  "88      a8P                                                                        ",
  "88    ,88'                                                                  ,d     ",
  "88  ,88\"                                                                    88     ",
  "88,d88'       ,adPPYba,   8b,dPPYba,   ,adPPYba,   ,adPPYba,  8b,dPPYba,  MM88MMM  ",
  "8888\"88,     a8\"     \"8a  88P'   `\"8a  I8[    \"\"  a8P_____88  88P'    \"8a   88     ",
  "88P   Y8b    8b       d8  88       88   `\"Y8ba,   8PP\"\"\"\"\"\"\"  88       d8   88     ",
  "88     \"88,  \"8a,   ,a8\"  88       88  aa    ]8I  \"8b,   ,aa  88b,   ,a8\"   88,    ",
  "88       Y8b  `\"YbbdP\"'   88       88  `\"YbbdP\"'   `\"Ybbd8\"'  88`YbbdP\"'    \"Y888  ",
  "                                                              88                   ",
  "                                                              88                   "
];

// Directory structure for terminal command 'ls'
DIRECTORIES = ["<br>", "github", "music", "leetcode", "<br>"];

// Email information for terminal command 'email'
EMAIL_INFO = [
  "                 ",
  "✉️ " + "<a href=mailto:" + EMAIL + ">" + EMAIL + "</a>", // Email link
  "                  ",
];

// Display message for sudo command
SUDO = [
  "                                                                ",
  'Only konsept has <span class="command">admin</span> privileges :(', // Error message for sudo
  "                                                                ",
];

// Education details for the terminal
const EDUCATION_INFO = [
  "<br><strong>Bachelor of Technology in Computer Science and Engineering</strong>", // Degree information
  "Gandhi Institute of Technology and Management (GITAM)  |  2023 - Present", // College and timeline
  "Current CGPA: 9.37", // Current academic performance
  "                                                  ",
  "<strong>High School Degree</strong>", // High school degree
  "St. Xavier's College, Nepal  |  2020 - 2022", // High school details
  "Cambridge International GCE AS and A Level",
  "                                                  ",
  "<strong>Certifications</strong>", // Certifications section
  "• Meta Back-End Developer Professional Certificate",
  "• Meta Front-End Developer Professional Certificate",
  "• Introduction to Cyber Security Specialization by NYU",
  "• IBM Cybersecurity Analyst Professional Certificate",
  "<br>",
];

// Mobile-specific education information
const MOBILE_EDUCATION_INFO = [
  "<br><strong>B.Tech Computer Science and Engineering</strong>", // Degree info for mobile
  "Gandhi Institute of Technology and Management",
  "2023 - Present",
  "Current CGPA: 9.37",
  "<br>",
  "<strong>High School Degree</strong>", // High school info for mobile
  "St. Xavier's College, Nepal",
  "2020 - 2022",
  "Cambridge International GCE AS and A Level",
  "<br>",
  "<strong>Professional Certifications</strong>", // Certification section for mobile
  "Meta Back-End Developer Certificate",
  "Meta Front-End Developer Certificate",
  "Cyber Security Specialization by NYU",
  "<br>",
];

// Terminal information displayed on load
TERMINAL_INFO = [
  "Welcome to Konsept interactive web terminal portfolio", // Terminal welcome message
  "For a list of available commands, type <span class=\"command\">'help'</span>.",
];

// Mobile terminal information on load
TERMINAL_INFO_MOBILE = [
  "Welcome to Konsept terminal web portfolio!", // Mobile terminal welcome message
  "                                 ",
  "For a list of available commands,",
  "type <span class=\"command\">'help'</span>.",
  "                                          ",
  "Version (1.0)",
  "                                          ",
];

// Mobile-specific ASCII banner
MOBILE_BANNER = [
  "88      a8P                                                                        ",
  "88    ,88'                                                                  ,d     ",
  "88  ,88\"                                                                    88     ",
  "88,d88'       ,adPPYba,   8b,dPPYba,   ,adPPYba,   ,adPPYba,  8b,dPPYba,  MM88MMM  ",
  "8888\"88,     a8\"     \"8a  88P'   `\"8a  I8[    \"\"  a8P_____88  88P'    \"8a   88     ",
  "88P   Y8b    8b       d8  88       88   `\"Y8ba,   8PP\"\"\"\"\"\"\"  88       d8   88     ",
  "88     \"88,  \"8a,   ,a8\"  88       88  aa    ]8I  \"8b,   ,aa  88b,   ,a8\"   88,    ",
  "88       Y8b  `\"YbbdP\"'   88       88  `\"YbbdP\"'   `\"Ybbd8\"'  88`YbbdP\"'    \"Y888  ",
  "                                                              88                   ",
  "                                                              88                   "
];
