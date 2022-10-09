import { FormEvent, useState } from "react";

const useRecover = () => {
  
  const [email, setEmail] = useState("");

  const handleInput = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return {handleSubmit, email, handleInput};
};

export default useRecover;
