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
  authorP.textContent = `— ${authorText}`;

  const quoteDiv = document.createElement("div");
  quoteDiv.classList.add("quote");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.style.marginTop = "10px";
  deleteBtn.style.padding = "5px 10px";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", () => {
    quoteDiv.remove();

    citations = citations.filter(
      (c) => c.text !== quoteText || c.author !== authorText
    );

    localStorage.setItem("citations", JSON.stringify(citations));

    quoteCount = citations.length;
    titleCount.innerText = `${quoteCount} citation(s)`;
  });

  quoteDiv.appendChild(quoteP);
  quoteDiv.appendChild(authorP);
  quoteDiv.appendChild(deleteBtn);

  quoteList.appendChild(quoteDiv);

  citations.push({ text: quoteText, author: authorText });
  localStorage.setItem("citations", JSON.stringify(citations));

  quoteCount = citations.length;
  titleCount.innerText = `${quoteCount} citation(s)`;
}

window.addEventListener("DOMContentLoaded", () => {
  const storedQuotes = localStorage.getItem("citations");
  if (storedQuotes) {
    citations = JSON.parse(storedQuotes);
    citations.forEach((c) => addQuote(c.text, c.author));
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const quoteText = textInput.value.trim();
  const authorTextValue = authorInput.value.trim();

  if (quoteText && authorTextValue) {
    addQuote(quoteText, authorTextValue);
    textInput.value = "";
    authorInput.value = "";
  }
});
