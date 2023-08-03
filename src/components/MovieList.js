import { useParams } from "react-router-dom"
import MovieCard from "./MovieCard"
import Stack from '@mui/material/Stack'
import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

const test_movie = {
    title: 'Planet of the Apes',
    year: 1969,
    imdbRating: 8.0,
    runtime: 112,
    coverImage: "/img/fqf2LjNRkRQaPfXRDxt1yS2i7z.jpg",
    genres: ["Science Fiction","Adventure","Drama", "Action"],
    description: "Astronaut Taylor crash lands on a distant planet ruled by apes who use a primitive race of humans for experimentation and sport. Soon Taylor finds himself among the hunted, his life in the hands of a benevolent chimpanzee scientist.",
    images: ["/img/dQS3L3USI7Zhcq41abzMZF8dXCm.jpg", "/img/pNlDNGmEPx9zt00zoPhP2VUuITv.jpg", "/img/zRo7v3syLG19ZaLxZRFRLN1L9iX.jpg"]
}


const MovieList = (props) => {
    const {listTitle} = useParams()

    const location = useLocation()
    console.log(location.state)

    return (
        <>
            <Typography variant="h2" gutterBottom>{listTitle}</Typography>
            <Stack spacing={2} display="flex" alignItems="center">
                <MovieCard movieData={test_movie}/>
                <MovieCard movieData={test_movie}/>
                <MovieCard movieData={test_movie}/>
                <MovieCard movieData={test_movie}/>
                <MovieCard movieData={test_movie}/>
            </Stack>
        </>
    )
}

export default MovieList