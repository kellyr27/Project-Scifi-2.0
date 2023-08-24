import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { Html, Stars } from '@react-three/drei';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas style={{
      width: '100vw',
      height: '100vh',
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -9999
    }}>
      <color attach="background" args={['#191920']} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
    <BrowserRouter>
      <Box >
        <Container maxWidth="lg" disableGutters>
          <App />
        </Container>
      </Box>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
