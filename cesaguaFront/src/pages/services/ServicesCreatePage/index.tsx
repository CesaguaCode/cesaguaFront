import placeholder from "../../../assets/images/imageUpload.svg";

import React, { useState } from "react";
import ContactCard from "../ServicesDetailPage/components/ContactCard";

import contacts from "./contacts.json";
import EditableServiceExtra from "./EditableServiceExtra";

import "./serviceCreatePage.scss";
import useImageSystem from "../../../hooks/useImageSystem";
import AlertSystem from "../../../utils/AlertSystem";
const ServiceCreatePage = () => {
  const [image, setImage] = useState("");

  const { downscaleImage } = useImageSystem();
  const { toastAlert } = AlertSystem();

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
    console.log(id);

    setServiceExtras((prev: any) => {
      console.log(prev[id]);
      const actual = prev.splice(id, 1);
      

      return [...prev];
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
        prev[e.target.dataset.id] = updated;
        return prev;
      });
    }
  };

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
              <button className="btn btn-cancel" onClick={() => {}}>
                Cancelar
              </button>
              <button className="btn btn-save" onClick={() => {}}>
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
