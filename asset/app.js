import { movies } from '../data.js';
const mvBtn = document.querySelector('.mainIcon');
const trendsContainer = document.getElementById('trends');
const recoomendsContainer = document.getElementById('recommends');
const bkmrkBtn = document.querySelector('.bookmarkWrap');

function createElem(){


}


function getMovies(){
        console.log({movies});
    
}
function getMoviesTrending(){
   const trends= movies
   .filter((movie) => movie.isTrending === true);
   return trends;
}
function getMoviesNotTrending(){
    const trends= movies
    .filter((movie) => movie.isTrending === false);
    return trends;
 }

function notTrending(trendArray) {
console.log(trendArray);
    trendArray.forEach(movie => {   
        // #region
        // Create a new trend element
        const divRecom = document.createElement('div');
        divRecom.className = "recomd";
        const divTrend = document.createElement('div');
        divTrend.className = "trendrem";
        divTrend.style.backgroundImage = `url("/asset/${movie.thumbnail.regular.large}")`;
        // url("./images/Victors\ Passport.JPG") no-repeat center center/cover;
        // Create a new bookmark element
        const divBookmark = document.createElement('div');
        divBookmark.className = "bookmarkWrap";
        // Create a new bookmark icon
        const iconBookmark = document.createElement('i');
        iconBookmark.classList.add('fa-solid', 'fa-bookmark', 'bookmrkVid');

        // Create a new description container
        const divdescription = document.createElement('div');
        divdescription.className = "reMoviedescWrap";
        // Create a new details container
        const divdetails = document.createElement('div');
        divdetails.className = "detailswrap";

        // Create a new details container
        const spanYear = document.createElement('span');
        spanYear.className = "detailspan";
        spanYear.innerText = `${movie.year}`;
         
        const iconFilm = document.createElement('img');
        const spanCtg = document.createElement('span');
        spanCtg.className=  'detailspan';
        if (`${movie.category}` === "Movie") {
            
            iconFilm.src = "/asset/icon-category-movie.svg"; 
            spanCtg.innerText = `${movie.category}`;
        } else if(`${movie.category}` === "TV Series") {
            
            iconFilm.src = "/asset/icon-category-tv.svg"; 
            spanCtg.innerText = `${movie.category}`;
        }
       
        const spanPg = document.createElement('span');
        spanPg.className = "detailspan";
        spanPg.innerText = `${movie.rating}`;

        const movietitle = document.createElement('h3');
        movietitle.innerText = `${movie.title}`;
//#endregion
        //Append elements to containers
        recoomendsContainer.appendChild(divRecom);
        divRecom.appendChild(divTrend);
        divRecom.appendChild(divdescription);
        divTrend.appendChild(divBookmark);
        divBookmark.appendChild(iconBookmark);
        divdescription.appendChild(divdetails);
        divdetails.appendChild(spanYear);
        divdetails.appendChild(iconFilm);
        divdetails.appendChild(spanCtg);
        divdetails.appendChild(spanPg);
        divdetails.appendChild(movietitle); 
        // console.log(movie.thumbnail.regular.large);
     });
}


window.addEventListener('load',function(){
    
   getMoviesTrending().forEach(movie => {   
        // Create a new trend element
        const divTrend = document.createElement('div');
        divTrend.className = "trend";
        divTrend.style.backgroundImage = `url("/asset/${movie.thumbnail.regular.large}")`;
        // url("./images/Victors\ Passport.JPG") no-repeat center center/cover;
        // Create a new bookmark element
        const divBookmark = document.createElement('div');
        divBookmark.className = "bookmarkWrap";
        // Create a new bookmark icon
        const iconBookmark = document.createElement('i');
        iconBookmark.classList.add('fa-solid', 'fa-bookmark', 'bookmrkVid');

        // Create a new description container
        const divdescription = document.createElement('div');
        divdescription.className = "moviedescWrap";
        // Create a new details container
        const divdetails = document.createElement('div');
        divdetails.className = "detailswrap";

        // Create a new details container
        const spanYear = document.createElement('span');
        spanYear.className = "detailspan";
        spanYear.innerText = `${movie.year}`;

        const iconFilm = document.createElement('img');
        const spanCtg = document.createElement('span');
        spanCtg.className=  'detailspan';
        if (`${movie.category}` === "Movie") {
            
            iconFilm.src = "/asset/icon-category-movie.svg"; 
            spanCtg.innerText = `${movie.category}`;
        } else if(`${movie.category}` === "TV Series") {
            
            iconFilm.src = "/asset/icon-category-tv.svg"; 
            spanCtg.innerText = `${movie.category}`;
        }
        const spanPg = document.createElement('span');
        spanPg.className = "detailspan";
        spanPg.innerText = `${movie.rating}`;

        const movietitle = document.createElement('h3');
        movietitle.innerText = `${movie.title}`;

        //Append elements to containers
        trendsContainer.appendChild(divTrend);
        divTrend.appendChild(divBookmark);
        divTrend.appendChild(divdescription);
        divBookmark.appendChild(iconBookmark);
        divdescription.appendChild(divdetails);
        divdetails.appendChild(spanYear);
        divdetails.appendChild(iconFilm);
        divdetails.appendChild(spanCtg);
        divdetails.appendChild(spanPg);
        divdetails.appendChild(movietitle); 
        // console.log(movie.thumbnail.regular.large);
     });
    notTrending(getMoviesNotTrending());
});

mvBtn.addEventListener('click', function(){
    //    getMovies();
    getMoviesNotTrending();
});