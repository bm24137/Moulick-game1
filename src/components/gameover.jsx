export default function Gameover({winner,onrematch}){
    return <div id="game-over">
        <h2>Game over</h2>
        {winner && <p>{winner} won!</p>}
         {!winner && <p>It's a draw </p>}
        <p><button onClick={onrematch}>Rematch!</button></p>
    </div>
}