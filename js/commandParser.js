// Media query to check if the window width is 600px or less (mobile view)
const mql = window.matchMedia("(max-width: 600px)");

// Initialize the page when loaded
window.onload = init;

// Initialization function
function init() {
  cursor.style.left = "0px";  // Set initial cursor position
  renderBanner();              // Render the terminal banner
}

let comandHistory = [];  // Array to store the command history
let commandIndex = 0;    // Index to navigate through the command history

// Function to process the user input command
function processCommand(command) {
  const args = formatCommand(command);  // Format the command input

  renderLine(BASE_ROOT + command, "no-animation", 0);  // Render the command entered

  // Switch case to handle different commands
  switch (args[0]) {
    case "help":
      // Display all available commands
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(COMMAND_LIST, 80);
      break;
      
    case "about":
      // Display about information
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(ABOUT, 80);
      break;
      
    case "social":
      // Display social media links
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(SOCIAL, 80);
      break;
      
    case "projects":
      // Display projects list
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(PROJECTS, 80);
      break;
      
    case "email":
      // Display email information
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(EMAIL_INFO, 80);
      break;
      
    case "banner":
      // Re-render the terminal banner
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderBanner();
      break;
      
    case "curriculum":
      // Open the curriculum in a new tab
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      newTab("https://www.ranjansharma.info.np/");
      break;
      
    case "clear":
      // Clear the terminal content
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      setTimeout(() => contentHook = clearTerminal(terminal, contentHook), 1);
      break;
      
    case "ls":
      // List directories in the terminal
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(DIRECTORIES, 80);
      break;
      
    case "sudo":
      // Simulate a sudo command (admin privilege required)
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(SUDO, 80);
      break;
      
    case "education":
      // Display education info, adjust for mobile view
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      if (mql.matches) {
        renderMultipleLines(MOBILE_EDUCATION_INFO, 80);
      } else {
        renderMultipleLines(EDUCATION_INFO, 80);
      }
      break;
      
    case "pwd":
      // Show the current directory
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderLine("<br>/home/ranjansharma/projects/cliPortfolio<br><br>");
      break;
      
    case "echo":
      // Echo the command entered
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      const printCommands = args.slice(1).join(" ");
      renderLine("<br>" + printCommands + "<br></br>", 80);
      break;
      
    case "cd":
      // Simulate changing directories
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      if (args[1] === "music") {
        renderLine("Opening music...", 80);
        newTab("https://open.spotify.com/user/y2v4skznrqx7dt5xju6vzbxdy");
      } else if (args[1] === "github") {
        renderLine("Accessing Github...", 80);
        newTab("https://github.com/Konseptt?tab=repositories");
      } else if (args[1] === "leetcode") {
        renderLine("Opening Leetcode...", 80);
        newTab("https://leetcode.com/u/konssept/");
      } else {
        renderLine("Directory not found: " + args.slice(1).join(" "));
      }
      break;
      
    case "history":
      // Display the command history
      renderLine("<br>");
      comandHistory.push("<br>");
      renderMultipleLines(comandHistory, 80);
      comandHistory.pop();
      break;
      
    default:
      // Command not found, display a message
      if (mql.matches) {
        renderLine("<br>Command not found");
        renderLine("type <span class=\"command\">'help'</span> for all commands<br><br>");
      } else {
        renderLine("Command not found. For a list of commands, type <span class=\"command\">'help'</span>.", "error", 100);
      }
      break;
  }
}

// Event listeners for keyboard input
textAreaInput.addEventListener("keydown", handleEnterKeyPress);
textAreaInput.addEventListener("keydown", handleArrowUpKeyPress);
textAreaInput.addEventListener("keydown", handleArrowDownKeyPress);

// Mobile input event listener
mobileInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    processCommand(event.target.value);  // Process the command
    clearInput(mobileInput);              // Clear the input field
  }
});

// Render a single line of text in the terminal
function renderLine(text, style, time, asciiArt = false) {
  let formattedText = text;
  if (asciiArt) {
    formattedText = formatASCIIArt(text);  // Format ASCII art if needed
  } else {
    formattedText = formatText(text);  // Format regular text
  }
  setTimeout(() => {
    const next = createLine(formattedText, style);  // Create a line element
    insertLine(next, contentHook);  // Insert it into the terminal
    scrollToBottom();  // Scroll to the bottom
  }, time);
}

// Format text for ASCII art (replaces spaces with non-breaking spaces)
function formatASCIIArt(text) {
  const space = " ";
  const noBreakingSpace = "&nbsp";
  return text.replaceAll(space, noBreakingSpace);
}

// Format regular text (replaces double spaces with non-breaking spaces)
function formatText(text) {
  const doubleSpace = "  ";
  const doubleNoBreakingSpace = "&nbsp;&nbsp";
  return text.replaceAll(doubleSpace, doubleNoBreakingSpace);
}

// Create a line element to be inserted into the terminal
function createLine(text, style) {
  const line = document.createElement("p");
  line.className = style;
  line.innerHTML = `<span class="${style}">${text}</span>`;
  return line;
}

// Insert a line element into the terminal at the correct position
function insertLine(element, referenceElement) {
  referenceElement?.parentNode?.insertBefore(element, referenceElement);
}

// Scroll to the bottom of the page
function scrollToBottom() {
  window.scrollTo({
    top: document.body.offsetHeight,
    behavior: "smooth"
  });
}

// Clear the input field after a command is executed
function clearInput(inputElement) {
  inputElement.value = "";
}

// Render multiple lines of text in the terminal
function renderMultipleLines(lines, delay = 0, style = "", asciiArt = false) {
  lines.forEach((line, index) => {
    renderLine(line, style, index * delay, asciiArt);  // Render each line with a delay
  });
}

// Render the banner (adjusts for mobile view)
function renderBanner() {
  if (mql.matches) {
    renderMultipleLines(MOBILE_BANNER, 80, "", true);
    setTimeout(() => {
      renderMultipleLines(TERMINAL_INFO_MOBILE, 80, "highlightColor");
    }, 1200);
  } else {
    renderMultipleLines(BANNER, 80, "", true);
    setTimeout(() => {
      renderMultipleLines(TERMINAL_INFO, 80, "highlightColor");
    }, 1200);
  }
}

// Clear the terminal content
function clearTerminal(root, hook) {
  const id = hook.id;
  root.innerHTML = '<a id="' + id + '"></a>';  // Clear terminal and reset hook
  hook = document.getElementById(id);
  return hook;
}

// Open a new tab with the provided link
function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

// Add the command to history and return the new index
function addCommandToHistory(commands, historyArray, currentIndex) {
  const commandString = commands.join(" ");
  historyArray.push(commandString);  // Push the command into history
  return currentIndex + 1;  // Return the new index
}

// Format the command input (lowercase and trimmed)
function formatCommand(command) {
  command = command.toLowerCase();
  command = command.trim();
  return command.split(" ");
}

// Handle "Enter" key press to process the command
function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    processCommand(event.target.value);
    clearInput(event.target);
  }
}

// Handle "ArrowUp" key press to navigate command history
function handleArrowUpKeyPress(event) {
  if (event.key === "ArrowUp" && commandIndex > 0) {
    commandIndex--;  // Move up in history
    event.target.value = comandHistory[commandIndex];
  }
}

// Handle "ArrowDown" key press to navigate command history
function handleArrowDownKeyPress(event) {
  if (event.key === "ArrowDown" && commandIndex < comandHistory.length) {
    commandIndex++;  // Move down in history
    event.target.value = comandHistory[commandIndex] || "";
  }
}
