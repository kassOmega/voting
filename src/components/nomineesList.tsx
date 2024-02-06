import React from "react";

export const NomineesList = ({ nominees, onVoteSubmit }) => {
  return (
    <ul>
      {nominees.map((nominee) => (
        <li key={nominee.id}>
          {nominee.name}
          <input
            type="checkbox"
            value={nominee.id}
            onChange={(e) => onVoteSubmit(e.target.checked, nominee.id)}
          />
        </li>
      ))}
    </ul>
  );
};
