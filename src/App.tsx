import React from "react";
import "./App.css";
import { useState } from "react";
import { NomineesList, ResultsDisplay, VoterForm } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const nominees: any = [
  { name: "kass", momineeId: 1 },
  { name: "kass", momineeId: 2 },
];
const initialVotes = {};
function App() {
  const [votes, setVotes] = useState(initialVotes);
  const queryClient = new QueryClient();
  const handleVoteSubmit = (
    voterId: any,
    votedNominees: any,
    totalShareLots: any
  ) => {
    const updatedVotes: any = { ...votes };
    votedNominees.forEach((nomineeId: any) => {
      updatedVotes[nomineeId] = (updatedVotes[nomineeId] || 0) + totalShareLots;
    });
    setVotes(updatedVotes);
  };

  return (
    <div id="root">
      <QueryClientProvider client={queryClient}>
        <NomineesList />
        <VoterForm onVoteSubmit={handleVoteSubmit} />
        <ResultsDisplay votes={votes} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
