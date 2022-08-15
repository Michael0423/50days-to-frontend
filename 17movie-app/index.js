const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';


const listDiv = document.getElementById('movie_list');
getMovies().then(movies => {
    if(movies.length > 0){
        showMovies(movies);
    }
});

async function getMovies() {
    const movies = await fetch(API_URL).then(res => res.json()).then(res => res.results);
    return movies;
}
async function searchMovies(keyword){
    const movies = await fetch(SEARCH_API+keyword).then(res => res.json()).then(res => res.results);
    return movies;
}

function createBox() {
    const boxDiv = document.createElement('div');
    boxDiv.classList.add('box');

    const img = document.createElement('img');
    
    const info = document.createElement('div');
    info.classList.add('info');
    const title = document.createElement('div');
    title.classList.add('title');
    const score = document.createElement('div');
    score.classList.add('score');
    info.append(title, score);

    const overview = document.createElement('div');
    overview.classList.add('overview');
    const overviewTitle = document.createElement('h3');
    overviewTitle.innerHTML = "Overview";
    const desc = document.createElement('div');
    desc.classList.add('desc');
    overview.append(overviewTitle, desc);

    boxDiv.append(img, info, overview);
    return boxDiv;
}

function showMovies(movies) {
    for(let i=0;i<movies.length;i++){
        let boxDiv = createBox();
        
        const img = boxDiv.querySelector('img');
        img.src = IMG_PATH+movies[i].poster_path;
        
        const title = boxDiv.querySelector('.title');
        title.innerHTML = movies[i].original_title;

        const scroe = boxDiv.querySelector('.score');
        scroe.innerHTML = movies[i].vote_average;
        switch(true){
            case movies[i].vote_average > 6:
                scroe.classList.add('high');
                break;
            case movies[i].vote_average > 3:
                scroe.classList.add('mid');
                break;
            case movies[i].vote_average >= 0:
                scroe.classList.add('low');
                break;
        }

        const overview = boxDiv.querySelector('.desc');
        overview.innerHTML = movies[i].overview;

        listDiv.append(boxDiv);
    }
}

const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', async function(evt){
    if(evt.keyCode === 13 ){
        listDiv.innerHTML = '';
        const keyword = evt.target.value;
        evt.target.value = '';
        const movies = await searchMovies(keyword);
        if(movies.length > 0){
            showMovies(movies);
        }
    }
})