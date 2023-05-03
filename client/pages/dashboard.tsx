import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../components/page/page";
import { TransferenciaMes } from "../features/dashboard/transferencia_mes";
import { isAuthenticated } from "../lib/is-authenticated";

export function Dashboard() {
  const navigate = useNavigate();
  const me = trpc.usuario.me.useQuery();

  React.useEffect(() => {
    if (!isAuthenticated(me.data)) navigate("/");
  }, [me.data]);

  return (
    <Page>
      <TransferenciaMes />
    </Page>
  );
}
