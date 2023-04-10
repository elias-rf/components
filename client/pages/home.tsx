import React from "react";
import { useNavigate } from "react-router-dom";
import { trpc } from "../../utils/trpc/trpc";
import logo from "../assets/images/logo.svg";
import { Page } from "../components/page/page";
import { isAuthenticated } from "../lib/is-authenticated";

export function Home() {
  const navigate = useNavigate();
  const me = trpc.usuario.me.useQuery();

  React.useEffect(() => {
    if (me.data) {
      if (isAuthenticated(me.data)) return navigate("/dashboard");
      navigate("/login");
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
