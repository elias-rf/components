import { useLocation } from "react-router-dom";
import { Authorization } from "../components";
import { authenticationService } from "../service/authentication.service";
import { permissaoService } from "../service/permissao.service";

export function Auth({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <Authorization
      can={permissaoService.can}
      currentUser={authenticationService.me}
      resource={location.pathname}
    >
      {children}
    </Authorization>
  );
}
