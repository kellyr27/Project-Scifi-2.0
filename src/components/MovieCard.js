import Typography from '@mui/material/Typography';
import { Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

export default function MovieCard({movieData}) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={movieData.coverImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movieData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movieData.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}