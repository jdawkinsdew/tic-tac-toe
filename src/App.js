import { useEffect, useState } from "react";
import Board from "./components/Board";

function App() {
  const [history, setHistory] = useState([])
  const [player, setPlayer] = useState(1);
  const [selected, setSelected] = useState([[], [], []]);
  const [winner, setWinner] = useState(null);
  const [show, setShow] = useState(false)
  const init = () => {
    setPlayer(1)
    setSelected([[], [], []]);
    setWinner(null)
  }
  const handleClick = (x, y) => {
    if (!winner) {
      let currect = selected;
      if (!currect[x][y]) {
        currect[x][y] = player;
        setSelected([...currect]);
        setPlayer(player == 1 ? 2 : 1);
      }
    }
  };
  useEffect(() => {
    console.log(selected)
    if (!winner) {
      const currect = history
      currect.push({ data: selected })
      setHistory([...currect]);
      for (let i = 0; i < 3; i++) {
        if (
          selected[i][0] &&
          selected[i][0] == selected[i][1] &&
          selected[i][1] == selected[i][2]
        ) {
          setWinner(selected[i][0]);
        }
        if (
          selected[0][i] &&
          selected[0][i] == selected[1][i] &&
          selected[1][i] == selected[2][i]
        ) {
          setWinner(selected[0][i]);
        }
      }
      if (
        selected[0][0] &&
        selected[0][0] == selected[1][1] &&
        selected[1][1] == selected[2][2]
      ) {
        setWinner(selected[0][0]);
      }
      if (
        selected[0][2] &&
        selected[0][2] == selected[1][1] &&
        selected[1][1] == selected[2][0]
      ) {
        setWinner(selected[0][0]);
      }
    }
  }, [selected]);
  useEffect(() => {
    console.log('his', history)
  }, [history])
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
            {/* <div
              className="flex justify-center my-auto"
              value={player}
              onChange={(e) => {
                setPlayer(e.target.value);
              }}
            >
              <div className="form-check form-check-inline mx-3">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="player1"
                  value={1}
                  defaultChecked
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="player1"
                >
                  Player 1
                </label>
              </div>
              <div className="form-check form-check-inline mx-3">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="player2"
                  value={2}
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="player2"
                >
                  Player 2
                </label>
              </div>
            </div> */}
          </div>
          <div className="mt-5">
            <div className="mx-auto bg-slate-200 w-fit">
              <div className="flex">
                <Board
                  x={0}
                  y={0}
                  handleClick={handleClick}
                  selected={selected}
                  disabled={winner}
                />
                <Board
                  x={0}
                  y={1}
                  handleClick={handleClick}
                  selected={selected}
                  disabled={winner}
                />
                <Board
                  x={0}
                  y={2}
                  handleClick={handleClick}
                  selected={selected}
                  disabled={winner}
                />
              </div>
              <div className="flex">
                <Board
                  x={1}
                  y={0}
                  handleClick={handleClick}
                  selected={selected}
                  disabled={winner}
                />
                <Board
                  x={1}
                  y={1}
                  handleClick={handleClick}
                  selected={selected}
                  disabled={winner}
                />
                <Board
                  x={1}
                  y={2}
                  handleClick={handleClick}
                  selected={selected}
                  disabled={winner}
                />
              </div>
              <div className="flex">
                <Board
                  x={2}
                  y={0}
                  handleClick={handleClick}
                  selected={selected}
                  disabled={winner}
                />
                <Board
                  x={2}
                  y={1}
                  handleClick={handleClick}
                  selected={selected}
                  disabled={winner}
                />
                <Board
                  x={2}
                  y={2}
                  handleClick={handleClick}
                  selected={selected}
                  disabled={winner}
                />
              </div>
            </div>
          </div>
          {winner && (
            <>
              <div className="py-3 text-center text-green">
                Player {winner} wins!
              </div>
              <button
                onClick={() => setShow(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                History
              </button>
              {show && <div>
                There are total {history.length} steps
                {history.map((h, i) => (
                  <div key={i} className="cursor-pointer" onClick={() => {
                    setSelected(h.data);
                  }}>Step {i + 1}</div>
                ))}
              </div>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
