import React, {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import jwt_decode from "jwt-decode";

import User from "../models/User";
import loginService from "../pages/login/loginService";

const AuthContext = createContext<
  [User, React.Dispatch<SetStateAction<User>>] | null
>(null);

const useUser = () => {
  const [user, setUser] = useContext(AuthContext) as any;
  return { user, setUser };
};

interface props {
  children?: JSX.Element;
}

const UserProvider = ({ children }: props) => {
  const { isValidToken } = loginService();
  const authUser = useState<User>({ rol: 0 });

  const token = localStorage.getItem("token");

  useEffect(() => {
    token && isValidToken(token).then((res) => {
      if (res.status !== 200) {
        localStorage.removeItem("token");
      }

      const userData: any = jwt_decode(token || "");
      authUser[1](userData.auth);
    });
  }, []);

  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};

export { UserProvider, useUser };
