import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import type { TEvent } from "../../types";
import { DefaultLayout } from "../components/layout/default_layout";
import { menu } from "../menu";
import { authenticationService } from "../service/authentication.service";
import { userStore } from "../state/user-store";

/** feature Layout com menu de páginas do aplicativo */
export function Layout({ children }: { children?: any }) {
  const authenticated = userStore((state: any) => state.isAuthenticated);
  const navigate = useNavigate();

  React.useEffect(() => {
    authenticationService.isAuthenticated();
  }, []);

  async function handleMenu(event: TEvent) {
    navigate(event.value);
  }

  return (
    <DefaultLayout
      menu={menu}
      onClickEvent={handleMenu}
      isAuthenticated={authenticated}
    >
      <Outlet />
      {children}
    </DefaultLayout>
  );
}
