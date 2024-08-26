import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ArticleList from './ArticleList';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
     
      
            <Box
              sx={{
                backgroundImage: 'url(https://d1sxy7l4fhu207.cloudfront.net/uploads/459/conversions/Volume-14_1583241801-800x600.jpg)', // Replace with your image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                position:'relative',
                overflow:'auto',
              }}>
              <Navbar />
              <main
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  paddingTop: '70px',
                }} >
              <Box sx={{flexgrow:1, width:'100%',textAlign:'center', marginTop:'300px'}}>
        <Routes>
          <Route path="/" element={<ArticleList />} />
        </Routes>
      </Box>
                 </main>
            </Box>
      
    </Router>
  );
}

export default App;

        