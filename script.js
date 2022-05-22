// Create an event listener for when a user clicks a certain section
// it makes a call to a function that...

// Takes an API with a certain parameter
// For example, "insightful," and axios fetches this data.
// Then it calls a...

// Function that takes that result and pulls a random book title
// recommends it to the user
// display book cover, title, author, and summary(?)

function clickMood() {
  let apiKey = "AIzaSyAKH5VZTVN3qjnDH0PKgJU6TcPgOX-uNYg";
  let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=life+happiness+positive+insubject:self-help&filter=ebooks&key=${apiKey}`;

  axios.get(apiUrl).then(myFunc);
}

function myFunc(response) {
  console.log(response);
  console.log(response.data.items[0].volumeInfo.authors);
}

let myMood = document.querySelector(".mood");
myMood.addEventListener("click", clickMood);
