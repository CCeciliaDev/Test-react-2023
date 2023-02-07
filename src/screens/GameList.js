import '../styles/GameList.css'
import axios from "axios";
import { useEffect, useState } from "react";
import Game from "../components/Game";

const GameList = () => {

    const [gameList, setGameList] = useState([]);

  useEffect(() => {
    axios
      .get("https://apis.wilders.dev/wild-games/games")
      .then((res) => setGameList(res.data))
  }, []);
  
  return (
    <div className="GameList">
      <h1> Game Liste</h1>
        <div>
        {gameList.map((game) => {
				return (
          <Game game={game} />

					
				)
			})}
        </div>
    </div>
  );
}


export default GameList;