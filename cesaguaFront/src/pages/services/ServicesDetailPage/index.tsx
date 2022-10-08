import React from 'react'
import ContactCard from './components/ContactCard'
import ServiceExtras from './components/ServiceExtra'

import "./serviceDetailPage.scss"

const ServiceDetailPage = () => {
  return (
    <React.Fragment>
      <div className="service-image__container">
        <img
          className="service-image__img"
          src="https://umbvirtual.edu.co/wp-content/uploads/2019/10/1_ingenieria-ambiental.jpg"
        />
      </div>

      <section className="service-details">
        <div className="service-details__container">
          <div className="service-details__section">
            <div className="service-details__title-container">
              <h1 className="service-details__title">Ingeniería ambiental</h1>
            </div>
            <p className="service-paragraph">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure.
            </p>
          </div>
        </div>

        <ServiceExtras title="Características" detail="But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the
        great explorer of the truth, the master-builder of human
        happiness. No one rejects, dislikes, or avoids pleasure itself,
        because it is pleasure, but because those who do not know how to
        pursue pleasure rationally encounter consequences that are
        extremely painful. Nor again is there anyone who loves or pursues
        or desires to obtain pain of itself, because it is pain, but
        because occasionally circumstances occur in which toil and pain
        can procure him some great pleasure."></ServiceExtras>

        <div className="service-details__container">
          <div className="service-details__section">
            <div className="service-details__title-container">
              <h2 className="service-details__title">Contacto</h2>
            </div>
            <ContactCard
              name="Jane Doe"
              position="Consultor"
              mail="Jane@gmail.com"
              phone="2710 9999"
              picture="https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg"
            ></ContactCard>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ServiceDetailPage