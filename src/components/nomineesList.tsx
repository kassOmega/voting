import React from "react";
import { useGetNominee } from "../api";
import { Response } from "../model";

export const NomineesList = ({ nominees }: { nominees: Response[] }) => {
  return (
    <ul>
      {nominees.map((nominee: any) => (
        <li key={nominee.id}>
          {nominee.fullName}
          <input type="checkbox" value={nominee.id} />
        </li>
      ))}
    </ul>
  );
};
