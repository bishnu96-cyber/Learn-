function createAndAppendContent({ name, url }) {
    let div = document.createElement("div");
    div.classList.add("wraper-course-content-img");
    div.innerHTML = `<div>
                        <img src="${url}" alt="${name}">
                      <p>${name}</p>
                      </div>`;
    return div;
  }
  const frontend = [
    {
      name: "HTML 5",
      url: "./course-img/html.webp",
    },
    {
      name: "CSS 3",
      url: "./course-img/css.webp",
    },
    {
      name: "BOOTSTRAP 5",
      url: "./course-img/bootstrap.webp",
    },
    {
      name: "TAILWIND CSS",
      url: "./course-img/tailwind.webp",
    },
    {
      name: "JAVASCRIPT",
      url: "./course-img/js.webp",
    },
    {
      name: "REACT",
      url: "./course-img/react.webp",
    },
    {
      name: "REDUX",
      url: "./course-img/redux.webp",
    },
  ];
  const backend = [
    {
      name: "NODE JS",
      url: "./course-img/node.webp",
    },
    {
      name: "EXPRESS JS",
      url: "./course-img/express.webp",
    },
    {
      name: "REST API",
      url: "./course-img/restapi.webp",
    },
  ];
  const database = [
    {
      name: "SQL",
      url: "./course-img/sql.webp",
    },
    {
      name: "MY SQL",
      url: "./course-img/mysql.webp",
    },
    {
      name: "API",
      url: "./course-img/api.webp",
    },
    {
      name: "MONGO DB",
      url: "./course-img/mongodb.webp",
    },
  ];
  const project = [
    {
      name: "MINI PROJECT",
      url: "./course-img/miniproject.webp",
    },
    {
      name: "MAJOR PROJECT",
      url: "./course-img/majorproject.webp",
    },
  ];
  const extra = [
    {
      name: "GIT",
      url: "./course-img/git.webp",
    },
    {
      name: "GITHUB",
      url: "./course-img/github.webp",
    },
    {
      name: "RESUME",
      url: "./course-img/resume.webp",
    },
    {
      name: "INTERVIEW PREPARATION",
      url: "./course-img/interview.webp",
    },
    {
      name: "JOB APPLICATION STRATEGY",
      url: "./course-img/job.webp",
    },
  ];
  const frontendContent = document.getElementById("frontendContent");
  const backendContent = document.getElementById("backendContent");
  const databaseContent = document.getElementById("databaseContent");
  const projectContent = document.getElementById("projectContent");
  const extraContent = document.getElementById("extraContent");
  frontend.forEach((element) => {
    let div = createAndAppendContent(element);
    div.classList.add("b-15");
    frontendContent.appendChild(div);
  });
  backend.forEach((element) => {
    let div = createAndAppendContent(element);
    div.classList.add("b-15");
    backendContent.appendChild(div);
  });
  database.forEach((element) => {
    let div = createAndAppendContent(element);
    div.classList.add("b-15");
    databaseContent.appendChild(div);
  });
  project.forEach((element) => {
    let div = createAndAppendContent(element);
    div.classList.add("b-15");
    projectContent.appendChild(div);
  });
  extra.forEach((element) => {
    let div = createAndAppendContent(element);
    div.classList.add("b-15");
    extraContent.appendChild(div);
  });
  