const social = "./resources/social.json";
const projets = "./resources/projects.json";
const divSocial = document.getElementById("social");
const divProject = document.getElementById("project");

// Social
fetch(social)
  .then((response) => response.json())
  .then((data) => {
    let tmp = "";
    for (i in data) {
      tmp += `
      <button 
        class="${data[i].color}"    
        onclick="window.open('${data[i].link}','_blank')"
      >
        <i class="${data[i].icon}"></i>&nbsp;${data[i].name}
      </button>`;
    }
    divSocial.innerHTML = tmp;
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

// Projects
fetch(projets)
  .then((response) => response.json())
  .then((data) => {
    let tmp = "";
    for (i in data) {
      data[i].status
        ? (tmp += `
        <button
            onclick="window.open('${data[i].link}','_blank')"
        >
                ${data[i].name}
        </button>
        `)
        : "";
    }
    divProject.innerHTML = tmp;
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
