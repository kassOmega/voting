import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Response, UpdateVote } from "../model";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useUpdateVoteNominee } from "../api";
import { useNavigate } from "react-router-dom";

export const VotingForm = ({ nominees }: { nominees: Response[] }) => {
  const { register, handleSubmit } = useForm<UpdateVote>();

  const [votes, setVotes] = useState<UpdateVote[]>([]);
  const navigate = useNavigate();
  const updateVote = useUpdateVoteNominee();
  const onSubmit = async () => {
    console.log(votes);
    try {
      await updateVote.mutateAsync(votes);
      navigate("/");
    } catch (error) {
      console.error("Error updating votes:", error);
    }
  };
  const handleChange = (id: number, newVote: number) => {
    const index = votes.findIndex((vote) => vote.id === id);

    if (index !== -1 && newVote > 0) {
      setVotes((prevVotes) => {
        const updatedVotes = [...prevVotes];
        updatedVotes[index].vote = newVote;
        return updatedVotes;
      });
    } else if (newVote > 0) {
      return setVotes((prevVotes) => [...prevVotes, { id, vote: newVote }]);
    }
  };
  return (
    <Stack padding={2} spacing={2}>
      <Typography> Voting Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack width={600} spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                sx={{ flex: 1 }}
                fullWidth
                label="Your Phone Number"
                {...register(`vote`, {})}
              />
            </Grid>
            {nominees.map((nom) => (
              <Grid item xs={6} key={nom.id}>
                <TextField
                  type="number"
                  sx={{ flex: 1 }}
                  fullWidth
                  onChange={(event) =>
                    handleChange(nom.id, +event?.target?.value)
                  }
                  defaultValue={0}
                  label={"For " + nom.fullName}
                />
              </Grid>
            ))}
          </Grid>
          <Stack
            sx={{ flexDirection: "row", justifyContent: "flex-end" }}
            width={"100%"}
          >
            <Button variant="contained" type="submit" disabled={!votes.length}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};
