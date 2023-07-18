import React from "react";
import UploadImage from "./UploadImage";
import AddTeamMembers from "./AddTeamMembers";

function TeamCreate({ setIsCreated }) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg capitalize">add new team</h3>
      </div>
      <UploadImage title={`team`} />
      <AddTeamMembers setIsCreated={setIsCreated} />
    </div>
  );
}

export default TeamCreate;
