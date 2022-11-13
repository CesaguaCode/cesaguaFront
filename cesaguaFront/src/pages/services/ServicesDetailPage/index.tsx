import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AlertSystem from '../../../utils/AlertSystem'
import serviceService from '../serviceService'
import ContactCard from './components/ContactCard'
import ServiceExtras from './components/ServiceExtra'
import contacts from "../contacts.json";

import "./serviceDetailPage.scss"

const ServiceDetailPage = () => {
  const { getOne } = serviceService();
  const params = useParams();
  const navigate = useNavigate();

  const { toastAlert } = AlertSystem();
  const [service, setService] = useState<any>({});
  const [contact, setContact] = useState();


  const id = params.id || '0'

  useEffect(() => {
   
      getOne(parseInt(id))
        .then((response) => {

          if(response.state === 404){
            toastAlert("Error al cargar los datos", "error")
            navigate(-1)
          }
          setContact(response.data.contactId)
          setService(response.data);
        })
        .catch(() => {
          setService({});
          toastAlert("Error al cargar los datos", "error")
        });
  
  }, []);

  return (
    <React.Fragment>
      <div className="service-image__container">
        <img
          className="service-image__img"
          src={service.image}
        />
      </div>

      <section className="service-details">
        <div className="service-details__container">
          <div className="service-details__section">
            <div className="service-details__title-container">
              <h1 className="service-details__title">{service.title}</h1>
            </div>
            <p className="service-paragraph">{service.description}</p>
          </div>
        </div>

        { 
          service.details && JSON.parse(service.details).map((extra:any, index:number) => 
            <ServiceExtras key={index} title={extra.title} detail={extra.detail}></ServiceExtras>
          )
        }

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