import Typography from '@mui/material/Typography';
import { Card, CardMedia, CardContent, CardActions, Button, Stack, Chip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Carousel from 'react-material-ui-carousel';
import { movies } from '../databases/movies';
import {Box} from '@mui/system'
import '../App.css';

const formatRuntime = (runtimeMins) => {
  const hours = Math.floor(runtimeMins / 60)
  const mins = runtimeMins % 60

  if (hours > 0) {
    return `${hours}h ${mins}m`
  } else {
    return `${mins}m`
  }
}

// const getCoverImagesURL = (movieId) => {
//   return `/img/movies/${movieId}/cover`
//   "/img/dQS3L3USI7Zhcq41abzMZF8dXCm.jpg"
// }

function CoverImageMedia({coverImages}) {
  if (coverImages.length > 1) {
    return (
      <Carousel animation="fade">
        {coverImages.map((el, index) => {
          return (
            <CardMedia
              key={index}
              component="img"
              alt="movie cover"
              image={el}
            />
          )
        })}
      </Carousel>
    )
  } else {
    return (
      <CardMedia
        component="img"
        alt="movie cover"
        image={coverImages[0]}
      />
    )
  }
}


export default function MovieCard(props) {
  const movieId = props.movieId
  const movie = movies[movieId]

  return (
    <Card sx={{ maxWidth: 800, backgroundColor: '#F3DFA2' }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <div className="ProductDetails">
            <CoverImageMedia coverImages={movie.coverImages} />
          </div>
        </Grid>
        <Grid xs={8}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.titles.join(' · ')}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {movie.runtime ? `${movie.releaseYears}, ${formatRuntime(movie.runtime)}` : `${movie.releaseYears}`}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {movie.genres.join(' · ')}
            </Typography>
            <Typography variant="body2" >
              {movie.description}
            </Typography>
            {/* <Carousel animation="fade">
              {movie.otherImages.map((el, index) => {
                return (
                    <img key={index} src={el} height="150" alt="movie backdrop" />
                )
              })}
            </Carousel> */}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}