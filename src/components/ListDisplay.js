import MovieCard from "./MovieCard"
import Stack from '@mui/material/Stack'
import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"
import { Box } from '@mui/material';
import TvCard from "./TvCard";
import BookCard from "./BookCard";

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
            <Stack spacing={2} display="flex" alignItems="center" sx={{pb: 30}}>
                <ListCards listType={list.type} list={list.list}/>
            </Stack>
        </Box>
    )
}

export default ListDisplay