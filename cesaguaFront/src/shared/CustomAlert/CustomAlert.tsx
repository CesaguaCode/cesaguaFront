import "./alert.scss";

interface props {
  hook: any;
  children?: JSX.Element;
}

const Alert = ({ hook }: props) => {
  return (
    <section className={`backdrop ${hook.modalState}`}>
      <div className={`modal ${hook.modalState}`}>
        <button className="btn modal__close" onClick={hook.closeModal}>
          <i className="ico i__close" />
        </button>

        <h2>{hook.config.title}</h2>
        <p>{hook.config.detail}</p>
        {
          <div className="alert-button__container">
            
            {
              !hook.config.hideCancel && <button className="btn modal-btn__cancel">{hook.config.cancelText || "Cancelar"}</button>
            } {
              !hook.config.hideAccept &&<button className="btn modal-btn__confirm">{hook.config.acceptText || "Aceptar"} </button> 
            } 
            
          </div>
        }

        {hook.config.body}
      </div>
    </section>
  );
};

export default Alert;
