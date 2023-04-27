import { useParams } from "react-router-dom"

const MovieList = () => {
    console.log(useParams())
    const {listTitle} = useParams()
    return (
        <>
            <p>Hello</p>
            <h1>{listTitle}</h1>
        </>
    )
}

export default MovieList