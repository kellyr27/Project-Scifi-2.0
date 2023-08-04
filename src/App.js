
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ButtonAppBar from './components/Navbar';
import ListDisplay from './components/ListDisplay';
import { Container } from '@mui/material';
import { lists } from './databases/lists';
import { textToURL } from './functions/database';

// const matchListURLToId = (lists, url) => {
//   return 0
// }

function App() {

  const firstList = lists[0]

  return (
    <>
      <ButtonAppBar />
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/books/:listTitle" element={<ListDisplay/>}/>
        <Route path="/movies/:listTitle" element={<ListDisplay/>} />
        <Route path="/tv/:listTitle" element={<ListDisplay/>} />
        {/* <Route path="*" element={<Home/>} /> */}
        <Route path="*" element={<Navigate to={`/${firstList.type}/${textToURL(firstList.name)}`} />} />
      </Routes>
    </>
  );
}

export default App;

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