import { Toast } from "@/client/components/toast";
import { useAuth } from "@/client/store/auth";
import { trpc } from "@/rpc/utils/trpc";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Login as LoginComponent } from "../components/login/login";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Login() {
  const login = trpc.usuario.login.useMutation();
  const saveLogin = useAuth((state) => state.login);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (login.data && login.data.usuario_id && login.data.usuario_id > 0) {
      saveLogin(login.data);
      navigate("/");
    }
  }, [login.data]);
  React.useEffect(() => {
    console.log("login error", login.error?.message);
  }, [login.error]);

  async function handleInput(user: { user: string; password: string }) {
    login.mutate(user);
  }

  return (
    <div className={"flex justify-center"}>
      <LoginComponent onInput={handleInput} />
      {login.error && (
        <Toast
          open={true}
          message={login.error.message || ""}
          severity="error"
        />
      )}
    </div>
  );
}
