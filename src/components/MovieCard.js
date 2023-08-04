import Typography from '@mui/material/Typography';
import { Card, CardMedia, CardContent, CardActions, Button, Stack, Chip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Carousel from 'react-material-ui-carousel';
import { movies } from '../databases/movies';
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

// function CoverImageMedia({coverImages}) {
//   if (coverImages.length > 1) {
//     return (
//       <Carousel animation="fade">
//         {coverImages.map((el, index) => {
//           return (
//             <CardMedia
//               key={index}
//               component="img"
//               alt="movie cover"
//               image={el}
//             />
//           )
//         })}
//       </Carousel>
//     )
//   } else {
//     return (
//       <CardMedia
//         component="img"
//         alt="movie cover"
//         image={coverImages[0]}
//       />
//     )
//   }
// }


export default function MovieCard(props) {
  const movieId = props.movieId
  const movie = movies[movieId]

  return (
    <Card sx={{ maxWidth: 1000, backgroundColor: '#F3DFA2' }}>
      <Grid container spacing={2} sx={{pl: 2.5, pr: 2.5}}>
        <Grid xs={5} sx={{display: {xs: 'none', sm: 'block'}}}>
          <CoverImageMedia coverImages={movie.coverImages}/>
        </Grid>
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