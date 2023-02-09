import '../styles/GameDetails.css';
import axios from 'axios';
import { useEffect, useState} from "react";
import { useParams} from "react-router-dom"


const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState();
  const param = useParams();

  useEffect(() => {
    axios
      .get(`https://apis.wilders.dev/wild-games/games/${param.id}`)
      .then(res => console.log(res.data) || setGameDetails(res.data));
  }, []);

  return (
    <div className="GameDetails">
      <h2>Game Details</h2>
      <div className='divGameDetails'>
        <h4 className='titleGameDetails'>{gameDetails.name}</h4>
        <img className='imgGameDetails' src={gameDetails.background_image} alt={gameDetails.name} />
        <p className='pGameDetails'>Rating: {gameDetails.rating}</p>
        <p className='pGameDetails'>Released: {gameDetails.released}</p>
      </div>
    </div>
  );
};

export default GameDetails;