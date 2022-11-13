import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableBody from "../../../shared/TableBody/TableBody";
import TableHeader from "../../../shared/TableHeader/TableHeader";

import services from "./request.json";

const ServicesTablePage = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleAdd = () => {
    navigate("/services/create");
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
