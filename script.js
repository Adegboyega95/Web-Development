const diceButton = document.querySelector('#dice');
const quotes = document.querySelector('#quote');
const id = document.querySelector('span');

diceButton.addEventListener('click', async () => {
    fetchRandomQuote()
})

function fetchRandomQuote() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(quote => {
            // Display the fetched quote on the webpage
            id.innerText = quote.slip.id
            quotes.innerText = quote.slip.advice
        })
        .catch(error => console.error('Error fetching quote:', error));
}

fetchRandomQuote()