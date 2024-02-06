import React, { useState } from "react";

export const VoterForm = ({ onVoteSubmit }: { onVoteSubmit: any }) => {
  const handleSubmit = () => {
    //handling submit here
  };

  return <form onSubmit={handleSubmit}>...</form>;
};
