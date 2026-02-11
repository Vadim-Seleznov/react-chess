import { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import Timer from "./components/Timer";

import LostFigures from "./components/LostFigures";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState<Player>(
    new Player(Colors.WHITE),
  );
  const [blackPlayer, setBlackPLayer] = useState<Player>(
    new Player(Colors.BLACK),
  );

  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer,
    );
  }

  return (
    <div className="app">
      <Timer currentPlayer={currentPlayer} restart={restart} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />

      <LostFigures title="White lost figures" figure={board.lostWhiteFigures} />
      <LostFigures title="Black lost figures" figure={board.lostBlackFigures} />
    </div>
  );
}

export default App;
