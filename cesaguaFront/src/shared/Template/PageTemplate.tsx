import { Outlet } from "react-router-dom";
import Footer from "../Footer/Index";
import Header from "../Header/Index";
import Main from "../Main/Index";

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
