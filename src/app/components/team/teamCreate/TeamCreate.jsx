import React from "react";
// Components
import AddTeamMembers from "./AddTeamMembers";

function TeamCreate({ setIsCreated }) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg capitalize">add new team</h3>
      </div>
      <AddTeamMembers setIsCreated={setIsCreated} />
    </div>
  );
}

export default TeamCreate;
