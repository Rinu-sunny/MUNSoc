
import React from 'react';
import { AppBar, Toolbar, Typography,TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import './index.css';

const CustomAppBar= styled(AppBar)({
  backgroundColor:'rgba(0,0,0,0.5)', boxShadow:'none',
  position: 'fixed', // Fixed position to stay on top
    top: 0, // Align to the top of the viewport
    left: 0,
    width: '100%',
    zIndex: 1200,
})

const Navbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> MUNSoc
          </Typography>
       
      
          <Button color="inherit" component={Link} to="/" className="navButton">Home</Button>
          <Button color="inherit" component={Link} to="/" className="navButton" >events</Button>
          <Button color="inherit" component={Link} to="/" className="navButton"  >global</Button>
          <Button color="inherit" component={Link} to="/" className="navButton">connect</Button>
          
          {/* Add more navigation buttons if needed */}
        
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
