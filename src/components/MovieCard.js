import Typography from '@mui/material/Typography';
import { Card, CardMedia, CardContent, CardActions, Button, Stack, Chip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Carousel from 'react-material-ui-carousel';

const formatRuntime = (runtimeMins) => {
  const hours = Math.floor(runtimeMins / 60)
  const mins = runtimeMins % 60

  if (hours > 0) {
    return `${hours}h ${mins}m`
  } else {
    return `${mins}m`
  }
}

export default function MovieCard({movieData}) {
  return (
    <Card sx={{ maxWidth: 800, backgroundColor: '#F3DFA2' }}>
      <Grid container spacing={2}>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <CardMedia
              component="img"
              alt="movie cover"
              image={movieData.coverImage}
            />
        </Grid>
        <Grid xs={8}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movieData.title}, {movieData.year}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {formatRuntime(movieData.runtime)}
            </Typography>
            <Stack direction="row" spacing={1}>
              {movieData.genres.map((el, index) => {
                return (
                  <Chip label={el} size="small" variant="outlined"/>
                )
              })}
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {movieData.description}
            </Typography>
            <Carousel>
              {movieData.images.map((el, index) => {
                return (
                  <>
                    <img src={el} height="150" alt="movie backdrop"/>
                  </>
                )
              })}
            </Carousel>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}