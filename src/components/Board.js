import React from "react";

const Board = ({ x, y, handleClick, selected, disabled }) => {
  return (
    <div
      className={`w-20 h-20  border-slate-500 border ${
        disabled ? "" : "cursor-pointer hover:bg-slate-300"
      }`}
      onClick={() => handleClick(x, y)}
    >
      {selected[x][y] === 1 && <img src="/x.png" className="w-full" />}
      {selected[x][y] === 2 && <img src="/o.png" className="w-full" />}
    </div>
  );
};

export default Board;
