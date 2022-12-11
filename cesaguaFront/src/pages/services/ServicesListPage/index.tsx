import { useEffect, useRef, useState } from "react";
import useMemory from "../../../hooks/useMemory";
import serviceService from "../serviceService";
import ServiceCard from "./components/ServiceCard";
import ServiceHeading from "./components/ServiceHeading";
import "./servicesListPage.scss";

const ServicesListPage = () => {
  const { getAll } = serviceService();
  const { obtainMemory, updateMemory } = useMemory();
  const [services, setServices] = useState([]);

  useEffect(() => {
    // We load what is memorized if the time limit has not passed.
    const memorizedMilestones = obtainMemory("services");

    if (memorizedMilestones!.state) {
      setServices(memorizedMilestones!.data);
    } else {
      getAll()
        .then((response) => {
          updateMemory("services", response.data);
          setServices(response.data);
        })
        .catch(() => {
          setServices([]);
        });
    }
  }, []);

  return (
    <section>
      <ServiceHeading />

      <div className="service-card-container">
        {services.map((service:any) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesListPage;
