const Movie = ({image,title}) =>{
    return(
        <div className='movie_block'>
            <img src={image} alt={title} />
            <h6>{title}</h6>
        </div>
    )
}


export default Movie;