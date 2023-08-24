import Typography from '@mui/material/Typography';
import { Card, CardMedia, CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Carousel from 'react-material-ui-carousel';
import {movies as movieDatabase } from '../databases/movies';
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
    <Card sx={{ maxWidth: 1000, backgroundColor: 'rgba(243, 233, 162, 0.7)', borderRadius: '1%' }}>
      <Grid container spacing={2} sx={{pl: 2.5, pr: 2.5}}>
        <CoverImageMedia coverImages={movie.coverImages} ratio={4} altText="Movie covers" />
        <Grid xs sx={{pl: 2.5, pr: 2.5}}>
          <CardContent>
            <Typography variant="h4" component="div" align="center" sx={{mt: 1, mb: 1, fontWeight: 'medium', letterSpacing: 2}}>
              {movie.titles.join(' · ')}
            </Typography>
            <Typography variant="subtitle1" component="div" align="center" sx={{mb: 1}}>
              {movie.runtime ? `${movie.releaseYears}, ${formatRuntime(movie.runtime)}` : `${movie.releaseYears}`}
            </Typography>
            <Typography variant="subtitle2" component="div" align="center" sx={{mb: 2, fontStyle: 'oblique'}}>
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