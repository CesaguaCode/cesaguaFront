import { useRef, useState } from 'react'
import AlertSystem from '../../../utils/AlertSystem';
import LoginInput from "../../login/LoginPage/components/LoginInput";

import "./Contact.scss"
import contactService from './contactService';

const Contact = () => {

  const {toastAlert} = AlertSystem();
  const {sendContactUsMail} = contactService();
  const [validatedFields, setValidatedFields] = useState({name: false, email: false, message:false})
  const [formFields, setFormFields] = useState({name: "",email: "", message: ""})
  
  const submitButton = useRef<HTMLButtonElement>(null)

  const handleInput = (e: any) => {
   
    setValidatedFields((previous) => {
      return { ...previous, [e.target.name]: e.target.value === "" };
    });
  
    setFormFields((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const inputs = [
    { isInvalid:validatedFields.name, name:'name', state:formFields.name, type:"text", icon:"i__user", label:"Nombre", handler:handleInput},
    { isInvalid:validatedFields.email, name:'email',state:formFields.email, type:"email", icon:"i__email", label:"Correo", handler:handleInput} 
  ]

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    
    setValidatedFields({name: formFields.name === "", email: formFields.email === "", message:formFields.message === ""})

    if( formFields.name === ""){
      return toastAlert("Debe ingresar un nombre", "error")
    }

    if( formFields.email === ""){
      return toastAlert("Debe ingresar un email", "error")
    }

    if( formFields.message === ""){
      return toastAlert("Debe ingresar un mensaje", "error")
    }

    // Disable the button   
    toggleSubmitButton(true);

    const response = await sendContactUsMail(formFields)

    if(response.state !== 200){
      toggleSubmitButton(false);
      return toastAlert("Hubo un error al validar su correo", "error")
    }

    toastAlert("Su correo se envió exitosamente", "error");
    setFormFields({name: "",email: "", message: ""})
    toggleSubmitButton(false);
   
    
  }

  const toggleSubmitButton = (state:boolean) => {
    if (submitButton.current) {
      submitButton.current.disabled = state
    };
  }

  return (
    <>
    
    <div className='contact__container'>

      <div className='contact__information-container animate__animated animate__backInLeft'>
        <div className='contact__information-card'> 
          <i className='ico i__phone'></i><br/> 
          <span className='contact__information-title'>Llámanos.</span>
          0000-0000
        </div>

        <div className='contact__information-card animate__animated animate__backInLeft'>
          <i className='ico i__influence'></i><br/><span className='contact__information-title'>Ubicación.</span> 
          Some address
        </div>

        <div className='contact__information-card animate__animated animate__backInLeft'>
          <i className='ico i__clock'></i><br/><span className='contact__information-title'>Horario de oficina.</span>
          L-V / 8:00 - 5:00
        </div>
      </div>

     
      <section className="contact__form login-container">
        <form className="login-card" onSubmit={handleSubmit} method="POST">

          { inputs.map((input, i)=> <LoginInput key={i} {...input}></LoginInput>) }

          <label className='contact__label' htmlFor="message"><i className='ico i__info'></i> Mensaje</label>
          <textarea className='contact__text-area' id='message' value={formFields.message} name="message" onChange={handleInput}></textarea>
         
          <button className='btn contact__submit' ref={submitButton}>Enviar</button>

        </form>
      </section>

    </div>
    
    </>
  )
}

export default Contact