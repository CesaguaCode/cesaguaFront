import { useState } from "react";
import TableBody from "../../../shared/TableBody/TableBody";
import TableHeader from "../../../shared/TableHeader/TableHeader";

import services from "./request.json";

const ServicesTablePage = () => {
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    console.log("Agregando");
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleCard = (e: any) => {};

  return (
    <>
      <section className="milestones-table">
        <TableHeader
          title="servicios"
          search={search}
          handleAdd={handleAdd}
          handleSearch={handleSearch}
        />

        <TableBody elements={services} handleCard={handleCard}></TableBody>
      </section>
    </>
  );
};

export default ServicesTablePage;
