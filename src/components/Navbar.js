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

export default function ButtonAppBar() {

  const listsByType = splitListsByType(databaseLists)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#231F20'}} >
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
    </Box>
  );
}