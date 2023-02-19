import './MovieList.css'
function MovieList(props){
    return(
        <div className='movie-container'>
            {props.movies.map((movie, index)=><div className='movie-box' key={movie.imdbID}>
                 <img className='poster' src={movie.Poster} />
                </div>)}
        </div>
    )
}
export default MovieList