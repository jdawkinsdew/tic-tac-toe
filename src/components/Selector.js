const Selector = ({player, setPlayer}) => (
  <div
    className="flex justify-center my-auto"
    value={player}
    onChange={(e) => {
      setPlayer(Number(e.target.value));
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
  </div>
)

export default Selector