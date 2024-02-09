import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import { CreateRequest } from "../model";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useCreateNominee } from "../api";
export const CreateNominee = () => {
  const nomineeMuatate = useCreateNominee();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateRequest>();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "users",
    }
  );

  const onSubmit = (data: CreateRequest) => {
    nomineeMuatate.mutateAsync(data.users);
  };

  const handleAddName = () => {
    append({ fullName: "" });
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
                label="Full Name"
                {...register(`users.${index}.fullName`, {
                  required: true,
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
