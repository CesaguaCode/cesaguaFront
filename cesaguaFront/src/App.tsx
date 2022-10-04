import Header from "./shared/Header/Header";
import Main from "./shared/Main/Main";
import Footer from "./shared/Footer/Footer";

import "./assets/styles/reset.scss"
import AuthRouter from "./routers/AuthRouter";

function App() {
  return (
    <div className="body-wrapper">
      <Header></Header>
      <Main>
        <AuthRouter></AuthRouter>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
