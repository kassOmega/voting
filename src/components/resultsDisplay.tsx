import React from "react";

export const ResultsDisplay = ({ votes }) => {
  // Sort nominees by votes in descending order
  const sortedNominees = Object.entries(votes)
    .map(([nomineeId, voteCount]) => ({ nomineeId, voteCount }))
    .sort((a, b) => b.voteCount - a.voteCount);

  return (
    <div>
      <h2>Live Results</h2>
      <ul>
        {sortedNominees.map((nominee) => (
          <li key={nominee.nomineeId}>
            {/* Display nominee name and vote count */}
          </li>
        ))}
      </ul>
    </div>
  );
};
