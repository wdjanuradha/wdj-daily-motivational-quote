// Function to fetch a random quote from the local JSON file
function getQuote() {
    fetch('quotes.json') // Load the local JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json(); // Parse the JSON file
        })
        .then(data => {
            // Randomly select a quote from the array
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];

            // Set the quote text and author
            document.getElementById('quote').innerHTML = `"${randomQuote.content}"`;
            document.getElementById('author').innerHTML = `— ${randomQuote.author}`;

            // Trigger the fade-in effect
            fadeInQuote();
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
            document.getElementById('quote').innerHTML = 'An error occurred while fetching the quote. Please try again.';
        });
}

// Adding event listener to the "New Quote" button
document.getElementById('new-quote').addEventListener('click', getQuote);

// Fetch a quote when the page loads for the first time
window.onload = getQuote;

// Function to fade in the quote
function fadeInQuote() {
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');
    quote.classList.remove('fade-in');
    author.classList.remove('fade-in');

    // Force reflow to restart animation
    void quote.offsetWidth;

    // Add fade-in class to trigger animation
    quote.classList.add('fade-in');
    author.classList.add('fade-in');
}
