let cuponCode = "UC13FSD";
let timer_id = null;
let min_value = 5;
let sec_value = 0;
let minu = document.getElementById("minutes");
let sec = document.getElementById("seconds");

document.body.style.userSelect = "none";

function reset() {
  if (timer_id !== null) {
    clearInterval(timer_id);
  }
  document.getElementById("qrCode").classList.add("d-none");
}

function clearTimer() {
  clearInterval(timer_id);
  document.getElementById("timeOutMsg").classList.remove("d-none");
  document.getElementById("timeOutMsg").textContent = "Time Out";
  document.getElementById("timerDiv").classList.add("d-none");
  setTimeout(() => {
    reset();
  }, 2000);
}

let proceedBtn = document.getElementById("proceedBtn");
let accept = document.getElementById("accept");

accept.addEventListener("click", () => {
  if (accept.checked) {
    proceedBtn.removeAttribute("disabled");
    proceedBtn.addEventListener("click", () => {
      setTimeout(() => {
        reset();
      }, 3500);
    });
  } else {
    proceedBtn.setAttribute("disabled");
  }
});

function startPaymentTimer() {
  let countdownTime = 60; // Set countdown time
  const countdownElement = document.getElementById("countdown");
  const payButton = document.getElementById("payButton");
  const agreementCheckbox = document.getElementById("agreementCheckbox");

  const countdownInterval = setInterval(() => {
      if (countdownTime > 0) {
          countdownTime--;
          countdownElement.textContent = countdownTime;
      } else {
          clearInterval(countdownInterval);
          alert("Time expired! Please Enroll Again");
          location.reload();
          // You can add functionality to handle timeout here
      }
  }, 1000);

  // Enable the Pay Now button when the checkbox is checked
  agreementCheckbox.addEventListener('change', () => {
      payButton.disabled = !agreementCheckbox.checked;
  });
}

let cuponCodeInput = document.getElementById("cuponCode");

let originalPrice = document.getElementById("originalPrice");
let discountPrice = document.getElementById("discountPrice");
let finalPrice = document.getElementById("finalPrice");
let payPrice = document.getElementById("payPrice");
let offerApplyMsg = document.getElementById("offerApplyMsg");
let qrImg = document.getElementById("qrImg");

const defaultQr = "./img/qr2999.webp";
const discountQr = "./img/qr2699.webp";

let originalAmount = 2999;
let discountAmount = 0;

function enterAmount() {
  if (cuponCodeInput.value === cuponCode) {
    discountAmount = 300;
    offerApplyMsg.textContent = "Offer applied successfully";
    qrImg.src = discountQr;
  } else {
    discountAmount = 0;
    offerApplyMsg.textContent = "";
    qrImg.src = defaultQr;
  }
  let totalAmount = originalAmount - discountAmount;
  originalPrice.textContent = originalAmount;
  discountPrice.textContent = discountAmount;
  finalPrice.textContent = totalAmount;
  payPrice.textContent = totalAmount;
}
enterAmount();

cuponCodeInput.addEventListener("keyup", () => {
  enterAmount();
});
