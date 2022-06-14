import { useState } from "react";
import Game from "./components/Game";
import Score from "./components/Score";
import Selector from "./components/Selector";

function App() {
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [selected, setSelected] = useState([[], [], []]);
  const [history, setHistory] = useState([]);

  const init = () => {
    setSelected([[], [], []]);
    setWinner(null);
  };

  return (
    <div className="bg-slate-100 w-screen h-screen">
      <div className="flex items-center h-full">
        <div className="mx-auto max-w-lg rounded bg-white shadow-lg w-full p-5">
          <div className="flex justify-between">
            <button
              onClick={init}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Reset
            </button>
            <Selector player={player} setPlayer={setPlayer} />
          </div>
          <div className="my-5">
            <Game
              winner={winner}
              selected={selected}
              player={player}
              history={history}
              setWinner={setWinner}
              setHistory={setHistory}
              setSelected={setSelected}
              setPlayer={setPlayer}
            />
          </div>
          <Score history={history} />
        </div>
      </div>
    </div>
  );
}

export default App;
