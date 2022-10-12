import { memo } from "react";
import TableCard from "../TableCard/TableCard";
import "./tableBody.scss";

interface props {
    elements: Array<any>,
    handleCard: any
}

const TableBody = ({elements, handleCard}:props) => {
  return (
    <main className="milestones-table__body">
      {elements.map((element) => (
        <TableCard key={element.id} {...element} handler={handleCard} />
      ))}
    </main>
  );
};

export default memo(TableBody);
