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
    if (login.data && login.data.usuario_id > 0) {
      console.log("logado!");
      navigate("/");
    }
  }, [login.data]);

  async function handleInput(user: { user: string; password: string }) {
    setSpinner(true);
    setError("");
    try {
      await login.mutate(user);

      setSpinner(false);
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
          onInput={handleInput}
          loading={spinner}
          error={error}
        />
      </div>
    </div>
  );
}
