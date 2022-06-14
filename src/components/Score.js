const Score = ({ history }) => (
   <div className="border-t-2 pt-3">
     There are total {history.length} rounds
     <p>
       <strong>Player 1</strong> won {history.filter((h) => h === 1).length}{" "}
       times
     </p>
     <p className="border-b-2 mb-3 pb-3">
       <strong>Player 2</strong> won {history.filter((h) => h === 2).length}{" "}
       times
     </p>
     {history.map((h, i) => (
       <div key={i}>
         Round {i + 1} winner: <strong>Player {h}</strong>
       </div>
     ))}
   </div>
)

export default Score