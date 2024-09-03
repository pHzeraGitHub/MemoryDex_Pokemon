import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export function useAuth() {
  // Retorne as informações do AuthContext
  return useContext(AuthContext);
}
