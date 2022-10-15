import { FormEvent, useState } from "react";

const useRecover = () => {
  
  const [email, setEmail] = useState("");
  const [validatedFields, setValidatedFields] = useState(false);


  
  const handleInput = (e: any) => {

    setValidatedFields(e.target.value === "");


    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return {handleSubmit, email, handleInput, validatedFields};
};

export default useRecover;
