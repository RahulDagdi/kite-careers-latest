const consultBtn = document.getElementById("consultBtn");
const buyBtn = document.getElementById("buyBtn");

const consultForm = document.getElementById("consultForm");
const timeSlot = document.getElementById("timeSlot");

function hideAll() {
  consultForm.style.display = "none";
  timeSlot.style.display = "none";
}

function showPopup(popup) {
  popup.style.display = "block";
}

// Consult
consultBtn.addEventListener("click", () => {
  hideAll();
  showPopup(consultForm);
});

// Buy
buyBtn.addEventListener("click", () => {
  hideAll();
  showPopup(timeSlot);
});




// 🔹 Outside click to close popup
document.addEventListener("click", function (e) {
  const isConsultBtn = consultBtn.contains(e.target);
  const isBuyBtn = buyBtn.contains(e.target);

  const isConsultForm = consultForm.contains(e.target);
  const isTimeSlot = timeSlot.contains(e.target);

  // Agar click na button par hai, na popup ke andar
  if (
    !isConsultBtn &&
    !isBuyBtn &&
    !isConsultForm &&
    !isTimeSlot
  ) {
    hideAll();
  }
});
