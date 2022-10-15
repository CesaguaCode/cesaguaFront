import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { useState } from 'react';
import jwt_decode from "jwt-decode";

import loginService from './loginService';
import AlertSystem from '../../utils/AlertSystem';
import { useUser } from '../../contexts/AuthContext';

const useLogin = () => {
    const { validateLogin } = loginService();
    const [loginData, setloginData] = useState({ email: "Testing.node@outlook.com", password: "1231321" });
    const [validatedFields, setValidatedFields] = useState({email:false, password:false});
    const { setUser } = useUser();

    const navigate = useNavigate();

    const handleInput = (e: any) => {

      setValidatedFields((previous) => {
        return { ...previous, [e.target.name]: e.target.value === "" };
      });

      setloginData((previous) => {
        return { ...previous, [e.target.name]: e.target.value };
      });
    };
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();

        validateLogin(loginData).then(result => {

            if(result.status !== 200){
                return AlertSystem().toastAlert("Los datos no son válidos","error")
            }
           
            localStorage.setItem("token", result.token);
            const userData:any = jwt_decode(result.token);
            setUser(userData.auth)

            navigate("/")

        });
         

    };
  
    return { handleSubmit, handleInput, loginData, validatedFields};

   
}

export default useLogin