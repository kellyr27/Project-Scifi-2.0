import Typography from '@mui/material/Typography';
import { Card, CardMedia, CardContent} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Carousel from 'react-material-ui-carousel';
import { tvShows } from '../databases/tvShows';
import '../App.css';
import { CoverImageMedia } from '../functions/database';

function seasonPlurality(numOfSeasons) {
  if (numOfSeasons === 1) {
    return 'season'
  }
  else {
    return 'seasons'
  }
}

export default function TvCard(props) {
  const tvShowId = props.tvId
  const tvShow = tvShows[tvShowId]

  return (
    <Card sx={{ maxWidth: 1000, backgroundColor: '#F3DFA2' }}>
      <Grid container spacing={2} sx={{pl: 2.5, pr: 2.5}}>
        <CoverImageMedia coverImages={tvShow.coverImages} ratio={4} altText="TV show covers" />
        <Grid xs sx={{pl: 2.5, pr: 2.5}}>
          <CardContent>
            <Typography variant="h4" component="div" align="center" sx={{mt: 1, mb: 1}}>
              {tvShow.title}
            </Typography>
            <Typography variant="subtitle1" component="div" align="center" sx={{mb: 0}}>
              {`${tvShow.numOfSeasons} ${seasonPlurality(tvShow.numOfSeasons)} · ${tvShow.releaseYears}`}
            </Typography>
            <Typography variant="subtitle2" component="div" align="center" sx={{mb: 2}}>
              {tvShow.genres.join(' · ')}
            </Typography>
            <Typography variant="body1" sx={{mb: 3}}>
              {tvShow.description}
            </Typography>
            <Carousel animation="fade">
              {tvShow.otherImages.map((el, index) => {
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