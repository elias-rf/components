import React from "react";

import LoginComponent from "@/features/ui/login";
import { useNavigate } from "react-router-dom";
import useUserStore from "../state/user-store";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
function Login() {
  const signIn = useUserStore((state) => state.signIn);
  const [error, setError] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const navigate = useNavigate();

  async function onChange({
    user,
    password,
  }: {
    user: string;
    password: string;
  }) {
    setSpinner(true);
    setError("");
    try {
      await signIn(user, password);
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
          onChange={onChange}
          loading={spinner}
          error={error}
        />
      </div>
    </div>
  );
}

export default Login;
