import { useParams } from "react-router-dom"
import MovieCard from "./MovieCard"

const test_movie = {
    title: 'Planet of the Apes',
    year: 1969,
    imdbRating: 8.0,
    coverImage: "/img/fqf2LjNRkRQaPfXRDxt1yS2i7z.jpg",
    genres: ["Science Fiction","Adventure","Drama", "Action"],
    description: "Astronaut Taylor crash lands on a distant planet ruled by apes who use a primitive race of humans for experimentation and sport. Soon Taylor finds himself among the hunted, his life in the hands of a benevolent chimpanzee scientist."
}


const MovieList = () => {
    const {listTitle} = useParams()
    return (
        <>
            <p>MovieList</p>
            <MovieCard movieData={test_movie}/>
            <h1>{listTitle}</h1>
        </>
    )
}

export default MovieList