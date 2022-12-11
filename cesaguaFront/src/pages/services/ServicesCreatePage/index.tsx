import placeholder from "../../../assets/images/imageUpload.svg";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ContactCard from "../ServicesDetailPage/components/ContactCard";

import contacts from "../contacts.json";
import EditableServiceExtra from "./EditableServiceExtra";

import "./serviceCreatePage.scss";
import useImageSystem from "../../../hooks/useImageSystem";
import AlertSystem from "../../../utils/AlertSystem";
import serviceService from "../serviceService";

const { promiseAlert, toastAlert } = AlertSystem();

const ServiceCreatePage = () => {

  const navigate = useNavigate();
  const params = useParams();

  const { id } = params;
  const [image, setImage] = useState("");

  const { downscaleImage, thumbnailImage } = useImageSystem();
  const { toastAlert } = AlertSystem();
  const { createOne, updateOne, getOne} = serviceService();

  const [selectedContact, setSelectedContact] = useState(contacts[0].id);

  const [mainData, setMainData] = useState({
    main_title: "",
    main_description: "",
  });

  const [serviceExtras, setServiceExtras] = useState<any>([]);

  const handleChange = (e: any) => {
    setSelectedContact(e.target.value);
  };

  const handleDelete = (id: number) => {
    serviceExtras.splice(id,1)
   
    setServiceExtras((prev:any) => {
      const newExtras = prev
      console.log(newExtras);
      return([...newExtras])
    });
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;

    if (name.includes("description")) {
      e.target.style.height = "inherit";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    if (name.includes("main")) {
      setMainData((prev) => {
        return { ...prev, [name]: value };
      });
    } else {
      const updated = { ...serviceExtras[e.target.dataset.id] };
      updated[name.split("-")[0]] = value;
      
      setServiceExtras((prev: any) => {
        
        const newArray = [...prev]
        newArray[e.target.dataset.id] = updated;
        return newArray;
      });
    }
  };

  const handleAdd = async () => {
    
    if(!validateData()){
      return 
    }
 
    // Remove empty extras
    const validExtras = serviceExtras.filter((service:any) => service.title && service.description)
   

    const service = {
      title: mainData.main_title, 
      description: mainData.main_description, 
      details: validExtras,
      image: image,
      thumbnail: await thumbnailImage(image),
      contactId: selectedContact
    }

    try {
      const res = id ? await updateOne({id:parseInt(id), ...service}) : await createOne(service);

      if (res.state === 201 || res.state === 200) {
        toastAlert(
          `El servicio se ${id ? "editó" : "creó"} exitosamente`,
          "success"
        );
        navigate("/services/crud");
      }
    } catch (error: any) {

      if (error.response && error.response.status === 403) {
        toastAlert("No tiene permisos para realizar esta acción", "error");
      }
    }
    
  }

  const validateData = () => {


    if (!mainData.main_title) {
      //shakeInput(titleRef);
      toastAlert("Debe agregar un título principal", "error");
      return false;
    }

    if (!mainData.main_description) {
      //shakeInput(dateRef);
      toastAlert("Debe agregar una descripción principal", "error");
      return false;
    }

    if (!image) {
      //shakeInput(descriptionRef);
      toastAlert("Debe agregar una imagen", "error");
      return false;
    }

    if (serviceExtras.filter((service:any) => (service.title && !service.description) ).length > 0) {
      toastAlert("Hay un extra sin descripción", "error");
      return false;
    }

    if (serviceExtras.filter((service:any) => (!service.title && service.description) ).length > 0) {
      toastAlert("Hay un extra sin título", "error");
      return false;
    }

    return true;
  };

  const handleGoBack = () => {
    if (mainData.main_description || mainData.main_title || image || serviceExtras.length > 0) {
      promiseAlert(
        "Atención",
        `Seguro desea cancelar,  ${
          id ? "el servicio no se modificará" : "perderá los datos agregados"
        }`
      ).then((result: any) => result.isConfirmed && navigate(-1));
    } else {
      navigate(-1);
    }
  }

  const addExtra = () => {
    setServiceExtras((prev: any) => [...prev, { title: "", description: "" }]);
  };

  const handlePicture = async (event: any) => {
    const file = event.target.files[0];

    if (!file) {
      setImage((prev: any) => "");
      return;
    }

    if (!file.type.includes("image")) {
      return toastAlert("No es una imagen válida", "error");
    }

    const resized = await downscaleImage(file);

    setImage((prev: any) => resized);
  };

  const getEditable = async (id: number) => {
    const res = await getOne(id);
   
    
    if (res.state === 200) {
      setImage(res.data.image);
      setMainData({main_title: res.data.title, main_description: res.data.description})
      setSelectedContact(res.data.contactId)
      setServiceExtras(JSON.parse(res.data.details))
    } else {
      toastAlert("Surgió un error al obtener el servicio", "error");
      return navigate("/services/crud");
    }
  };

  useEffect(() => {
    if (id) {
      getEditable(parseInt(id));
    }
  }, []);

  return (
    <React.Fragment>
   
      <div className="service-image__container">
        <label htmlFor="image">
          <img
            className="service-image__img service-create__img"
            src={image ? image : placeholder}
            alt={`Imagen de servicio`}
          />
        </label>
        <input
          type="file"
          name="image"
          hidden
          id="image"
          accept="image/png, image/jpg, image/jpeg, image/webp"
          onChange={handlePicture}
        />
      </div>

      <section className="service-details">
        <div className="service-details__container">
          <div className="service-details__section">
            <div className="service-details__title-container">
              <div className="service-details__title">
                <input
                  className="service__input-title"
                  type="text"
                  name="main_title"
                  value={mainData.main_title}
                  placeholder="Título del servicio"
                  onChange={handleInput}
                />
              </div>
            </div>

            <textarea
              className="service__text-area"
              name="main_description"
              value={mainData.main_description}
              placeholder="Ingrese una descripción principal"
              onChange={handleInput}
            ></textarea>
          </div>
        </div>

        {serviceExtras.map((extra: any, id: number) => {
          return (
            <EditableServiceExtra
              id={id}
              key={id}
              handleDelete={handleDelete}
              handleInput={handleInput}
              title= {extra.title}
              description= {extra.description}
            />
          );
        })}

        <div className="service-details__container">
          <button className="btn add_service-extra" onClick={addExtra}>
            Agregar una categoría extra
          </button>
          <div className="service-details__section">
            <div className="service-details__title-container">
              <h2 className="service-details__title">Contacto</h2>
            </div>

            <select
              className="service__contact-select"
              name="contact"
              id="contact"
              value={selectedContact}
              onChange={handleChange}
            >
              {contacts.map((contact) => (
                <option key={contact.id} value={contact.id}>
                  {contact.name} - {contact.position}
                </option>
              ))}
            </select>

            <ContactCard
              {...(contacts.find(
                (contact) => contact.id == selectedContact
              ) as any)}
            ></ContactCard>

            <div className="milestones-create__button-container">
              <button className="btn btn-cancel" onClick={handleGoBack}>
                Cancelar
              </button>
              <button className="btn btn-save" onClick={handleAdd}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ServiceCreatePage;
