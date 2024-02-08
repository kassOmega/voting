import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Request, Response } from "../model/nominee";

export const useGetNominee = () =>
  useQuery<Response[]>({
    queryKey: ["nominee"],
    queryFn: async () =>
      axios.get("http://localhost:3000/api/nominees").then((res) => res.data),
  });

export const useCreateNominee = () =>
  useMutation({
    mutationFn: async (payload: Request) =>
      axios
        .post("http://localhost:3000/api/nominees", payload)
        .then((res) => res.data),
  });
