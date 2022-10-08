import { useState, Fragment } from "react";

const MODAL_STATE = { CLOSED: "closed", OPENED: "open" };

interface config{
  title?: string,
  detail?: string,
  body?: JSX.Element,
  hideCancel?: boolean,
  hideAccept?:boolean,
  acceptText?: string,
  cancelText?: string
}

const useAlert = () => {
  const [modalState, setModalState] = useState("");

  const [config, setConfig] = useState<config>({});

  const openModal = () => {
    setModalState(MODAL_STATE.OPENED);
  };

  const closeModal = () => {
    setModalState(MODAL_STATE.CLOSED);
  };

  const launch = (config:config)=>{
    setConfig(config)
    openModal();
  }

  return { modalState, closeModal, openModal, config, launch };
};

export default useAlert;