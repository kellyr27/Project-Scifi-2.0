import MovieCard from "./MovieCard"
import Stack from '@mui/material/Stack'
import { Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { Box } from '@mui/material';
import TvCard from "./TvCard";
import BookCard from "./BookCard";
import { textToURL } from "../functions/database";
import { lists as listsDatabase } from "../databases/lists";
import React, { useEffect } from "react";
import DocHead from "./DocHead";


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

const ListDisplay = (props) => {
    const {listTitle} = useParams()
    const list = matchListURLToId(listsDatabase, listTitle)


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    },[list])

    return (
        <>
            <DocHead title={list.name} description={list.description}/>
            <Box>
                <Typography variant="h2" align="center" sx={{mt: 8, mb: 3, letterSpacing: 2, fontWeight: 'medium'}}>{list.name}</Typography>
                <Typography variant="subtitle1" align="center" sx={{mb: 7, fontStyle: 'italic',letterSpacing: 0.5}}>{list.description}</Typography>
                <Stack spacing={2} display="flex" alignItems="center" sx={{pb: 30}}>
                    <ListCards listType={list.type} list={list.list}/>
                </Stack>
            </Box>
      </>
    )
}

export default ListDisplay