/* ===============================
   QUIZ ANSWER KEY PAGE LOGIC
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCertificate();
  initShare();
  initExplanationToggle();
  initContinueButtons();
});

/* ===============================
   NAVIGATION
   =============================== */
function initNavigation() {
  const backBtn = document.querySelector(".fw-semibold");

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      // Change URL as per your routing
      window.history.back();
    });
  }
}

/* ===============================
   VIEW CERTIFICATE
   =============================== */
function initCertificate() {
  const certificateBtn = document.querySelector(".Certificate_btn");

  if (certificateBtn) {
    certificateBtn.addEventListener("click", () => {
      // Example: open certificate page or PDF
      alert("Certificate will be available after verification.");
      // window.open("/certificate.html", "_blank");
    });
  }
}

/* ===============================
   SHARE RESULT
   =============================== */
function initShare() {
  const shareIcon = document.querySelector('img[src*="share"]');

  if (!shareIcon) return;

  shareIcon.style.cursor = "pointer";

  shareIcon.addEventListener("click", async () => {
    const shareData = {
      title: "Quiz Result",
      text: "I passed the quiz and unlocked Chapter 2!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      copyToClipboard(window.location.href);
      alert("Link copied to clipboard!");
    }
  });
}

/* ===============================
   DETAILS / EXPLANATION TOGGLE
   =============================== */
function initExplanationToggle() {
  const detailBlocks = document.querySelectorAll(".details");

  detailBlocks.forEach((detail) => {
    detail.addEventListener("click", () => {
      toggleExplanation(detail);
    });
  });
}

function toggleExplanation(detailElement) {
  let explanation = detailElement.nextElementSibling;

  if (!explanation || !explanation.classList.contains("explanation-box")) {
    explanation = document.createElement("div");
    explanation.className = "explanation-box";
    explanation.style.padding = "16px";
    explanation.style.marginBottom = "20px";
    explanation.style.borderRadius = "10px";
    explanation.style.background = "#f9f9f9";
    explanation.style.fontSize = "14px";
    explanation.innerText =
      "Explanation: Always verify AI outputs instead of trusting them blindly.";

    detailElement.after(explanation);
  }

  explanation.style.display =
    explanation.style.display === "none" ? "block" : "none";
}

/* ===============================
   CONTINUE BUTTONS
   =============================== */
function initContinueButtons() {
  const continueBtns = document.querySelectorAll(
    ".chapter_btn, .continue-section .btn"
  );

  continueBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Change route as per your app
      alert("Redirecting to Chapter 2...");
      // window.location.href = "/chapter-2.html";
    });
  });
}

/* ===============================
   UTILITY FUNCTIONS
   =============================== */
function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = text;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

/* ===============================
   FUTURE READY (API LOGIC)
   =============================== */
// Example structure for backend integration
/*
async function fetchQuizResult() {
  try {
    const res = await fetch("/api/quiz/result");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching quiz result", error);
  }
}
*/
