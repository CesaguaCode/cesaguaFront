import "./main.scss";

interface props {
  children?: JSX.Element;
}

const Main = ({ children }: props) => {
  return <main className="main">{children}</main>;
};

export default Main;
