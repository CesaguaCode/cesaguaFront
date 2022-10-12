import { memo } from "react";
import { CONVERT_DATE_CARD } from "../../../../utils/Constants";

interface props {
  title: string;
  date: string;
  image: string;
  description: string;
}

const MilestoneSection = ({ title, date, image, description }: props) => {
  return (
    <section className={`milestones-section`}>

      <div className="milestones-section__image-container">
        <img
          className="milestones-section__image"
          src={image}
          alt={`Imagen de hito de ${title}`}
        />
      
      </div>

      <div className="milestones-details">
        <header className="miletones-details__header">
          <h2 className="milestones-details__title">{title}</h2>
          <h3 className="milestones-details__date">{CONVERT_DATE_CARD(date)}</h3>
        </header>
        <p>{description}</p>
      </div>
      
    </section>
  );
};

export default memo(MilestoneSection);
