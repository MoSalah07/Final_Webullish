import React from "react";
// Components
import DynamicForm from "./DynamicForm";

import CreateYoutube from "./createComponents/CreateYoutube";
import CreateFacebook from "./createComponents/CreateFacebook";
import CreateInstagram from "./createComponents/CreateInstagram";
import CreateTwitter from "./createComponents/CreateTwitter";
import CreateLinkedin from "./createComponents/CreateLinkedin";

function CreateLive({ setIsCreated }) {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-primary-text text-xl capitalize font-semibold">
          add new live
        </h3>
      </div>
      <h5 className="mb-5 capitalize text-base font-semibold">
        Add new all platform live
      </h5>
      {/* Facebook */}
      <CreateFacebook setIsCreated={setIsCreated} />
      {/* Twitter */}
      <CreateTwitter setIsCreated={setIsCreated} />
      {/* Youtube */}
      <CreateYoutube setIsCreated={setIsCreated} />
      {/* instagram */}
      <CreateInstagram setIsCreated={setIsCreated} />
      {/* linkedin */}
      <CreateLinkedin setIsCreated={setIsCreated} />
    </div>
  );
}

export default CreateLive;
