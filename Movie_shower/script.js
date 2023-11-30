const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const IMGAPATH ="https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query";

const form = document.getElementById("form");
const serach = document.getElementById("search");
const content = document.getElementById("content");

getMovies(APIURL);

async function getMovies(url){
    let res = await fetch(url);
    let data = await res.json();  // Await the result of res.json()
    console.log(data);
    showMovies(data.results);
}

function showMovies(movies){ 
    content.innerHTML ="";

    movies.forEach(movie => {
        const { poster_path, title, vote_average, overview} = movie;

        const movieEl =document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
            <img src="${IMGAPATH + poster_path}" alt="${title}" />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getclassByReate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>overView:</h3>
                ${overview}
            </div>`;
        content.appendChild(movieEl);
    });
}

function getclassByReate(vote){
    if(vote > 8){
        return "green";
    } else if(vote >= 5){
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const searchTerm = serach.value;
    getMovies(SEARCHAPI + searchTerm);
    serach.value = "";
});