import { useAuth } from "@/client/store/auth";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LayoutDefault } from "../components/layout/layout-default";
import { menu } from "../menu";

/** feature Layout com menu de páginas do aplicativo */
export function Layout({ children }: { children?: any }) {
  const user = useAuth((state) => state.user);
  const [path, setPath] = React.useState("/main");
  const navigate = useNavigate();

  async function handleMenu(to: string) {
    navigate(to);
    setPath(to);
  }

  return (
    <LayoutDefault
      menu={menu}
      onClick={handleMenu}
      path={path}
      user={user}
    >
      <Outlet />
      {children}
    </LayoutDefault>
  );
}
