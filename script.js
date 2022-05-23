// Create an event listener for when a user clicks a certain section
// it makes a call to a function that...

// Takes Google Books API with a certain parameter
// For example, "life+happiness," and axios fetches this data.
// Then it calls a...

// Function that takes that result and pulls a random book title
// recommends it to the user
// display book cover, title, author, and summary(?) by DOM manipulation

function clickMood() {
  let apiKey = "AIzaSyAKH5VZTVN3qjnDH0PKgJU6TcPgOX-uNYg"; // hide this key later
  let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=life+happiness+positive+insubject:self-help&filter=ebooks&key=${apiKey}`;

  axios.get(apiUrl).then(recommendTitle);
}

function recommendTitle(response) {
  console.log(response);
  let randomArray = Math.floor(Math.random() * response.data.items.length);
  let bookRec = response.data.items[randomArray].volumeInfo.title;
  let bookTitleDiv = document.querySelector(".bookTitle");

  // Manipulate DOM
  bookTitleDiv.textContent = `${bookRec}`;
}

let myMood = document.querySelector(".mood");
myMood.addEventListener("click", clickMood);
