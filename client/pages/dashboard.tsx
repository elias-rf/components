import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../components/page/page";
import { TransferenciaMes } from "../features/dashboard/transferencia_mes";

export function Dashboard() {
  const isAuthenticated = usuarioStore((state: any) => state.isAuthenticated);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <Page>
      <TransferenciaMes />
    </Page>
  );
}
