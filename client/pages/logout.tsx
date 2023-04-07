import React from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerIcon } from "../components/spinner/spinner-icon";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Logout() {
  const setLogout = usuarioStore((state) => state.setLogout);

  const navigate = useNavigate();
  React.useEffect(() => {
    async function logout() {
      await setLogout();
      navigate("/");
    }
    logout();
  }, []);
  return (
    <div className={"flex justify-center"}>
      <SpinnerIcon show={true} />
    </div>
  );
}
