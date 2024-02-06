import React from "react";
import { useGetNominee } from "../api";

export const NomineesList = () => {
  const nominees = useGetNominee();
  return (
    <ul>
      {nominees?.data?.map((nominee: any) => (
        <li key={nominee.id}>
          {nominee.fullName}
          <input type="checkbox" value={nominee.id} />
        </li>
      ))}
    </ul>
  );
};
