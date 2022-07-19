import React from "react";
import { useNavigate } from "react-router-dom";
import { Login as LoginComponent, LoginAction } from "../components";
import { authenticationService } from "../service/authentication.service";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Login() {
  const [error, setError] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const navigate = useNavigate();

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
      <div>
        <div>{error}</div>
        <LoginComponent
          title="Intranet Visiontech"
          dispatch={onChange}
          loading={spinner}
          error={error}
        />
      </div>
    </div>
  );
}
