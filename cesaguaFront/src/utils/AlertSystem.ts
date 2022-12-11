import { Icon } from 'leaflet';
import withReactContent from "sweetalert2-react-content";
import "animate.css";
import Swal from "sweetalert2";
import "@sweetalert2/theme-bulma/bulma.scss";

const AlertSystem = () => {
  const MySwal = withReactContent(Swal);

  const simpleAlert = (title: string, detail?: string) => {
    MySwal.fire({
      title: title,
      text: detail,
      confirmButtonText: "Aceptar",
      customClass: {
        confirmButton: "confirm-alert",
      },

      showCloseButton: true,
      showClass: {
        popup: "animate__animated animate__fadeInLeft",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutRight",
      },
    });
  };

  const promiseSimpleAlert = async (title: string, detail?: string) => {
    return new Promise((res) => {
      MySwal.fire({
        title: title,
        text: detail,
        confirmButtonText: "Confirmar",
        customClass: {
          confirmButton: "confirm-alert",
        },
        showCancelButton: false,
        showCloseButton: false,
        showClass: {
          popup: "animate__animated animate__fadeInLeft",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
      }).then((response) => res(response));
    });
  };

  const promiseAlert = async (title: string, detail?: string) => {
    return new Promise((res) => {
      MySwal.fire({
        title: title,
        text: detail,
        confirmButtonText: "Si, confirmar",
        cancelButtonText: "No, volver",
        customClass: {
          cancelButton: "cancel-alert",
          confirmButton: "confirm-alert",
        },
        showCancelButton: true,
        showCloseButton: true,
        showClass: {
          popup: "animate__animated animate__fadeInLeft",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
      }).then((response) => res(response));
    });
  };

  const toastAlert = (title: string, icon:"success" | "error") => {
    MySwal.fire({
      title: title,
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      icon: icon,
      showClass: {
        popup: "animate__animated animate__fadeInRight",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutRight",
      },
    });
  };

  return { simpleAlert, promiseAlert, toastAlert, promiseSimpleAlert };
};

export default AlertSystem;
