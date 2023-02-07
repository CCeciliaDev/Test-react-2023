import '../styles/Game.css'


const Game = ({game}) => {

  return (
    <div>
      <h4>{game.name}</h4>
      <img className='imgGame' src={game.background_image} alt={game.name} />
      <p className='pGame'>Rating : {game.rating}</p>
    </div>
  );
}


export default Game;