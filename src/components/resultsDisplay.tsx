import React from "react";
import { Response } from "../model";

export const ResultsDisplay = ({ votes }: { votes: Response }) => {
  // Sort nominees by votes in descending order
  const sortedNominees = Object.entries(votes)
    .map(([id, vote]) => ({ id, vote: vote as number })) // Assert vote as number
    .sort((a, b) => b.vote - a.vote);
  return (
    <div>
      <h2>Live Results</h2>
      <ul>
        <li>Display nominee name and vote count</li>
      </ul>
      s
    </div>
  );
};
