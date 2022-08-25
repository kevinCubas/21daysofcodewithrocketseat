particlesJS.load('particles-js', 'particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});

const image = document.getElementById("image")
const name = document.getElementById('name')
const subtitle = document.getElementById('subtitle')
const repos = document.getElementById("repos")

const url = "https://api.github.com/users/kevinCubas"
const fetching = () => {
  fetch(url).then(async res => {
    if (!res.ok) {
      throw new Error(res.status)
    }
    const response = await res.json()

    image.src = response.avatar_url
    name.innerText = response.name
    subtitle.innerText = response.company
    repos.innerHTML = `<span id="textrepos">Repositories: </span>${response.public_repos}`
  }).catch(error => console.log(error));
}
fetching()