import React from "react";
import "./App.css";
import { NomineesList, ResultsDisplay, VoterForm } from "./components";
import { useGetNominee } from "./api";

export const Main = () => {
  const nominees = useGetNominee();
  return (
    <div>
      <NomineesList nominees={nominees.data ?? []} />
      <VoterForm />
      <ResultsDisplay votes={nominees.data ?? []} />
    </div>
  );
};
