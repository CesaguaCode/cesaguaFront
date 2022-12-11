
import useInterceptor from "../../hooks/useInterceptor";
import { BACK_HOST } from "../../utils/Constants";

const loginService = () => {
  const URL: string =`${BACK_HOST}/login`;
  const { postData } = useInterceptor();

  
  const validateLogin = async (userData:any) => {
    return await postData(URL, {email: userData.email, password: userData.password})
  }


  const existEmail = async (email:string) => {
    return await postData(`${URL}/exists`, {email})
  }


  const isValidToken = async (userData:any) => {
    return await postData(`${URL}/validToken`, {mail: userData.email, password: userData.password})
  }


  const resetEmail = async (id:any)=> {
    return await postData(`${URL}/resetEmail`, {id: id})
  }


  const resetPassword = async (id:any, password:any) => {
    return await postData(`${URL}/reset`, {id: id, password: password})
  }


  return { validateLogin, existEmail, isValidToken, resetEmail, resetPassword};
};

export default loginService;
