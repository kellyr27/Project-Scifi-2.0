
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import ButtonAppBar from './components/Navbar';
import ListDisplay from './components/ListDisplay';
import { lists } from './databases/lists';
import { textToURL } from './functions/database';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import ScrollTop from './components/scrollTop';

const customTheme = createTheme({
  typography: {
    // "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    // primary: {main: '#7EBDC2', contrast: '#BB4430'}
  }

})


function App() {
  const firstList = lists[0]

  return (
    <>
    <ThemeProvider theme={customTheme}>
      <ScrollTop/>
      <ButtonAppBar />
      <Routes>
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
