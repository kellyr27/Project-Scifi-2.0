
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ButtonAppBar from './components/Navbar';
import ListDisplay from './components/ListDisplay';
import { Container } from '@mui/material';
import { lists } from './databases/lists';
import { textToURL } from './functions/database';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const customTheme = createTheme({
  typography: {
    // "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
  }
})


function App() {
  const firstList = lists[0]

  return (
    <>
    <ThemeProvider theme={customTheme}>
        <ButtonAppBar />
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/books/:listTitle" element={<ListDisplay/>}/>
          <Route path="/movies/:listTitle" element={<ListDisplay/>} />
          <Route path="/tv/:listTitle" element={<ListDisplay/>} />
          <Route path="*" element={<Navigate to={`/${firstList.type}/${textToURL(firstList.name)}`} />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
