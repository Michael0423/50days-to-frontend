const jokeBtn = document.getElementById('btn');
jokeBtn.addEventListener('click', function() {
    generateJoke();
});

generateJoke();

async function getJoke() {
    const joke = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    }).then(res => res.json().joke);

    return joke;
}

function generateJoke() {
    const jokeDiv = document.getElementById('joke');

    new Promise(getJoke())
        .then(joke => {
            jokeDiv.innerHTML = joke;
        })
        .catch(err => {
            console.log(err);
        });
}