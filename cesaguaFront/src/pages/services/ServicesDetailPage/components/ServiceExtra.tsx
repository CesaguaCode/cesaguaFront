interface props {
  title: string;
  detail: string;
}

const ServiceExtras = ({ title, detail }: props) => {
  return (
    <div className="service-details__container">
      <div className="service-details__section">
        <h2 className="service-details__title">{title}</h2>
        <p className="service-paragraph">{detail}</p>
      </div>
    </div>
  );
};

export default ServiceExtras;
