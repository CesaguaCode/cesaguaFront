import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from "react";
import AlertSystem from "../../../utils/AlertSystem";
import loginService from "../loginService";

const useRecover = () => {
  const { existEmail } = loginService();
  const [email, setEmail] = useState("");
  const [validatedFields, setValidatedFields] = useState(false);
  const {toastAlert, promiseSimpleAlert} = AlertSystem()
  const navigate = useNavigate()

  const service = loginService()

  const handleInput = (e: any) => {
    setValidatedFields(e.target.value === "");
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if( email === ""){
      return toastAlert("Debe ingresar un correo", "error")
    }

    const response = await existEmail(email)
   
    if(response.state !== 200){
      return toastAlert("Error al validar el correo", "error")
    }

    const mailState = await service.resetEmail(response.data.id);
    
    if(mailState.state  !== 200){
      return toastAlert("Error al enviar el correo, inténtelo mas tarde", "error")
    }

    promiseSimpleAlert("¡Atención!","Verifique su correo para continuar con la recuperación")
    .then( async () => { navigate("/login")})

  };

  return {handleSubmit, email, handleInput, validatedFields};
};

export default useRecover;
