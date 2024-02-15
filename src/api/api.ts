import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Data, Response, UpdateVote } from "../model/nominee";
import { Constant } from "../util/constant";
export const useGetNominee = () =>
  useQuery<Response[]>({
    queryKey: ["nominee"],
    queryFn: async () => axios.get(Constant.URL).then((res) => res.data),
    refetchInterval: 100,
  });
export const useGetTotalPromise = (phone: string) =>
  useQuery<Data>({
    queryKey: ["total-promise", phone],
    queryFn: async () =>
      axios.get(`${Constant.ASIURL}` + phone).then((res) => res.data),
  });
export const useCreateNominee = () =>
  useMutation({
    mutationFn: async (payload: { fullName: string }[]) =>
      axios.post(Constant.URL, payload).then((res) => res.data),
  });
export const useUpdateVoteNominee = () =>
  useMutation({
    mutationFn: async (payload: UpdateVote[]) =>
      axios.put(Constant.URL + "/vote", payload).then((res) => res.data),
  });
