import '../styles/Game.css'


const Game = ({gameX}) => {
///// le props Game vient de la déclaration faite /////
///// dans l'appel du composant Game dans le composant GameList /////

  return (
    <div className='divGameCard'>

      <h4 className='titleGameCard'>{gameX.name}</h4>
      <img className='imgGame' src={gameX.background_image} alt={gameX.name} />
      <p className='pGame'>Rating : {gameX.rating}</p>

    </div>
  );
}


export default Game;