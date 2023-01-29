import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../components/page/page";
import { TransferenciaMes } from "../features/dashboard/transferencia_mes";
import { authenticationStore } from "../service/authentication.service";

export function Dashboard() {
  const authenticated = authenticationStore(
    (state: any) => state.isAuthenticated
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!authenticated) navigate("/");
  }, [authenticated]);

  return (
    <Page>
      <TransferenciaMes />
    </Page>
  );
}
