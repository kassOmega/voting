import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CreateRequest, Request, Response, UpdateVote } from "../model/nominee";

export const useGetNominee = () =>
  useQuery<Response[]>({
    queryKey: ["nominee"],
    queryFn: async () =>
      axios.get("http://localhost:3000/api/nominees").then((res) => res.data),
  });

export const useCreateNominee = () =>
  useMutation({
    mutationFn: async (payload: { fullName: string }[]) =>
      axios
        .post("http://localhost:3000/api/nominees", payload)
        .then((res) => res.data),
  });
export const useUpdateVoteNominee = () =>
  useMutation({
    mutationFn: async (payload: UpdateVote[]) =>
      axios
        .patch("http://localhost:3000/api/nominees/vote", payload)
        .then((res) => res.data),
  });
