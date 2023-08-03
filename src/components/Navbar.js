import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import BasicMenu from './MenuItem';
import { lists as databaseLists } from '../databases/lists';
import { splitListsByType } from '../functions/database';

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

  const listsByType = splitListsByType(databaseLists)

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
            <BasicMenu title="TV Lists" lists={listsByType['tv']} />
            <BasicMenu title="Movie Lists" lists={listsByType['movies']} />
            <BasicMenu title="Book Lists" lists={listsByType['books']} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}