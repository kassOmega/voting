import React from "react";
import { LinearProgress, Stack, Typography } from "@mui/material";
import { Response } from "../model";

export const NomineeItem = ({
  nominee,
  totalVotes,
}: {
  nominee: Response;
  totalVotes: number;
}) => {
  const progress = Math.round((nominee.vote / totalVotes) * 100);
  const color = totalVotes <= 9 ? "primary" : "secondary";

  return (
    <Stack width={"40%"}>
      <Typography variant="h5" alignSelf={"center"}>
        {nominee.fullName}
      </Typography>
      <LinearProgress variant="determinate" value={progress} color={color} />
      <Typography variant="caption">{`${nominee.vote} votes`}</Typography>
    </Stack>
  );
};
