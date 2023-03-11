import React from "react";
import { useNavigate } from "react-router-dom";
import { usuarioStore } from "../../model/usuario/usuario.store";
import logo from "../assets/images/logo.svg";
import { Page } from "../components/page/page";

export function Home() {
  const isAuthenticated = usuarioStore((state: any) => state.isAuthenticated);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);

  return (
    <Page>
      <img
        src={logo}
        alt="logo"
      />
    </Page>
  );
}
