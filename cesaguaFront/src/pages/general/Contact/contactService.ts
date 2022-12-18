
import useInterceptor from "../../../hooks/useInterceptor";
import { BACK_HOST } from "../../../utils/Constants";

const contactService = () => {
  const URL: string =`${BACK_HOST}/utils/mail/contact-us`;
  const { postData } = useInterceptor();

  
  const sendContactUsMail = async (mailData:any) => {
    return await postData(URL, {email: mailData.email,name: mailData.name, message: mailData.message})
  }

  return {sendContactUsMail}


};

export default contactService;
