import { trpc } from "@mono/utils/trpc/trpc";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerIcon } from "../components/spinner/spinner-icon";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Logout() {
  const navigate = useNavigate();
  const logout = trpc.usuario.logout.useMutation();
  React.useEffect(() => {
    logout.mutate();
    sessionStorage.removeItem("token");
  }, []);

  React.useEffect(() => {
    navigate("/");
  }, [logout.data]);

  return (
    <div className={"flex justify-center"}>
      <SpinnerIcon show={true} />
    </div>
  );
}
