import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableBody from "../../../shared/TableBody/TableBody";
import TableHeader from "../../../shared/TableHeader/TableHeader";
import useServices from "../useServices";



const ServicesTablePage = () => {

  const navigate = useNavigate();

  const {handleSearch, search, handleCard, services} = useServices()

  const handleAdd = () => {
    navigate("/services/create");
  };

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
