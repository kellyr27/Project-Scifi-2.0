import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import BasicMenu from './MenuItem';

/**
 * TV
 *  - Best Scifi TV Shows of All Time
 * Movies
 *  - Best Indie Scifi Movies of All Time (Budget under $10M)
 *  - Best Scifi Movies of the 2010s 
 *  - Best Scifi Movies of the 2000s 
 *  - Best Scifi Movies of the 1990s 
 *  - Best Classic Scifi Movies (movies released before 1990)
 * Books
 *  - Best Modern Scifi Books (released after 2000, grouped by the Author)
 *  - Best Scifi Graphic Novels/Comics
 *  - Best Classic Scifi Books (grouped by the Author)
 */

export default function ButtonAppBar() {

  const navbar = [
    {
      title: 'TV Lists',
      lists: [
        {
          title: 'Best Scifi TV Shows of All Time',
          navigate: '/tv/best_scifi_tv_shows_of_all_time'
        }
      ]
    },
    {
      title: 'Movie Lists',
      lists: [
        {
          title: 'Best Indie Scifi Movies of All Time',
          navigate: '/movies/best_indie_scifi_movies_of_all_time'
        },
        {
          title: 'Best Scifi Movies of the 2010s',
          navigate: '/movies/best_scifi_movies_of_the_2010_s'
        },
        {
          title: 'Best Scifi Movies of the 2000s',
          navigate: '/movies/best_scifi_movies_of_the_2000_s'
        },
        {
          title: 'Best Scifi Movies of the 1990s',
          navigate: '/movies/best_scifi_movies_of_the_1990_s'
        },
        {
          title: 'Best Classic Scifi Movies',
          navigate: '/movies/best_classic_scifi_movies'
        }
      ]
    },
    {
      title: 'Book Lists',
      lists: [
        {
          title: 'Best Modern Scifi Books',
          navigate: '/books/best_modern_scifi_books'
        },
        {
          title: 'Best Scifi Graphic Novels/Comics',
          navigate: '/books/best_scifi_graphic_novels_comics'
        },
        {
          title: 'Best Classic Scifi Books',
          navigate: '/books/best_classic_scifi_books'
        }
      ]
    }
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Project Scifi</Typography>
          {navbar.map((el, index) => {
            return (
              <BasicMenu key={index} title={el.title} lists={el.lists} />
            )
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
}