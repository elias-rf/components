import React from "react";
import { useNavigate } from "react-router-dom";
import { trpc } from "../../utils/trpc/trpc";
import { Login as LoginComponent } from "../components/login/login";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Login() {
  const login = trpc.usuario.login.useMutation();
  const [error, setError] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setSpinner(false);
    if (login.data && login.data.usuario_id > 0) {
      sessionStorage.setItem("token", login.data.token);
      while (sessionStorage.getItem("token") !== login.data.token) {
        console.log("Gravando sessionStorage");
      }
      navigate("/");
    }
  }, [login.data]);

  React.useEffect(() => {
    setSpinner(false);
    setError(login.error?.message || "");
  }, [login.error]);

  async function handleInput(user: { user: string; password: string }) {
    setSpinner(true);
    setError("");
    login.mutate(user);
  }

  return (
    <div className={"flex justify-center"}>
      <div>
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
