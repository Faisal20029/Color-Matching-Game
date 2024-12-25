const boxes = document.querySelectorAll('.box');
const targetColorText = document.getElementById('target-color');
const scoreText = document.getElementById('score');
const timerText = document.getElementById('timer');
let score = 0;
let timeLeft = 30;
let targetColor = '';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

// Set a random color to all boxes and choose a target
function setColors() {
  const randomColors = [];
  boxes.forEach((box) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    randomColors.push(randomColor);
    box.style.backgroundColor = randomColor;
  });

  // Pick a random target color from the assigned box colors
  targetColor = randomColors[Math.floor(Math.random() * randomColors.length)];
  targetColorText.textContent = targetColor;
  targetColorText.style.color = targetColor;
}

// Handle clicking on a box
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.style.backgroundColor === targetColor) {
      score += 1; // Correct guess
    } else {
      score -= 1; // Incorrect guess
    }
    scoreText.textContent = `Score: ${score}`;
    setColors(); // Set new colors and target
  });
});

// Countdown timer
function startTimer() {
  const timerInterval = setInterval(() => {
    timeLeft -= 1;
    timerText.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert(`Time's up! Your final score is: ${score}`);
    }
  }, 1000);
}

// Initialize the game
function initGame() {
  score = 0;
  timeLeft = 30;
  scoreText.textContent = `Score: ${score}`;
  timerText.textContent = `Time Left: ${timeLeft}s`;
  setColors();
  startTimer();
}

// Start the game
initGame();
