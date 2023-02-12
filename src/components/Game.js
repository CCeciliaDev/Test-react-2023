import {Link} from "react-router-dom";
import '../styles/Game.css'


const Game = ({name, image, rating, id}) => {

  const gameLink = `/allgames/${id}`

  return (
    <div className='divGameCard'>

      <h4 className='titleGameCard'>{name}</h4>
      <img className='imgGame' src={image} alt={name} />
      <p className='pGame'>Rating : {rating}/5</p>

      <Link to={gameLink}>
      <button className="buttonGameDetails">Game details</button>
      </Link>

    </div>
  );
}


export default Game;