import { useState, createContext } from "react";
import { fakeAuthProvider } from "../../services/auth";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  // Defina um estado para o usuário
  const [user, setUser] = useState(null);

  const signin = (user, callback) => {
    return fakeAuthProvider.signin(() => {
      // Atribua user ao estado que você criou acima
      setUser(user);
      callback();
    });
  };

  const signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      // Limpe o valor do usuário
      setUser(null);
      callback();
    });
  };

  // Disponibilize o user e as funções de signin e signout para que possam
  // ser acessados em qualquer lugar da aplicação
  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
