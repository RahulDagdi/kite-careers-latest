// const consultBtn = document.getElementById("consultBtn");
// const buyBtn = document.getElementById("buyBtn");

// const consultForm = document.getElementById("consultForm");
// const timeSlot = document.getElementById("timeSlot");

// function hideAll() {
//   consultForm.style.display = "none";
//   timeSlot.style.display = "none";
// }

// function showPopup(popup) {
//   popup.style.display = "block";
// }


// // Consult
// consultBtn.addEventListener("click", () => {
//   hideAll();
//   showPopup(consultForm);
// });

// // Buy
// buyBtn.addEventListener("click", () => {
//   hideAll();
//   showPopup(timeSlot);
// });




// // 🔹 Outside click to close popup
// document.addEventListener("click", function (e) {
//   const isConsultBtn = consultBtn.contains(e.target);
//   const isBuyBtn = buyBtn.contains(e.target);

//   const isConsultForm = consultForm.contains(e.target);
//   const isTimeSlot = timeSlot.contains(e.target);

//   // Agar click na button par hai, na popup ke andar
//   if (
//     !isConsultBtn &&
//     !isBuyBtn &&
//     !isConsultForm &&
//     !isTimeSlot
//   ) {
//     hideAll();
//   }
// });


const consultBtn = document.getElementById("consultBtn");
const buyBtn = document.getElementById("buyBtn");

const consultForm = document.getElementById("consultForm");
const timeSlot = document.getElementById("timeSlot");

function hideAll() {
  consultForm.style.display = "none";
  timeSlot.style.display = "none";
}

// 🔹 show popup normally
function showPopup(popup) {
  popup.style.display = "block";
}

// 🔹 copy Buy popup position → Consult popup
function showConsultAtBuyPosition() {
  hideAll();

  // temporarily show buy popup to get its position
  timeSlot.style.display = "block";

  const top = timeSlot.offsetTop;
  const left = timeSlot.offsetLeft;

  // hide buy popup again
  timeSlot.style.display = "none";

  // show consult popup a bit more ABOVE time slot
  consultForm.style.display = "block";
  consultForm.style.top = (top - 180) + "px"; // 🔹 thoda sa aur zyada upar
  consultForm.style.left = left + "px";
}


// 🔹 Consult click
consultBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showConsultAtBuyPosition();
});

// 🔹 Buy click (UNCHANGED behavior)
buyBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  hideAll();
  showPopup(timeSlot);
});

// 🔹 outside click close
document.addEventListener("click", function (e) {
  if (
    !consultBtn.contains(e.target) &&
    !buyBtn.contains(e.target) &&
    !consultForm.contains(e.target) &&
    !timeSlot.contains(e.target)
  ) {
    hideAll();
  }
});
