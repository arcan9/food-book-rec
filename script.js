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
  let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=street+food+"Thailand"+insubject:food&maxResults=40&key=${apiKey}`;

  axios.get(apiUrl).then(recommendTitle);
}

function recommendTitle(response) {
  // console.log(response);
  let randomArray = Math.floor(Math.random() * response.data.items.length);
  let bookRecTitle = response.data.items[randomArray].volumeInfo.title;
  let bookRecImage =
    response.data.items[randomArray].volumeInfo.imageLinks.thumbnail;

  if (!bookRecImage) {
    delete bookRecImage;
  }

  let bookTitleDiv = document.querySelector(".bookTitle");
  let bookCoverDiv = document.getElementById("book-cover");

  // Manipulate DOM element
  bookTitleDiv.textContent = `${bookRecTitle}`;
  bookCoverDiv.src = `${bookRecImage}`;
}

let myMood = document.querySelector(".mood");
myMood.addEventListener("click", clickMood);
