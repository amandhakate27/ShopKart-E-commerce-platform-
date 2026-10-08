import { createContext, useState } from "react";


export const AuthContext = createContext(); // creating context for authentication

export const AuthProvider = ({ children }) => { // providing context


  const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem('registeredUsers')) || []);
  console.log('Registered Users:', registeredUsers);

  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")) || null);
  console.log("loggedInUser", loggedInUser)

  return (
    <AuthContext.Provider value={{ setRegisteredUsers, registeredUsers, loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  )
}