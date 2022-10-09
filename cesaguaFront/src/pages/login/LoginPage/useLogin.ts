import { FormEvent, useState } from "react";

const useLogin = () => {
  
  const [loginData, setloginData] = useState({ email: "", password: "" });

  const handleInput = (e: any) => {
    setloginData((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return { handleSubmit, handleInput, loginData };
};

export default useLogin;
