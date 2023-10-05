const quote = document.getElementById("quote");
const author = document.getElementById("author");
const bookTitle = document.getElementById("book-title");
const button = document.getElementById("button");
// const URL = "http://localhost:3030";
const URL = "https://marys-lib-quotes.onrender.com";

button.addEventListener("click", async () => {
  try {
    const response = await fetch(`${URL}/api/quotes/random`);
    const data = await response.json();

    quote.innerHTML = data.randomQuote.quote;
    author.innerHTML = data.randomQuote.author;
    bookTitle.innerHTML = data.randomQuote.book;
  } catch (err) {
    alert(err.message);
  }
});
