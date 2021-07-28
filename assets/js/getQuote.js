var inspitableURL = "https://type.fit/api/quotes";
var quote = $("#quote");
var quotesAuthor = $("#quote-author");
function getQuote() {
  fetch(inspitableURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randomArr = Math.floor(Math.random() * data.length);
      quote.text(`"${data[randomArr].text}"`);
      quotesAuthor.text(`"${data[randomArr].author}"`);
    });
}

getQuote();
