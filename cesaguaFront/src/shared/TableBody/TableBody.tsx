import { memo } from "react";
import TableCard from "../TableCard/TableCard";
import "./tableBody.scss";

interface props {
    elements: any,
    handleCard: any
}

const TableBody = ({elements, handleCard}:props) => {
  
  return (
    <main className="milestones-table__body">
      {elements && elements.map((element:any) => (
        <TableCard key={element.id} {...element} thumbnail={element.thumbnail || element.image} handler={handleCard} />
      ))}
    </main>
  );
};

export default memo(TableBody);
