import { memo, MouseEventHandler } from "react";
import { CONVERT_DATE_CARD } from "../../utils/Constants";

import "./tableCard.scss"

interface props {
  id: number;
  title: string;
  date?:string;
  description: string;
  thumbnail: string;
  handler: MouseEventHandler;
}

const TableCard = ({
  id,
  title,
  date,
  description,
  thumbnail,
  handler,
}: props) => {
  const buttons = ["delete", "edit"];



  return (
    <div className="table-card">
      <img src={thumbnail} alt={`Imagen del hito ${title}`} />

      <div className="table-card__details">
        <h2 className="table-card__title">{title}</h2>
        {date && <h3 className="table-card__date">{CONVERT_DATE_CARD(date)}</h3>}
        <p className="table-card__detail">{description} </p>
      </div>

      <div className="table-card__action-container">
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

export default memo(TableCard);
