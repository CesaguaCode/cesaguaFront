import placeholder from "../../../assets/images/imageUpload.svg";
import useCreateMilestones from "./useCreateMilestones";
import "./milestonesCreatePage.scss";

const MilestonesCreatePage = () => {

  const {
    id,
    milestoneData,
    handleInput,
    handleRemoveImage,
    handleCancel,
    handleCreate,
    pageRefs,
    clearAnimation,
    handlePicture,
  } = useCreateMilestones();

  const { date, title, description, image } = milestoneData;
  const { titleRef, dateRef, descriptionRef, imageRef }: any = pageRefs;

  return (
    <>
      <h1 className="milestone-create__title"> {id? "Edición" : "Creación"} de un hito</h1>
      <div></div>

      <section className={`milestones-section`}>
        <div
          className="milestones-section__image-container"
          ref={imageRef}
          onAnimationEnd={clearAnimation}
        >
          <label htmlFor="image">
            <img
              className="milestones-section__image milestones-create__image"
              src={image ? image : placeholder}
              alt={`Imagen de hito de ${title}`}
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

          <button
            className={`remove-image ${image && "remove-image__visible"}`}
            onClick={handleRemoveImage}
          />

          <p className="milestones-section__placeholder-text">
            Click para {image ? "cambiar la " : "agregar una "}imagen
          </p>
        </div>

        <div className="milestones-create__details milestones-details">
          <input
            type="text"
            className="milestones-create__title  milestones-details__title"
            placeholder="Agregar título"
            onChange={handleInput}
            value={title}
            name={"title"}
            ref={titleRef}
            onAnimationEnd={clearAnimation}
          ></input>

          <div
            className="input-group"
            ref={dateRef}
            onAnimationEnd={clearAnimation}
          >
            <input
              type="month"
              id="date"
              className="milestones-create__date milestones-details__date "
              onChange={handleInput}
              placeholder="Seleccione una fecha"
              value={date}
              name={"date"}
            />
            <label
              className={`input-date-label ${date ? "invisible-label" : ""}`}
              htmlFor="date"
            >
              Seleccione una fecha
            </label>
          </div>

          <textarea
            placeholder="Agregar descripción del hito"
            className="milestones-create__description milestones__description"
            onChange={handleInput}
            value={description}
            name={"description"}
            ref={descriptionRef}
            onAnimationEnd={clearAnimation}
          ></textarea>
        </div>
      </section>

      <div className="milestones-create__button-container">
        <button className="btn btn-cancel" onClick={handleCancel}>
          Cancelar
        </button>
        <button className="btn btn-save" onClick={handleCreate}>
          Guardar
        </button>
      </div>
    </>
  );
};

export default MilestonesCreatePage;
