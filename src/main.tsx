import React from "react";
import "./App.css";
import { NomineesList, CreateNominee, VotingForm } from "./components";
import { useGetNominee } from "./api";
import { Routes as Switch, Route } from "react-router-dom";
import { AppBar } from "./components/appBar";

export const Main = () => {
  const nominees = useGetNominee();
  return (
    <AppBar>
      <Switch>
        <Route
          path="/"
          element={<NomineesList nominees={nominees.data ?? []} />}
        />
        <Route path="/create" element={<CreateNominee />} />
        <Route
          path="/vote"
          element={<VotingForm nominees={nominees.data ?? []} />}
        />
      </Switch>
    </AppBar>
  );
};
