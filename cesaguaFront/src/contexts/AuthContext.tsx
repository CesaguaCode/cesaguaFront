import React, { createContext, SetStateAction, useContext, useState  } from 'react'
import User from '../models/User';

const AuthContext = createContext<[User, React.Dispatch<SetStateAction<User>>]|null>(null);

const useUser = () =>{
  const [user, setUser] = useContext(AuthContext) as any;
  return {user, setUser}
};

interface props {
  children?: JSX.Element;
}

const UserProvider = ({children}:props) => {

    const authUser = useState<User>( {rol: 0, email:""} )

    return (
        <AuthContext.Provider value = {authUser}>{children}</AuthContext.Provider>
    )
}

export { UserProvider, useUser }