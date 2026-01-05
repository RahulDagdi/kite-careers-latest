// ================================
// VIEWPORT HEIGHT FIX (JS ONLY)
// ================================
function setFullHeight() {
  document.body.style.minHeight = window.innerHeight + "px";
}

setFullHeight();
window.addEventListener("resize", setFullHeight);

// ================================
// QUIZ LOGIC (MATCHED WITH HTML)
// ================================

// Select elements
const questionCards = document.querySelectorAll(".question-card");
const progressBars = document.querySelectorAll(".progress");
const nextBtn = document.querySelector(".next-btn");

// State
let currentIndex = 0;
const userAnswers = [];

// ================================
// INITIAL SETUP (NO AUTO SELECT)
// ================================
function initQuiz() {
  questionCards.forEach((card, index) => {
    // Show only first question
    card.style.display = index === 0 ? "block" : "none";

    // Remove any pre-selected options
    const options = card.querySelectorAll(".option");
    options.forEach(option => option.classList.remove("selected"));
  });

  // Reset progress bar
  progressBars.forEach(bar => bar.classList.remove("active"));
}

initQuiz();

// ================================
// OPTION SELECTION
// ================================
questionCards.forEach((card, qIndex) => {
  const options = card.querySelectorAll(".option");

  options.forEach((option, oIndex) => {
    option.addEventListener("click", () => {
      // Remove previous selection
      options.forEach(opt => opt.classList.remove("selected"));

      // Add selected class
      option.classList.add("selected");

      // Store answer
      userAnswers[qIndex] = oIndex;
    });
  });
});

// ================================
// NEXT BUTTON LOGIC
// ================================
nextBtn.addEventListener("click", () => {
  // Validate selection
  if (userAnswers[currentIndex] === undefined) {
    alert("Please select an option");
    return;
  }

  // Update progress bar
  progressBars[currentIndex].classList.add("active");

  // Hide current question
  questionCards[currentIndex].style.display = "none";
  currentIndex++;

  // Show next question or finish
  if (currentIndex < questionCards.length) {
    questionCards[currentIndex].style.display = "block";
  } else {
    finishQuiz();
  }
});

// ================================
// FINISH QUIZ
// ================================
function finishQuiz() {
  alert("Quiz Completed 🎉");
  console.log("User Answers:", userAnswers);

  // Optional redirect
  window.location.href = "result.html";
}
