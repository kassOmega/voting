import React from "react";
import { Response } from "../model";
import { Stack, Typography } from "@mui/material";

export const ResultsDisplay = ({ votes }: { votes: Response[] }) => {
  // Sort nominees by votes in descending order
  const sortedNominees = Object.entries(votes)
    .map(([id, vote]) => ({ id, vote: vote })) // Assert vote as number
    .sort((a, b) => b.vote.vote - a.vote.vote);
  return (
    <Stack>
      <Typography variant="h2">Live Results</Typography>
      <ul>
        <li>Display nominee name and vote count</li>
      </ul>
    </Stack>
  );
};
