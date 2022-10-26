import { IEvent } from "@er/types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Login as LoginComponent } from "../components/login/login";
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

  async function handleInput(event: IEvent) {
    setSpinner(true);
    setError("");
    try {
      await authenticationService.login(event.value.user, event.value.password);
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
          onInput={handleInput}
          loading={spinner}
          error={error}
        />
      </div>
    </div>
  );
}
