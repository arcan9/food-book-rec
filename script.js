// Create an event listener for when a user clicks a certain section
// it makes a call to a function that...

// Takes Google Books API with a certain parameter
// For example, "life+happiness," and axios fetches this data.
// Then it calls a...

// Function that takes that result and pulls a random book title
// recommends it to the user
// display book cover, title, author, and summary(?) by DOM manipulation

function recommendTitle(response) {
  // console.log(response);
  let randomArray = Math.floor(Math.random() * response.data.items.length);
  let bookRecTitle = response.data.items[randomArray].volumeInfo.title;
  let bookRecImage =
    response.data.items[randomArray].volumeInfo.imageLinks.thumbnail;

  let bookTitleDiv = document.querySelector(".bookTitle");
  let bookCoverDiv = document.getElementById("book-cover");

  // Manipulate DOM element
  bookTitleDiv.textContent = `${bookRecTitle}`;
  bookCoverDiv.src = `${bookRecImage}`;
}

function clickButtonOne() {
  let apiKey = "AIzaSyAKH5VZTVN3qjnDH0PKgJU6TcPgOX-uNYg"; // hide this key later
  let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=street+food+insubject:food+travel&maxResults=40&key=${apiKey}`;

  axios.get(apiUrl).then(recommendTitle);
}

function clickButtonTwo() {
  let apiKey = "AIzaSyAKH5VZTVN3qjnDH0PKgJU6TcPgOX-uNYg"; // hide this key later
  let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=fast+food+insubject:food&maxResults=40&key=${apiKey}`;

  axios.get(apiUrl).then(recommendTitle);
}

function clickButtonThree() {
  let apiKey = "AIzaSyAKH5VZTVN3qjnDH0PKgJU6TcPgOX-uNYg"; // hide this key later
  let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=holiday+recipe+insubject:food&maxResults=40&key=${apiKey}`;

  axios.get(apiUrl).then(recommendTitle);
}

function clickButtonFour() {
  let apiKey = "AIzaSyAKH5VZTVN3qjnDH0PKgJU6TcPgOX-uNYg"; // hide this key later
  let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=early+history+recipe+insubject:food&maxResults=40&key=${apiKey}`;

  axios.get(apiUrl).then(recommendTitle);
}

let myButtonOne = document.getElementById("button-one");
myButtonOne.addEventListener("click", clickButtonOne);

let myButtonTwo = document.getElementById("button-two");
myButtonTwo.addEventListener("click", clickButtonTwo);

let myButtonThree = document.getElementById("button-three");
myButtonThree.addEventListener("click", clickButtonThree);

let myButtonFour = document.getElementById("button-four");
myButtonFour.addEventListener("click", clickButtonFour);
