import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Response, UpdateVote } from "../model";
import { useForm } from "react-hook-form";
import { useMemo, useState } from "react";
import { useGetTotalPromise, useUpdateVoteNominee } from "../api";
import { useNavigate } from "react-router-dom";

export const VotingForm = ({ nominees }: { nominees: Response[] }) => {
  const navigate = useNavigate();
  const [votes, setVotes] = useState<Response[]>([]);

  const { register, handleSubmit, watch } = useForm<UpdateVote>();
  const phoneNumber = watch("phoneNumber");

  const senderPhone = useMemo(() => {
    if (phoneNumber?.length === 10) return phoneNumber;
    return "";
  }, [phoneNumber]);

  const { data, isLoading, isError } = useGetTotalPromise(senderPhone);
  const updateVote = useUpdateVoteNominee();

  const handleChange = (value: Response) => {
    setVotes((prevVotes) => {
      const existingVoteIndex = prevVotes.findIndex(
        (vote) => vote.id === value.id
      );

      return existingVoteIndex !== -1
        ? prevVotes.filter((vote) => vote.id !== value.id) // Remove if checked
        : [...prevVotes, { id: value.id, vote: 45, fullName: value.fullName }]; // Add with vote value 1
    });
  };
  const onSubmit = async () => {
    console.log(votes);
    try {
      await updateVote.mutateAsync(votes);
      navigate("/");
    } catch (error) {
      console.error("Error updating votes:", error);
    }
  };

  console.log("sender", data);

  return (
    <Stack spacing={2}>
      {/* {isError ? (
        <Typography alignSelf="center">API Error</Typography>
      ) : isLoading ? (
        <CircularProgress />
      ) : (
        <> */}
      <Typography variant="h2"> Voting Form</Typography>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        width={600}
      >
        <TextField
          label="Receiver phone number"
          {...register("phoneNumber", { maxLength: 10 })}
        />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            {nominees.map((nom) => (
              <Grid item xs={6} key={nom.id}>
                <FormControlLabel
                  control={<Checkbox onChange={() => handleChange(nom)} />}
                  label={nom.fullName}
                />
              </Grid>
            ))}
          </Grid>
          <Stack
            sx={{ flexDirection: "row", justifyContent: "flex-end" }}
            width={"100%"}
          ></Stack>
        </Grid>
        <Grid item xs={6} height={600} alignItems="center">
          <Stack component={"form"} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {votes.map((vote) => (
                <Grid item xs={4} key={vote.id}>
                  {vote.fullName}
                </Grid>
              ))}
            </Grid>
            <Stack alignSelf={"center"}>
              <Button
                variant="contained"
                type="submit"
                disabled={!votes.length}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      {/* </>
      )} */}
    </Stack>
  );
};
