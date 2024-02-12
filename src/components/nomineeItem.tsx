import React from "react";
import { LinearProgress, Stack, Typography } from "@mui/material";
import { Response } from "../model";

export const NomineeItem = ({
  nominee,
  index,
  totalVotes,
}: {
  nominee: Response;
  index: number;
  totalVotes: number;
}) => {
  const progress = nominee.vote
    ? Math.round((nominee.vote / totalVotes) * 100)
    : 0;
  const color = index < 9 ? "success" : "error";
  const typoColor = color === "success" ? "green" : "red";

  return (
    <Stack>
      <Typography variant="h5" alignSelf={"center"} color={typoColor}>
        {nominee.fullName}
      </Typography>
      <LinearProgress variant="determinate" value={progress} color={color} />
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="caption"
          color={typoColor}
        >{`${nominee.vote} votes`}</Typography>
        <Typography
          variant="caption"
          color={typoColor}
        >{`${progress} %`}</Typography>
      </Stack>
    </Stack>
  );
};
