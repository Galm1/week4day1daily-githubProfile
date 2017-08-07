// 1. First, find our UL Container
let container = document.querySelector('.card');


// 2. Create our Ajax Request
let request = new XMLHttpRequest();
request.addEventListener("load", displayProfile);
request.open('GET', 'https://api.github.com/users/Galm1');
request.send();

// Our display function
function displayProfile() {
  // Parse our response text
  let data = JSON.parse(this.responseText);
  let myCard = '';

  myCard += `

  <header>
    <h1>${data.login}</h1>
  </header>

  <div class="content">

  <div id="basics">
    <h3>The Basics</h3>
      <p>Name: ${data.name}</p>
      <p>Github URL: ${data.html_url}</p>
      <p>Email: ${data.email}</p>
      <p>Company: ${data.company}</p>
      <p>Website: ${data.html_url}</p>
  </div>

  <div id="theStory">
    <h3>The Story</h3>
      <p>${data.bio}</p>
  </div>

  <div ="profileImg">
    <img class='picture' src="${data.avatar_url}" alt="profile picture">
  </div>

  <div>

`;


  container.innerHTML = myCard;
}
