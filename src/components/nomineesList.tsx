import React from "react";
import { Response } from "../model";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { NomineeItem } from "./nomineeItem";

export const NomineesList = ({ nominees }: { nominees: Response[] }) => {
  const totalVotes = nominees.reduce((acc, nominee) => acc + nominee.vote, 0);
  const sortedNominees = [...nominees].sort((a, b) => b.vote - a.vote);
  return (
    <Stack
      padding={4}
      spacing={4}
      flex={1}
      justifySelf="center"
      alignSelf={"center"}
    >
      <Stack spacing={8} direction="row">
        <Typography variant="h2" color="#2279f1">
          Live Results
        </Typography>
      </Stack>

      <Typography variant="h4" alignSelf="center">
        Total counted votes {totalVotes}
      </Typography>
      <List>
        <Grid container spacing={2}>
          {sortedNominees.map((nominee, index) => (
            <Grid item xs={4} key={nominee.id}>
              <ListItem>
                <ListItemText
                  primary={
                    <NomineeItem
                      nominee={nominee}
                      index={index}
                      totalVotes={totalVotes}
                    />
                  }
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
    </Stack>
  );
};
