import { Link } from 'react-router-dom';

import "./serviceCard.scss";

const ServiceCard = () => {
  return (
    <div className="service-card">
    <img className="service-card__img" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wyTq?ver=c8e5" alt="" />
    <div className="service-card__details">
      <h2>Lorem Ipsum</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        eveniet culpa quidem soluta molestiae? Incidunt fuga eaque sequi
        consectetur, iure saepe, commodi assumenda vel, accusamus ratione
        porro consequuntur temporibus nihil!
      </p>

      <Link to="/services/Some_Service" className="btn service-details__btn"> Más detalles </Link>
    </div>
  </div>
  )
}

export default ServiceCard