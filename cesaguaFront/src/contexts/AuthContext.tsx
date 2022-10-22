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

  const { isValidToken } = loginService();
  const token = localStorage.getItem("token");

  const fetchToken = async () => {
    const res = await isValidToken(token);

    if (res.status !== 200) {
      localStorage.removeItem("token");
    }

    const userData: any = jwt_decode(token || "");
    setUser(userData.auth);
  };

  useEffect(() => {
    token && fetchToken();
  }, []);

  return { user, setUser };
};

interface props {
  children?: JSX.Element;
}

const UserProvider = ({ children }: props) => {
  const authUser = useState<User>({});

  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};

export { UserProvider, useUser };
