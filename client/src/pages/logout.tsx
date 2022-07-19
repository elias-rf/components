import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginAction } from "../components";
import { authenticationService } from "../service/authentication.service";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Logout() {
  const [error, setError] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   authenticationService.logout();
  // }, []);

  async function onChange(action: LoginAction) {
    setSpinner(true);
    setError("");
    try {
      await authenticationService.login(
        action.payload.user,
        action.payload.password
      );
      setSpinner(false);
      navigate("/");
    } catch (e: any) {
      setSpinner(false);
      setError(e.response?.errors[0].message);
    }
  }

  return (
    <div className="flex justify-center">
      <Navigate
        to="/"
        replace={true}
      />
    </div>
  );
}
