import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

interface props {
  children?: JSX.Element;
}

const PageTemplate = ({ children }: props) => {
  return (
    <div className="body-wrapper">
      <Header/>
      <Main><Outlet/></Main>
      <Footer/>
    </div>
  );
};

export default PageTemplate;
