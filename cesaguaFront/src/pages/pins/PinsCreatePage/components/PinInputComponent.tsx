import usePinInputComponent from "./usePinInputComponent";

const PinInputComponent = ({
  newMarker,
  setNewMarker,
  setZoom,
  handleName,
  handleCreate,
  handleCancel,
  nameRef,
}: any) => {
  const { handleAddress, posInput, selectInput } = usePinInputComponent({
    newMarker,
    setNewMarker,
    setZoom,
  });

  return (
    <div className="pin-inputs__container">
      <h3 className="pin-inputs__subtitle">Datos del sitio</h3>

      <div
        className="input-group"
        ref={nameRef}
        onAnimationEnd={() => {
          nameRef.current.style.animation = "";
        }}
      >
        <label htmlFor=""> Nombre</label>
        <input type="text" value={newMarker.name} onInput={handleName} />
      </div>

      <div className="positional-input__container">
        {posInput.map(({ label, value }) => (
          <div className="input-group" key={label}>
            <label htmlFor={label}>{label}</label>
            <input type="text" id={label} value={value} disabled />
          </div>
        ))}
      </div>

      {selectInput.map(({ label, name, value, childrens }) => (
        <div className="input-group" key={name}>
          <label htmlFor={name}> {label}</label>
          <select name={name} id={name} onInput={handleAddress} value={value}>
            {childrens.map((child: any) => (
              <option key={child} value={child}>
                {child}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="buttons-container">
        <button className="btn btn-cancel" onClick={handleCancel}>
          Cancelar
        </button>
        <button className="btn btn-save" onClick={handleCreate}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default PinInputComponent;
