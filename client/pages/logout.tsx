import { useAuth } from "@/client/store/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerIcon } from "../components/spinner/spinner-icon";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Logout() {
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  React.useEffect(() => {
    logout();
    navigate("/");
  }, []);

  return (
    <div className={"flex justify-center"}>
      <SpinnerIcon show={true} />
    </div>
  );
}
