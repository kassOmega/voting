export type Response = {
  id: number;
  fullName: string;
  vote: number;
};
export type Request = {
  fullName: string;
  phoneNumber: string;
  vote: number;
};
export type CreateRequest = {
  users: { fullName: string }[];
};
export type UpdateVote = {
  vote: number;
  id: number;
};
