'use strict'
const aboutImg = document.getElementById("home-img");
const projectsWrapper = document.getElementById("projects-wrapper");

const PROJECTS = [
  {
    projectimage: "./assets/hello.png",
    projectname: "Custom Hello World"
  },
  {
    projectimage: "./assets/button.png",
    projectname: "Animated button"
  },
  {
    projectimage: "./assets/calculator.png",
    projectname: "Calculator"
  },
  {
    projectimage: "./assets/notfound.png",
    projectname: "Custom error page"
  },
  {
    projectimage: "./assets/glassmor.png",
    projectname: "Glassmorphism effect"
  },
  {
    projectimage: "./assets/counter.png",
    projectname: "Counter"
  },
  {
    projectimage: "./assets/switchmode.png",
    projectname: "Toggle theme button"
  },
  {
    projectimage: "./assets/loading.png",
    projectname: "Loading animation"
  },
  {
    projectimage: "./assets/particles.png",
    projectname: "ParticlesJS lib use"
  },
  {
    projectimage: "./assets/login.png",
    projectname: "Login form"
  },
  {
    projectimage: "./assets/slider.png",
    projectname: "Slider image gallery"
  },
  {
    projectimage: "./assets/menu.png",
    projectname: "Responsive menu"
  },
  {
    projectimage: "./assets/quizz.png",
    projectname: "Quizz form"
  },
  {
    projectimage: "./assets/ecommerce.png",
    projectname: "E-commerce"
  },
  {
    projectimage: "./assets/apicall.png",
    projectname: "Rick and Morty API call"
  },
  {
    projectimage: "./assets/keyboard.png",
    projectname: "Keyboard events"
  },
  {
    projectimage: "./assets/passwordgen.png",
    projectname: "Random password generator"
  },
  {
    projectimage: "./assets/randomphoto.png",
    projectname: "Random Unsplash image"
  },
  {
    projectimage: "./assets/emoji.png",
    projectname: "Emoji picker"
  }
];

const URL = "https://api.github.com/users/kevinCubas";

const displayProjects = () => {
  for (let i = 0; i < PROJECTS.length; i++) {
    projectsWrapper.innerHTML += `
    <article>
      <div class="img-container">
        <img class="project-img" src="${PROJECTS[i].projectimage}" alt="${PROJECTS[i].projectname}">
      </div>
      <div class="project-name">
        <p>${PROJECTS[i].projectname}</p>
      </div>
    </article> 
    `
  }
}

const getGithubProfilePic = async () => {
  try {
    const response = await fetch(URL)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    aboutImg.src = data.avatar_url
  } catch (error) {
    console.log(error)
  }
};

getGithubProfilePic();
displayProjects();