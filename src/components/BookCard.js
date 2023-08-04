import Typography from '@mui/material/Typography';
import { Card, CardMedia, CardContent, CardActions, Button, Stack, Chip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Carousel from 'react-material-ui-carousel';
import { books } from '../databases/books';
import {Box} from '@mui/system'
import '../App.css';
import { CoverImageMedia } from '../functions/database';


export default function BookCard(props) {
  const bookId = props.bookId
  const book = books[bookId]
  console.log('Book is', book)

  return (
    <Card sx={{ maxWidth: 1000, backgroundColor: '#F3DFA2' }}>
      <Grid container spacing={2} sx={{pl: 2.5, pr: 2.5}}>
        <Grid xs={3} sx={{display: {xs: 'none', sm: 'block'}}}>
          <CoverImageMedia coverImages={book.coverImages}/>
        </Grid>
        <Grid xs sx={{pl: 2.5, pr: 2.5}}>
          <CardContent>
            <Typography variant="h4" component="div" align="center" sx={{mt: 1, mb: 1}}>
              {book.titles.join(' · ')}
            </Typography>
            <Typography variant="subtitle1" component="div" align="center" sx={{mb: 2}}>
              {`${book.author} · ${book.releaseYears}`}
            </Typography>
            {/* <Typography variant="subtitle2" component="div" align="center" sx={{mb: 2}}>
              {book.genres.join(' · ')}
            </Typography> */}
            <Typography variant="body1" sx={{mb: 3}}>
              {book.description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}