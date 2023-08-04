import MovieCard from "./MovieCard"
import Stack from '@mui/material/Stack'
import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"
import { Box } from '@mui/material';
import TvCard from "./TvCard";
import BookCard from "./BookCard";

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

const ListCards = ({listType, list}) => {
    if (listType === 'movies') {
        return (
            <>
                {list.map((el, index) => {
                    return (
                        <MovieCard key={index} movieId={el}/>
                    )
                })}
            </>
        )
    } else if (listType === 'tv') {
        return (
            <>
                {list.map((el, index) => {
                    return (
                        <TvCard key={index} tvId={el}/>
                    )
                })}
            </>
        )
    } else if (listType === 'books') {
        return (
            <>
                {list.map((el, index) => {
                    return (
                        <BookCard key={index} bookId={el}/>
                    )
                })}
            </>
        )
    }
}

const ListDisplay = () => {

    const location = useLocation()
    const list = location.state
    

    return (
        <Box >
            <Typography variant="h2" align="center" sx={{mt: 8, mb: 3}}>{list.name}</Typography>
            <Typography variant="subtitle1" align="center" sx={{mb: 7}}>{list.description}</Typography>
            <Stack spacing={2} display="flex" alignItems="center">
                {/* <MovieCard movieId={list.list[0]}/>
                <MovieCard movieId={list.list[1]}/>
                <MovieCard movieId={list.list[0]}/> */}
                <ListCards listType={list.type} list={list.list}/>
            </Stack>
        </Box>
    )
}

export default ListDisplay