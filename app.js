
let author = document.getElementById("author");
let crypto = document.getElementsByClassName("crypto-top");
let cryptoInfo = document.getElementsByClassName("crypto-bottom");
let timer = document.getElementsByClassName("time");

// Get a random image from unsplash API
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(response => response.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    author.textContent = `Photo by ${data.user.name}`
  })
  .catch(err => {
    // If there is an error, use a backup image
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1484542603127-984f4f7d14cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzMyMzA0ODQ&ixlib=rb-4.0.3&q=80&w=1080)`
    author.textContent = `Photo by  Brady Bellini`
  })



//  Fetch crypto info

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
  .then(res => {
    if (!res.ok) {
      throw Error ("Something went wrong")
    }
    return res.json()
  })
  .then(data => {
    console.log(data)
    crypto[0].innerHTML =
      `<img class='crypto-img' src="${data.image.small}" alt="${data.name}"
       <h2 class='crypto-name'>${data.name}</h2>`
    cryptoInfo[0].innerHTML =
      `<p class='crypto-price'> <strong> Price: </strong> $${data.market_data.current_price.cad}</p>
       <p class='crypto-price'><strong> 24h High:</strong> $${data.market_data.high_24h.cad}</p>
       <p class='crypto-price'> <strong> 24h Low:</strong> $${data.market_data.low_24h.cad}</p>`
  })
  .catch(err => {
    console.log(err)
    crypto[0].innerHTML = `<h3>Unable to fetch crypto info...</h3>`
  })

  //  Get the time
  const today = new Date();
  let time =  today.toLocaleTimeString("en-us", {timeStyle: "short"});
  timer[0].innerHTML = time;
