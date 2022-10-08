import { memo, MouseEventHandler } from "react";

interface props {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  handler: MouseEventHandler;
}

const MilestoneCard = ({ id, title, date, description, image, handler }: props) => {
  const buttons = ["delete", "edit"];

  return (
    <div className="milestones-card">
      <img src={image} alt={`Imagen del hito ${title}`}/>

      <div className="milestones-card__details">
        <h2 className="milestones-card__title">{title}</h2>
        <h3 className="milestones-card__date">{date}</h3>
        <p className="milestones-card__detail">{description} </p>
      </div>

      <div className="milestones-card__action-container">
        {buttons.map((button) => (
          <button
            key={button}
            className={`btn btn__${button}`}
            name={button}
            onClick={handler}
            id={`${id}`}
            data-title={title}
          >
            <i className={`ico i__${button}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(MilestoneCard);