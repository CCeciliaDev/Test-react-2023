import '../styles/GameList.css'
import axios from "axios";
import { useEffect, useState } from "react";
import Game from "../components/Game";

const GameList = () => {

    const [gameList, setGameList] = useState([]);
    const [bestGames, setBestGames] = useState(false);

  useEffect(() => {
    axios
      .get("https://apis.wilders.dev/wild-games/games")
      .then((res) => setGameList(res.data))
  }, []);
  
  const selectBestGames = () => {
    setBestGames((prevState) => ! prevState);
  };

  return (
    <div className="mainDivGameList">
      <h2>Games Liste</h2>

      <div>
        <button onClick={selectBestGames}>Best games</button>
      </div>

        <div className='divGameList'> 
                
        {gameList
        .filter(game => bestGames ? game.rating >= 4.5 : true)
        .map((game) => {
				return (
          <Game gameX={game} />
				)
			})}
  
        </div>
    </div>
  );
}


export default GameList;