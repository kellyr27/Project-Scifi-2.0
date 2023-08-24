import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { textToURL } from '../functions/database';

export default function BasicMenu(props) {
  const {title, lists, listType} = props

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="inherit"
        onClick={handleClick}
        sx={{textTransform: 'capitalize', fontWeight: 'light', letterSpacing: 3, fontSize: 15}}
      >
        {title}
        
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {lists.map((el, index) => {
          return (
              <MenuItem key={index} onClick={handleClose} component={Link} to={`${listType}/${textToURL(el.name)}`} state={el}>{el.name}</MenuItem>
          )
        })}
      </Menu>
    </div>
  );
}
// TODO - REMOVE STATE