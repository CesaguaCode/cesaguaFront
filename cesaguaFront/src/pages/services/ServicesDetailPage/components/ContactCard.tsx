import "./contactCard.scss";

interface props {
  name: string;
  position: string;
  mail: string;
  phone: string;
  picture: string;
}

const ContactCard = ({ name, position, mail, phone, picture }: props) => {
  return (
    <div className="contact-card">
      <img className="contact-card__img" src={picture} alt="" />

      <div className="contact-data__container">
        <h2 className="contact-data__name">{name}</h2>
        <h3 className="contact-data__position">{position}</h3>

        <p>{mail}</p>
        <p>+506 {phone}</p>
      </div>
    </div>
  );
};

export default ContactCard;
