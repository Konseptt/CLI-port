// Define usedQuotes set
const usedQuotes = new Set();

// Constants for social media links and user information
const TWITTER = "https://x.com/burnt_snow";
const LINKEDIN = "https://www.linkedin.com/in/thekonsept/";
const LEETCODE = "https://leetcode.com/u/konssept/";
const GITHUB = "https://github.com/Konseptt";
const EMAIL = "hello@ranjansharma.info.np";
const USERNAME = "Konsept";

// Array of quotes for the 'quote' command
const QUOTES = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "There are 10 types of people in the world: those who understand binary and those who don't.",
  "I would love to change the world, but they won’t give me the source code.",
  "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "I don't always test my code, but when I do, I do it in production.",
  "To understand recursion, you must first understand recursion.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "There are only two hard things in Computer Science: cache invalidation and naming things.",
  "If at first you don’t succeed; call it version 1.0.",
  "Programming is like writing a book... except if you miss out a single comma on page 126 the whole thing makes no sense.",
  "In order to understand recursion, one must first understand recursion.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
  "A good programmer is someone who always looks both ways before crossing a one-way street.",
  "Why do programmers hate nature? It has too many bugs.",
];

// Array of lines for the 'about' command
const ABOUT = [
  "<br>",
  "Hello there!👋",
  "              ",
  "I'm Ranjan, a Software Engineer",
  "with a passion for technology",
  "and innovation! 🧑‍💻",
  "                            ",
  "                            ",
  "My journey with technology began",
  "through exciting projects like",
  "autonomous vehicle simulations",
  "and secure web applications.",
  "                             ",
  "                             ",
  "I thrive on solving complex",
  "problems using Rust, Python,",
  "and TypeScript. My expertise",
  "spans web development, AI,",
  "and cybersecurity.",
  "                                     ",
  "As I progress in my career,",
  "I'm eager to explore innovative",
  "technologies and contribute to",
  "impactful projects that drive",
  "positive change. 🚀",
  "<br>",
];

// Array of social media links for the 'social' command
const SOCIAL = [
  "<br>",
  'twitter        <a href="' +
    TWITTER +
    '" target="_blank">twitter/' +
    USERNAME +
    "</a>",
  'linkedin       <a href="' +
    LINKEDIN +
    '" target="_blank">linkedin/' +
    USERNAME +
    "</a>",
  'LEETCODE      <a href="' +
    LEETCODE +
    '" target="_blank">LEETCODE/' +
    USERNAME +
    "</a>",
  'github         <a href="' +
    GITHUB +
    '" target="_blank">github/' +
    USERNAME +
    "</a>",
  "<br>",
];

// Array of project descriptions for the 'projects' command
const PROJECTS = [
  "<br>",
  "Here are some of my projects:",
  "<br>",
  "<strong> - Rust-Ai-Car_Driving </strong>",
  "Rust-Ai-Car_Driving is an exhilarating project set in a road-fighter inspired virtual world.",
  "This interactive experience explores the fusion of artificial intelligence and gaming,",
  "as cars navigate the digital terrain using neural networks powered by a genetic algorithm.",
  "<a href='https://youtu.be/BzCkSsQmezE?si=9nDR2ga73ZizcMFH' target='_blank' rel='noopener noreferrer'>Video Link</a>",
  "Tech stack: Rust, Bevy Game Engine, Neural Networks, Genetic Algorithms",
  "<br>",
  "<strong> - Visualize-code </strong>",
  "Code to Image is an innovative web application that allows users to",
  "convert their code snippets into beautiful images.",
  "This tool is perfect for developers who want to share their code on social media,",
  "blogs, or presentations with a visually appealing format.",
  "<a href='https://codetoimage.ranjansharma.info.np/' target='_blank' rel='noopener noreferrer'>Deployed Link</a>",
  "Tech stack: React, HTML, CSS, JavaScript",
  "<br>",
  "<strong> - Hashpass </strong>",
  "HashPass is a cutting-edge web application designed to enhance cybersecurity",
  "measures by providing robust password hashing services.",
  "This tool is tailored for both individuals and organizations who prioritize the",
  "security of their digital accounts.",
  "<a href='https://hashpass.ranjansharma.info.np/' target='_blank' rel='noopener noreferrer'>Deployed Link</a>",
  "Tech stack: Rust, HTML, CSS, JS, TypeScript",
  "<br>",
  "<strong>Check out some of my other projects",
  "<strong> in my </strong> <a href='https://github.com/Konseptt' class='command' target='_blank' rel='noopener noreferrer'>GitHub profile</a> <strong>",
  "<br>",
];

// Array of available commands for the 'help' command
const COMMAND_LIST = [
  "<br>",
  '<span class="command">about</span>          Learn more about me',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">education</span>      Show my education',
  '<span class="command">projects</span>       View some of my projects',
  '<span class="command">history</span>        Show command history',
  '<span class="command">email</span>          Feel free to reach out',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">echo</span>           Print any given string',
  '<span class="command">ls</span>             List directory content',
  '<span class="command">cd &lt;directory&gt</span> Change directory',
  '<span class="command">help</span>           Display all commands',
  '<span class="command">quote</span>          Get a random quote',
  '<span class="command">skills</span>         Show my skills',
  "<br>",
];

// Array of directories for the 'ls' command
const DIRECTORIES = ["<br>", "github", "music", "leetcode", "<br>"];

// Array of email information for the 'email' command
const EMAIL_INFO = [
  "                 ",
  "✉️ " + "<a href=mailto:" + EMAIL + ">" + EMAIL + "</a>",
  "                  ",
];

// Array of sudo information for the 'sudo' command
const SUDO = [
  "                                                                ",
  'Only konsept has <span class="command">admin</span> privileges :(',
  "                                                                ",
];

// Array of education information for the 'education' command
const EDUCATION_INFO = [
  "<br><strong>Bachelor of Technology in Computer Science and Engineering</strong>",
  "Gandhi Institute of Technology and Management (GITAM)  |  2023 - Present",
  "Current CGPA: 9.37",
  "                                                  ",
  "<strong>High School Degree</strong>",
  "St. Xavier's College, Nepal  |  2020 - 2022",
  "Cambridge International GCE AS and A Level",
  "                                                  ",
  "<strong>Certifications</strong>",
  "• Meta Back-End Developer Professional Certificate",
  "• Meta Front-End Developer Professional Certificate",
  "• Introduction to Cyber Security Specialization by NYU",
  "• IBM Cybersecurity Analyst Professional Certificate",
  "<br>",
];

// Array of banner lines for the terminal
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

// Array of terminal information for the 'help' command
const TERMINAL_INFO = [
  "Welcome to Konsept interactive web terminal portfolio",
  "For a list of available commands, type <span class=\"command\">'help'</span>.",
];

// Array of terminal information for mobile view
const TERMINAL_INFO_MOBILE = [
  "Welcome to Konsept terminal web portfolio!",
  "                                 ",
  "For a list of available commands,",
  "type <span class=\"command\">'help'</span>.",
  "                                          ",
  "Version (1.0)",
  "                                          ",
];

// Array of banner lines for mobile view
const MOBILE_BANNER = [
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

// Link to the resume
const RESUME_LINK = "https://ranjansharma.info.np/resume.pdf";

// Array of skills for the 'skills' command
const SKILLS = [
  "<br>",
  "Languages: Python, JavaScript, Rust",
  "Frameworks: React, Node.js, Express",
  "Tools: Git, Docker, Webpack",
  "<br>"
];

// Function to get a random quote
function getRandomQuote() {
  const availableQuotes = QUOTES.filter(quote => !usedQuotes.has(quote));
  const randomQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
  usedQuotes.add(randomQuote);
  if (usedQuotes.size === QUOTES.length) {
    usedQuotes.clear();
  }
  return randomQuote;
}

// Function to process commands
function processCommand(command) {
  switch (command) {
    case "skills":
      renderMultipleLines(SKILLS, 80);
      break;
    case "quote":
      const randomQuote = getRandomQuote();
      renderMultipleLines([randomQuote], 80);
      break;
    // ...other cases...
  }
}
