const api = "http://localhost:3000/quotes";

function getdata() {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let body = document.querySelector('body');
            data.forEach((quote) => {
                createQuote(quote, body);
            });
        })
        .catch(error => console.error('Error fetching quotes:', error));
}

function createQuote(quote, parent) {

    let quoteDiv = document.createElement('div');
    quoteDiv.classList.add('quoteDiv');
    quoteDiv.setAttribute('data-id', quote.id);

    let quoteText = document.createElement('p');
    quoteText.textContent = quote.quote;

    let author = document.createElement('h3');
    author.textContent = quote.author;

    let edit = document.createElement('button');
    edit.textContent = "edit";
    edit.addEventListener("click", () => editQuote(quote.id, quoteText));

    let del = document.createElement('button');
    del.textContent = "delete";
    del.addEventListener("click", () => deleteQuote(quote.id, quoteDiv));

    quoteDiv.appendChild(quoteText);
    quoteDiv.appendChild(author);
    quoteDiv.appendChild(edit);
    quoteDiv.appendChild(del);
    parent.appendChild(quoteDiv);
}

async function editQuote(quoteId, quoteText) {
    let newQuote = prompt("Edit the quote:", quoteText.textContent);
    if (newQuote && newQuote.trim() !== "") {
        try {
            const response = await fetch(`${api}/${quoteId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    quote: newQuote.trim()
                })
            });

            if (response.ok) {
                quoteText.textContent = newQuote.trim();
                alert('Quote updated successfully!');
            } else {
                alert('Failed to update quote');
            }
        } catch (error) {
            alert('Error updating quote');
        }
    }
}

async function deleteQuote(quoteId, quoteDiv) {
    let confirmDelete = confirm("Are you sure you want to delete this quote?");
    if (confirmDelete) {
        try {
            const response = await fetch(`${api}/${quoteId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                quoteDiv.remove();
                alert('Quote deleted successfully!');
            } else {
                alert('Failed to delete quote');
            }
        } catch (error) {
            alert('Error deleting quote');
        }
    }
}
getdata();
