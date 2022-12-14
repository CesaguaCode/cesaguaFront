import TableHeader from "../../../shared/TableHeader/TableHeader";
import TableBody from "../../../shared/TableBody/TableBody";

import useMilestones from "../useMilestones";
import "./MilestonesTablePage.scss";

const MilestonesTablePage = () => {
  const { search, milestones,filtered, handleAdd, handleSearch, handleCard } =
    useMilestones();

  return (
    <>
      <section className="milestones-table">
        <TableHeader
          title="hitos"
          search={search}
          handleAdd={handleAdd}
          handleSearch={handleSearch}
        />

        <TableBody elements={filtered ? filtered : milestones} handleCard={handleCard}></TableBody>
      </section>
    </>
  );
};

export default MilestonesTablePage;
