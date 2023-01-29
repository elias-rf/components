import React from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerIcon } from "../components/spinner/spinner-icon";
import { authenticationService } from "../service/authentication.service";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Logout() {
  const navigate = useNavigate();
  React.useEffect(() => {
    async function logout() {
      await authenticationService.mutation.logout();
      navigate("/");
    }
    logout();
  }, []);
  return (
    <div className="flex justify-center">
      <SpinnerIcon show={true} />
    </div>
  );
}
