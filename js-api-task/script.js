const api = "https://dummyjson.com/quotes/";

function getdata() {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let body = document.querySelector('body');

            data.quotes.forEach((quote) => {

                let quoteDiv = document.createElement('div');
                quoteDiv.classList.add('quoteDiv');

                let quoteText = document.createElement('p');
                quoteText.textContent = quote.quote;

                let author = document.createElement('h3');
                author.textContent = quote.author;

                let edit = document.createElement('button');
                edit.textContent = "edit";
                edit.addEventListener("click", () => {
                    let newQuote = prompt("Edit the quote:", quoteText.textContent);
                    if (newQuote && newQuote.trim() !== "") {
                        quoteText.textContent = newQuote;
                    }
                });

                let del = document.createElement('button');
                del.textContent = "delete";
                del.addEventListener("click", () => {
                    let confirmDelete = confirm("Are you sure you want to delete this quote?");
                    if (confirmDelete) {
                        quoteDiv.remove();
                    }
                });

                quoteDiv.appendChild(quoteText);
                quoteDiv.appendChild(author);
                quoteDiv.appendChild(edit);
                quoteDiv.appendChild(del);
                body.appendChild(quoteDiv);
            });
        });
}
getdata();