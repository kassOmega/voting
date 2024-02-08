import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import { CreateRequest } from "../model";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useCreateNominee } from "../api";
export const VoterForm = () => {
  const nomineeMuatate = useCreateNominee();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateRequest>();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "users", // unique name for your Field Array
    }
  );

  const onSubmit = (data: CreateRequest) => {
    // Extract full names from data:
    const names = data.users.map((item) => item.fullName); // Get full names from objects
    // Send only the array of names to API:
    console.log(`Submitting full names:`, data.users); // Now an array of strings

    // Reset the form:
    // setFullNames([{ fullName: "" }]);
    nomineeMuatate.mutateAsync(data.users);
  };

  const handleAddName = () => {
    append({ fullName: "" }); // Add an empty object
  };

  return (
    <Stack alignItems={"center"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack width={600} spacing={2}>
          <h3>Create Nominee</h3>
          {fields.map((name, index) => (
            <Stack
              key={index}
              mb={2}
              direction={"row"}
              alignItems="center"
              gap={2}
              sx={{ position: "relative" }}
            >
              <TextField
                sx={{ flex: 1 }}
                {...register(`users.${index}.fullName`, {
                  required: true,
                  // Add other validations as needed
                })}
              />
              <Button
                variant="outlined"
                type="button"
                onClick={() => remove(index)}
                color="error"
                sx={{
                  padding: 0.5,
                  margin: 1,
                  position: "absolute",
                  right: 0,
                  top: "0%",
                  border: "none",
                }}
              >
                <HighlightOffIcon />
              </Button>
            </Stack>
          ))}
          <Stack mb={2}>
            <Button variant="contained" type="button" onClick={handleAddName}>
              Add Name
            </Button>
          </Stack>
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
