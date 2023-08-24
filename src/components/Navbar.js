import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BasicMenu from './MenuItem';
import { lists as databaseLists } from '../databases/lists';
import { splitListsByType } from '../functions/database';

export default function ButtonAppBar() {

  const listsByType = splitListsByType(databaseLists)

  return (
    <AppBar position="sticky" sx={{bgcolor: 'rgba(35,31,32, 0.95)'}} >
      <Toolbar>
        <Box
          component="img"
          sx={{ height: 54 }}
          alt="Logo"
          src="/logo2.png"
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Project Scifi</Typography>
        <BasicMenu title="TV Lists" lists={listsByType['tv']} listType='tv'/>
        <BasicMenu title="Movie Lists" lists={listsByType['movies']} listType='movies'/>
        <BasicMenu title="Book Lists" lists={listsByType['books']} listType='books'/>
      </Toolbar>
    </AppBar>
  );
}