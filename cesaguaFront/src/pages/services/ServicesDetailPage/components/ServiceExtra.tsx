interface props {
  title: string;
  description: string;
}

const ServiceExtras = ({ title, description }: props) => {
  console.log(description);
  
  return (
    <div className="service-details__container">
      <div className="service-details__section">
        <h2 className="service-details__title">{title}</h2>
        <p className="service-paragraph">{description}</p>
      </div>
    </div>
  );
};

export default ServiceExtras;
