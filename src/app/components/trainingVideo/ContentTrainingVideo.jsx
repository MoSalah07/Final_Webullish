import React, {useState} from "react";
import TrainingCard from "./TrainingCard";

function ContentTrainingVideo({ trainingVideoArr }) {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
    };
    

    console.log(trainingVideoArr.map(item => item['video Description']))

  return (
    <div>
      {trainingVideoArr &&
        Array.isArray(trainingVideoArr) &&
        trainingVideoArr.map((training, index) => (
          <TrainingCard
            key={training.id}
            {...training}
            open={index === open}
            toggle={() => toggle(index)}
          />
        ))}
    </div>
  );
}

export default ContentTrainingVideo;
