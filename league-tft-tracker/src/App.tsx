import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/search/search.tsx';
import Matches from './pages/matches/matches.tsx';
import Match from './pages/matches/matches.tsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Search />}></Route>
          <Route path='/matches' element={<Matches />}></Route>
          <Route path='/match' element={<Match />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
