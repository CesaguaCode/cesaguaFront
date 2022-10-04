import "./assets/styles/reset.scss";
import AuthRouter from "./routers/AuthRouter";
import { UserProvider } from "./contexts/AuthContext";

function App() {
  return (
    <UserProvider>
      <AuthRouter></AuthRouter>
    </UserProvider>
  );
}

export default App;
