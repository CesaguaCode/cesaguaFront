import { FormEvent, useState } from "react";

const useReset = () => {
  
  const [loginData, setloginData] = useState({ password: "", repassword: "" });

  const handleInput = (e: any) => {
    setloginData((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return { handleSubmit, loginData, handleInput };
};

export default useReset;
