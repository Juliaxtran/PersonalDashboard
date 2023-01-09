
let author = document.getElementById("author");

// Get a random image from unsplash API
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    author.textContent = `Photo by ${data.user.name}`})
  .catch(err => {
    // If there is an error, use a backup image
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?nature)`
    author.textContent = `Photo by Unsplash`

  })






