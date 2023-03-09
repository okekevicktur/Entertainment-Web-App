import { movies } from '../data.js';
const mvBtn = document.querySelector('.mainIcon');
const justTrendy = document.querySelector('#justTrends');
const trendsContainer = document.getElementById('trends');
const recoomendsContainer = document.getElementById('recommends');
const bkmrkBtn = document.querySelector('.bookmarkWrap');
const BtnMovies = document.getElementById('justMovies');
const BtnSeries = document.getElementById('justTvSeries');
const BtnBookmark = document.getElementById('justBookmarks');
const trendWrapDiv = document.querySelector('.trendingWrap');
const otherWrapDiv = document.querySelector('.otherMoviesContainer'); 
const header = document.getElementById('header');
const difMovies=  document.querySelector('.difMovie');
const searchTextbox = document.getElementById("search");
const search = document.getElementById("searchicon");
const mainHeader = document.getElementById("mainHeader");
const recommendTxt =  document.querySelector('.recommendTxt');

searchTextbox.addEventListener('keypress',function(e){

    if(e.key === "Enter") {
        search.click();
    }
});
search.addEventListener('click', function(){
    let newMovie=  searchTextbox.value;
    // console.log(`Found ${getMovies(newMovie).length} Results for ${newMovie}`);
    // return;
    if (newMovie === "") {
        alert("type a movie title to search");
    }else{
            trendWrapDiv.style.display= "block";
            otherWrapDiv.style.display= "none";
            deleteContainer();
            recommendTxt.style.display= "none";
            // console.log(`Found ${getMovies(newMovie).length} Results for ${newMovie}`);
            mainHeader.innerText= `Found ${getMovies(newMovie).length} Result for ${newMovie}`
            let alltrends = document.querySelectorAll('.trend');
            alltrends.forEach(border =>{
                border.remove();
            });
            getMovies(newMovie).forEach(movie => {   
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
    }
});
BtnBookmark.addEventListener('click', function(){
    if (header && header.innerText === "Bookmarked Movies") {
        return;
    }
    else{
        highlight(BtnBookmark);
        trendWrapDiv.style.display= "none";
        otherWrapDiv.style.display= "block";
        header.innerText ="Bookmarked Movies";
 
        deleteContainer();

        const difMovie = document.createElement('div');
        difMovie.className = "difMovie";
        justBookmarks().forEach(movie => {   
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
        otherWrapDiv.appendChild(difMovie);
        difMovie.appendChild(divRecom);
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
});
BtnSeries.addEventListener('click', function(){
    if (header && header.innerText === "TV Series") {
        return;
    }
    else{
        highlight(BtnSeries);
        trendWrapDiv.style.display= "none";
        otherWrapDiv.style.display= "block";
        header.innerText ="TV Series";
 
        deleteContainer();

        const difMovie = document.createElement('div');
        difMovie.className = "difMovie";
        justTVSeries().forEach(movie => {   
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
        otherWrapDiv.appendChild(difMovie);
        difMovie.appendChild(divRecom);
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
});
BtnMovies.addEventListener('click', function(){
   
    if (header && header.innerText === "Movies" && otherWrapDiv.style.display == "block") {
        return;
    }
    else{
        highlight(BtnMovies);
        trendWrapDiv.style.display= "none";
        otherWrapDiv.style.display= "block";
        header.innerText ="Movies";
        
         deleteContainer();

        const difMovie = document.createElement('div');
        difMovie.className = "difMovie";
        justMovies().forEach(movie => {   
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
        otherWrapDiv.appendChild(difMovie);
        difMovie.appendChild(divRecom);
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
    
});

justTrendy.addEventListener('click', function(){
    if (trendWrapDiv.style.display == "block" &&   otherWrapDiv.style.display == "none") {
        return;
    }else{
        recommendTxt.style.display= "block";
        mainHeader.innerText= "Trending";
        highlight(justTrendy);
        trendWrapDiv.style.display= "block";
        otherWrapDiv.style.display= "none";
        let alltrends = document.querySelectorAll('.trend');
        alltrends.forEach(border =>{
            border.remove();
        });
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
    }
  
});

function highlight(divCont){  
    justTrendy.style.color= "rgb(90,105,147)";
    BtnMovies.style.color= "rgb(90,105,147)";
    BtnSeries.style.color= "rgb(90,105,147)";
    BtnBookmark.style.color= "rgb(90,105,147)";
    divCont.style.color= "White";
}

function deleteContainer(){
    let allcontainer = document.querySelectorAll('.recomd');
    allcontainer.forEach(border =>{
        border.remove();
    });
}
function getMovies(input){
    const trends= movies
    .filter((movie) => movie.title === input);
    return trends;
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
function justBookmarks(){
    const trends= movies
    .filter((movie) => movie.isBookmarked === true);
    return trends;
 }
function justMovies(){
    const trends= movies
    .filter((movie) => movie.category === "Movie");
    return trends;
 }

 function justTVSeries(){
    const trends= movies
    .filter((movie) => movie.category === "TV Series");
    return trends;
 }

function notTrending(trendArray) {
// console.log(trendArray);
    trendArray.forEach(movie => {   
        // #region
        // Create a new trend element
        const divRecom = document.createElement('div');
        divRecom.className = "recomd";
        const divTrend = document.createElement('div');
        divTrend.className = "trendrem";
        divTrend.style.backgroundImage = `url("/asset/${movie.thumbnail.regular.large}")`;
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
    highlight(justTrendy);
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


