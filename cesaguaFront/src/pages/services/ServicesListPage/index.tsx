import ServiceCard from "./components/ServiceCard";
import ServiceHeading from "./components/ServiceHeading";
import "./servicesListPage.scss";

const ServicesListPage = () => {
  return (
    <section>
        <ServiceHeading />


        <div className="service-card-container">
        {
            [1,2,3,4,5].map((id) => 
               <ServiceCard key={id} />
            )
                
            
        }
        </div>

    </section>
      
  );
};

export default ServicesListPage;
