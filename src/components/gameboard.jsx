


export default function Gameboard({onSelectsquare,board}){
   

   // const [updatedboard, setboard]=useState(initialgameboard)

   // function handlesquare(rowindex,colindex){
       // setboard((updatedboard)=>{
       // let updatedgameboard=[...updatedboard.map((innerarray)=>[...innerarray])];
      //  updatedgameboard[rowindex][colindex]=activeplayersymbol;
      //  return updatedgameboard;
   // });
   // onSelectsquare();
   // }
    return <ol id="game-board">
       {board.map((row,rowindex) => (<li key={rowindex}>
        <ol>
            {row.map((playersymbol,colindex)=><li key={colindex}><button onClick={()=>onSelectsquare(rowindex,colindex)} disabled={playersymbol !==null}>{playersymbol}</button></li>)}
        </ol>
       </li>))}
    </ol>
}