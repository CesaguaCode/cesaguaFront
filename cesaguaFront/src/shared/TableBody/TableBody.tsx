import { memo } from "react";
import TableCard from "../TableCard/TableCard";
import "./tableBody.scss";

interface props {
    elements: Array<any>,
    handleCard: any
}

const TableBody = ({elements, handleCard}:props) => {+
  console.log(elements);
  
  return (
    <main className="milestones-table__body">
      {elements && elements.map((element) => (
        <TableCard key={element.id} {...element} thumbnail={element.thumbnail || element.image} handler={handleCard} />
      ))}
    </main>
  );
};

export default memo(TableBody);
