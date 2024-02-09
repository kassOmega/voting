import React from "react";
import { useGetNominee } from "../api";
import { Response } from "../model";
import { List, ListItem, ListItemText } from "@mui/material";
import { NomineeItem } from "./nomineeItem";

export const NomineesList = ({ nominees }: { nominees: Response[] }) => {
  const totalVotes = nominees.reduce((acc, nominee) => acc + nominee.vote, 0);
  const sortedNominees = [...nominees].sort((a, b) => b.vote - a.vote);
  return (
    <List>
      {sortedNominees.map((nominee, index) => (
        <ListItem key={nominee.id}>
          <ListItemText
            primary={<NomineeItem nominee={nominee} totalVotes={index} />}
          />
        </ListItem>
      ))}
    </List>
  );
};
