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
  
  // const selectBestGames = () => {
  //   setBestGames((prevState) => ! prevState);
  // };

  const selectBestGames = () => {
    setBestGames(! bestGames);
  };


  return (
    <div className="mainDivGameList">
      <h2 className='titleScreenGameList'>Games Liste</h2>

      <div>
        <button className='buttonBestGames' onClick={selectBestGames}>Best games</button>
      </div>

        <div className='divGameList'> 

        {gameList
        .filter(game => bestGames ? game.rating >= 4.5 : true)
        .map((game) => {
				return (
          <Game 
          key={game.id}
          name={game.name}
          image={game.background_image}
          rating={game.rating}
          id={game.id} />
				)
			})}
  
        </div>
    </div>
  );
}


export default GameList;