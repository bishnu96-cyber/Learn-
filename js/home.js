const demoVideoDiv = document.getElementById("demoVideoDiv");
const demoDiv = document.getElementById("demoDiv");
const demoCloseBtn = document.getElementById("demoCloseBtn");
function openDemo() {
  demoVideoDiv.classList.remove("hidden");
}
function closeDemo() {
  demoVideoDiv.classList.add("hidden");
}

demoDiv.addEventListener("click", openDemo);
demoCloseBtn.addEventListener("click", closeDemo);

// How are we different

let yesAvailabe = document.querySelectorAll("#yesAvailabe");
let noAvailabe = document.querySelectorAll("#noAvailabe");

yesAvailabe.forEach((ele) => {
  ele.innerHTML = `<svg  viewBox="0 0 24 24" xml:space="preserve">
            <path d="M19.3,5.3L9,15.6l-4.3-4.3l-1.4,1.4l5,5L9,18.4l0.7-0.7l11-11L19.3,5.3z"></path>
        </svg>`;
});
noAvailabe.forEach((ele) => {
  ele.innerHTML = `<svg viewBox="0 0 24 24">
          <line x1="16.9999" y1="7" x2="7.00001" y2="16.9999" id="Path"  stroke-width="2"
            stroke-linecap="round"> </line>
          <line x1="7.00006" y1="7" x2="17" y2="16.9999" id="Path"  stroke-width="2"
            stroke-linecap="round"> </line>
        </svg>`;
});

var Swipes = new Swiper(".swiper-testimonial", {
  loop: true,
  autoplay: {
    pauseOnMouseEnter: true,
    delay: 3000,
  },
  speed: 700,
  spaceBetween: 20,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
