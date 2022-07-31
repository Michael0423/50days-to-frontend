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
    }).then(res => res.json()).then(res => res.joke);

    return joke;
}

function generateJoke() {
    const jokeDiv = document.getElementById('joke');

    Promise.all([getJoke()])
        .then(([joke]) => {
            jokeDiv.innerHTML = joke;
        })
        .catch(err => {
            console.log(err);
        });
}