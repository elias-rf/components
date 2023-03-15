import React from "react";
import { useNavigate } from "react-router-dom";
import { usuarioStore } from "../../model/usuario/usuario.store";
import { Login as LoginComponent } from "../components/login/login";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Login() {
  const setLogin = usuarioStore((state) => state.setLogin);
  const [error, setError] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const navigate = useNavigate();

  async function handleInput(event: any) {
    setSpinner(true);
    setError("");
    try {
      await setLogin(event.value);
      setSpinner(false);
      navigate("/");
    } catch (e: any) {
      setSpinner(false);
      setError(e.response?.errors[0].message);
    }
  }

  return (
    <div className={"flex justify-center"}>
      <div>
        <div>{error}</div>
        <LoginComponent
          title="Intranet Visiontech"
          onInputEvent={handleInput}
          loading={spinner}
          error={error}
        />
      </div>
    </div>
  );
}
