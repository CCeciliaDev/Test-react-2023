import '../styles/GameDetails.css';
import axios from 'axios';
import { useEffect, useState} from "react";
import { useParams} from "react-router-dom"


const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState([]);
  const param = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4242/allgames/${param.id}`)
      .then(res => setGameDetails(res.data[0]))
  }, []);

  return (
    <div className="GameDetails">
      <h2 className='titlePageGameDetails'>Game Details</h2>
      <div className='divGameDetails'>
        <h4 className='titleGameDetails'>{gameDetails.name}</h4>
        <img className='imgGameDetails' src={gameDetails.image} alt={gameDetails.name} />
        <p className='pGameDetails'>Rating: {gameDetails.rating}/5</p>
        <p className='pGameDetails'>Genre: {gameDetails.genre}</p>
        <p className='pGameDetails'>Released: {gameDetails.released}</p>
      </div>
    </div>
  );
};

export default GameDetails;