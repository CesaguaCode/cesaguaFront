import { FormEvent, useState } from "react";

const useReset = () => {
  
  const [loginData, setloginData] = useState({ password: "", repassword: "" });
  const [validatedFields, setValidatedFields] = useState({password:false, repassword:false});
  
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
  };

  return { setValidatedFields, handleSubmit, loginData, validatedFields, handleInput };
};

export default useReset;
