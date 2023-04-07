import React from "react";
import { useNavigate } from "react-router-dom";
import { trpc } from "../../utils/trpc/trpc";
import logo from "../assets/images/logo.svg";
import { Page } from "../components/page/page";

export function Home() {
  const navigate = useNavigate();
  const me = trpc.usuario.me.useQuery();

  React.useEffect(() => {
    if (me.data) {
      if (me.data.usuario_id > 0) navigate("/dashboard");
      if (me.data.usuario_id === undefined) navigate("/login");
    }
  }, [me.data]);

  return (
    <Page>
      <img
        src={logo}
        alt="logo"
      />
    </Page>
  );
}
