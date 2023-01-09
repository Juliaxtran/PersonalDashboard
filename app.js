
let author = document.getElementById("author");

// Get a random image from unsplash API
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(response => response.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    author.textContent = `Photo by ${data.user.name}`
  })
  .catch(err => {
    // If there is an error, use a backup image
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzMyMjk5Nzc&ixlib=rb-4.0.3&q=80&w=1080)`
    author.textContent = `Photo by Unsplash`

  })






