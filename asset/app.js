import { movies } from '../data.js';
const mvBtn = document.querySelector('.mainIcon');
function getMovies(){
        console.log({movies});
    
}
function getMoviesTrending(){
   const trends= movies
   .filter((movie) => movie.isTrending === true);
    console.log(trends);
}
mvBtn.addEventListener('click', function(){
    getMovies();
    getMoviesTrending();
});
