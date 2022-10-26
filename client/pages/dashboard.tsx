import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../components/page/page";
import { TransferenciaMes } from "../features/dashboard/transferencia-mes";
import { authenticationService } from "../service/authentication.service";
import { userStore } from "../state/user-store";

export function Dashboard() {
  const authenticated = userStore((state: any) => state.isAuthenticated);
  const navigate = useNavigate();

  React.useEffect(() => {
    authenticationService.isAuthenticated();
  }, []);

  React.useEffect(() => {
    if (!authenticated) navigate("/");
  }, [authenticated]);

  return (
    <Page title="Dashboard">
      <TransferenciaMes />
    </Page>
  );
}
