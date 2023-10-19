const recommendedList = document.querySelector("#recommended");

const recommendedMovies = movies.filter((movie) => movie.section==="Recommended");
recommendedMovies.map((movie) => populateRecommendedMovies(movie));


function populateRecommendedMovies(movie){
    let movieList = document.createElement("li");
    movieList.setAttribute("class", "movie");
    movieList.setAttribute("data-movie-title", movie.name);
    let divImage = document.createElement("div");
    divImage.setAttribute("class", "imagen");
    divImage.innerHTML = "<img src=\""+movie.image.card+"\" alt=\"\" class=\"pelicula\">";
    let movieText = document.createElement("div");
    movieText.setAttribute("class", "texto_abajo");
    let movieStars = document.createElement("div");
    movieStars.setAttribute("class", "stars");
    let ratingText = document.createElement("p");
    ratingText.innerHTML = "Ratings:";
    movieStars.appendChild(ratingText);
    
    let i = 1;
    while(i<6){

        if(i<movie.rating){
            let filledStar = document.createElement("img");
    filledStar.setAttribute("src", "./Images/yellow_fill_star.png");
            movieStars.appendChild(filledStar);
        } else {
            let emptyStar = document.createElement("img");
    emptyStar.setAttribute("src", "./Images/yellow_outline_star.png");
            movieStars.appendChild(emptyStar);
        }
        i++;
    }
    let movieBookmark = document.createElement("div");
    movieBookmark.setAttribute("class", "bookmark");
    movieBookmark.innerHTML = "<img src=\"./Images/guardado.png\" alt=\"\">";
    movieList.appendChild(divImage);
    movieText.appendChild(movieStars);
    movieText.appendChild(movieBookmark);
    movieList.appendChild(movieText);
    recommendedList.appendChild(movieList);
}   

const trendingList = document.querySelector("#trending");

const trendingMovies = movies.filter((movie) => movie.section==="Trend");
trendingMovies.map((movie) => populateTrendingMovies(movie));

function populateTrendingMovies(movie){
    let movieList = document.createElement("li");
    movieList.setAttribute("class", "movie");
    movieList.setAttribute("data-movie-title", movie.name);
    let divImage = document.createElement("div");
    divImage.setAttribute("class", "imagen");
    divImage.innerHTML = "<img src=\""+movie.image.card+"\" alt=\"\" class=\"pelicula\">";
    let movieText = document.createElement("div");
    movieText.setAttribute("class", "texto_abajo");
    let movieStars = document.createElement("div");
    movieStars.setAttribute("class", "stars");
    let ratingText = document.createElement("p");
    ratingText.innerHTML = "Ratings:";
    movieStars.appendChild(ratingText);

    let i = 1;
    while(i<6){

        if(i<movie.rating){
            let filledStar = document.createElement("img");
    filledStar.setAttribute("src", "./Images/yellow_fill_star.png");
            movieStars.appendChild(filledStar);
        } else {
            let emptyStar = document.createElement("img");
    emptyStar.setAttribute("src", "./Images/yellow_outline_star.png");
            movieStars.appendChild(emptyStar);
        }
        i++;
    }
    let movieBookmark = document.createElement("div");
    movieBookmark.setAttribute("class", "bookmark");
    movieBookmark.innerHTML = "<img src=\"./Images/guardado.png\" alt=\"\">";
    movieList.appendChild(divImage);
    movieText.appendChild(movieStars);
    movieText.appendChild(movieBookmark);
    movieList.appendChild(movieText);
    trendingList.appendChild(movieList);
}

let movieBanner = movies[(Math.floor(Math.random() * movies.length))];

let banner = document.querySelector(".banner");

populateBanner(movieBanner);

function populateBanner(movie){
    let bannerContainer = document.createElement("div");
    bannerContainer.setAttribute("class", "banner_contenido");

    let mainTitle = document.createElement("div");
    mainTitle.setAttribute("class", "titulo_principal");
    let title = document.createElement("h1");
    title.innerHTML = movie.name;
    let ratings = document.createElement("h3");
    ratings.innerHTML = "<span>("+movie.rating+" Ratings)</span>";
    mainTitle.appendChild(title);
    mainTitle.appendChild(ratings);
    bannerContainer.appendChild(mainTitle);

    let description = document.createElement("div");
    description.setAttribute("class", "description");
    description.innerHTML = "<p>"+movie.description+"</p>";
    bannerContainer.appendChild(description);

    let buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");
    buttons.innerHTML = "<button class=\"buttons_banner\"><span><i class=\"fa-solid fa-play\"></i></span> Play </button><button class=\"buttons_banner\"> Save <span><i class=\"fa-regular fa-bookmark\"></i></span></button>";
    let age = document.createElement("h3");
    age.setAttribute("class", "edad");
    age.innerHTML = movie.clasification;
    buttons.appendChild(age);
    bannerContainer.appendChild(buttons);

    banner.innerHTML = "";
    banner.appendChild(bannerContainer);
    banner.style.backgroundImage = "url('"+movie.image.banner+"')";
};

let cardMovies = document.querySelectorAll(".movie");

cardMovies.forEach((cardMovie) => cardMovie.onclick = function(){ setBanner(cardMovie)});

function setBanner(cardMovie){

const selectedMovie = movies.filter((movie) => { 
    return movie.name === cardMovie.dataset.movieTitle;
});

populateBanner(selectedMovie[0]);
}