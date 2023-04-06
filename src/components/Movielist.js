const movies = (props) => {
    console.log(props);
    return ( 
        <div className="movie_patter">
            <p>Titel: {props.title} </p>
            <p>Jahr: {props.year}</p>
            <p>Director: {props.director}</p>
            <p>Zeit: {props.duration}</p>
            <p>Genre: {props.duration}</p>
            <p>Rate: {props.rate}</p>
        </div>
     );
}
 
export default movies;