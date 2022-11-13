import { Link } from 'react-router-dom';

import "./serviceCard.scss";

const ServiceCard = ({service}:any) => {
 
  return (
    <div className="service-card">
    <img className="service-card__img" src={service.thumbnail} alt="" />
    <div className="service-card__details">
      <h2>{service.title}</h2>
      <p>{service.description}</p>

      <Link to={`/services/${service.id}`} className="btn service-details__btn"> Más detalles </Link>
    </div>
  </div>
  )
}

export default ServiceCard