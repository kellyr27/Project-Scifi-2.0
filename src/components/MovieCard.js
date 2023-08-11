import Typography from '@mui/material/Typography';
import { Card, CardMedia, CardContent, CardActions, Button, Stack, Chip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Carousel from 'react-material-ui-carousel';
import {movies as movieDatabase } from '../databases/movies';
import {Box} from '@mui/system'
import '../App.css';
import { CoverImageMedia } from '../functions/database';

const formatRuntime = (runtimeMins) => {
  const hours = Math.floor(runtimeMins / 60)
  const mins = runtimeMins % 60

  if (hours > 0) {
    return `${hours}h ${mins}m`
  } else {
    return `${mins}m`
  }
}

export default function MovieCard(props) {
  const movieId = props.movieId
  const movie = movieDatabase[movieId]

  return (
    <Card sx={{ maxWidth: 1000, backgroundColor: '#F3DFA2' }}>
      <Grid container spacing={2} sx={{pl: 2.5, pr: 2.5}}>
        <CoverImageMedia coverImages={movie.coverImages} ratio={4}/>
        <Grid xs sx={{pl: 2.5, pr: 2.5}}>
          <CardContent>
            <Typography variant="h4" component="div" align="center" sx={{mt: 1, mb: 1}}>
              {movie.titles.join(' · ')}
            </Typography>
            <Typography variant="subtitle1" component="div" align="center" sx={{mb: 0}}>
              {movie.runtime ? `${movie.releaseYears}, ${formatRuntime(movie.runtime)}` : `${movie.releaseYears}`}
            </Typography>
            <Typography variant="subtitle2" component="div" align="center" sx={{mb: 2}}>
              {movie.genres.join(' · ')}
            </Typography>
            <Typography variant="body1" sx={{mb: 3}}>
              {movie.description}
            </Typography>
            <Carousel animation="fade">
              {movie.otherImages.map((el, index) => {
                return (
                  <CardMedia
                    key={index}
                    component="img"
                    alt="movie scenes"
                    image={el}
                  />
                )
              })}
            </Carousel>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}