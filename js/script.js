
// // Job Page

// /* Fetching data from PHP file */
// async function fetchJobs() {
//   try {
//     const response = await fetch('php/get_jobs.php');
//     const jobs = await response.json();
//     return jobs;
//   } catch (error) {
//     console.error('Error fetching jobs:', error);
//     return [];
//   }
// }

// HTML code with data table
// function createJobListing(job) {
//   const listing = document.createElement('div');
//   listing.className = 'job-listing';
//   listing.innerHTML = `
//     <div class="company-logo">
//       <img src="${job.logo_url}" class="jobsimage" alt="${job.company} Logo">
//     </div>
//     <div class="job-info">
//       <h2 class="job-title">${job.title}</h2>
//        <div class="experience" ><p class="dark:text-white">${job.experience}</p></div>
//       <p class="company-name">${job.company}</p>
//       <p class="job-description">${job.description}</p>
//     </div>
//     <a href="${job.apply_now}" class="apply-button" target="_blank">Apply Now</a>
//   `;
//   return listing;
// }

// async function displayJobs() {
//   const jobsContainer = document.getElementById('jobsPage');
//   const jobs = await fetchJobs();
//   jobs.forEach(job => {
//     jobsContainer.appendChild(createJobListing(job));
//   });
// }

// Job Page end

// document.addEventListener("DOMContentLoaded", () => {
//   let coderActivePage = localStorage.getItem('a2CoderActivePage');
//   if (coderActivePage !== null) {
//     opentab(coderActivePage);
//   }
// })

// let tablinks = document.getElementsByClassName("nav-tabs");
// let tabcontents = document.getElementsByClassName("tab-contents");
// let tabname = 'home';
// function opentab(tabname) {
//   localStorage.setItem('a2CoderActivePage', tabname);
//   for (let tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (let tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   activeNavLink(tabname)
//   selectQ(tabname).classList.add("active-tab");

//   $('html, body').animate({ scrollTop: 0 }, 500);
// }

const scrollTopButton = document.querySelector(".scroll-top");
scrollTopButton.addEventListener("click", function () {
window.scrollTo({
    top: 0,
    behavior: "smooth",
});
});

const messageForWhatsapp = "Hello, I want to Enroll in Live Class";

const contactWhatsapp = document.getElementById("contactWhatsapp");
contactWhatsapp.href = `https://wa.me/+918917270821?text=${messageForWhatsapp
.split(" ")
.join("%20")}`;

document.body.style.userSelect = "none";
