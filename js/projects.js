const projects = [
  {
    id: 0,
    name: "veritasedu.net",
    type: "Web Application",
    typeof: "w",
    status: "online",
    startdate: "Q3 2023",
    enddate: "Q1 2024",
    development: "self developed",
    case: "professional",
    summary: `This is the corporate website of Veritas Academy.
        It is commonly used by veritas academy's employees, teachers and students and it has many features for them.
        Mostly developed by me.`,
    websiteLink: "https://www.veritasedu.net",
    detailsLink: "./veritasedu.html",
    imageSource: "./images/projects/veritas-academy/veritasedu/anasayfa-1.jpg",
  },
  {
    id: 1,
    name: "consultancy.veritasedu.net",
    type: "Web App",
    typeof: "w",
    status: "online",
    startdate: "Q1 2023",
    enddate: "Q3 2023",
    development: "contributed",
    case: "professional",
    summary: `This website was created to meet the needs of Veritas Academy's consultants and streamline their workflow.
    Login required in order to use this web application.
    Contributed project. Worked in a team.`,
    websiteLink: "http://www.consultancy.veritasedu.net",
    detailsLink: "./consultancy-veritasedu.html",
    imageSource: "./images/projects/veritas-academy/consultancy/c-1.png",
  },
  {
    id: 2,
    name: "belediye-sikayet.org",
    type: "Web App",
    typeof: "w",
    status: "offline",
    startdate: "Q4 2019",
    enddate: "Q1 2020",
    development: "self developed",
    case: "professional",
    summary: `This website was developed as a prototype upon customer demands, but was not published.`,
    websiteLink: "",
    detailsLink: "./belediyesikayet.html",
    imageSource: "./images/projects/dijitech/belediyesikayet/anasayfa.png",
  },
  {
    id: 3,
    name: "Veritas Questions",
    type: "Desktop App",
    typeof: "d",
    status: "offline",
    startdate: "Q4 2019",
    enddate: "Q1 2020",
    development: "contributed",
    case: "professional",
    summary: `This is a desktop automation application created for building and editing Veritas Academy Digital Questionbank Archive.
    Contributed Project.`,
    websiteLink: "",
    detailsLink: "./veritas-questions.html",
    imageSource: "./images/projects/veritas-academy/veritas-questions/ib-1.jpg",
  },
  {
    id: 4,
    name: "Warhammer Fantasy Card Battles",
    type: "Desktop App",
    typeof: "d",
    status: "online",
    startdate: "Q3 2018",
    enddate: "Q3 2018",
    development: "self developed",
    case: "case study",
    summary: `This is a desktop application turn based card game includes warhammer fantasy universe.
    I created this game just for fun. Game currently available on my github.`,
    websiteLink:
      "https://github.com/Alperkisik/Warhammer-Fantasy-Battles-Card-Game",
    detailsLink: "./warhammer-fantasy-card-battles.html",
    imageSource: "./images/projects/my-projects/warhammer/warhammer-1.png",
  },
  {
    id: 4,
    name: "Crew Party",
    type: "Mobile App",
    typeof: "m",
    status: "offline",
    startdate: "Q4 2021",
    enddate: "Q4 2021",
    development: "self developed",
    case: "professional",
    summary: `This is a hyper casual game prototype. Almost published by Rolic Games.
    Created by me.`,
    websiteLink: "",
    detailsLink: "./crew-party.html",
    imageSource: "./images/projects/pasatempos/crew-party-1.png",
  },
  {
    id: 5,
    name: "Titions",
    type: "Mobile App",
    typeof: "m",
    status: "offline",
    startdate: "Q4 2021",
    enddate: "Q4 2021",
    development: "self developed",
    case: "professional",
    summary: `This is a hyper casual game prototype. Almost published by Rolic Games.
    Created by me.`,
    websiteLink: "",
    detailsLink: "./titions.html",
    imageSource: "./images/projects/pasatempos/titions-1.png",
  },
  {
    id: 6,
    name: "Yolcu.com",
    type: "Web App",
    typeof: "w",
    status: "online",
    startdate: "Q1 2020",
    enddate: "Q3 2020",
    development: "contributed",
    case: "professional",
    summary: `This is a web application created by diji.tech developers.
    I am just contributed on front-end part.`,
    websiteLink: "https://www.yolcu.com",
    detailsLink: "",
    imageSource: "./images/projects/dijitech/yolcu/y-1.png",
  },
];

const createProjects = () => {
  const projectsGrid = document.getElementById("projectsGrid");

  projectsGrid.innerHTML = "";

  projects.forEach((project) => {
    let date = project.startdate;
    if (project.enddate !== date) date += ` to ${project.enddate}`;

    let buttonContainer = `<div class="button-container">`;
    if (project.detailsLink.length > 0) {
      buttonContainer += `<a class="cstm-btn-purple" href="${project.detailsLink}">More Info</a>`;
    }
    if (project.websiteLink.length > 0) {
      buttonContainer += `<a class="cstm-btn-blue" href="${project.websiteLink}" target="_blank">Go to website</a>`;
    }
    buttonContainer += "</div>";

    if ((project.detailsLink.length === 0) & (project.websiteLink.length === 0))
      buttonContainer = "";

    let projectHtml = `
        <div class="grid-item" name="project" p-typeof="${project.typeof}">
            <img src="${project.imageSource}" alt="${project.name} project">
            <div class="overlay">
                <div>
                    <h3>${project.name}</h3>
                    <h4>${project.type}</h4>
                </div>
                <div class="d-flex flex-row flex-wrap gap-2">
                    <div class="status-badge">
                        Status: <span class="status-${project.status}">${project.status}</span>
                    </div>
                    <div class="status-badge">
                        ${date}
                    </div>
                </div>
                <p>
                    ${project.summary}
                </p>
                ${buttonContainer}
            </div>
        </div>
        `;

    projectsGrid.innerHTML += projectHtml;
  });
};

const filterBy = (filter) => {
  var elements = document.querySelectorAll('div[name="project"]');

  elements.forEach((element) => {
    setTimeout(() => {
      element.classList.remove("d-none");
      element.style.opacity = "1";
      element.style.height = "auto";
      element.style.maxWidth = "100%";
    }, 500);

    if (element.getAttribute("p-typeof") !== filter) {
      element.style.opacity = "0";
      setTimeout(() => {
        element.style.height = "0";
        element.style.maxWidth = "0";
        element.classList.add("d-none");
      }, 500);
    }
  });
};

const showAll = () => {
  var elements = document.querySelectorAll('div[name="project"]');
  elements.forEach((element) => {
    if (element.classList.contains("d-none")) {
      element.classList.remove("d-none");
      element.style.opacity = "0";
      element.style.height = "0";
      element.style.maxWidth = "0";

      setTimeout(() => {
        element.style.opacity = "1";
        element.style.height = "auto";
        element.style.maxWidth = "100%";
      }, 500);
    }
  });
};

const setupClickEvent = () => {
  const listItems = document.querySelectorAll(".sorting-list li");

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (this.classList.contains("active") === true) {
        return;
      }

      listItems.forEach((li) => {
        li.classList.remove("active");
      });

      this.classList.add("active");

      let filter = this.getAttribute("data-p");
      if (filter === "all") showAll();
      else filterBy(filter);
    });
  });
};

window.onload = function () {
  const currentPageUrl = window.location.href;
  const urlParts = currentPageUrl.split("/");
  if (urlParts.length > 0) {
    const lastPart = urlParts[urlParts.length - 1];
    console.log(lastPart);
  } else {
    console.log("main page");
  }

  setupClickEvent();

  createProjects();
};
