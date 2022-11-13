interface props {
  id: number;
  handleInput: any;
  handleDelete: any;
}

const EditableServiceExtra = ({ id, handleInput, handleDelete }: props) => {
  return (
    <div className="service-details__container">

      <div className="service-details__section">
        <div className="service-details__title-container">
          <div className="service-details__title">
            {/*
              TODO: Implementar boton de eliminar un extra
              <button
              className="btn service-remove__extra"
              onClick={() => handleDelete(id)}
            >
              X{" "}
            </button>

            */}

            <input
              className="service__input-title"
              type="text"
              name={`title-${id}`}
              placeholder="Título del extra"
              data-id={id}
              onChange={handleInput}
            />
          </div>
        </div>

        <textarea
          className="service__text-area"
          name={`description-${id}`}
          placeholder="Ingrese una descripción"
          data-id={id}
          onChange={handleInput}
        ></textarea>
      </div>
    </div>
  );
};

export default EditableServiceExtra;
