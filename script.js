const textInput = document.getElementById("quoteText");
const authorInput = document.getElementById("authorText");
const quoteList = document.getElementById("quote-list");
const titleCount = document.getElementById("count");
const form = document.getElementById("form");

let citations = [];
let quoteCount = 0;

function addQuote(quoteText, authorText) {
  const quoteP = document.createElement("p");
  const authorP = document.createElement("p");

  quoteP.classList.add("text");
  authorP.classList.add("author");

  quoteP.textContent = `“${quoteText}”`;
  authorP.textContent = authorText;

  const quoteDiv = document.createElement("div");
  quoteDiv.classList.add("quote");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.style.marginTop = "10px";
  deleteBtn.style.padding = "5px 10px";
  deleteBtn.style.cursor = "pointer";
}


