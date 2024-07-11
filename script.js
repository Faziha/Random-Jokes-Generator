// Array of jokes
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "How do you organize a space party? You planet.",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why don't some couples go to the gym? Because some relationships don't work out."
];

// Function to display a random joke
function displayRandomJoke() {
    const jokeContainer = document.getElementById('jokeContainer');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeContainer.innerHTML = jokes[randomIndex];
}

// Add event listener to the button
document.getElementById('jokeButton').addEventListener('click', displayRandomJoke);

// Display a joke when the page loads
displayRandomJoke();
