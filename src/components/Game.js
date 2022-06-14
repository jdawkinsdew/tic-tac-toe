import { useEffect } from "react";
import Board from "./Board";

const Game = ({
  winner,
  selected,
  player,
  history,
  setWinner,
  setHistory,
  setSelected,
  setPlayer,
}) => {
  const handleClick = (x, y) => {
    if (!winner) {
      let currect = selected;
      if (!currect[x][y]) {
        currect[x][y] = player;
        setSelected([...currect]);
        setPlayer(player === 1 ? 2 : 1);
      }
    }
  };
  useEffect(() => {
    if (!winner) {
      let currentWinner = null;
      for (let i = 0; i < 3; i++) {
        if (
          selected[i][0] &&
          selected[i][0] === selected[i][1] &&
          selected[i][1] === selected[i][2]
        ) {
          currentWinner = selected[i][0];
        }
        if (
          selected[0][i] &&
          selected[0][i] === selected[1][i] &&
          selected[1][i] === selected[2][i]
        ) {
          currentWinner = selected[0][i];
        }
      }
      if (
        selected[0][0] &&
        selected[0][0] === selected[1][1] &&
        selected[1][1] === selected[2][2]
      ) {
        currentWinner = selected[0][0];
      }
      if (
        selected[0][2] &&
        selected[0][2] === selected[1][1] &&
        selected[1][1] === selected[2][0]
      ) {
        currentWinner = selected[0][2];
      }
      if (currentWinner) {
        setWinner(currentWinner);
        setHistory([...history, currentWinner]);
      }
    }
  }, [selected]);
  return (
    <>
      <div className="mx-auto bg-slate-200 w-fit">
        {[0, 1, 2].map((x) => (
          <div className="flex" key={x}>
            {[0, 1, 2].map((y) => (
              <Board
                key={y}
                x={x}
                y={y}
                handleClick={handleClick}
                selected={selected}
                disabled={winner}
              />
            ))}
          </div>
        ))}
      </div>
      {winner && (
        <div className="py-3 text-center text-green">Player {winner} wins!</div>
      )}
    </>
  );
};

export default Game;
