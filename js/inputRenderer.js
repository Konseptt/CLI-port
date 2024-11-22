// Constant for the amount of pixels the cursor moves per step
const MOVE_STEP = 10;

// A mock command prompt prefix for display
const BASE_ROOT = "guest@ranjansharma.info.np:~$ ";

// DOM elements for various parts of the interface
const cursor = document.getElementById("cursor"); // The cursor element
const typerElement = document.getElementById("typer"); // Displays the typed text
const textAreaInput = document.getElementById("texter"); // Input field for typing text
const mobileInput = document.querySelector("#mobileInput input"); // Input field for mobile devices
const terminal = document.getElementById("terminal"); // Terminal container element
let contentHook = document.getElementById("contentHook"); // Element for dynamic terminal content

// Initialize the application on window load
window.onload = init;

/**
 * Initialize the cursor position to the start (left: 0px).
 */
function init() {
  cursor.style.left = "0px";
}

// Event listener for capturing input in the text area
textAreaInput.addEventListener("input", (event) => {
  // Updates the displayed text in real-time as the user types
  typerElement.textContent = event.target.value;
});

/**
 * Sets the focus on the textarea, so it can capture input immediately.
 */
function focusOnTextArea() {
  textAreaInput.focus();
}

/**
 * Moves the cursor left or right based on arrow key input.
 * @param {number} count - The maximum number of steps the cursor can move.
 * @param {object} event - The event triggered by key press.
 * @param {number} moveStep - The number of pixels the cursor moves per step (default is MOVE_STEP).
 */
function moveCursor(count, event, moveStep = MOVE_STEP) {
  const keyCode = event.key;

  // Only proceed if the key pressed is an arrow key
  if (!isArrowKey(keyCode)) {
    return;
  }

  // Get the current cursor position (in pixels)
  const currentLeft = getCurrentLeftOffset(cursor);

  // Calculate the new cursor position based on the key press
  const newPosition = calculateCursorPosition(
    keyCode,
    currentLeft,
    count,
    moveStep
  );

  // Update the cursor position if a valid new position is calculated
  if (newPosition !== undefined) {
    cursor.style.left = newPosition + "px";
  }
}

/**
 * Retrieves the current left offset (in pixels) of the given element.
 * @param {HTMLElement} element - The element whose left offset is needed.
 * @return {number} - The current left position in pixels (default is 0 if not set).
 */
function getCurrentLeftOffset(element) {
  return parseInt(element.style.left) || 0;
}

/**
 * Calculates the new cursor position based on arrow key input.
 * @param {string} key - The key that was pressed (ArrowLeft or ArrowRight).
 * @param {number} currentLeftOffset - The current left position of the cursor.
 * @param {number} count - The number of characters or positions available for movement.
 * @param {number} moveStep - The distance the cursor should move (default is MOVE_STEP).
 * @return {number|undefined} - The new cursor position or undefined if no movement occurs.
 */
function calculateCursorPosition(
  key,
  currentLeftOffset,
  count,
  moveStep = MOVE_STEP
) {
  // Move left if the left arrow key is pressed and the cursor is within bounds
  if (isLeftArrow(key) && currentLeftOffset >= -((count - 1) * moveStep)) {
    return currentLeftOffset - moveStep;

  // Move right if the right arrow key is pressed and the cursor is within bounds
  } else if (isRightArrow(key) && currentLeftOffset + moveStep <= 0) {
    return currentLeftOffset + moveStep;
  }
}

/**
 * Checks if the pressed key is the right arrow key.
 * @param {string} key - The key that was pressed.
 * @return {boolean} - True if the key is "ArrowRight", false otherwise.
 */
function isRightArrow(key) {
  return key === "ArrowRight";
}

/**
 * Checks if the pressed key is the left arrow key.
 * @param {string} key - The key that was pressed.
 * @return {boolean} - True if the key is "ArrowLeft", false otherwise.
 */
function isLeftArrow(key) {
  return key === "ArrowLeft";
}

/**
 * Checks if the pressed key is either the left or right arrow key.
 * @param {string} key - The key that was pressed.
 * @return {boolean} - True if the key is an arrow key, false otherwise.
 */
function isArrowKey(key) {
  return key === "ArrowLeft" || key === "ArrowRight";
}

/**
 * Overrides the default alert function to log messages to the console instead.
 * @param {string} txt - The text to be logged.
 */
function alert(txt) {
  console.log(txt);
}
