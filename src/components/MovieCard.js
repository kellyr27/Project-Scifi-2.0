import Typography from '@mui/material/Typography';
import { Card, CardMedia, CardContent, CardActions, Button, Stack, Chip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function MovieCard({movieData}) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <CardMedia
              component="img"
              alt="movie cover"
              image={movieData.coverImage}
            />
        </Grid>
        <Grid xs={8}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movieData.title}
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
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}