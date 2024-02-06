import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { NomineesList, ResultsDisplay, VoterForm } from "./components";
const nominees = [
  /* Array of 12 nominee objects */
];
const initialVotes = {}; // Initialize votes object
function App() {
  const [votes, setVotes] = useState(initialVotes);

  // Handle vote submission
  const handleVoteSubmit = (voterId, votedNominees, totalShareLots) => {
    // Calculate updated votes based on totalShareLots
    const updatedVotes = { ...votes };
    votedNominees.forEach((nomineeId) => {
      updatedVotes[nomineeId] = (updatedVotes[nomineeId] || 0) + totalShareLots;
    });
    setVotes(updatedVotes);
  };

  return (
    <div>
      <NomineesList nominees={nominees} onVoteSubmit={handleVoteSubmit} />
      <VoterForm onVoteSubmit={handleVoteSubmit} />
      <ResultsDisplay votes={votes} />
    </div>
  );
}

export default App;
