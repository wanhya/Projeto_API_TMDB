const movie_id = location.pathname;

const movie_recommendations = movie_detail  + `${movie_id}` + '/recommendations?' + API_KEY;



//console.log(movie_id);

//fetching movie details

fetch(`${movie_detail}${movie_id}?` + new URLSearchParams({
  api_key: api_key 
}))
.then(res => res.json())
.then(data => {
    //console.log(data);
    setupMovieInfo(data);
})

const setupMovieInfo = (data) => {

    const movieName = document.querySelector('.movie-name');
    const genres = document.querySelector('.genres');
    const overview = document.querySelector('.overview');
    const title = document.querySelector('title');
    const backdrop = document.querySelector('.movie-detalhe');

    title.innerHTML = movieName.innerHTML = data.title;
    genres.innerHTML = `${data.release_date.split('-')[0]} |`;
    for(let i = 0; i < data.genres.length; i++) {
        genres.innerHTML += data.genres[i].name + formatString(i, data.genres.length);

    }

    if(data.adult == true){
        genres.innerHTML =+ ' | +18';
    } 
    if(data.backdrop_path == null){
        data.backdrop_path = data.poster_path;
    }

    overview.innerHTML = data.overview.substring(0, 300) + '...';

    backdrop.style.backgroundImage = `url(${IMG_Orig}${data.backdrop_path})`;
    

}

const formatString = (currentIndex, maxIndex) => {
    return ( currentIndex == maxIndex -1) ? '' : ', ';
}


fetch(`${movie_detail}${movie_id}/credits?` + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    console.log(data);
    const cast = document.querySelector('.starring');
    for(let i = 0; i < 5; i++){
        cast.innerHTML += data.cast[i].name + formatString(i, 5);
    }

})



getMoviesRecommendation(movie_recommendations);

function getMoviesRecommendation(urlRec) {

    fetch(urlRec).then(res => res.json()).then(data => {
        console.log(data.results);
        showMoviesRec(data.results);
        

    })
}

function showMoviesRec(dataRec){
    van.innerHTML = '';

    dataRec.forEach(movieRec => {
        const {title, poster_path, vote_average, id} = movieRec;
        const rec = document.createElement('div');
        rec.classList.add('movie');

        rec.innerHTML = `
        
        <img onclick="location.href = '/${id}'" src=" ${IMG_url+poster_path}" alt="${title}">

            <div class="movie-info" >
                <h3> ${title}</h3>
                <span >${vote_average}</span>
            </div>                 
            
        `

        van.appendChild(rec);

    })
    }







