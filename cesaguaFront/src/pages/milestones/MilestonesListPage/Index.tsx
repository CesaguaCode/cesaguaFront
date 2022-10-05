import React from "react";
import MilestoneSection from "./components/MilestoneSection";
import "./milestonesListPage.scss";

import milestones from "./request.json"

const MilestonesListPage = () => {


  return (
    <React.Fragment>
      <h1 className="milestones-title">Hitos</h1>

        {
          milestones.map(milestone => <MilestoneSection {...milestone}/>)
        }

    </React.Fragment>
  );
};

export default MilestonesListPage;
