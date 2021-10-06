const postsContainer = document.querySelector('#posts-container')

const API_KEY= 'api_key=805744f392c1c7a526ddfc2a9b1b7787'; //chave com complemento
const api_key = '805744f392c1c7a526ddfc2a9b1b7787';        //chave sem complemento usando em detalhes.js
const BASE_URL='https://api.themoviedb.org/3';
const API_URL= BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_url = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const movie_detail = 'https://api.themoviedb.org/3/movie';
const IMG_Orig = 'https://image.tmdb.org/t/p/original';


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');




getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
        

    })
}

function showMovies(data){
   main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        
        <img onclick="location.href = '/${id}'" src=" ${IMG_url+poster_path}" alt="${title}">

            <div class="movie-info" >
                <h3> ${title}</h3>
                <span >${vote_average}</span>
            </div>                 
            
        `

        main.appendChild(movieEl);

    })
    }

    

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const searchTerm = search.value;

        if(searchTerm) {
            getMovies(searchURL+'&query='+searchTerm)                   
        } else {
            getMovies( API_URL);
            
        }

    })




//comentário na tela 

const getPosts = async () => {
    const response = await fetch(`http://localhost:9001/id/comentario`)
    return response.json()
    
} 

const addPostsIntoDOM = async ()=> {
    const posts = await getPosts()
    const postsTemplate = posts.map(({ nome, descricao, create_at}) =>
     `<div class="post">
         
         <div class="post-info">
             <h4 class="cor_coment">Nome: ${nome}</h4> 
             <h4 class="cor_coment">Comentário: ${descricao}</h4> 
             <h6 class="cor_coment">Data: ${create_at}</h6> <br>
         </div>
    </div>
     `).join('')

    postsContainer.innerHTML += postsTemplate
}

addPostsIntoDOM()
   