import Typography from '@mui/material/Typography';
import { Card, CardContent, } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import books from '../databases/books';
import '../App.css';
import { CoverImageMedia, CoverImageMedia2 } from '../functions/database';

const formatSubtitle = (numOfPages, author, releaseYears) => {
  if (numOfPages) {
    return `${numOfPages} pg · ${author} · ${releaseYears}`
  } else {
    return `${author} · ${releaseYears}`
  }
}

export default function BookCard(props) {
  const bookId = props.bookId
  const book = books[bookId]

  return (
    <Card sx={{ maxWidth: 1000, backgroundColor: '#F3DFA2' , borderRadius: '1%' }}>
      <CoverImageMedia2 coverImages={book.coverImages} altText="Book covers" />
      <Grid container spacing={4} sx={{pl: 2.5, pr: 2.5}}>
        <CoverImageMedia coverImages={book.coverImages} ratio={3} altText="Book covers" />
        <Grid xs sx={{pl: 2.5, pr: 2.5}}>
          <CardContent>
            <Typography variant="h4" component="div" align="center" sx={{mt: 1, mb: 1, fontWeight: 'medium', letterSpacing: 2}}>
              {book.titles.join(' · ')}
            </Typography>
            <Typography variant="subtitle1" component="div" align="center" sx={{mb: 1}}>
              {formatSubtitle(book.pages, book.author, book.releaseYears)}
            </Typography>
            <Typography variant="subtitle2" component="div" align="center" sx={{mb: 2, fontStyle: 'oblique'}}>
              {book.genres.join(' · ')}
            </Typography>
            <Typography variant="body1" sx={{mb: 3}}>
              {book.description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}