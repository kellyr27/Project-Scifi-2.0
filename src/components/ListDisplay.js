import MovieCard from "./MovieCard"
import Stack from '@mui/material/Stack'
import { Typography } from "@mui/material"
import { useLocation, useParams } from "react-router-dom"
import { Box } from '@mui/material';
import TvCard from "./TvCard";
import BookCard from "./BookCard";
import { textToURL } from "../functions/database";
import { lists as listsDatabase } from "../databases/lists";

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

const matchListURLToId = (lists, url) => {
  for (const list of lists) {
    if (textToURL(list.name) === url) {
        return list
    }
  }
}

const ListDisplay = () => {
    const {listTitle} = useParams()
    const list = matchListURLToId(listsDatabase, listTitle)

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