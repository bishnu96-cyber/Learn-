const dateInput = document.getElementById("Date");

dateInput.min = new Date().toISOString().split("T")[0];

dateInput.addEventListener("input", function () {
  const currentDate = new Date();
  const selectedDate = new Date(this.value);
});
dateInput.addEventListener("keydown", function (e) {
  e.preventDefault();
});

let byeMsg = document.getElementById("byeMsg");
let podcastFormFields = document.getElementById("podcastFormFields");
let confirmForPodcast = document.getElementById("confirmForPodcast");

function showPodcatsFrom() {
  confirmForPodcast.classList.add("hidden");
  podcastFormFields.classList.remove("hidden");
}
