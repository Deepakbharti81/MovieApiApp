let main_box = document.querySelector('.main-box');


async function getMovie(title = '') {

    let movieBox = '';
    let apiUrl;

    if (title == '') {
        apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1`;
    }
    else {
       apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`
    }

    let response = await fetch(apiUrl);
    let finalData = await response.json();

    let { results } = finalData;
    console.log(results);


    results.forEach(ApiData => {
        let { original_title, poster_path, release_date } = ApiData;

        movieBox += `
        <div class="movieBox">

            <div class="imgbox">
                <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/${poster_path}" alt=""/>
            </div>

            <div class="movie-content">
                <h5>${original_title}</h5>
                <p>${release_date}</p>
            </div>

        </div>
`

    });


    main_box.innerHTML = movieBox;

}

getMovie();



let inputEle = document.querySelector('input');

inputEle.addEventListener('keyup', () => {
    getMovie(inputEle.value);
})