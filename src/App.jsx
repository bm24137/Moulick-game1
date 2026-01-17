import Player from "./components/player.jsx";
import { useState } from "react";
import Gameboard from "./components/gameboard.jsx";
import Log  from "./components/log.jsx";
import { WINNCOMBINATIONS } from "../Wincombinations.js";
import Gameover from "./components/gameover.jsx";
import { use } from "react";

let initialgameboard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

function getactiveplayer(gameturns){
   let currentplayersymbol= 'X';

      if (gameturns.length >0 && gameturns[0].player ==='X'){
        currentplayersymbol='O';
      }
      return currentplayersymbol;
}
function App() {
  const [gameturns, setgameturns]=useState([])
  const activeplayer= getactiveplayer(gameturns);
  const [players,setplayers]=useState({
    X:'player1',
    O:'player2',
  });

   
    let updatedboard = [...initialgameboard.map(array =>[...array])];

    for(const turn of gameturns){
        const {square,player}=turn;
        const {row, col}=square;
        
        updatedboard[row][col]=player;
    }
      let winner;
  for (const combination of WINNCOMBINATIONS){
    const firstsquaresymbol= updatedboard[combination[0].row][combination[0].column];
    const secondsquaresymbol= updatedboard[combination[1].row][combination[1].column];
    const thirdsquaresymbol= updatedboard[combination[2].row][combination[2].column];

    if (firstsquaresymbol && firstsquaresymbol===secondsquaresymbol&& firstsquaresymbol===thirdsquaresymbol){
      winner=players[firstsquaresymbol];
    }
  }

  const draw = gameturns.length ===9 &&  !winner;

  function handleselectsquare(rowindex,colindex){
    
    setgameturns(prevturns=>{
      const currentplayersymbol= getactiveplayer(prevturns);
      const updatedturns = [{square:{row: rowindex, col:colindex},player:currentplayersymbol},...prevturns];
      return updatedturns;
    });
  }

  function rematch(){
    setgameturns([]);
  }

  function handleplayernamechange(symbol,newname){
    setplayers(prevplayers =>{
      return{
        ...prevplayers,
        [symbol]:newname,
      };
    });
  }

  return(
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player username="Player1" symbol='X' isActive={activeplayer==='X'} onchangename={handleplayernamechange}/>
          <Player username="Player2" symbol='O' isActive={activeplayer==='O'} onchangename={handleplayernamechange}/>
        </ol>
        {(winner||draw) && <Gameover winner={winner} onrematch={rematch}/>}
        <Gameboard onSelectsquare={handleselectsquare} board={updatedboard}/>
      </div>
      <Log turns={gameturns}/>
    </main>
    

  );
}

export default App
