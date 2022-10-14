import AuthRouter from "./routers/AuthRouter";
import { UserProvider } from "./contexts/AuthContext";

import "./assets/styles/reset.scss";

function App() {

  return (
    <UserProvider>
      <AuthRouter></AuthRouter>
    </UserProvider>
  );
}

export default App;
