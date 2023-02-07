import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import GameDetails from './components/Game';
import GameList from './screens/GameList';


function App() {
  return (
    <>
    <div className="App">
      <Header name="All Games"/>
      <Routes>
      <Route path="/" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </div>
    </>
);
}

export default App;
