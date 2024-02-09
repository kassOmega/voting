import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Response, UpdateVote } from "../model";
import { useForm } from "react-hook-form";

export const VotingForm = ({ nominees }: { nominees: Response[] }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UpdateVote>();
  const onSubmit = (data: UpdateVote) => {
    // Extract full names from data:
  };

  return (
    <Stack padding={2} spacing={2}>
      <Typography> Voting Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack width={600} spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} spacing={2}>
              <TextField
                sx={{ flex: 1 }}
                fullWidth
                label="Your Phone Number"
                {...register(`vote`, {
                  required: true,
                  // Add other validations as needed
                })}
              />
            </Grid>
            {nominees.map((nom) => (
              <Grid item xs={6} key={nom.id} spacing={2}>
                <TextField
                  type="number"
                  sx={{ flex: 1 }}
                  fullWidth
                  defaultValue={0}
                  label={"For " + nom.fullName}
                  {...register(`vote`, {
                    required: true,
                  })}
                />
              </Grid>
            ))}
          </Grid>
          <Stack
            sx={{ flexDirection: "row", justifyContent: "flex-end" }}
            width={"100%"}
          >
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};
