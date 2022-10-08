import React from "react";
import MilestoneSection from "./components/MilestoneSection";

import "./milestonesListPage.scss";
import "animate.css";

import milestones from "./request.json"

const MilestonesListPage = () => {

  return (
    <React.Fragment>
      
      <h1 className="milestones-title">Hitos</h1>

        {
          milestones.map((milestone) => <MilestoneSection key={milestone.id} {...milestone}/>)
        }

    </React.Fragment>
  );
};

export default MilestonesListPage;
