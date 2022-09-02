import { Navigate } from "react-router-dom";

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Logout() {
  return (
    <div className="flex justify-center">
      <Navigate
        to="/"
        replace={true}
      />
    </div>
  );
}
