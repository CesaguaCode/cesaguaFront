import React from "react";
import useMilestones from "../useMilestones";
import MilestoneSection from "./components/MilestoneSection";

import "./milestonesListPage.scss";

const MilestonesListPage = () => {

  const { milestones }:any = useMilestones();

  
  return (
    <React.Fragment>
      
      <h1 className="milestones-title">Hitos</h1>

        {
          milestones && milestones.map((milestone:any) => <MilestoneSection key={milestone.id} {...milestone}/>)
        }

    </React.Fragment>
  );
};

export default MilestonesListPage;
